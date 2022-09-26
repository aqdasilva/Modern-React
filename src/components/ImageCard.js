//to show one image by its self

import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans:0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListner('load', this.setSpans);
    }

    setSpans = () => {
        const height=  this.imageRef.current.clientHeight;

        const setSpans = Math.ceil(height / 10 + 1);

        this.setState({ spans });
    };


    render() {
        const {description, urls } = this.props.image;


        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef}
                alt={description} 
                src={urls.regular}/>
            </div>
        )
    }
}

export default ImageCard;