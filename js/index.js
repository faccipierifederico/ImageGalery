const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imageContainer =  document.querySelector('.img-show');
const closeModal = document.querySelector('.bx.bx-x');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'));
    })
})

const addImage = (srcImage) =>{
    containerImage.classList.toggle('move');
    imageContainer.src = srcImage;
}

closeModal.addEventListener('click', () => {
    containerImage.classList.toggle('move');
})