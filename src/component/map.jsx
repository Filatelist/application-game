import React,{Component} from 'react';

const getWalls = () =>{

    const canvas= document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.drawImage(this.wall, 40,200, 50, 118);

    ctx.drawImage(this.wall, 40,318, 50, 118);
    ctx.drawImage(this.wall, 250,200, 50, 118);
    ctx.drawImage(this.wall, 300,200, 50, 118);

    ctx.drawImage(this.wall, 350,90, 50, 118);
    ctx.drawImage(this.wall, 400,90, 50, 118);
    ctx.drawImage(this.wall, 350,200, 50, 118);
    ctx.drawImage(this.wall, 400,200, 50, 118);

    ctx.drawImage(this.wall, 350,318, 50, 118);
    ctx.drawImage(this.wall, 400,318, 50, 118);
    ctx.drawImage(this.wall, 450,200, 50, 118);
    ctx.drawImage(this.wall, 500,200, 50, 118);
    ctx.drawImage(this.wall, 700,200, 50, 118);

    ctx.drawImage(this.wall, 700,318, 50, 118);
    ctx.closePath();
}
export default getWalls;
