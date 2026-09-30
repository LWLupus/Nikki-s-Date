import * as THREE from 'three';
import { renderer } from '../renderer.js';

import colorMap from '../Assets/Metal/Metal_Color.jpg';
import roughMap from '../Assets/Metal/Metal_Roughness.jpg';
import metalMap from '../Assets/Metal/Metal_Metalness.jpg';
import normalMap from '../Assets/Metal/Metal_NormalGL.jpg';


const geometry = new THREE.BoxGeometry( 15, 10, 2);


const load = (url) => new THREE.TextureLoader().load(url);

const [color, rough, metal, norm] = await Promise.all([
    load(colorMap), load(roughMap), load(metalMap), load(normalMap),
]);
color.colorSpace = THREE.SRGBColorSpace;

const baseTex = [color, rough, metal, norm];
for (const t of baseTex) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
}


const MeBtexture = (rx, ry) => {
    const maps = baseTex.map(t => {
        const c = t.clone();
        c.repeat.set(rx, ry);
        c.needsUpdate = true;
        return c;
    });
    return new THREE.MeshStandardMaterial({
        map: maps[0],
        roughnessMap: maps[1],
        metalnessMap: maps[2],
        normalMap: maps[3],
        roughness: 1,
        metalness: 1,
        normalScale: new THREE.Vector2(1, 1),
    });
};

const MetalBox = new THREE.Mesh(geometry, [
    MeBtexture(0.5, 2.5), MeBtexture(0.5, 2.5), // right left
    MeBtexture(3.75, 0.5), MeBtexture(3.75, 0.5), // up down
    MeBtexture(2.5, 3.75), MeBtexture(2.5, 3.75), // front back
]);

MetalBox.position.setY(-5);

export default MetalBox;