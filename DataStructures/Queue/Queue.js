const DoublyLinkedList = require('../DoublyLinkedList');

class Queue {
    constructor() {
        this.list = new DoublyLinkedList();
        this._size = 0;
    }

    /**
     * Inserta un valor a la cola
     * @param {*} value - Valor a insertar en la pila
     * @returns {boolean} - Resultado
     */
    insert(value) {
        if (value != null) {
            this._size++;
            return this.list.addFirst(value);
        }
    }

    /**
     * Retorna y elimina el objeto al inicio de la cola
     * @returns {Node} 
     */
    extract() {
        if (!this.isEmpty()) {
            return this.list.pop();
        }
        return null;
    }

    search(value){
        return this.list.contains(value);
    }

    /**
     * Invierte el orden de la cola;
     * @returns {boolean}
     */
    reverse(){
        if(!this.isEmpty()){
            const tempList = new DoublyLinkedList();

            while(!this.isEmpty()){ //Mientras no esté vacía
                tempList.add(this.extract().value);
            }

            while(!tempList.isEmpty()){
                this.insert(tempList.pop().value);
            }
            return true;
        }
        return false;
    }

    /**
     * Retorna una instacia nueva de la cola.
     * @returns {Stack} - Nueva instancia de la cola
     */
    clone(){
        if(!this.isEmpty()){
            let tempList = new DoublyLinkedList();
            let popValue = null;
            let newQueue = new Queue();

            while(!this.isEmpty()){ //Mientras no esté vacía
                tempList.addFirst(this.extract().value);
            }

            while(!tempList.isEmpty()){
                popValue = tempList.pop().value;
                this.insert(popValue);
                newQueue.insert(popValue);
            }
            return newQueue;
        }
        return new Queue();
    }


    /**
     * Elimina todos los elementos de la pila
     * @returns {boolean}
     */
    clear() {
        this.list.clear();
        return true;
    }

    /**
     * Retorna si la cola está vacía
     * @returns {boolean}
     */
    isEmpty() {
        return this.list.head == null;
    }

    /**
     * Retorna un String con el contenido de la cola
     * @returns {String}
     */
    print() {
        return this.list.print();
    }

}