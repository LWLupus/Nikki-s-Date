import nikkiUrl from '../Assets/Nikki/Nikki.png';
import * as THREE from 'three';


const Nitexture = await new THREE.TextureLoader().load(nikkiUrl);
Nitexture.colorSpace = THREE.SRGBColorSpace;
const Nikki = new THREE.Mesh(
    new THREE.PlaneGeometry(12, 12),
    new THREE.MeshBasicMaterial({
        map: Nitexture,
        transparent: true,
        alphaTest: 0.5,
        side: THREE.DoubleSide,
        envMapIntensity: 0,
    })
);

Nikki.position.setX(-2.5);

Nikki.position.setZ(-7);
Nikki.position.setY(5);

export default Nikki;