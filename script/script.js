//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {
    const btnMostrar = document.getElementById('mostrarPaises');
    btnMostrar.addEventListener("click", mostrarPaises); 

    const btnAgregar = document.getElementById('agregarPais');
    btnAgregar.addEventListener("click", agregarPais);
}


//funcion que mostrara las paises en la pagina
 

function mostrarPaises() {
      
        let stringTabla = "";
    
        for (pais of paises) {
        stringTabla +=
        `<div class="col-12 col-lg-12">
            <table class="table table-sm table-striped bg-gradient-warning">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Capital</th>
                        <th>Idioma</th>
                        <th>Moneda</th>
                    </tr>
                    <tr>
                        <td>${pais.nombre}</td>
                        <td>${pais.capital}</td>
                        <td>${pais.idioma_oficial}</td>
                        <td>${pais.moneda}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4" class="text-center">
                        <img src="${pais.bandera}" alt="Bandera de ${pais.nombre}">
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>`;
    
        document.getElementById("paises").innerHTML = stringTabla;
        }
    } 

//funcion que permite agregar un pais al arreglo

function agregarPais() {
    let nombre = prompt("Ingrese el nombre del país:");
    let capital = prompt("Ingrese la capital del país:");
    let idioma = prompt("Ingrese el idioma del país:");
    let moneda = prompt("Ingrese la moneda del país:");
    let bandera = prompt("Ingrese la bandera del país:");

    let pais = {
        nombre: nombre,
        bandera: bandera,
        capital: capital,
        idioma_oficial: idioma,
        moneda: moneda
    }

    if((pais.nombre != "" && pais.nombre != null) && 
    (pais.capital != null && pais.capital !="") && 
    (pais.bandera != null && pais.bandera !="") && 
    (pais.idioma_oficial != null && pais.idioma_oficial !="") && 
    (pais.moneda != null && pais.moneda !=""))
    paises.unshift(pais);
    mostrarPaises()
 
}

