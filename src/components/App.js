import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render (){
        return(
            <div style={{border: "2px dashed red"}}>
                <h1>This is a class-based component</h1>
                <h2>name list: {this.props.names}</h2>

                <Clock/>
            </div>  
        )
    }
}

App.defaultProps = {
    names: ['Ram', 'Shyam', 'Raghav']
}

class Clock extends Component { //child component for clock
    constructor(props) {
        super(props);

        this.state = { time : new Date() };
    }

    componentDidMount(){
        this.timer = setInterval(
            () => this.tick(),
            1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({
            time : new Date()
        });
    }

    render (){
        return(
            <div>
                <h1>This is child of class-based component</h1>
                <h2>Learning Component States</h2>
                <h2>Current time: {this.state.time.toLocaleTimeString('en-GB')}</h2>
            </div>  
        )
    }
}


export default App