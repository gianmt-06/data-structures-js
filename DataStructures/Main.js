/*
//LinkedList
const LinkedList = require('./LinkedList');

listaX = new LinkedList();

listaX.add("Hola");
listaX.add("Adiós");
listaX.add("HastaPronto");
listaX.add("Chao");
listaX.addFirst("Primero");
console.log(listaX.print());

console.log(listaX.isEmpty() + ", " + listaX.size);
*/

/*
//DoublyLinkedList
const DoublyLinkedList = require('./DoublyLinkedList');
listaX = new DoublyLinkedList();
listaX.add("Hola");
listaX.add("Adiós");
listaX.add("HastaPronto");
listaX.add("Chao");

listaRef = listaX;
listaClone = listaX.clone();

listaRef.pop();
listaClone.addFirst("Prueba");

console.log("Lista X: " + listaX.print());
console.log("ListaRef: " + listaRef.print());
console.log("ListaClone: " + listaClone.print());
*/

const map = new Map(String, Int)