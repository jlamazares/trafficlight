import React from "react";
import ReactDOM from "react-dom";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}
	render() {
		let redExtraClass = "";
		if (this.state.clickedLight == "red") redExtraClass = "selected";
		let yellowExtraClass = "";
		if (this.state.clickedLight == "yellow") yellowExtraClass = "selected";
		let greenExtraClass = "";
		if (this.state.clickedLight == "green") greenExtraClass = "selected";
		return (
			<div>
				<div id="traffictop"> </div>
				<div className="container">
					<div
						className={"red light " + redExtraClass}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={"yellow light " + yellowExtraClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={"green light " + greenExtraClass}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
