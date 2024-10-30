// src/components/ImageUploader.jsx
import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);

      // ایجاد پیش‌نمایش تصویر
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert('لطفاً یک تصویر انتخاب کنید.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('http://localhost:8000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert('تصویر با موفقیت آپلود شد!');
        console.log('Server Response:', data);
      } else {
        alert('آپلود تصویر با خطا مواجه شد.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('خطایی در آپلود تصویر رخ داد.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 border border-gray-300 rounded-lg w-72 mx-auto">
      <h2 className="text-lg font-semibold mb-4">آپلود تصویر</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
        {preview && (
          <div className="mb-4 w-full">
            <img
              src={preview}
              alt="Preview"
              className="w-full max-h-52 object-cover"
            />
          </div>
        )}
        <button
          type="submit"
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          آپلود
        </button>
      </form>
    </div>
  );
};

export default ImageUploader;
