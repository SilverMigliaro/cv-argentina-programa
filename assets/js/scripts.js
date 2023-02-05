let menuVisible = false;

document.addEventListener('DOMContentLoaded', ()=>{
    
    const menu = document.querySelector("#nav-responsive");
    const itemsMenu = document.querySelectorAll(".menu-lista-item");

    let lineaProgreso = document.querySelectorAll(".linea-progreso"),
      valorProgreso = document.querySelectorAll(".valor-progreso");
    
    menu.addEventListener('click', mostrarOcultarMenu);
    
    for(let i = 0; i < itemsMenu.length;i++){
        itemsMenu[i].addEventListener('click',seleccionar);
    }

    for (let i = 0; i < lineaProgreso.length; i++) {
      progress_function(valorProgreso[i]);
    }
});

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav-menu").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav-menu").classList ="nav-menu-responsive";
        menuVisible = true;
    }
}

//Oculto el menu una vez que selecciono una opcion
function seleccionar(){ 
    document.getElementById("nav-menu").classList = "";
    menuVisible = false;
}

//Colorea el progreso en un tiempo determinado
function progress_function(pv) {
    let progress_star_value = 0,
      speed = 40;
  
    let progress_end_value = parseInt(pv.textContent);
  
    let progress = setInterval(() => {
      progress_star_value++;
      pv.textContent = `${progress_star_value}%`;
      pv.style.width = progress_star_value + "%";
  
      if (progress_star_value === progress_end_value) {
        clearInterval(progress);
      }
    }, speed);
  }

 