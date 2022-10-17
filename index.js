/* eslint-disable class-methods-use-this */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

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

const createGlbLoader = () => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/assets/draco/');
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);

  return loader;
};

const createTextureLoader = () => new THREE.TextureLoader();

const createCubeTextureLoader = () => new THREE.CubeTextureLoader();


export { Actor,  createGlbLoader, createTextureLoader, createCubeTextureLoader };
