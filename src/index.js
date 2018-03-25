import React, {
    Component
} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import LeftBar from "./components/left-bar";
import Content from "./components/content";
import './App.css';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleDateSelect = this.handleDateSelect.bind(this);
    }

    componentDidMount() {
        var s = this;
        axios.get('http://aaronrosenheck.com/data/current.json')
            .then(function(res) {
                var data = res.data;
                const today = new Date();
                const todayStr = (today.getMonth() + 1) + "/" + (today.getDate());
                s.setState({
                    date: data.dates.includes(todayStr) ? todayStr : data.dates[0],
                    dataForWeek: data
                });
            });
      }

    handleDateSelect(date) {
        this.setState({
            date: date
        });
    }

    render() {
        return (
            <div>
                {this.state.dataForWeek ?
                    <div id="wrapper">
                        <LeftBar
                          dates={this.state.dataForWeek.dates}
                          selectedDate={this.state.date}
                          handleDateSelect={this.handleDateSelect} />
                        <Content nightsListingData={this.state.dataForWeek[this.state.date]}/>
                    </div>
                    : 
                    <div id="logo_sub" className="loading show-name">one sec. i'm loading things...</div>
                }
            </div>
        );
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById('root')
);