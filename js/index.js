"use strict";

import Cell from './cell.js';

class Game {
    constructor(){
    this._cells = [];

    for (let i = 0; i < 20; i++){
        for (let j = 0; j < 20; j++){
            //hier cell aanmaken en toevoegen
            const c = new Cell(i,j); // de i geef je dus mee als x in de cell klasse en de j als y
            this._cells.push(c);
        }
    }
    }

    update(){
        this._cells.ForEach((c) => {
    
        }
    };

    render(){
        
    }
}

function init() {

}


init();



