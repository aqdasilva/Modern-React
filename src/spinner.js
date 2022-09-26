import React from "react";

const Spinner = () => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                Loading, wait your turn
            </div>
        </div>
    );
};

export default Spinner;