import './style.css'

import * as THREE from 'three';

import { renderer } from './renderer.js'
import { ColorEnvironment } from 'three/addons/environments/ColorEnvironment.js';

import MarbleBox from './Geometries/MarbleBox.js'
import MetalBox from './Geometries/MetalBox.js';
import Nikki from './Geometries/Nikki.js';

import { onTitleClick } from './title.js';
import { showNode, showVN } from './vn.js';

import { spot1Light, point2Light, point3Light, point4Light} from './Misc/Lights.js';

import Camera, { start, end, atstart, atend } from './Misc/Camera.js';

const scene = new THREE.Scene();



const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new ColorEnvironment(), 0.04).texture;

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight) ;

renderer.render( scene, Camera);


// FOG
scene.fog = new THREE.Fog(0x000000, 100, 200);
//

scene.add(MarbleBox, MetalBox, Nikki);

scene.add(spot1Light, point2Light, point3Light, point4Light);

// animss?
let elapsed = 0;
const t0 = performance.now();


// anim for cam
const DUR = 2.5;
let startTime = null;
let playing = false;
let introDone = false;
// anim for cam

// anim math
const easeInOutCubic = (x) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;


const _look = new THREE.Vector3();
// anim math



onTitleClick(() => {
  if (playing) return;
  playing = true;
  startTime = performance.now();
});

const NIKKI_Y = 5;

function animate() {
  requestAnimationFrame( animate );
  elapsed = (performance.now() - t0) / 1000;
  if (playing) {
    Nikki.position.y = NIKKI_Y + Math.sin(elapsed * 0.8) * 0.15;
    const t = Math.min((performance.now() - startTime) / (DUR * 1000), 1);
    const e = easeInOutCubic(t);
    Camera.position.lerpVectors(start, end, e);
    Camera.lookAt(_look.lerpVectors(atstart, atend, e));
    if (t >= 1 && !introDone) {
      introDone = true;
      showVN();
      showNode('start');
    }
  }
  renderer.render( scene, Camera );
}


animate()