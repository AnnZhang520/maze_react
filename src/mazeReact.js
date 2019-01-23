import React, { Component } from 'react';
import './mazeReact.css';

class Board extends Component {
    render() {
        console.log("this is render() of class Board!");
        return (
            <div id="cells">
                <div className="row">
                    <div className="top cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top cell"></div>
                    <div className="top cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="top left right cell"></div>
                </div>
                <div className="row">
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left cell"></div>
                    <div className="top right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="left cell"></div>
                    <div className="top right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                </div>
                <div className="row">
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="top left cell"></div>
                    <div className="right cell"></div>
                    <div className="top left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="bottom right cell"></div>
                </div>
                <div className="row">
                    <div className="bottom left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top cell"></div>
                    <div className="top right cell"></div>
                </div>
                <div className="row">
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                </div>
                <div className="row">
                    <div className="left right cell"></div>
                    <div className="top bottom left cell"></div>
                    <div className="bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                </div>
                <div className="row">
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top bottom left cell"></div>
                    <div className="top cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="right cell"></div>
                </div>
                <div className="row">
                    <div className="bottom left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                </div>
                <div className="row">
                    <div className="top bottom left cell"></div>
                    <div className="top right cell"></div>
                    <div className="left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left right cell"></div>
                </div>
                <div className="row">
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top right cell"></div>
                </div>
                <div className="row">
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="right cell"></div>
                </div>
                <div className="row">
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="right cell"></div>
                </div>
                <div className="row">
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top right cell"></div>
                    <div className="left cell"></div>
                    <div className="top right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top right cell"></div>
                    <div className="top left cell"></div>
                    <div className="right cell"></div>
                </div>
                <div className="row">
                    <div className="left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top bottom left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top bottom left cell"></div>
                    <div className="top right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                </div>
                <div className="row">
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left right cell"></div>
                </div>
                <div className="row">
                    <div className="bottom left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top right cell"></div>
                </div>
                <div className="row">
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left right cell"></div>
                    <div className="left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top bottom left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="left right cell"></div>
                </div>
                <div className="row">
                    <div className="left right cell"></div>
                    <div className="top bottom left cell"></div>
                    <div className="right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="right cell"></div>
                    <div className="bottom left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                </div>
                <div className="row">
                    <div className="left cell"></div>
                    <div className="top right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="left right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left right cell"></div>
                    <div className="left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="top left right cell"></div>
                </div>
                <div className="row">
                    <div className="bottom left right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom right cell"></div>
                    <div className="bottom left cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="top bottom cell"></div>
                    <div className="bottom cell"></div>
                </div>
                <div className="text">Press 'LEFT' 'UP' 'RIGHT' 'DOWN' key to play!</div>
                {/* <div className="text">Press 'L' to auto run LEFT-TURN! 'ALT+L' to auto step!</div>
                <div className="text">Press 'R' to auto run RIGHT-TURN! 'ALT+R' to auto step!</div> */}
            </div>
        );
    }
}

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.panel = [];
        this.step = { X: 0, Y: 0 };
        this.stepCount = 0;
        this.updateState = this.updateState.bind(this);
        this.windowResize = this.windowResize.bind(this);
        this.move_left = this.move_left.bind(this);
        this.move_up = this.move_up.bind(this);
        this.move_right = this.move_right.bind(this);
        this.move_down = this.move_down.bind(this);
        this.printXY = this.printXY.bind(this);
        this.state = {
            step: { X: 0, Y: 0 },
            left: 0,
            top: 0
        };
    }
    updateState() {
        // console.log(obj);
        const rows = document.getElementsByClassName('row');
        // console.log(rows);
        // console.log(rows[0].children[0].offsetLeft);
        // console.log(rows[0].children[0].offsetTop);
        console.log(this.step);
        this.setState({
            step: this.step,
            left: rows[this.step.Y].children[this.step.X].offsetLeft + 1,
            top: rows[this.step.Y].children[this.step.X].offsetTop + 1,
        });
    }
    windowResize() {
        this.updateState();
    }
    move_left() {
        console.log("panel[" + this.step.Y + "][" + this.step.X + "]: ");
        console.log(this.panel[this.step.Y][this.step.X]);
        if (this.step.X > 0 && !this.panel[this.step.Y][this.step.X].left) {
            //   footprint();
            this.step.X--;
            this.updateState();
            this.stepCount++;
        }
    }
    move_up() {
        console.log("panel[" + this.step.Y + "][" + this.step.X + "]: ");
        console.log(this.panel[this.step.Y][this.step.X]);
        if (this.step.Y > 0 && !this.panel[this.step.Y][this.step.X].top) {
            //   footprint();
            this.step.Y--;
            this.updateState();
            this.stepCount++;
        }
    }
    move_right() {
        console.log("panel[" + this.step.Y + "][" + this.step.X + "]: ");
        console.log(this.panel[this.step.Y][this.step.X]);
        if (this.step.X < 19 && !this.panel[this.step.Y][this.step.X].right) {
            //   footprint();
            this.step.X++;
            this.updateState();
            this.stepCount++;
        }
    }
    move_down() {
        console.log("panel[" + this.step.Y + "][" + this.step.X + "]: ");
        console.log(this.panel[this.step.Y][this.step.X]);
        if (this.step.Y < 19 && !this.panel[this.step.Y][this.step.X].bottom) {
            //   footprint();
            this.step.Y++;
            this.updateState();
            this.stepCount++;
        }
    }
    congratulation() {
        if (this.step.X === 19 && this.step.Y === 19) {
            alert("congratulations! Steps: " + this.stepCount)
        }
    }
    onKeyDown = (e) => {
        let k = e.keyCode || e.which;
        // let alt = e.altKey;
        console.log(k);
        // console.log(alt);
        switch (k) {
            case 37:
                this.move_left();
                break;
            case 38:
                this.move_up();
                break;
            case 39:
                this.move_right();
                break;
            case 40:
                this.move_down();
                break;
            // case 76:  //L
            //     if (alt) {
            //         autoStepLeft(rat);
            //     } else {
            //         autoMoveLeft(rat);
            //     }
            //     break;
            // case 82:  //R
            //     if (alt) {
            //         autoStepRight(rat);
            //     } else {
            //         autoMoveRight(rat);
            //     }
            //     break;
            default: break;
        }
        return;
    }
    printXY(obj) {
        let oRect = obj.rat.getBoundingClientRect();
        console.log(oRect);
    }

    componentDidMount() {
        const value = { top: false, left: false, bottom: false, right: false };
        const rows = document.getElementsByClassName('row');
        console.log(rows);
        console.log(rows[0].children[0].offsetLeft);
        console.log(rows[0].children[0].offsetTop);

        for (let row of rows) {
            const nodes = row.children;
            let eachRow = [];
            for (let node of nodes) {
                const borders = node.classList.value.split(' ').filter(className => ['top', 'left', 'right', 'bottom'].indexOf(className) !== -1);
                const borderMap = {};
                borders.forEach(line => borderMap[line] = true);
                eachRow.push(Object.assign({}, value, borderMap));
            }
            this.panel.push(eachRow);
        }
        // console.log(JSON.stringify(panel))

        this.rat = document.getElementById('rats');
        this.rat.style.left = rows[0].children[0].offsetLeft + 1 + "px";
        this.rat.style.top = rows[0].children[0].offsetTop + 1 + "px";

        window.addEventListener('resize', this.windowResize.bind(this));
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.congratulation.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.windowResize.bind(this));
        window.removeEventListener("keydown", this.onKeyDown.bind(this));
        window.removeEventListener("keyup", this.congratulation.bind(this));
    }

    render() {
        console.log("this is render() of class Mouse!");
        console.log(this.state.step);
        // console.log(this.state.left);
        // console.log(this.state.top);
        return (
            <div id="rats" className="rat" style={{ left: this.state.left + "px", top: this.state.top + "px" }} onMouseOver={() => this.printXY(this)}></div>
        )
    }
}

class Maze extends Component {
    render() {
        console.log("this is render() of class Maze!");
        return (
            <div>
                <Board />
                <Mouse />
            </div>
        );
    }
}

// export { Mouse };
export default Maze;
