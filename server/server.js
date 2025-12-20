import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(cors());

// PHONEPE UAT CREDENTIALS
const MERCHANT_ID = "PGTESTPAYUAT86";
const SALT_KEY = "96434309-7796-489d-8924-ab56988a6076";
const SALT_INDEX = 1;
const PHONEPE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";

app.post('/api/payment', async (req, res) => {
    try {
        const { name, mobile, amount, transactionId } = req.body;

        // PhonePe expects amount in paise (multiply by 100)
        // Ensure amount is an integer
        const amountInPaise = Math.round(amount * 100);

        const payload = {
            merchantId: MERCHANT_ID,
            merchantTransactionId: transactionId,
            merchantUserId: 'MUID' + Date.now(),
            amount: amountInPaise,
            redirectUrl: `http://localhost:5173/payment-success?id=${transactionId}`, // Redirect back to frontend
            redirectMode: "REDIRECT",
            callbackUrl: `http://localhost:5173/payment-success?id=${transactionId}`, // For server-to-server (usually different)
            mobileNumber: mobile,
            paymentInstrument: {
                type: "PAY_PAGE"
            }
        };

        // 1. Convert Payload to JSON String
        const payloadString = JSON.stringify(payload);

        // 2. Encode Payload to Base64
        const base64EncodedPayload = Buffer.from(payloadString).toString('base64');

        // 3. Calculate Checksum (X-VERIFY)
        // Formula: SHA256(Base64 Payload + "/pg/v1/pay" + Salt Key) + "###" + Salt Index
        const stringToHash = base64EncodedPayload + "/pg/v1/pay" + SALT_KEY;
        const sha256 = crypto.createHash('sha256').update(stringToHash).digest('hex');
        const checksum = sha256 + "###" + SALT_INDEX;

        // 4. Make Request to PhonePe
        const options = {
            method: 'POST',
            url: `${PHONEPE_HOST_URL}/pg/v1/pay`,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: base64EncodedPayload
            }
        };

        const response = await axios.request(options);

        // 5. Return the URL to Frontend
        if (response.data.success) {
            res.json({
                success: true,
                url: response.data.data.instrumentResponse.redirectInfo.url
            });
        } else {
            res.json({ success: false, message: "Payment initiation failed" });
        }

    } catch (error) {
        console.error("Error initiating payment:", error.message);
        if (error.response) {
            console.error("PhonePe Error Response:", JSON.stringify(error.response.data, null, 2));
        }
        res.status(500).json({
            success: false,
            message: error.message,
            details: error.response ? error.response.data : null
        });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
