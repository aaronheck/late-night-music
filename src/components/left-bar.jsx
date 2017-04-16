import React, { Component } from 'react';

const daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];

export default class LeftBar extends Component {
  render() {
    return (
      <div id="left-content">
		<a><img id="top_logo" src="assets/logo_circle.png" /></a>
		<div id="left-bar-items">
			{this.props.dates.map((date, index) => {
				return <div className={date === this.props.selectedDate ? 'menu-block selected' : 'menu-block'} onClick={() => this.props.handleDateSelect(date)} key={date}>
							<div className="numerical-date">{date}</div>
							<div className="day-of-week">{daysOfWeek[index]}</div>
						</div>;
			}, this)}

			<div className="menu-block about">
				<div className="day-of-week">ABOUT</div>
			</div>
		</div>
	</div>
    );
  }
}
