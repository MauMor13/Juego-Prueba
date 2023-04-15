import { Standing , Running , Jumping } from "./playerState.js";

export class Player{
    constructor(game){
        this.game = game;
        this.width = 91.3;
        this.height = 100;
        this.x = this.game.width / 8;
        this.y = this.game.height - this.height;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById('player');
        this.speed = 0;
        this.maxSpeed = 3;
        this.states = [new Standing(this) , new Running(this) , new Jumping(this) ];
        this.currentState = this.states[0];
        this.currentState.enter();
    }
    update(input){
        this.currentState.handleInput(input);
        //movement x
        this.x += this.speed;
        if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
        if (this.x < 0) this.x = 0;
        else if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        //movement y
        if (input.includes('ArrowUp') && this.onGound()) this.vy -= 20;
        this.y += this.vy;
        if (!this.onGound()) this.vy += this.weight;
        else this.vy = 0; 
    }
    draw(context){
        context.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
    onGound(){
        return this.y >= this.game.height - this.height;
    }
    setState(state){
        this.currentState = this.states[state];
        this.currentState.enter();
    }
}