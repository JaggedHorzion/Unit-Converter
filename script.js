/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const meterFeet = document.getElementById("meter/feet")
const literGallon = document.getElementById("liter/gallon")
const kiloPound = document.getElementById("kilograms/pounds")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

const feetToMeter = 0.304
const gallonToLiter = 3.785
const poundToKilo = 0.453

inputBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    meterFeet.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet | ${baseValue} feet = ${baseValue * feetToMeter} meters`
    literGallon.textContent = `${baseValue} meter = ${baseValue * literToGallon} feet | ${baseValue} feet = ${baseValue * gallonToLiter} meters`
    kiloPound.textContent = `${baseValue} meter = ${baseValue * kiloToPound} feet | ${baseValue} feet = ${baseValue * poundToKilo} meters`
})