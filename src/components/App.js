import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render (){
        return(
            <div style={{border: "2px dashed red"}}>
                <h1>prop title: {this.props.title}</h1>
                <h2>This compon3nt is made with a class</h2>
                <App2 name="john-doe2"/>
            </div>  
        )
    }
}

class App2 extends Component {
    constructor(props) {
        super(props);
    }

    render (){
        return(
            <div>
                <h1>This is child of class-based component</h1>
                <h2>child name: {this.props.name}</h2>
            </div>  
        )
    }
}


export default App