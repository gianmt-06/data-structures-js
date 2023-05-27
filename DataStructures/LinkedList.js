class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
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
            if (this.isEmpty()) {
                this.head = newNode;
                this.tail = newNode;

            } else {
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
                let currentNode = this.head;
                let tempNode = null;

                while (currentNode != null) {
                    if (currentNode.value == nodeValue) { //Encontrar el nodo
                        tempNode = currentNode.next;
                        currentNode.next = newNode;
                        currentNode.next.next = tempNode;
                        this._size++;
                        return true;
                    }
                    currentNode = currentNode.next;
                }
            }

        }
        return false;
    }

    /**
     * Agrega un nodo después de otro nodo con el valor especificado
     * @param {*} nodeValue - Valor del nodo a buscar 
     * @param {*} value - Valor del nodo a agregar 
     * @returns 
     */
    addPrev(nodeValue, value) {
        if (value != null) {
            if (this.isEmpty()) {
                return this.add(value);
            } else {
                const newNode = new Node(value);
                let prevNode = this.head;
                let currentNode = prevNode.next;
                let tempNode = null;

                while (currentNode != null) {
                    if (currentNode.value == nodeValue) {
                        tempNode = prevNode.next;
                        prevNode.next = newNode;
                        prevNode.next.next = tempNode;
                        this._size++;
                        return true;
                    }
                    prevNode = currentNode;
                    currentNode = currentNode.next;
                }
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

            if(this.tail.value == value){
                this.pop();
            }

            let prevNode = this.head;
            let currentNode = prevNode.next;

            while (currentNode != null) {
                if (currentNode.value == value) {
                    prevNode.next = currentNode.next;
                    this._size--;
                    return true;
                }
                prevNode = currentNode;
                currentNode = currentNode.next;
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
     * Retorna el nodo previo al nodo con el valor indicado
     * @param {*} value - Valor del nodo siguiente al nodo a obtener
     * @returns {}
     */
    getPrev(value) {
        if (this.head.value != value && !this.isEmpty()) {
            let prevNode = this.head;
            let currentNode = prevNode.next;

            while (currentNode != null) {
                if (currentNode.value == value) {
                    return prevNode;
                }
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
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
            for (const currentNode of this) {
                if (currentNode.value == value) {
                    return currentNode.next;
                }
            }
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
    pop() { //No uso getPrev para evitar que se elimine un nodo con un objeto similar a la cola
        if(!this.isEmpty()){
            let nodeToPop = null;

            if(this.head.next == null){ //Un solo elemento
                nodeToPop = this.head;
                this.head = null;
                this._size--;
                return nodeToPop;
            }

            let prevNode = this.head;
            let currentNode = prevNode.next;

            while (currentNode != null) {
                if(currentNode.next == null){
                    nodeToPop = this.tail;
                    this.tail = prevNode;
                    this.tail.next = null;
                    this._size--;
                    return nodeToPop;
                }
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        return null
    }

    /**
     * Retorna una instacia nueva de la lista.
     * @returns {LinkedList} - Nueva instancia de la lista
     */
    clone() {
        if (!this.isEmpty()) {
            const newReference = new LinkedList();

            for (const currentNode of this) {
                newReference.add(currentNode.value);
            }
            return newReference;
        }
        return null;
    }

    /**
     * Retorna si la lista enlazada contiene el nodo con el valor indicado
     * @param {*} value - Valor del nodo
     * @returns {boolean} - Resultado
     */
    contains(value) {
        if (value != null && !this.isEmpty()) {
            for (const currentNode of this) {
                if (currentNode.value == value) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Retorna un String con la lista completa
     * @returns {String} - Lista completa
     */
    print() {
        let string = "";
        let currentNode = this.head;
        let i = 0;
        while (currentNode != null) {
            if (i > 0) {
                string = string + ", " + currentNode.value;
            } else {
                string = currentNode.value;
            }
            currentNode = currentNode.next;
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

    //--------------------------------- Getters and Setters
    get size() {
        return this._size;
    }

    set size(newSize) {
        this._size = newSize;
    }
}

// Exportar la clase LinkedList
module.exports = LinkedList;