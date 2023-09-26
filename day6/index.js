const boxes=document.querySelectorAll('.box');

window.addEventListener('scroll',scrolling);

function scrolling(){
     const triggerButton=window.innerHeight *(4/5);
       boxes.forEach(element => {
        const boxTop= element.getBoundingClientRect().top;
        if(triggerButton > boxTop){
            element.classList.add('show');
        }
        else{
            element.classList.remove('show');
        }
       });
}