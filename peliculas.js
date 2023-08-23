//1
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];


//2
function convertirAMayusculas(pelis) {
    let arregloEnMayusculas = pelis.map(item => item.toUpperCase());
    return arregloEnMayusculas;
}

//console.log(convertirAMayusculas(peliculas));


//3
let peliculas2 = ["toy story", "finding nemo", "kung-fu-panda", "wally", "fortnite"];


//4
let juego = peliculas2.pop();

function combinarPelis(arr1, arr2) {
    let arraysCombinados = arr1.concat(arr2);
    let arraysCombinadosMayusc = arraysCombinados.map(item => item.toUpperCase());
    return  arraysCombinadosMayusc;
}

//console.log(combinarPelis(peliculas, peliculas2));


//5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparar(asia, euro) {
    for(let i = 0; i <= 8; i++){
        if(asia[i] === euro[i]) {
            console.log(`Calificacion ${i + 1} es igual`);
        } else {
            console.log(`Calificacion ${i + 1} es diferente`);
        }     
    }
}

comparar(asiaScores,euroScores);