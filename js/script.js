let lk = document.querySelector ('.lk1');
let reg = document.querySelector ('.lk2');
let hidn =document.querySelector ('.hidn');
let hidn2 = document.querySelector('.hidn2')
let closebtn = document.querySelector('closebtn');


lk.addEventListener('click', function()
{
    hidn.classList.add('lk__form');
});

reg.addEventListener('click', function()
{
    hidn2.classList.add('lk__form2');
});


closebtn.addEventListener('click', function()
{
    hidn.classList.remove('lk__form');
    hidn2.classList.add('lk__form2');
});

