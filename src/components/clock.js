import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            message: ""
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date(),
            message : ''
        });
        if (this.state.time.getSeconds() % 3 === 0)
        {
            this.setState({
                message : this.state.message+'Fizz'
            });
        }
        if (this.state.time.getSeconds() % 5 === 0)
        {
            this.setState({
                message : this.state.message+'Buzz'
            });
        }
    }
    render() {
        return (
            <p className="App-clock">
             {this.state.time.toLocaleTimeString()}
                <br/>
             {this.state.message}
            </p>
        );
    }
}
export default Clock;
