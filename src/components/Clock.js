import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: 'Peter'
        };
        this.namechange = this.namechange.bind(this); 
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Class Component Example</h1>
                <button onClick={this.namechange} >State change </button>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h2>I am {this.state.name}.</h2>
            </div>
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    namechange() {
        this.setState({
            name: 'Banu'
        });
        console.log('clicked')
    }
}


export default Clock;