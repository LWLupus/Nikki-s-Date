import { script } from './dialouge.js';

const el = document.createElement('div');
el.id = 'vn';
el.innerHTML = `
    <div id="bubble">
        <span id="bubble-text"></span>
        <i class="h tr">♥</i>
        <i class="h bl">♥</i>
    </div>
    <div id="box">
        <p id="text"></p>
        <div id="choices"></div>
    </div>
    <button id="credits-btn">Credits/Context</button>
    <div id="credits">
        <p>NIKKI'S DATE</p>
        <p>My first time Trying out three.js</p>
        <p>Also my 3rd time writing code in javascript so it is really bad.</p>
        <p>This is my first ship(ysws)</p>
        <p>Shout out to fireship for his three.js tutorial.</p>
        <p>Also I loooove obssesion.</p>
        <button id="credits-close">Close</button>
    </div>
`;
document.body.appendChild(el);

let typeTimer = null;
function typeInto(target, str, speed = 50, sound = true) {
    clearInterval(typeTimer);
    target.textContent = '';
    if (!str) return;
    let i = 0;
    typeTimer = setInterval(() => {
        target.textContent = str.slice(0, ++i);
        if (sound && i % 2 === 0) tick(); // wait / evry other lettr
        if (i >= str.length) clearInterval(typeTimer);
    }, speed);
}


// choices
function buildChoices(node) {
    const wrap = el.querySelector('#choices');
    wrap.innerHTML = '';
    if (!node.options.length) {
        const again = document.createElement('button');
        again.textContent = 'Replay';
        again.onclick = () => showNode('start');
        wrap.appendChild(again);
        return;
    }
    for (const opt of node.options) {
        const b = document.createElement('button');
        b.textContent = opt.label;
        b.onclick = () => showNode(opt.next);
        wrap.appendChild(b)
    }
}






export function showNode(id) {
    const node = script[id];
    const box = el.querySelector('#box');
    const bubble = el.querySelector('#bubble');
    const bubbleText = el.querySelector('#bubble-text');
    typeInto(bubbleText, node.say);
    box.classList.add('fading');
    bubble.classList.remove('on');
    setTimeout(() => {
        el.querySelector('#text').textContent = node.text;
        bubble.classList.toggle('on', !!node.say);
        buildChoices(node);
        box.classList.remove('fading');
    }, 200);
}

export function showVN() {
  el.classList.add('on');
}




// Credits
const btn = el.querySelector('#credits-btn');
const panel = el.querySelector('#credits');
const close = el.querySelector('#credits-close');

btn.onclick = () => panel.classList.add('on');
close.onclick = () => panel.classList.remove('on');



// vn audio thingy
let audioCtx = null;
function tick() {
    audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
    const os = audioCtx.createOscillator();
    const ga = audioCtx.createGain();
    const now = audioCtx.currentTime;
    os.type = 'sawtooth';
    os.frequency.setValueAtTime(1400, now);
    os.frequency.exponentialRampToValueAtTime(250, now + 0.04);

    ga.gain.setValueAtTime(0.035, now);
    ga.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    os.connect(ga).connect(audioCtx.destination);
    os.start();
    os.stop(now + 0.04);
}
