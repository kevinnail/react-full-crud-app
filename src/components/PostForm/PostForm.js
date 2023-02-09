/* eslint-disable no-console */
import { useState } from 'react';

export default function PostForm({ title = '', description = '', submitHandler }) {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  return (
    <div>
      <label>Title</label>
      <input type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
      <label>Description</label>
      <input
        type="text"
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      />
      <button
        onClick={() => {
          submitHandler(titleInput, descriptionInput);
        }}
      >
        Submit
      </button>
    </div>
  );
}
