import React from "react";
import  ReactDOM  from "react-dom";
import SeasonsDisplay from "./SeaonDisplay";
import Spinner from "./spinner";

class App extends React.Component{
    state = { lat: null, errorMessage: ''};


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude, long:position.coords.longitude})
            ,
            (err) => this.setState({errorMessage: err.message})
            
        );
    }

    renderContent () {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonsDisplay lat={this.state.lat} />
        }

        return <Spinner message="Accept location request or else !!!" />;

    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));