import React from 'react';
import ReactDOM from 'react-dom';

class CustomBtn extends React.Component {
	render(){
		return (
			<button className='btn'>TEST BTN</button>
		)
	}
}
class Page extends React.Component{
	render(){
		return (
			<CustomBtn></CustomBtn>
		)
	}
}
ReactDOM.render(<Page></Page>, document.getElementById('root'));