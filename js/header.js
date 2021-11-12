const collection = document.getElementById('collection')
const line1 = document.querySelector('.line1')

const men = document.getElementById('men')
const line2 = document.querySelector('.line2')

const women = document.getElementById('women')
const line3 = document.querySelector('.line3')

const about = document.getElementById('about')
const line4 = document.querySelector('.line4')

const contact = document.getElementById('contact')
const line5 = document.querySelector('.line5')

collection.addEventListener('mouseover', ()=>{
    line1.classList.add('show-link-line')
})
collection.addEventListener('mouseout', ()=>{
    line1.classList.remove('show-link-line')
})


men.addEventListener('mouseover', ()=>{
    line2.classList.add('show-link-line')
})
men.addEventListener('mouseout', ()=>{
    line2.classList.remove('show-link-line')
})

women.addEventListener('mouseover', ()=>{
    line3.classList.add('show-link-line')
})
women.addEventListener('mouseout', ()=>{
    line3.classList.remove('show-link-line')
})

about.addEventListener('mouseover', ()=>{
    line4.classList.add('show-link-line')
})
about.addEventListener('mouseout', ()=>{
    line4.classList.remove('show-link-line')
})

contact.addEventListener('mouseover', ()=>{
    line5.classList.add('show-link-line')
})
contact.addEventListener('mouseout', ()=>{
    line5.classList.remove('show-link-line')
})

const menuBtn = document.getElementById('menuBtn')
const sidebar = document.querySelector('.sidebar')
const closeSideBar = document.querySelector('.closebar')

menuBtn.addEventListener('click', ()=>{
    sidebar.style.left = '0'
})
closeSideBar.addEventListener('click', ()=>{
    sidebar.style.left = '-100%'
})