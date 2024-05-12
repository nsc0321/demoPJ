import React from 'react';


class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
				<button className="def" onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
		);
	}
}

function HomePage() {
	return (
			<div className="VBox">
				<div>
					<label text="Tobble Button Test"></label>
					<Toggle></Toggle>
					<Toggle></Toggle>
					<Toggle></Toggle>
				</div>
				<div>
					<table>
						<thead>
							<tr>
								<th>
									이름
								</th>
								<td>
									
								</td>
							</tr>
						</thead>
					</table>
				</div>
			</div>
			);
}

export default HomePage;