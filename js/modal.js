// elemento boton que dispara el modal
const trigger=document.querySelector('[modalA]');
//traemos el id del modal (sacando el valor del atributo)
const idModal=trigger?.getAttribute('modalA');
//traemos el contenedor del modal
const modal=document.getElementById(idModal);
modal?.addEventListener('click',(e)=>{ //observar click fuera del modal
    if (e.target!==e.currentTarget) 
        return;
    conmutaModal(modal);
});
//escuchamos click en el boton que abre el modal
trigger?.addEventListener('click',()=>conmutaModal(modal));
//traemos los elementos que cierran el modal
const closers=document.querySelectorAll('[modalClose]');
closers?.forEach((c)=>{ //observar el cierre del modal
    c.addEventListener('click',()=>conmutaModal(modal));
});

//creamos sistema de fondo
const fondo=document.createElement('div');
fondo.setAttribute('modalFondo', true);
fondo.classList.add('fondoModal','hidden');
document.body.appendChild(fondo);

//observamos la tecla de esc
document.addEventListener('keydown',(e)=>{
    if (e.key==='Escape' && !modal.classList.contains('hidden'))
        conmutaModal(modal);
});

// funcion que invierte (conmuta)el estado del modal
function conmutaModal(mo){
    document.querySelector('[modalFondo]')?.classList.toggle('hidden');//conmuta el fondo
    mo.classList.toggle('hidden');//conmuta el modal
}

