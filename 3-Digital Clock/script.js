const today = document.getElementById('date')
let date = new Date()
today.innerHTML = date.toLocaleDateString()

const clock = document.querySelector('#clock')
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)