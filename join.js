let array = ["h", "o", "l", "a"];

function join(arr) {
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        string += array[i];  
    }
    console.log(string);
}

join(array);