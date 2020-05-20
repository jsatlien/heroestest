import React from "react";
import "./style.css";

function Form (props) {

    return (
      <div>
       <p>Enter your heroe's First or Last name below with a capital letter to search or click alphabetize to view a sorted list!</p>
       <br></br>
       <p>Click Submit again to reset the list of heroes.</p>
        
       <div className="entertext">
        <form className="form">
          
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleInputChange}
            type="text"
            placeholder="First or Last name only"
          />
         <br></br>
         <br></br>
          <button className="btn btn-danger btn-lg shadow" onClick={props.handleFormSubmit}>Submit</button>
        </form>
        </div>
      </div>
    );
  
}

export default Form;