let array = [-5, 100, 19];
let suma = 0;

function sumaArray(arr) {
    for(i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    console.log(suma);
}

sumaArray(array);