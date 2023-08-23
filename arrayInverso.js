//1
let array1 = [1, 2, 3, 4];

function imprimirInverso(array) {
    for(i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

imprimirInverso(array1);


//2
let array2 = [5, 10, 15, 20, 25, 30];
let arrayInvertido = [];

function inversor(arr) { 
    for(let i = 0; i < arr.length; i++){
        arrayInvertido.unshift(arr[i]);
    }
    return console.log(arrayInvertido);
}

inversor(array2);



