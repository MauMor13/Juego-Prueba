export class InputHandler{
    constructor(){
        this.keys = [];
        window.addEventListener('keydown',event => {
            if((event.key === 'ArrowDown' || 
                event.key === 'ArrowUp' || 
                event.key === 'ArrowRight' || 
                event.key === 'ArrowLeft'|| 
                event.key === 'x'||
                event.key === 'Shift') && this.keys.indexOf(event.key) === -1){
                this.keys.push(event.key);
            }
        });
        window.addEventListener('keyup',event => {
            if(event.key === 'ArrowDown' || 
                event.key === 'ArrowUp' || 
                event.key === 'ArrowRight' || 
                event.key === 'ArrowLeft' || 
                event.key === 'x'||
                event.key === 'Shift'){
                this.keys.splice(this.keys.indexOf(event.key),1);
            }
        });
    }
}