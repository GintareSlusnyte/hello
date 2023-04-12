document
.querySelectorAll('#git li')
.forEach(li => li.addEventListener('click', e => {
    console.log(e);
    const confeti = document.createElement('img');
    confeti.setAttribute('src', './images/confeti.gif');
    confeti.style.position = 'absolute';
    confeti.style.top = e.pageY+'px';
    confeti.style.left = e.pageX+'px';
    confeti.style.transform = `translate(-50%, -50%)`;
    confeti.style.zIndex = '-1';
    document.body.appendChild(confeti);
    setTimeout(()=>{confeti.remove()}, 1900);
}));