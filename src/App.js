import React from 'react';
import './App.css';
import Pra from './practice';

function App(props){
 return(
 	<div>
 	<h1>Welcome To Function component</h1>
<p>My name{props.name}</p>
<p>Another name{props.aname}</p>
</div>
)
  
}

class App1 extends React.Component{
  render(){
    return(
    <section className="Welcome">
    <App name="Y.Hima" aname="Bindu" />
  <h1>Welcome Class component</h1>
    </section>
    )
}
}

export default App1;

