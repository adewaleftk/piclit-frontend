import { useState } from 'react';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function handleUpload() {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    try {
      const response = await fetch('https://piclit-backend.onrender.com/api/compress', {
        method: 'POST',
        body: formData,
        headers,
      });
      const data = await response.json();

      if (response.ok) console.log(data.message);
      else console.error('Image compression failed');
    } catch (error) {
      console.error('Network error:', error);
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Compress Image</button>
    </div>
  );
}

export default ImageUpload;