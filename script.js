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
    
    meterFeet.textContent = `${baseValue} meter = ${Number(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${Number(baseValue * feetToMeter).toFixed(3)} meters`
    literGallon.textContent = `${baseValue} liter = ${Number(baseValue * literToGallon).toFixed(3)} gallon | ${baseValue} gallon = ${Number(baseValue * gallonToLiter).toFixed(3)} liters`
    kiloPound.textContent = `${baseValue} kilo = ${Number(baseValue * kiloToPound).toFixed(3)} pound | ${baseValue} pound = ${Number(baseValue * poundToKilo).toFixed(3)} kilos`
})