import React, { Component } from "react";
import Title from "./components/Title";
import employeeList from "./employeeList.json";
import Container from "./components/ContentContainer";
import Form from "./components/Form";
import Employee from "./components/EmployeeResults";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    sorted: employeeList,
    firstName: "",
    lastName: "",
    alias: ""
    // employees
  };

  handleInputChange = event => {
		let value = event.target.value;
		const name = event.target.name;
	
		this.setState({
		  [name]: value
		});
    };
    
    handleFormSubmit = event => {
      event.preventDefault();
    

      let characterName= new Array(...employeeList)
      console.log(characterName)
      let filtersReturnNewArrays= characterName.filter(employee=>{
        console.log(employee.firstName)
        console.log(this.state.firstName)
        
        console.log(employee.firstName.includes(this.state.firstName))
        return employee.firstName.includes(this.state.firstName)
        || employee.lastName.includes(this.state.firstName)

      })
      console.log(filtersReturnNewArrays)
      this.setState({sorted:filtersReturnNewArrays})

      // -------------
      this.setState({
        firstName: "",
        lastName: "",
        alias: ""
      });
      };
      
      sortName = ()=>{
        let unsorted = new Array(...employeeList)
        console.log(unsorted)
        let sortof= unsorted.sort((a,b)=>{
          console.log(a.firstName, b.firstName)
          console.log(b.firstName - a.firstName)
          return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0)
        })
        console.log(sortof)
        this.setState({sorted:sortof})
      }


  // Map over this.state.employees and render a EmployeeCard component for each Employee object
  render() {
    return (

    <div>
		<Container>
      <Title>Welcome to the <p>MARVEL Employment Agency!</p></Title>
   
    <Form
    firstName={this.state.firstName}
    lastName={this.state.lastName}
		alias={this.state.alias}
		handleInputChange={this.handleInputChange}
		handleFormSubmit={this.handleFormSubmit}
		/> 
        <Container>
    		<div className="abcButton">
          <button className="btn btn-warning btn-sm shadow" onClick={this.sortName}>
        Alphabetize Heroes</button>
        </div>
        </Container>	

		<Employee employeeList={this.state.sorted}/>
    </Container>
    
		</div>

     );
  }
}

export default App;