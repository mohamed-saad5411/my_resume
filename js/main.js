var deutschFlag = document.querySelector('.deutsch-flag')
var britshFlag = document.querySelector('.britsh-flag')

deutschFlag.addEventListener('click' , function () {
    britshFlag.classList.replace('d-none', 'd-flex')
    deutschFlag.classList.add('d-none')
    
})

britshFlag.addEventListener('click' , function () {
    deutschFlag.classList.replace('d-none','d-flex')
    britshFlag.classList.replace('d-flex','d-none')
})


let offsetTop = $('#about').offset().top
$(window).scroll(function () {
    let scrollWindow = $(window).scrollTop()
    if (scrollWindow > offsetTop-110) {
        $('.navbar').css('backgroundColor','rgba(0,0,0,0.9)')
    }else{
        $('.navbar').css('backgroundColor','transparent')
        
    }
    
})

$('a[href^="#"]').click(function (info) {
    let hRef = info.target.getAttribute('href') 
    let offsetTopNav = $(hRef).offset().top
    $('body').animate({scrollTop:offsetTopNav} , 2000)
    console.log(hRef,offsetTopNav);
    
});



