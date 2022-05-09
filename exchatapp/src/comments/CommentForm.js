import { useState } from "react";
import "./CommentForm.css"
const CommentForm = ({
  handleSubmit,
  submitLabel
}) => {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const isTextareaDisabled = (text.length === 0 || username.length === 0);
  const onSubmit = (event) => {

    event.preventDefault();
    handleSubmit(username,text);
    setText("");
    setUsername("");
  };

  function validateForm() {
    var text1 = document.getElementById('name').value;
    var text2 = document.getElementById('text').value;
    console.log(text1)
    if ((text1 && !text2) || (!text1 && text2) || (!text1 && !text2)) 
    {
      return false;
    }
    else{
      return true;
    }
    
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        ID = "name"
        value={username}
        placeholder="Name ..."
        onChange={(e) => setUsername(e.target.value)}
      />
    
      <textarea
        className="comment-form-textarea"
        ID = "text"
        value={text}
        placeholder="Write a new post"
        onChange={(e) => setText(e.target.value)}
      />

      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      
    </form>
  );
};

export default CommentForm;
