const form = document.querySelector('form')
const result = document.querySelector('#results')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    if(height==='' || height <0 || isNaN(height)){
        result.innerHTML = "Please give a valid Height"
    }
    else if(weight==='' || weight <0 || isNaN(weight)){
        result.innerHTML = "Please give a valid Weight"
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML= `BMI : <span>${bmi}</span>`
    } 
})