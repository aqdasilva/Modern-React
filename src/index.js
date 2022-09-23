import { render } from "@testing-library/react";
import React from "react";
import  ReactDOM  from "react-dom";

class App extends React.Component{
constructor(props) {
    super(props);

    //only time we do direct assignment to this.state
    this.state = {lat: null};

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            //we called set state here to update
            this.setState({lat: position.coords.latitude });
        },
        (err) => console.log(err)
    );
}


    //React says we have to render !!!!!!
    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));