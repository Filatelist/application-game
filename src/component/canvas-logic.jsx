import React, {Component} from 'react';
import Canvas from './ball';
import texture from './rustappdev.game.battlecity3d.png';
import textureDown from './rustappdev.game.battlecity3dDown.png';
import textureLeft from './rustappdev.game.battlecity3dLeft.png';
import textureRight from './rustappdev.game.battlecity3dRight.png';
import wall from './wall.png';
export default class Canvaslogic extends Component{
    constructor(){
        super();
        this.state={
            rightRessed: false,
            leftRessed: false,
            upRessed: false,
            downRessed: false,
            feuer: false
        }
        this.paddleX = 370;
        this.paddleY = 500;
        this.img = new Image();
        this.img.src= texture;
        this.x = 370;
        this.y = 500;
        this.wall = new Image();
        this.wall.src = wall;
    }
    handleKeyDown = event =>{
        if (event.keyCode == 38){
            this.img.src = texture;
            this.setState({upPressed: true});
        }else if (event.keyCode == 37){
            this.img.src = textureLeft;
            this.setState({leftPressed: true});
        }if (event.keyCode == 40){
            this.img.src = textureDown;
            this.setState({downPressed: true});
        } else if (event.keyCode == 39){
            this.img.src = textureRight;
            this.setState({rightPressed: true});
        }else if (event.keyCode == 32 && !this.state.feuer && !this.state.upPressed && !this.state.leftPressed && !this.state.rightPressed && !this.state.downPressed){
            this.setState({feuer: true});
            setTimeout(()=>{this.setState({feuer: false})},2000);
            this.x = this.paddleX;
            this.y = this.paddleY;

        }
    }
    handleKeyUp = event =>{
        if (event.keyCode == 38){
            this.setState({upPressed: false});
        }else if (event.keyCode == 37){
            this.setState({leftPressed: false});
        }if (event.keyCode == 40){
            this.setState({downPressed: false});
        } else if (event.keyCode == 39){

            this.setState({rightPressed: false});
        }
    }
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown,false);
        document.addEventListener('keyup', this.handleKeyUp,false);
        setInterval(this.frame, 10);
    }
    frame = ()=>{

        const canvas= document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
            ctx.clearRect(0,0,800,600)
        ctx.beginPath();
        ctx.drawImage(this.img ,this.paddleX, this.paddleY,50,45);
        ctx.closePath();
        ctx.beginPath();

        ctx.beginPath();
        ctx.drawImage(this.wall, 40,200, 50, 118);

        ctx.drawImage(this.wall, 40,318, 50, 118);
        ctx.drawImage(this.wall, 250,200, 50, 118);
        ctx.drawImage(this.wall, 300,200, 50, 118);
        ctx.drawImage(this.wall, 350,200, 50, 118);
        ctx.drawImage(this.wall, 400,200, 50, 118);

        ctx.drawImage(this.wall, 450,200, 50, 118);
        ctx.drawImage(this.wall, 500,200, 50, 118);
        ctx.drawImage(this.wall, 700,200, 50, 118);

        ctx.drawImage(this.wall, 700,318, 50, 118);
        ctx.closePath();

        if (this.img.src == texture) {
            ctx.rect(this.x+24,this.y+2, 2,2);
        }else if (this.img.src == textureRight){
            ctx.rect(this.x+45,this.y+22, 2,2);
        }
        else if (this.img.src == textureLeft){
            ctx.rect(this.x+3,this.y+22, 2,2);
        }
        else if (this.img.src == textureDown){

            ctx.rect(this.x+24,this.y+41, 2,2);
        }



        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();

        if (this.state.rightPressed && this.paddleX < canvas.width - 50) {
            this.paddleX += 2;
            console.log(this.paddleX);

            console.log(this.paddleY);
        }
        else if (this.state.leftPressed && this.paddleX !== 0) {
                this.paddleX -= 2;
            console.log(this.paddleX);
             console.log(this.paddleY);
        }
        else if (this.state.upPressed && this.paddleY !==  0 && this.paddleY !== 315) {

            this.paddleY -= 2;
            console.log(this.paddleX);

            console.log(this.paddleY);
        }
        else if (this.state.downPressed && this.paddleY < canvas.height - 45) {
            this.paddleY += 2;

            console.log(this.paddleX);

            console.log(this.paddleY);
        }else if (this.state.feuer && this.img.src == texture){
                this.y-=18;
        }else if (this.state.feuer && this.img.src == textureDown){
            this.y+=18;
        }else if (this.state.feuer && this.img.src == textureLeft){
            this.x-=18;
        }else if (this.state.feuer && this.img.src == textureRight){
            this.x+=18;
        }


    }

    render() {
        return(
            <Canvas>
            </Canvas>
        );
    }
}
