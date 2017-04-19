import React, {
    Component
} from 'react';
import ReactDOM from "react-dom";
import LeftBar from "./components/left-bar";
import Content from "./components/content";
import data from "./data";
import './App.css';

class Application extends Component {
    constructor(props) {
        super(props);
        const today = new Date();
        const todayStr = (today.getMonth() + 1) + "/" + (today.getDate());
        this.state = {
            nightsListingData: data[todayStr] || data[data.dates[0]]
        };
        this.handleDateSelect = this.handleDateSelect.bind(this);
    }

    handleDateSelect(date) {
        this.setState({
            nightsListingData: data[date]
        });
    }

    render() {
        return (
            <div id="wrapper">
        <LeftBar
          dates={data.dates}
          selectedDate={this.state.nightsListingData.date}
          handleDateSelect={this.handleDateSelect} />
        <Content nightsListingData={this.state.nightsListingData}/>
      </div>
        );
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById('root')
);