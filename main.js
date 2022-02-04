let displays = document.getElementById('display')

let workingString = '';

let cleared = document.body.querySelector('#clear')

cleared.addEventListener('click', function () {displays.innerHTML = ''})

let sevened = document.body.querySelector('#sevens')

sevened.addEventListener('click', function () {displays.innerHTML += 7;
})

let eighted = document.body.querySelector('#eights')

eighted.addEventListener('click', function () {displays.innerHTML += 8;})

let nined = document.body.querySelector('#nines')

nined.addEventListener('click', function () {displays.innerHTML += 9})

let slashed = document.body.querySelector('#slashes')

slashed.addEventListener('click', function () {displays.innerHTML += "/"})

let foured = document.body.querySelector('#fours')

foured.addEventListener('click', function () {displays.innerHTML += "4"})

let fived = document.body.querySelector('#fives')

fived.addEventListener('click', function () {displays.innerHTML += 5})

let sixed = document.body.querySelector('#sixes')

sixed.addEventListener('click', function () {displays.innerHTML += 6})

let exed = document.body.querySelector('#exes')

exed.addEventListener('click', function () {displays.innerHTML += "*"})

let oned = document.body.querySelector('#ones')

oned.addEventListener('click', function () {displays.innerHTML += 1})

let twod = document.body.querySelector('#twos')

twod.addEventListener('click', function () {displays.innerHTML += 2})

let threed = document.body.querySelector('#threes')

threed.addEventListener('click', function () {displays.innerHTML += 3})

let dashed = document.body.querySelector('#dashes')

dashed.addEventListener('click', function () {displays.innerHTML += "-"})

let zerod = document.body.querySelector('#zeros')

zerod.addEventListener('click', function () {displays.innerHTML += 0})

let dotted = document.body.querySelector('#dots')

dotted.addEventListener('click', function () {displays.innerHTML += '.'})

let equaled = document.body.querySelector('#equalss')

equaled.addEventListener('click', function () {displays.innerHTML = eval(displays.innerHTML)})

let plused = document.body.querySelector('#pluss')

plused.addEventListener('click', function () {displays.innerHTML += "+"})

