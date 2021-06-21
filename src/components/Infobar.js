import React from "react";
import {Card, Button} from '@material-ui/core';
import {ToggleButton,ToggleButtonGroup} from '@material-ui/lab';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';

const Infobar = ({style,opponent,startPlayer,winner,xO,onChange,status,onClick}) => { 
    
    return (
        <>
            <div className="infobar">
                <Card style = {style}><h3>Opponent</h3></Card>
                <ToggleButtonGroup value={opponent} exclusive onChange={onChange.handleOpponent}>
                    <ToggleButton value="human" aria-label="human" color="primary">
                        <PersonIcon />
                    </ToggleButton>
                    <ToggleButton value="computer" aria-label="computer" color="primary">
                        <ComputerIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
                <Card style = {style}><h3>Starting Player</h3></Card>
                <ToggleButtonGroup value={startPlayer} exclusive  onChange={onChange.handleStartPlayer}>
                    <ToggleButton value="human" disabled = {status} aria-label="human" color="primary">
                        <PersonIcon />
                    </ToggleButton>
                    <ToggleButton value="computer" disabled = {status} aria-label="computer" color="primary">
                        <ComputerIcon />
                    </ToggleButton>
                </ToggleButtonGroup>

                <Card style = {style}><h3 >{winner ? "Winner: " + winner : "Next Player: " + xO}</h3></Card>
                <Button variant="contained" onClick = {onClick} color="primary">
                    New Game
                </Button>
            </div>
        </>
    );
}

export default Infobar;