import { useState } from 'react';
import '../styles/imageupload.css';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
    setCompressedImage(null);
  }

  async function handleUpload() {
    if (!selectedFile) return;

    setLoading(true); // Set loading to true while compression is in progress

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('https://piclit-backend.onrender.com/api/v1/compress', {
        method: 'POST',
        body: formData,
      });

      // Check if the response status is 200 (OK)
      if (response.status === 200) {
        // Get the response body as a Blob
        const compressedBlob = await response.blob();

        // Create an object URL for the Blob
        const compressedImageUrl = URL.createObjectURL(compressedBlob);

        // Set the compressed image URL
        setCompressedImage(compressedImageUrl);
      } else {
        // Display an error message
        console.error('Image compression failed');
      }
    } catch (error) {
      console.error('Network error:', error);
    } finally {
      setLoading(false); // Set loading back to false when compression is done
    }
  }

  function handleDownload() {
    if (compressedImage) {
      // Create a temporary anchor element
      const downloadLink = document.createElement('a');
      downloadLink.href = compressedImage;
      downloadLink.download = 'compressed-image.jpg'; // Set the desired file name

      // Simulate a click on the anchor element
      downloadLink.click();

      // Clean up the anchor element
      URL.revokeObjectURL(compressedImage);
    }
  }

  return (
    <div className='image-upload'>
      <div className='image-upload--box'>
        <h2>Upload Image</h2>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload}>Compress Image</button>
        
        {/* Conditional rendering for loading message */}
        {loading && <p>Please wait while your image is being compressed...</p>}
        
        {compressedImage && (
          <div className='compressed-image'>
            <img src={compressedImage} alt="Compressed" />
            <button onClick={handleDownload}>Download Compressed Image</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
