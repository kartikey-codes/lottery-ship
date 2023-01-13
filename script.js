const token = 151992484132593
const base_url = `https://www.superheroapi.com/api.php/${token}`

let hero = {}
let comp = {}

const pics = [
"./imgs/1.png",
"./imgs/2.png",
"./imgs/3.png",
"./imgs/4.png",
"./imgs/5.png",
"./imgs/6.png",
"./imgs/7.png",
"./imgs/8.png",
"./imgs/9.png",
"./imgs/10.png",
];

let newHeroButton = document.getElementById('newHeroButton')
let heroName = document.getElementById('heroName')
let pic = document.getElementById('heroPic')
let statsInfo = document.getElementById('statsInfo')
let playerCard = document.getElementById('playerCard')

const getSuperhero = async (id) => {
    const response = await fetch(`${base_url}/${id}`)
    const data = await response.json()
    hero=await data
    //const name = `<h2>${data.name}</h2>`
    //heroName.innerHTML = name
    pic.innerHTML = `<img src="${pics[Math.floor(Math.random() * pics.length)]}"  height=200 width=200 />`
    displayStats(data)
}

const displayStats = (character) => {
    const stats = Object.keys(character.powerstats).map(stat => {
        let statFill = document.getElementById(`${stat}1`)
        statFill.innerHTML = `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
        hero.stat = character.powerstats[stat]
        playerCard.style.visibility = "visible";
    })
}

newHeroButton.onclick = () => {
    getSuperhero(Math.floor(Math.random() * 700) + 1)
    getComputerHero(Math.floor(Math.random() * 700) + 1)
}

let heroName2 = document.getElementById('heroName2')
let pic2 = document.getElementById('heroPic2')
let statsInfo2 = document.getElementById('statsInfo2')
let computerCard = document.getElementById('computerCard')

const getComputerHero = async (id) => {
    const response = await fetch(`${base_url}/${id}`)
    const data = await response.json()
    comp=await data
    //const name = `<h2>${data.name}</h2>`
    //heroName2.innerHTML = name
    pic2.innerHTML = `<img src="${pics[Math.floor(Math.random() * pics.length)]}"  height=200 width=200 />`
    displayStats2(data)
}

const displayStats2 = (character) => {
    const stats = Object.keys(character.powerstats).map(stat => {
        let statFill = document.getElementById(`${stat}2`)
        statFill.innerHTML = `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
        comp.stat = character.powerstats[stat]
        computerCard.style.visibility = "visible";
    })
}

let score=0
const compareButton = (e) => {
    let scoreE=document.getElementById('score')
    console.log(hero.powerstats[e])
    console.log(comp.powerstats[e])
    if(hero.powerstats[e]==100){
        score++;
        scoreE.innerHTML=`<h2>${score}</h2>`;
    }
    else if(comp.powerstats[e]==100){
        score--;
        scoreE.innerHTML=`<h2>${score}</h2>`;
    }
    else if(hero.powerstats[e] >= comp.powerstats[e]){
        score++;
        scoreE.innerHTML=`<h2>${score}</h2>`;
    }
    else{
        score--;
        scoreE.innerHTML=`<h2>${score}</h2>`;
    }
}

// FLIP THE CARD
let flipCard = document.getElementById('flip-card-inner')
const flipCardFunc = () =>{
    flipCard.style.cssText =`transform: rotateY(180deg)`
}
