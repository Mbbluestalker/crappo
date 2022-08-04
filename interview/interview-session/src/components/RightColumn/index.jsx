import './style.css';
import { useState } from "react";

const RightColumn = () => {
    const [name, setName] = useState("");
    const [isRendered, setIsRendered] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        

        console.log(name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsRendered(true);
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
        {isRendered ? <h1>Hello {name}</h1> : null}
      </form>
    </div>
  );
};

export default RightColumn;
