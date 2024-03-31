import img1 from './example.jpg?w=500&as=metadata';

document.querySelector('#app').innerHTML += `<img src="${img1.src}" />`;