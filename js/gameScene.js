/* global Phaser */
// Created by: Lucas Tyman
// Created on: May 2022
// This is the Game Scene

/**
 * This class is the Game Scene
 */
class GameScene extends Phaser.Scene {
  /**
   * This method is the constructuor.
   */
  constructor() {
    super({ key: "gameScene" })
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  /**
   * Can be defined on your own Scenes
   * Use it to load assets.
   */
  preload() {
    console.log('Game Scene')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {

  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time is ms since the last frame
   */
  update(time, delta) {
    // pass
  }
}

export default GameScene
