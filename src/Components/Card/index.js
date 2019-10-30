import React from 'react';
import './style.css'

const Cards = props => {
    const players = props.players;
    for (var i = props.players.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = players[i];
        players[i] = players[j];
        players[j] = temp;
    }
    return (
        props.players.map((player, index) => {
            return (
                <img key={player.id} src={player.image} onClick={props.handleClick} id={player.id} alt="football"></img>
            )
        })
    )
}

export default Cards;