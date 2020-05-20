import React from "react";
import "./style.css";
import Container from "../ContentContainer";


function Employee(props) {
  //Condition if statement and Map function to loop through array

  return (
    <Container>

      <div className="content">
        {props.employeeList.length ? (

          <ul>

            {/* <li>
              <strong>Name:</strong> {props.firstName} {props.lastName}
            </li>
            <li>
              <strong>Alias:</strong> {props.alias}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li> */}


            {props.employeeList.map(result => (
              <div className="card">
                <li className="list-group-item" key={result.id}>
                  <div id="name">{result.firstName} {result.lastName}</div>
                  <div id="alias">{result.alias}</div>
                  <div id="occupation">{result.occupation}</div>
                  <div id="email">Email: {result.email}</div>
                </li>

                <div className="img-container">
                  <img alt={props.firstName} src={result.image} />
                </div>

              </div>

            ))}



          </ul>

        ) : (
            <h2>Sorry, No Heroe by that name</h2>
          )}
      </div>
    </Container>
  )
}

export default Employee;