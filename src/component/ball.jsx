import React, {Component} from 'react';
import texture from './rustappdev.game.battlecity3d.png';//текстура

export default class Panzer extends Component{

    render() {
        return(
            <React.Fragment>
                <canvas width="800" height="600" className="field container" id="canvas" >
                </canvas>
            </React.Fragment>
        );
    }
}
