//Act0
var Asignatura = {
    ref: 'BBDD',
    nom: 'Bases de Dades',
    hores: 180,
    UF: ['UF1', 'UF2', 'UF3', 'UF4'],
    professor: 'Pep Parés',
    alumnes: ['alu1', 'alu2', 'alu13', 'alu4', 'alu5']
};
enuncia = "Parte";
//Act1
console.log(enuncia + 1)
console.log(Asignatura);
var lista = Object.keys(Asignatura);
for (let count = 0; count < lista.length; count++) {
    const element = lista[count];
    console.log(element);
}

//Act2
console.log(enuncia + 2)
    //Problema al momento de mostrar, se muestra con el valor borrado en los dos
console.log(Asignatura)
delete Asignatura.alumnes;
console.log(Asignatura)

//Act3
console.log(enuncia + 3)
    //Con este sale 5 porque se ha borrado un elemento
var longitud1 = Object.keys(Asignatura).length;
console.log(longitud1);

//Act4
console.log(enuncia + 4)
var library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

for (let index = 0; index < library.length; index++) {
    const autor = library[index].author;
    const titulo = library[index].title;
    console.log(autor + " : " + titulo)
}
//Act 5
console.log(enuncia + 5)
    //Alhora de fer la funció hi ha un usgeriment per convertir-ho a una classe, no hi ha problema ni varació 
function Volum(radi, haltura) {
    this.radi = radi;
    this.haltura = haltura;
    this.volum = Math.PI * radi ** 2 * haltura;
}

var cilindre = new Volum(4, 5);
console.log(cilindre.volum.toFixed(4));

//Act6
console.log(enuncia + 6)
class Cercle {
    constructor(radi) {
        this.radi = radi;
        this.color_contorn = this.color_contorn;
        this.color_fons = this.color_fons;
        this.gruix_contorn = this.gruix_contorn;

    }
    Perimetro = radi => Math.PI * radi ** 2;
    Area = radi => Math.PI * radi ** 2;


}
var C1 = new Cercle(2, "blue", "red", "red");
var C2 = new Cercle(3, "green", "blua", "green");

console.log(C1);
console.log(C2);


//8. Metodes a Matrix
console.log(enuncia + 8);
var propietat = Object.keys(library);
var valors = Object.values(library);
var matrixbinaria = [];
for (i in propietat) {
    var lista = []
    lista.push(propietat);
    lista.push(valors);
    matrixbinaria.push(lista);
}
console.log(matrixbinaria);

//Act9
console.log(enuncia + 9)
var newObject = {};
for (let index = 0; index < library.length; index++) {
    newObject[valors] = propietat[index];
}
console.log(newObject)

//Act10
console.log(enuncia + 10);
valorCorrecto = "nom"
valorIncorrecto = "Bases de Dades"
if (Asignatura.hasOwnProperty(valorCorrecto))
    console.log("El objeto tiene la propiedad " + "'" + valorCorrecto + "'")
else
    console.log("El objeto no tiene la propiedad " + "'" + valorCorrecto + "'")

if (Asignatura.hasOwnProperty(valorIncorrecto))
    console.log("La propiedad " + " '" + valorIncorrecto + "'" + "esta dentro del objeto indicado")
else
    console.log("La propiedad " + "'" + valorIncorrecto + "'" + " no esta dentro del objeto indicado")