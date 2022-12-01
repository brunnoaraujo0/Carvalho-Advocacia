let margin = 0;
let marginAdvogado = 0;

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
