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


})
