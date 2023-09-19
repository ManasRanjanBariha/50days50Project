let line = document.querySelector(".line");
let btnDecrese = document.getElementById("btn-increse");
let btnIncrese = document.getElementById("btn-decrese");
// line.style.width = "100%";
let cirlces = document.getElementsByClassName('circle');

let len=0;

function next()
{
    len++;
    var newLen = len * 33 +"%";
    line.style.width=newLen;
    cirlces[len].classList.add('active');
    if(len > 0)
    {
        btnDecrese.disabled=false;
    }
    if(len >=3)
    {
        btnIncrese.disabled=true;
    }
}
function previous(){
    len--;
    var newLen = len * 33 +"%";
    line.style.width=newLen;
    cirlces[len+1].classList.remove('active');
    if(len ==0)
    {
        btnDecrese.disabled=true;
    }
    if(len <3)
    {
        btnIncrese.disabled=false;
    }
    
}