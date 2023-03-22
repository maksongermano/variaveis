let x = 10// segue abaixo as duas maneiras que aprendemos para somar
// x = x + 1;
// x += 1;
let y = ++x;// se o ++ aparece antes ou depois não interfere no valor atribuido a x, mas implica diretamente no que será retornado a y, uma vez que a ordem indica qual valor ira aparecer primeiro, se ele deve pegar o valor antes ou depois da soma.
console.log("x: ", x);
console.log("Y: ", y);
