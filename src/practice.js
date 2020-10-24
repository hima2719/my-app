import React, {Component} from 'react'

class Counter extends Component {
     
     constructor(props) {
      super(props)
      this.state = {count: 0}
     }
      handleClick() {
        this.setState({count: this.state.count+1})

      }
}

class State_example extends Component{
 constructor(){
  super();
  this.state={
   name:"Hima"
  }
 }

 changeName=()=>{
  this.setState({
   name:"Bindu"
  })
 }
 render(){
  return(
  <div>
        <h1> welcome to {this.state.name}</h1>
  <button onClick={this.changeName}>Change name</button>
  </div>
   );
 }
}
export default App;