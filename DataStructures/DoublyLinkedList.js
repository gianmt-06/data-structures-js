const LinkedList = require("./LinkedList");

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    /**
     * Añade un nuevo nodo a la lista
     * @param {*} value - Valor del nodo
     * @returns {boolean} - Resultado
     */
    add(value) {
        if (value != null) {
            const newNode = new Node(value);
            if (this.head == null) {
                this.head = newNode;
                this.tail = newNode;

            } else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this._size++;
            return true;
        }
        return false;
    }

    /**
     * Agrega un nodo al inicio de la lista 
     * @param {*} value - Valor del nodo
     * @returns {boolean} - Resultado
     */
    addFirst(value) {
        if (value != null) {
            const newNode = new Node(value);
            if (this.isEmpty()) {
                return this.add(value);
            } else {
                let tempNode = this.head;
                this.head = newNode;
                tempNode.prev = this.head;
                this.head.next = tempNode;
            }
            this._size++;
            return true;
        }
        return false;
    }

    /**
    * Agrega un nodo después de otro nodo con el valor especificado
    * @param {*} nodeValue - Valor del nodo a buscar 
    * @param {*} value - Valor del nodo a agregar 
    * @returns {boolean} - Resultado
    */
    addNext(nodeValue, value) {
        if (value != null) {
            if (this.isEmpty()) {
                return this.add(value);
            } else {
                const newNode = new Node(value);
                let thisNode = this.get(nodeValue);
                let tempNode = thisNode.next;
                newNode.prev = thisNode;
                thisNode.next.prev = thisNode.next = newNode;
                thisNode.next.next = tempNode;
                this._size++;
                return true;
            }
        }
        return false;
    }

    /**
    * Agrega un nodo después de otro nodo con el valor especificado
    * @param {*} nodeValue - Valor del nodo a buscar 
    * @param {*} value - Valor del nodo a agregar 
    * @returns {boolean} - Resultado
    */
    addPrev(nodeValue, value) {
        if (value != null) {
            if (this.isEmpty()) {
                return this.add(value);
            } else {
                const newNode = new Node(value);
                let thisNode = this.get(nodeValue);
                let tempNode = thisNode.prev;
                thisNode.prev.next = thisNode.prev = newNode;
                newNode.prev = tempNode;
                newNode.next = thisNode;
                this._size++;
                return true;
            }
        }
        return false;
    }

    /**
     * Elimina un nodo de la lista
     * @param {*} value - Valor del nodo a eliminar
     * @returns {boolean} - Resultado
     */
    delete(value) {
        if (value != null && !this.isEmpty()) {
            if (this.head.value == value) {
                this.head = this.head.next;
                this._size--;
                return true;
            }

            if (this.tail.value == value) {
                this.pop();
            }

            let currentNode = this.get(value);
            if (currentNode != null) {
                currentNode.next.prev = currentNode.prev;
                currentNode.prev.next = currentNode.next;
                this._size--;
                return true;
            }
            return false;
        }
    }

    /** 
     * Obtiene un nodo de la lista
     * @param {*} value - Valor del nodo a buscar
     * @returns {Node} - Nodo encontrado
     */
    get(value) {
        if (value != null && !this.isEmpty()) {
            for (const currentNode of this) {
                if (currentNode.value == value) {
                    return currentNode;
                }
            }
            return null;
        }
    }
    
    /**
     * Retorna si la lista contiene el elemento especificado
     * @param {*} value - Valor a buscar
     * @returns {boolean}
     */
    contains(value){
        return this.get(value) != null;
    }

    /**
     * Retorna el nodo previo al nodo con el valor indicado
     * @param {*} value - Valor del nodo siguiente al nodo a obtener
     * @returns {}
     */
    getPrev(value) {
        if (this.head.value != value && !this.isEmpty()) {
            return this.get(value).prev;
        }
        return null;
    }

    /**
     * Retorna el nodo de la posición siguiente al valor del nodo especificado
     * @param {*} value - Nodo a buscar
     * @returns 
     */
    getNext(value) {
        if (value != null && !this.isEmpty()) {
            return this.get(value).next;
        }
        return null;
    }

    /**
     * Retorna si la lista está vacía
     * @returns {boolean} - Resultado
     */
    isEmpty() {
        return this.head == null;
    }

    /**
    * Elimina todos los elementos de la lista
    */
    clear() {
        this.head = this.tail = null;
        this._size = 0;
    }

    /**
     * Retorna y elimina el último nodo de la lista
     * @returns {Node} tail
     */
    pop() {
        if (!this.isEmpty()) {
            let nodeToPop = null;

            if (this.head.next == null) { //Un solo elemento
                nodeToPop = this.head;
                this.head = null;
                this._size--;
                return nodeToPop;

            } else {
                nodeToPop = this.tail;
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
                this._size--;
                return nodeToPop;
            }
        }
        return null
    }

    /**
     * Retorna una instacia nueva de la lista.
     * @returns {DoublyLinkedList} - Nueva instancia de la lista
     */
    clone() {
        if (!this.isEmpty()) {
            const newReference = new DoublyLinkedList();

            for (const currentNode of this) {
                newReference.add(currentNode.value);
            }
            return newReference;
        }
        return null;
    }

    /**
     * Retorna un array con todos los elementos de la lista
     * @returns {Array} - Array de elementos de la lista
     */
    toArray(){
        const linkedArray = [];
        if (!this.isEmpty()) {
            for (const currentNode of this) {
                linkedArray.push(currentNode);
            }
            return linkedArray;
        }
        return null;
    }

    /**
     * Retorna un String con la lista completa
     * @returns {String} - Lista completa
     */
    print() {
        let string = "";
        let i = 0;
        for (const currentNode of this) {
            if (i > 0) {
                string = string + ", " + currentNode.value;
            } else {
                string = currentNode.value;
                i++;
            }
        }
        return "[ " + string + " ]"
    }

    /**
    * Retorna un String con la lista completa
    * @returns {String} - Lista completa
    */
    reversePrint() {
        let string = "";
        let currentNode = this.tail;
        let i = 0;
        
        while (currentNode != null) {
            if (i > 0) {
                string = string + ", " + currentNode.value;
            } else {
                string = currentNode.value;
            }
            currentNode = currentNode.prev;
            i++;
        }
        return "[ " + string + " ]"
    }

    /**
     * Iterator - Itera por todos los elementos de la lista enlazada
     * @returns {*} node - nodo actual de la secuencia
     */
    [Symbol.iterator]() {
        let currentNode = this.head;
        return {
            next: () => {
                if (currentNode !== null) {
                    const thisNode = currentNode;
                    currentNode = currentNode.next;
                    return { value: thisNode, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

// Exportar la clase LinkedList
module.exports = DoublyLinkedList;

