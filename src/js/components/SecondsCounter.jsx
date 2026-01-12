import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
    const digit6 = Math.floor(props.seconds / 100000) % 10;
    const digit5 = Math.floor(props.seconds / 10000) % 10;
    const digit4 = Math.floor(props.seconds / 1000) % 10;
    const digit3 = Math.floor(props.seconds / 100) % 10;
    const digit2 = Math.floor(props.seconds / 10) % 10;
    const digit1 = Math.floor(props.seconds / 1) % 10;

    return (
        <div className="bigCounter bg-black text-white d-flex justify-content-center align-items-center gap-2 p-3 mt-5">
            <div className="calendar bg-dark p-3 rounded border border-secondary">
                <i className="bi bi-clock"></i>
            </div>
            <div className="digit bg-dark p-3 rounded border border-secondary">{digit6}</div>
            <div className="digit bg-dark p-3 rounded border border-secondary">{digit5}</div>
            <div className="digit bg-dark p-3 rounded border border-secondary">{digit4}</div>
            <div className="digit bg-dark p-3 rounded border border-secondary">{digit3}</div>
            <div className="digit bg-dark p-3 rounded border border-secondary">{digit2}</div>
            <div className="digit bg-dark p-3 rounded border border-secondary">{digit1}</div>
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number
};

export default SecondsCounter;