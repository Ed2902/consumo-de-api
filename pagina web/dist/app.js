'use stric'
//efecto buscador//

const buscando = document.getElementById('buscando');
const inputBuscar = document.getElementById ('input_buscar');
const listado = document.getElementById ('listPrice');
const fragment = new DocumentFragment();
const tem = document.getElementById('template').content;


buscando.addEventListener('click',()=>{
    if (inputBuscar.classList.contains('buscarOculto')) {
        inputBuscar.classList.remove('buscarOculto');
        inputBuscar.classList.add('buscarVisible');
    }else if(inputBuscar.classList.contains('buscarVisible')){
        inputBuscar.classList.remove('buscarVisible');
        inputBuscar.classList.add('buscarOculto');

        //dar o quitar un estilo classList.add - remove//
    }
});
//consumo con fetch api//

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(Response => Response.json())
    .then(data =>console.log(data))
    .finally(console.log("hemos finalizado con la peticion"))
    .catch(error=> console.error("se ha presentaado un error"+ error));

//cosumo de api con axios y utlizacion de asyn awasc//

async function obtenerLista(){
    const resp = await axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response)=>{
        const resultados = response.data.results;
        console.log(resultados); 
        let poke = [];
        for (const i in resultados){
            poke.push(resultados[i]);
        }
        return poke;
    })
    .catch((error)=>{
        console.log("se ha generado un error de la peticion"+error);
        return 0;
    });

return resp;
}

const data = await obtenerLista();

const testTemplate ="content" in document.createElement("template");
if(testTemplate){
    data.forEach(element => {
            tem.querySelector("#code").innerHTML = `Codigo ${element.name}`;
            tem.querySelector("#detail").innerHTML = `Detalle ${element.url}`;
            const myElement = tem.cloneNode(true);
            fragment.appendChild(myElement);
    });
}
listado.appendChild(fragment);
