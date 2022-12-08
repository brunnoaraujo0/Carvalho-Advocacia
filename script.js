let margin = 0;
let marginAdvogado = 0;
let marginDepoimentos = 0;
let scrool = false;
document.querySelector('.material-symbols-outlined').addEventListener('click', ()=>{ 
    document.querySelector('.menu-hamburguer').style.opacity = 0; 
    document.querySelector('.menu-hamburguer').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.menu-hamburguer').style.opacity = 1; 
    }, 200);
});

document.querySelector('.menu-hamburguer .material-symbols-outlined').addEventListener('click', ()=>{

   
    document.querySelector('.menu-hamburguer').style.opacity = 1; 
    setTimeout(() => {
        
        document.querySelector('.menu-hamburguer').style.opacity = 0; 
        document.querySelector('.menu-hamburguer').style.display = 'none';
    }, 200);


});

document.querySelector('.servicos-seta-left .material-symbols-outlined').addEventListener('click', ()=>{
    
    if(window.innerWidth < 1400){
        margin = margin + 280;
    if(margin > 0 ){ 
        margin = 0;
    }
    
    document.querySelector('.servicos-list').style.marginLeft = margin + 'px';
    }else {
        margin = margin + 430;
        if(margin > 0 ){ 
            margin = 0;
        }
        
        document.querySelector('.servicos-list').style.marginLeft = margin + 'px';
    }
    
    

});
document.querySelector('.servicos-seta-right .material-symbols-outlined').addEventListener('click', ()=>{

    if(window.innerWidth < 1400){
        margin = margin - 280;
    if(margin < (-3870)){
        margin = (-3870);
    }
    
    if(window.innerWidth - 3870 > margin) {
        margin = (window.innerWidth - 4100);
    }
    document.querySelector('.servicos-list').style.marginLeft = margin + 'px';
    }else {
        margin = margin - 430;
        if(margin < (-3870)){
            margin = (-3870);
        }
        
        if(window.innerWidth - 3870 > margin) {
            margin = (window.innerWidth - 4100);
        }
        document.querySelector('.servicos-list').style.marginLeft = margin + 'px';
    }
    
});


document.querySelector('.advogado-seta-left .material-symbols-outlined').addEventListener('click', () => {

    marginAdvogado = marginAdvogado + 80;
    if(marginAdvogado > 0){
        marginAdvogado = 0;
    }

    document.querySelector('.advogado-list').style.marginLeft = marginAdvogado + 'vw';
});

document.querySelector('.advogado-seta-right  .material-symbols-outlined').addEventListener('click', () => {
    marginAdvogado = marginAdvogado - 80;
    if(marginAdvogado < (-240)){
        marginAdvogado = (-240);
    }
    document.querySelector('.advogado-list').style.marginLeft = marginAdvogado + 'vw';
});







document.querySelector('.advogado-seta-left-responsivo .material-symbols-outlined').addEventListener('click', () => {

    marginAdvogado = marginAdvogado + 100;
    if(marginAdvogado > 0){
        marginAdvogado = 0;
    }

    document.querySelector('.advogado-list').style.marginLeft = marginAdvogado + 'vw';
});

document.querySelector('.advogado-seta-right-responsivo  .material-symbols-outlined').addEventListener('click', () => {
    marginAdvogado = marginAdvogado - 100;
    if(marginAdvogado < (-300)){
        marginAdvogado = (-300);
    }
    document.querySelector('.advogado-list').style.marginLeft = marginAdvogado + 'vw';
});




document.querySelector('.depoimentos-seta-left .material-symbols-outlined').addEventListener('click', () => {

    marginDepoimentos = marginDepoimentos+ 80;
    if(marginDepoimentos > 0){
        marginDepoimentos = 0;
    }

    document.querySelector('.depoimentos-list').style.marginLeft = marginDepoimentos + 'vw';
});

document.querySelector('.depoimentos-seta-right  .material-symbols-outlined').addEventListener('click', () => {
    marginDepoimentos = marginDepoimentos - 80;
    if(marginDepoimentos < (-80)){
        marginDepoimentos = (-80);
    }
    document.querySelector('.depoimentos-list').style.marginLeft = marginDepoimentos + 'vw';
});


window.addEventListener('scroll', () => {

    monitorar();


})


function monitorar(){
    if(window.innerWidth > 1100){
        if(window.scrollY > 100){
            document.querySelector('header').style.position = 'fixed';
            document.querySelector('header').style.left =  0;
            document.querySelector('header').style.top =  0;
            document.querySelector('header').style.right =  0;
            document.querySelector('header').style.zIndex =  100;
            
        }else {
            document.querySelector('header').style.position = 'relative';
           
        }
    }
    
};

window.sr = ScrollReveal({reset: true});

ScrollReveal().reveal('.informacoes-caixa', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})
ScrollReveal().reveal('.quem-somos-brasao', {
    delay: 400,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})
ScrollReveal().reveal('.quem-somos-textos', {
    delay: 400,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})
ScrollReveal().reveal('.inicio-img', {
    delay: 400,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})
ScrollReveal().reveal('.inicio-textos h1', {
    delay: 400,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})
ScrollReveal().reveal('.inicio-textos a', {
    delay: 400,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})