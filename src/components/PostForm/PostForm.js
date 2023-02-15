import { useState } from 'react';

export default function PostForm({ title = '', description = ' ', submitHandler }) {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitHandler(titleInput, descriptionInput);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
