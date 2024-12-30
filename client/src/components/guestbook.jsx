import React, { useState } from 'react';

const API_URL = "https://personal-website-server-lwe8.onrender.com/";

const GuestBook = (props) => {
  const [inputs, setInputs] = useState({
    name: '',
    purpose: '',
    thoughts: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    props.setRenderGuestBook(false);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs), 
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="guestbook-container">
        <div className="guestbook-blurb">
            Hello visitor! I hope your time on my personal website has been nice. Let me know you stopped by, and feel free to leave a comment, thought of the day, or critique/suggestion for my website!<br /><br /> -Will
        </div>
        <div className="guestbook-input-container">
            <div className="guestbook-input-text">Visitor name: </div>
            <input
                className="guestbook-input"
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
            />
        </div>
        <div className="guestbook-input-container">
            <div className="guestbook-input-text">Purpose of Visit: </div>
            <input
                className="guestbook-input"
                type="text"
                name="purpose"
                value={inputs.purpose}
                onChange={handleChange}
            />
        </div>
        <div className="guestbook-input-container">
            <div className="guestbook-input-text">Thoughts: </div>
        </div>
        <div>
            <textarea
                className="guestbook-input-2"
                name="thoughts"
                value={inputs.thoughts}
                onChange={handleChange}
            />
        </div>
        <button className="guestbook-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default GuestBook;