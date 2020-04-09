const container = document.getElementById('container');
const boxesNum = 500;

for (let i = 0; i < boxesNum; i++) {
  const box = document.createElement('div');
  box.classList.add('box');

  box.addEventListener('mouseover', () => {
    setColor(box);
  });

  box.addEventListener('mouseout', () => {
    unSetColor(box);
  });

  const getRandomColor = () => {
    const hexCode = '0123456789ABCDEF';
    let colors = '#';
    for (let i = 0; i < 6; i++) {
      colors += hexCode[Math.floor(Math.random() * 16)];
    }
    return colors;
  };

  const setColor = (elem) => {
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  };

  const unSetColor = (elem) => {
    elem.style.backgroundColor = 'rgb(27, 16, 16)';
    elem.style.boxShadow = 'none';
  };

  container.appendChild(box);
}
