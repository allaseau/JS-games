const cardArray = [
    {
        name: 'frittes',
        img: 'images/frittes.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'glace',
        img: 'images/glace.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'frittes',
        img: 'images/frittes.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'glace',
        img: 'images/glace.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
];

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const result = document.querySelector('#result')
let cardChosen =[]
let cardsChosenIds = [] 
const cardsWon = []

function createBoard () {
    for(let i = 0 ; i < cardArray.length ; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('C\'est la même image')
    }
    if(cardChosen[0] == cardChosen[1]){
        alert('C\'est une paire !')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Essaye encore')
    }
    result.textContent = cardsWon.length
    cardChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        result.textContent = 'Bravo ! Vous avez trouvé toutes les paires !'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}