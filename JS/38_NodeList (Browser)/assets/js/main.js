const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody =  estilosBody.backgroundColor;

// console.log(backgroundColorBody);

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.fontWeight = 700;
    p.style.fontStyle = 'italic'
    p.style.color = "white";
    // console.log(p);
};
