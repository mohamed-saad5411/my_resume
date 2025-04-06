var deutschFlag = document.querySelector('.deutsch-flag')
var britshFlag = document.querySelector('.britsh-flag')

deutschFlag.addEventListener('click' , function () {
    britshFlag.classList.replace('d-none', 'd-flex')
    deutschFlag.classList.add('d-none')
    console.log('111111111111');
    
})

britshFlag.addEventListener('click' , function () {
    deutschFlag.classList.replace('d-none','d-flex')
    britshFlag.classList.replace('d-flex','d-none')
})