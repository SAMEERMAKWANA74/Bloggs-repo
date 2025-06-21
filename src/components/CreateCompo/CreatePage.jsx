import React, { useState } from 'react';
import './CreatePage.css';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);

  const handleUpload = () => {
    alert(`Blog Uploaded!\nTitle: ${title}\nDescription: ${description}\nDate: ${date}`);
  };

  const handleDiscard = () => {
    setTitle('');
    setDescription('');
    setDate('');
    setImage(null);
  };

  return (
    <div className="create-main">
      <h1>Create Your Own Blog</h1>

      <div className="form-content">
        <div className="left-form">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Write your blog description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="button-group">
            <button className="upload-btn" onClick={handleUpload}>Upload</button>
            <button className="discard-btn" onClick={handleDiscard}>Discard</button>
          </div>
        </div>

        
        <div className="right-image">
          <label>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image && (
            <div className="image-preview">
              <img src={URL.createObjectURL(image)} alt="Preview" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
