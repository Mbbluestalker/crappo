import React from "react";
import './style.css';

const RightColumn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('submit');
    }

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Enter your name" />

        <div>
          <label htmlFor="agree">I Agree</label>
          <input type="checkbox" name="agree" />
        </div>

        <input onClick={handleSubmit} className="btn" type="submit"  />

      </form>
    </div>
  );
};

export default RightColumn;
