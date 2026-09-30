import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { renderer } from '../renderer.js'

import colorMap from '../Assets/Marble/Marble_Color.jpg';
import roughMap from '../Assets/Marble/Marble_Roughness.jpg';
// no metal map.
import normalMap from '../Assets/Marble/Marble_NormalGL.jpg';

const MBgeometry = new RoundedBoxGeometry( 20, 1, 10, 4, 0.25);

const load = (url) => new THREE.TextureLoader().loadAsync(url);

const [color, rough, norm] = await Promise.all([
  load(colorMap), load(roughMap), load(normalMap),
]);
color.colorSpace = THREE.SRGBColorSpace;


const baseTex = [color, rough, norm];
for (const t of baseTex) {
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
}

const MBtexture = (rx, ry) => {
  const maps = baseTex.map(t => {
    const c = t.clone();
    c.repeat.set(rx, ry);
    return c;
  });
  return new THREE.MeshStandardMaterial({
    map: maps[0],
    roughnessMap: maps[1],
    normalMap: maps[2],
    metalness: 0,
    roughness: 1,
    normalScale: new THREE.Vector2(1, 1),
  })
};

const MarbleBox = new THREE.Mesh(MBgeometry, [
  MBtexture(5, 0.25), MBtexture(5, 0.25),  
  MBtexture(5, 2.5),   MBtexture(5, 2.5),      
  MBtexture(2.5, 0.25),  MBtexture(2.5, 0.25),
]);

export default MarbleBox;