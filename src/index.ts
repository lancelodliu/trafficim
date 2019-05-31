import Phaser from "phaser";
import bg from "./assets/bg.png"
import car from "./assets/car.png"

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bg', bg);
    this.load.image('car', car);
}

function create ()
{
    this.add.image(0, 0, 'bg');
    this.add.image(100, 0, 'car');
}