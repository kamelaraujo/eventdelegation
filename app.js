const btnBotones = document.querySelector('.btnBotones');
const botones = document.querySelector('.botones');
const bgcolor = document.querySelector('#bgcolor');

if (localStorage.getItem('bgcolorClassName')===null) {
    bgcolor.className = 'bg-dark';
} else {
    bgcolor.className=localStorage.getItem('bgcolorClassName');    
}


(()=>{
    btnBotones.addEventListener('click', agregarBotones);
    botones.addEventListener('click', delegation);
})();

function agregarBotones(e) {
    e.preventDefault();
    botones.innerHTML=`<button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">warning</button>
    <button class="btn btn-danger">Danger</button>`;
}

function delegation(e) {
    e.preventDefault();
    color = e.target.classList[1];
    switch (color) {
        case 'btn-primary':
            bgcolor.className='bg-primary';
            break;        
        case 'btn-secondary':
            bgcolor.className='bg-secondary';
            break;
        case 'btn-success':
            bgcolor.className='bg-success';
            break;
        case 'btn-warning':
            bgcolor.className='bg-warning';
            break;
        case 'btn-danger':
            bgcolor.className='bg-danger';
            break;            
    }

    localStorage.setItem('bgcolorClassName', bgcolor.className);    
}

//LAS SIGUIENTES LINEAS NO SON PARTE DEL PROGRAMA, 
//SOLO SON PARA MOSTRAR COMO GRABAR UN OBJETO EN EL LOCALSTORAGE,
//YA QUE EL LOCALSTORAGE SÓLO ADMITE STRINGS

const persona = {
    nombre: "Jorge",
    edad: 60,
    sexo: "indefinido",
    correo: "jorge@comehombres.com",
    coordenadas: {
        lat: 0800,
        lng: -0800,
    }
};

localStorage.setItem('datosPersona', JSON.stringify(persona));
let obteniendPersona = JSON.parse(localStorage.getItem('datosPersona'));
console.log(obteniendPersona);