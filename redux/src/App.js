import React from 'react';
import './App.css'
const App = () => {
  return ( <>
  <div className='mainDiv'>
  <h1>Welcome to react-redux</h1>
<p>Increment the Decrement Items</p>
<div className='quantity-tab'>
<a id='qty_minus'><span>-</span></a>
<input type="text" name="" value='' placeholder='0' id="" />
<a id='qty_plus'><span>+</span></a>
</div>
  </div>
  </>);
}
 
export default App;