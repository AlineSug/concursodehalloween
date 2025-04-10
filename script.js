let lastIndex = 0;
let images = document.querySelectorAll('.container img');
images.forEach((item,index)=>{
    document.querySelectorAll('.bullet-single')[index].addEventListener('click',()=>{
        let lastImage = document.querySelectorAll('.container img')[lastIndex];
        let actualImage = document.querySelectorAll('.container img')[index];

        //Resetando os bullets
        document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet');
        document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet');
        lastIndex = index;

        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1;
    })
})




const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
    }else {
        entry.target.classList.remove('show');
    }
    
    });
});

document.querySelectorAll('.box').forEach((el) => observer.observe(el));

const observers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('shows');
    }else {
        entry.target.classList.remove('shows');
    }
    
    });
});

document.querySelectorAll('.box2').forEach((eli) => observers.observe(eli));

  function mostrarImagem(imagemClicada) {
    const previewDiv = document.getElementById('preview');
    previewDiv.innerHTML = `<img src= "${imagemClicada.src}" alt="Imagem ampliada">`;
  }