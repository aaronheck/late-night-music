import React, {
    Component
} from 'react';
import logo_circle from './../assets/logo_circle.png'

const daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];

export default class LeftBar extends Component {
    render() {
        return (
            <div id="left-content">
		<a><img id="top_logo" src={logo_circle} /></a>
		<div id="left-bar-items">
			{this.props.dates.map((date, index) => {
				return <a href="#"><div className={date === this.props.selectedDate ? 'menu-block selected' : 'menu-block'} onClick={() => this.props.handleDateSelect(date)} key={date}>
							<div className="numerical-date">{date}</div>
							<div className="day-of-week">{daysOfWeek[index]}</div>
						</div></a>;
			}, this)}

			<div className="menu-block about" onClick={()=>window.location.href="/about.html"}>
				<div className="day-of-week">ABOUT</div>
			</div>
		</div>
	</div>
        );
    }
}