import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import BookingPage from './pages/BookingPage.jsx';
import Checkout from './pages/Checkout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* We can add /events/:id later */}
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/event/:id/book" element={<BookingPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
