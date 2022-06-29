// write your code here

let menu = document.getElementById('ramen-menu')
let ramenImage = document.getElementById('img')
let ramenName = document.querySelector('.name')
let ramenRest = document.querySelector('.restaurant')
let rating = document.getElementById('rating-display')
let comment = document.getElementById('comment-display')
const url = 'http: //localhost:3000'

function fetchData(){
    return fetch(url).then(response => response.json())
}

function displayRamen(){
    fetchData().then(res => {
        res.forEach(element => {
            let span = document.createElement('img')
            span.src = element.image
            menu.appendChild(span)
            span.addEventListener('click' , () => {
                displayEach(element)
            })
        });
    })
}

function displayEach(){
    ramenImage.src = element.image
    ramenName.innerHTML = element.name
    rating.innerHTML = element.rating
    ramenRest.innerHTML = element.restaurant
    comment.innerHTML = element.comment
}

let inputName = document.getElementById('new-name')
let inputRest = document.getElementById('new-restaurant')
let inputRating = document.getElementById('new-comment')
let inputComment = document.getElementById('new-comment')
let inputImage = document.getElementById('new-image')

function submitForm() {
    let form = document.getElementById('new-ramen')

    form.addEventListener('submit',
    (e) => {
        e.preventDefault()
        let image = document.createElement('img')
        image.src = inputImage.ariaValue
        menu.appendChild(image)
        image.addEventListener('click' , () => {
            ramenImage.src = ''
            ramenName.innerHTML = ''
            ramenRest.innerHTML = ''
            rating.innerHTML = ''
            comment.innerHTML = ''
            ramenImage.src = inputImage.value
            ramenName.innerHTML = inputName.value
            ramenRest.innerText = inputRest.value
            comment.innerHTML = inputComment.value
        })
    })
}