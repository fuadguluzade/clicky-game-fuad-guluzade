import React from 'react';

export default (props) => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <p className="navbar-brand">Clicky Game</p>
            <p className="navbar-brand">{props.hint}</p>
            <p className="navbar-brand">Score: {props.score} |  Top score: {props.topScore} </p>
        </nav>
    )
}