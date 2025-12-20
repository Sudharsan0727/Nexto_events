import os
import zipfile

def create_zip_with_forward_slashes(source_dir, output_filename):
    with zipfile.ZipFile(output_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(source_dir):
            for file in files:
                file_path = os.path.join(root, file)
                # Calculate relative path from source_dir
                rel_path = os.path.relpath(file_path, source_dir)
                # Force forward slashes for zip spec
                arcname = rel_path.replace(os.path.sep, '/')
                zipf.write(file_path, arcname)
    print(f"Created {output_filename}")

if __name__ == "__main__":
    create_zip_with_forward_slashes('dist', 'Events_Final_Fixed.zip')
