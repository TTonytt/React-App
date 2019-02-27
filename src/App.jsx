import React, { Component } from 'react';
import Button from './components/button'

const data=["facebook", "pintest", "myspace"]
class App extends Component {
  render() {
    return (
      <div>
        <h2>React Project</h2>
        {/* <Button label="shop" style="button-small"/>
        <Button label="home item" style="base-button"/> */}
        {data.map((item)=>(<Button label={item}/>))}
      </div>
    );
  }
}

export default App;
