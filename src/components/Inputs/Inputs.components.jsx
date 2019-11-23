import React from 'react';
import Results from "../../pages/results/results.component";
import "./inputs.styles.css"

class Inputs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          retail_sales : 0,
          net_sales: 0,
          amount_owed: 0,
          food_sales: 0,
          at_sales: 0,
          expo: false,
          busser: false,
          bartender: false,
          host: false
        }
      }
    
      handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      render() {
        const {...otherProps} = this.state;
      return (
        <div>
        <body>
          <h5 className = "title">Boulder Dushanbe Old Folks Home Tip Out Calculator 
          <br></br>
          Let's get the heck out of here, shall we?</h5>
          <br/>
          <form className="amounts"> 
            <label>
              Let's start with the TOTAL NET SALES!!  
            <input
            className = "input"
            name="net_sales"
            type="number"
            value={this.state.net_sales}
            onChange={this.handleInputChange}
            />
            </label>
            <br />
            <label>
              How much is owed (- for what's owed to you, + for what's owed to the house)?!?
            <input
            className = "input"
            name="amount_owed"
            type="number"
            value={this.state.amount_owed}
            onChange={this.handleInputChange}
            />
            </label>
            <br />
            <label>
              Hit me up w the food sales...   
            <input
            className = "input"
            name="food_sales"
            type="number"
            value={this.state.food_sales}
            onChange={this.handleInputChange}
            />
            </label>
            <br />
            <label>
              ...and those AT SALES!
            <input
            className = "input"
            name="at_sales"
            type="number"
            value={this.state.at_sales}
            onChange={this.handleInputChange}
            />
            </label>
            <br/>
            <label>
              Any retail sales?
            <input
            className = "input"
            name="retail_sales"
            type="number"
            value={this.state.retail_sales}
            onChange={this.handleInputChange}
            />
            </label>
            <br/>
            <label>
              Who was here today??
              <br />   
            <input
            className="check"
            name="expo"
            type="checkbox"
            value={this.state.expo}
            onChange={this.handleInputChange}
            />
            Expo 
            </label>
            <br />
            <label>  
            <input
            className="check"
            name="busser"
            type="checkbox"
            value={this.state.busser}
            onChange={this.handleInputChange}
            />
            busser 
            </label>
            <br />
            <label>  
            <input
            className="check"
            name="bartender"
            type="checkbox"
            value={this.state.bartender}
            onChange={this.handleInputChange}
            />
            bartender 
            </label>
            <br />
            <label>  
            <input
            className="check"
            name="host"
            type="checkbox"
            value={this.state.host}
            onChange={this.handleInputChange}
            />
            host 
            </label>
            <br />
          </form>
          <Results {...otherProps} />
          <h1 className="title">Now get outta here and forget about this place! Til next time....</h1>
        </body>
        </div>
      );
      }
};

export default Inputs;