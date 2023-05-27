class ArrayStack {
    constructor() {
        this.array = [];
        this._size = 0;
    }

    /**
   * Inserta un valor (por cola)
   * @param {*} value - Valor a insertar en la pila
   * @returns {boolean} - Resultado
   */
    push(value) {
        if (value != null) {
            this._size++;
            return this.array.push(value);
        }
    }

    /**
     * Retorna el en la cabeza de la pila
     * @returns {Node}
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.array[this._size - 1];
        }
    }

    /**
    * Retorna y elimina el último nodo ingresado
    * @returns {Node}
    */
    pop() {
        if (!this.isEmpty()) {
            let tailStack = this.array.pop();
            this._size--;
            return tailStack;
        }
        return null;
    }

    /**
     * Retorna el nodo con el valor indicado
     * @param {*} value - Valor del nodo a buscar
     * @returns {Node}
     */
    search(value) {
        if (!this.isEmpty()) {
            //Desapilar para buscar
            const popArray = [];
            let popValue = null;
            let find = false;

            while (!this.isEmpty()) { //Mientras no esté vacía
                popValue = this.array.pop();
                popArray.push(popValue);
                if (popValue == value) {
                    find = true;
                    break;
                }
            }

            //Apilar nuevamente 
            while (popArray.length > 0) {
                this.push(popArray.pop());
            }
        }
        return find;
    }

    /**
     * Invierte el orden de la pila;
     * @returns {boolean}
     */
    reverse() {
        if (!this.isEmpty()) {
            const popList = [];

            while (!this.isEmpty()) { //Mientras no esté vacía
                popList.push(this.pop());
            }

            let i = 0;
            while (i < popList.length) {
                this.push(popList[i]);
                i++;
            }
            return true;
        }
        return false;
    }

    /**
     * Retorna una instacia nueva de la pila.
     * @returns {ArrayStack} - Nueva instancia de la pila
     */
    clone() {
        if (!this.isEmpty()) {
            let popList = [];
            let popValue = null;
            let newStack = new ArrayStack();

            while (!this.isEmpty()) { //Mientras no esté vacía
                popList.push(this.pop());
            }

            while (popList.length > 0) {
                popValue = popList.pop();
                this.push(popValue);
                newStack.push(popValue);
            }
            return newStack;
        }
        return new ArrayStack();
    }

    /**
     * Retorna si la pila está vacía
     * @returns {boolean}
     */
    isEmpty() {
        return this.array.length == 0;
    }

    /**
     * Elimina todos los elementos de la pila
     * @returns {boolean}
     */
    clear() {
        this.array.length = 0;
        return true;
    }
}

const myStack = new ArrayStack();

myStack.push("Lunes");
myStack.push("Martes");
myStack.push("Miercoles");
myStack.push("Jueves");

console.log(myStack.array);