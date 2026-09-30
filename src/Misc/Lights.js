import * as THREE from 'three';

// Front left
const spot1Light = new THREE.SpotLight(0xE8B04A, 6000, 20, Math.PI/4);
spot1Light.position.set(7,17,0);
spot1Light.target.position.set(7,10,0);
// right , up , back


// back right
const point2Light = new THREE.PointLight(0xE8B04A, 5000);
point2Light.position.set(-20,13,-20);
// right , up , back


//right
const point3Light = new THREE.PointLight(0xE8B04A, 5000);
point3Light.position.set(-30, 13, -8);
// right , up , back

//right back
const point4Light = new THREE.PointLight(0xE8B04A, 5000);
point4Light.position.set(-20,13,30);
// right , up , back




export { spot1Light , point2Light, point3Light, point4Light};