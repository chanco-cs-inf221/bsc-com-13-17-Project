import React from 'react';

  class form2 extends React.Component{
    constructor(props){
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
      this.setState({value: event.target.value});
    }
    handleSubmit(event){
      alert('Name: ' + this.state.value);
      event.preventDefault();
    }
    render(){
      return(
        <div>
              
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
                <input type="text" value={this.state.value} onClick/>
                
            </label>
            <input type="submit" value="submit" />

          </form>
        </div>
      );
    }
  }
  export default form2;