export class Player{
    constructor(game){
        this.game = game;
        this.width = 91.3;
        this.height = 100;
        this.x = this.game.width / 8;
        this.y = this.game.height - this.height;
        this.image = document.getElementById('player');
    }
    update(input){
        if (input.includes('ArrowRight') && input.includes('Shift')) this.x+2;
        else if (input.includes('ArrowLeft') && input.includes('Shift')) this.x-2;
        else if (input.includes('ArrowRight')) this.x++;
        else if (input.includes('ArrowLeft')) this.x--;
    }
    draw(context){
        context.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}