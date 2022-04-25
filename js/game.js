/* global Phaser */
// Created by: Lucas Tyman
// Created on: Apr 2022
// This file contains the JS functions for index.html

import SplashScene from './splashScene.js'

// Our game scene
const splashScene = new SplashScene()

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background colour
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)

// load scences
// NOTE: remember any "key" is gobal and CAN NOT be reused
game.scene.add('splashScene', splashScene)

// start title
game.scene.start('splashScene')
