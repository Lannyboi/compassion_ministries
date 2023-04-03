const readMoreBtn = document.querySelector('.read-more-btn')
const bioText = document.querySelector('.bio')
const readMoreBtn1 = document.querySelector('.read-more-btn1')
const bioText1 = document.querySelector('.bio1')
const readMoreBtn2 = document.querySelector('.read-more-btn2')
const bioText2 = document.querySelector('.bio2')
const readMoreBtn3 = document.querySelector('.read-more-btn3')
const bioText3 = document.querySelector('.bio3')
const readMoreBtn4 = document.querySelector('.read-more-btn4')
const bioText4 = document.querySelector('.bio4')
const readMoreBtn5 = document.querySelector('.read-more-btn5')
const bioText5 = document.querySelector('.bio5')

readMoreBtn.addEventListener('click',(e)=>{
    bioText.classList.toggle('show-more')
    if(readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText = 'Read Less'
    } else {
        readMoreBtn.innerText = 'Read More'
    }
})

readMoreBtn1.addEventListener('click',(e)=>{
    bioText1.classList.toggle('show-more1')
    if(readMoreBtn1.innerText === 'Read More'){
        readMoreBtn1.innerText = 'Read Less'
    } else {
        readMoreBtn1.innerText = 'Read More'
    }
}) 

readMoreBtn2.addEventListener('click',(e)=>{
    bioText2.classList.toggle('show-more2')
    if(readMoreBtn2.innerText === 'Read More'){
        readMoreBtn2.innerText = 'Read Less'
    } else {
        readMoreBtn2.innerText = 'Read More'
    }
})

readMoreBtn3.addEventListener('click',(e)=>{
    bioText3.classList.toggle('show-more3')
    if(readMoreBtn3.innerText === 'Read More'){
        readMoreBtn3.innerText = 'Read Less'
    } else {
        readMoreBtn3.innerText = 'Read More'
    }
})

readMoreBtn4.addEventListener('click',(e)=>{
    bioText4.classList.toggle('show-more4')
    if(readMoreBtn4.innerText === 'Read More'){
        readMoreBtn4.innerText = 'Read Less'
    } else {
        readMoreBtn4.innerText = 'Read More'
    }
})

readMoreBtn5.addEventListener('click',(e)=>{
    bioText5.classList.toggle('show-more5')
    if(readMoreBtn5.innerText === 'Read More'){
        readMoreBtn5.innerText = 'Read Less'
    } else {
        readMoreBtn5.innerText = 'Read More'
    }
})
