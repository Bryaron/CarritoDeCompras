const carrito = document.querySelector("#carrito")
const contenedorCarrito = document.querySelector("#carrito tbody")
const contenedorCarritoDesayuno = document.querySelector("#carrito #carrito-desayuno tbody")
const contenedorCarritoAlmuerzo = document.querySelector("#carrito #carrito-almuerzo tbody")
const contenedorCarritoCena = document.querySelector("#carrito #carrito-cena tbody")

const cabeceraCarritoDesayuno = document.querySelector("#carrito #carrito-desayuno thead")
const cabeceraCarritoAlmuerzo = document.querySelector("#carrito #carrito-almuerzo thead")
const cabeceraCarritoCena = document.querySelector("#carrito #carrito-cena thead")

const articulos = document.querySelector("#articulos")

let articulosCarrito = []

cargarEventListeners()

function cargarEventListeners() {

    articulos.addEventListener("click",agregarTicket)

    carrito.addEventListener("click", eliminarTicket)
    
}

function eliminarTicket(ticket){

    ticket.preventDefault()

    if(ticket.target.classList.contains('borrar-ticket')){
        
        const ticketAEliminar = ticket.target.parentElement.parentElement.parentElement.parentElement;

        const datosTicketHead = ticketAEliminar.querySelector('thead')
        const datosTicketBody = ticketAEliminar.querySelector('tbody')

        while(datosTicketHead.firstChild) {
            datosTicketHead.removeChild(datosTicketHead.firstChild);
        }

        while(datosTicketBody.firstChild) {
            datosTicketBody.removeChild(datosTicketBody.firstChild);
        }

    }
}


function agregarTicket(e){

    e.preventDefault()

    if(e.target.classList.contains("agregar-carrito")){

        const ticket = e.target.parentElement.parentElement.parentElement
        //console.log(ticket);

        leerDatosTicket(ticket);
    }
}

function leerDatosTicket(ticket) {
    
    const infoTicket = {
        titulo: ticket.querySelector(".card-title").innerText,
        nombre: ticket.querySelector(".card-info").innerText,
        imagen: ticket.querySelector(".img").src,
        precio: 5,
        cantidad:1,
        id: ticket.querySelector("a").getAttribute('data-id')
    }

    //console.log(infoTicket);

    existe = articulosCarrito.some(ticket => ticket.id == infoTicket.id)

    if (existe){

        const tickets = articulosCarrito.map(ticket =>{
            if(ticket.id == infoTicket.id){
                ticket.cantidad++;
                return ticket;
            }
            else{
                return ticket;
            }
            
        } );

        //console.log(tickets);

        articulosCarrito = [...tickets];
        
    }

    else{
        articulosCarrito = [...articulosCarrito , infoTicket];
    }

    //console.log(articulosCarrito);

    cargarHTMLCarrito(infoTicket)
}

function cargarHTMLCarrito(infoTicket) {

     

    const thead = document.createElement('tr')
    thead.innerHTML = `
    <th scope="col">Imagen</th>
    <th scope="col">Nombre</th>
    <th scope="col">Precio</th>
    <th scope="col"></th>
    `

    if (infoTicket.id == "1") {

        if (cabeceraCarritoDesayuno.firstChild) {
        cabeceraCarritoDesayuno.removeChild(cabeceraCarritoDesayuno.firstChild)
        cabeceraCarritoDesayuno.appendChild(thead)
        }
        else {
        cabeceraCarritoDesayuno.appendChild(thead)
        }

        while(contenedorCarritoDesayuno.firstChild){
            contenedorCarritoDesayuno.removeChild(contenedorCarritoDesayuno.firstChild);
        }

        //console.log("Es desayuno");

        desayuno = articulosCarrito.filter(ticket => ticket.id == 1)
        
        desayuno.forEach(ticket => {

            const row = document.createElement('tr')
            row.innerHTML =  `
            <th scope="row"><img src="${ticket.imagen}" width=100></th>
            <td>${ticket.nombre}</td>
            <td><span>S/</span>${ticket.precio}</td>
            <td>
                <a href="#" class="borrar-ticket" data-id="${ticket.id}">X</a>
            </td>
            `
    
            contenedorCarritoDesayuno.appendChild(row);
        });
        
    } else  {
        if (infoTicket.id == "2") {

            if (cabeceraCarritoAlmuerzo.firstChild) {
                cabeceraCarritoAlmuerzo.removeChild(cabeceraCarritoAlmuerzo.firstChild)
                cabeceraCarritoAlmuerzo.appendChild(thead)
            } else {
                cabeceraCarritoAlmuerzo.appendChild(thead)
            }

            while(contenedorCarritoAlmuerzo.firstChild){
                contenedorCarritoAlmuerzo.removeChild(contenedorCarritoAlmuerzo.firstChild);
            }

            //console.log("Es almuerzo");

            almuerzo = articulosCarrito.filter(ticket => ticket.id == 2)

            almuerzo.forEach(ticket => {

                const row = document.createElement('tr')
                row.innerHTML =  `
                <td><img src="${ticket.imagen}" width=100></td>
                <td>${ticket.nombre}</td>
                <td><span>S/</span>${ticket.precio}</td>
                <td>
                    <a href="#" class="borrar-ticket" data-id="${ticket.id}">X</a>
                </td>
                `
        
                contenedorCarritoAlmuerzo.appendChild(row);
            });
        } else {
            //console.log("Es cena");

            if (cabeceraCarritoCena.firstChild) {
                cabeceraCarritoCena.removeChild(cabeceraCarritoCena.firstChild)
                cabeceraCarritoCena.appendChild(thead)
            } else {
                cabeceraCarritoCena.appendChild(thead)
            }

            while(contenedorCarritoCena.firstChild){
                contenedorCarritoCena.removeChild(contenedorCarritoCena.firstChild);
            }

            cena = articulosCarrito.filter(ticket => ticket.id == 3)

            cena.forEach(ticket => {

                const row = document.createElement('tr')
                row.innerHTML =  `
                <td><img src="${ticket.imagen}" width=100></td>
                <td>${ticket.nombre}</td>
                <td><span>S/</span>${ticket.precio}</td>
                <td>
                    <a href="#" class="borrar-ticket" data-id="${ticket.id}">X</a>
                </td>
                `
        
                contenedorCarritoCena.appendChild(row);
            });
        }    
    }
    
}