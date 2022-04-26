/* global Phaser */
// Created by: Lucas Tyman
// Created on: Apr 2022
// This is the Splash Scene

/**
 * This class is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructuor.
   */
  constructor() {
    super({ key: "splashScene" })
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
    console.log("Splash Scene")
  }
  
  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    // pass
  }

  update(time, delta) {
    // pass
  }
}
export default SplashScene
