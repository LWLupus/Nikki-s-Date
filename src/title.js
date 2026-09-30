const el = document.createElement('div');
el.id = 'title';
el.innerHTML = `
    <h1>NIKKI'S DATE</h1>
    <p>CLICK TO BEGIN</p>
`;
document.body.appendChild(el);

let onStart = null;

el.addEventListener('click', () => {
  el.classList.add('hide');
  setTimeout(() => el.remove(), 800);
  onStart?.();
});

export function onTitleClick(fn) { onStart = fn; }