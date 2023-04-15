const state = {
    STANDING : 0,
    RUNNING : 1,
    JUMPING : 2,
    ATTACK : 3,
    ATTACKJUMP : 4,
}
class State{
    constructor (state){
        this.state = state;
    }
}
export class Standing extends State{
    constructor (player){
        super('STANDING');
        this.player = player;
    }
    enter(){
        this.player.image.src = 'http://127.0.0.1:5500/assets/image/player/Attack%20(1).png'
    }
    handleInput(input){
        if (input.includes('ArrowLeft') || input.includes('ArrowRight')){
            this.player.setState(state.RUNNING);
        }
        else if (input.includes('ArrowUp')){
            this.player.setState(state.JUMPING);
        }
    }
}
export class Running extends State{
    constructor (player){
        super('RUNNING');
        this.player = player;
    }
    enter(){
        this.player.image.src = 'http://127.0.0.1:5500/assets/image/player/Run%20(1).png'
    }
    handleInput(input){
        if (!input.includes('ArrowLeft') && !input.includes('ArrowRight')){
            this.player.setState(state.STANDING);
        }
        else if (input.includes('ArrowUp')){
            this.player.setState(state.JUMPING);
        }
    }
}
export class Jumping extends State{
    constructor (player){
        super('JUMPING');
        this.player = player;
    }
    enter(){
        this.player.image.src = 'http://127.0.0.1:5500/assets/image/player/Jump%20(1).png'
    }
    handleInput(input){
        if (!input.includes('ArrowLeft') && !input.includes('ArrowRight')){
            this.player.setState(state.STANDING);
        }
    }
}