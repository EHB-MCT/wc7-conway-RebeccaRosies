"use strict";

class Cell{
    constructor(x,y) {
        this._x = x;
        this._y = y; 
        this._state = Math.floor(Math.random()*2);
        this._element = document.createElement("div");
        this._element.className = "cell";
    }
    update(cells){
        cells.filter((c) => {
            Math.abs(c._x - this._x) == 1 &&
            (this._x !== c._x && this._y !== c._y);
        });
    }

    render(){
        
    }

}

export default Cell;