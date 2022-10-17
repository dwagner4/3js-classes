/* eslint-disable class-methods-use-this */
import * as THREE from 'three';

class Actor {
  constructor() {
    this.model = null;
    this.body = null;
    this.animation = {};
    this.audio = {};
  }

  async init() {
    /** load the model */

    /** make AnimationClips and AnimationActions */

    this.animation.mixer = new THREE.AnimationMixer(this);
    this.animation.actions = {};

    this.animation.play = name => {
      const newAction = this.animation.actions[name];
      const oldAction = this.animation.actions.current;
      newAction.reset();
      newAction.play();
      if (oldAction) {
        newAction.crossFadeFrom(oldAction, 1);
      }

      this.animation.actions.current = newAction;
    };
  }

  setBody() {}

  update(time) {
    this.animation.mixer?.update(time.delta * 0.001);
  }

  dispose() {}
}

export { Actor };
