const navLinks =document.querySelectorAll('header nav a')
const logoLink =document.querySelector('.logo')
const sections =document.querySelector('section')
const menuIcon =document.querySelector('#menu-icon')
const navbar =document.querySelector('header nav')

menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active')
})
const activePage =() =>{
    const header=document.querySelector('header');
    const barsBox=document.querySelector('.bars-box');

    header.classList.remove('active')
    setTimeout(()=>{
        header.classList.add('active');

},1100);
    navLinks.forEach(link =>{
        link.classList.remove('active');
    });
    barsBox.classList.remove('active')
    setTimeout(()=>{
        barsBox.classList.add('active');

},1100);
sections.forEach(section =>{
    section.classList.remove('active');
});

menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active')

}

navLinks.forEach((link,idx)=>{
   addEventListener('click',()=>{
    if (!link.classList.contains('active')){
        activePage();

        link.classList.add('active');
        setTimeout(()=>{
            sections[idx].classList.add('active');
        },1100);
    }
   });
});

logoLink.addEventListener('click',()=>{
    if(!navLinks[0].classList.contains('active')){
      activePage();
      navLinks[0].classList.add('active');

      setTimeout(()=>{
        sections[0].classList.add('active');
    },1100);
    }
})
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn,idx)=>{
  btn.addEventListener('click',() =>{
    const resumeDetails =document.querySelectorAll('.resume-detail')

    resumeBtns.forEach(btn =>{
        btn.classList.remove('active');
    });
    btn.classList.add('active');

    resumeDetails.forEach(detail =>{
        detail.classList.remove('active');
    });
    resumeDetails[idx].classList.add('active');
  });
});





// project

// const arrowRight= document.querySelector('.project-box .navigation .arrpw-right');
// const arrowLeft= document.querySelector('.project-box .navigation .arrpw-left');
// let index = 0;
// const activeProject =()=>{
//     const imgSlide =document.querySelector('.project-crousel .img-slide')
//     imgSlide.computedStyleMap.transform = `translateX(calc(${index * -100}% - ${index *2}rem))`


// }
// arrowRight.addEventListener('click',()=>{
//     if(index<4){
//         index++;

//     }else{
//         index=5;
//     }
//     activeProject();
// });
// arrowLeft.addEventListener('click',()=>{
//     if(index>1){
//         index--;

//     }else{
//         index=0;
//     }
//     activeProject();
// });