import * as THREE from 'three';

const Camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight , 0.1, 1000);
// fov ratio distance

const start = new THREE.Vector3(-5, -4, 20);
const end = new THREE.Vector3(-4, 3, 9);
// right , up , back

const atstart = new THREE.Vector3(5, 5, 5);
const atend = new THREE.Vector3(-4, 3, 5);

Camera.position.copy(start);
Camera.lookAt(atstart);

export { start, end , atstart, atend};
export default Camera;