import './style.css';
import { useState } from "react";

const RightColumn = () => {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        

        console.log(name);
    }

    const handleSubmit = (e) => {
        
    }

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" name="name" id='name' placeholder="Enter your name" value={name} />

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
