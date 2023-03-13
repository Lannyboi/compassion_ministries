const readMoreBtn = document.querySelector('.read-more-btn')
const bioText = document.querySelector('.bio')

readMoreBtn.addEventListener('click',(e)=>{
    bioText.classList.toggle('show-more')
    if(readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText = 'Read Less'
    } else {
        readMoreBtn.innerText = 'Read More'
    }
})