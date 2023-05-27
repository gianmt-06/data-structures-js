const DoublyLinkedList = require('../DoublyLinkedList');

class Stack{
    constructor(){
        this.list = new DoublyLinkedList();
        this._size = 0;
    }

    /**
     * Inserta un valor (por cabeza)
     * @param {*} value - Valor a insertar en la pila
     * @returns {boolean} - Resultado
     */
    push(value){
        if(value != null){
            this._size++;
            return this.list.addFirst(value);
        }
    }

    /**
     * Retorna el en la cabeza de la pila
     * @returns {Node}
     */
    peek(){
        if(this.isEmpty()){
            return null;
        } else {
            return this.list.head;
        }
    }

    /**
     * Retorna y elimina el último nodo ingresado
     * @returns {Node}
     */
    pop(){
        if(!this.isEmpty()){
            let headStack = this.list.head;
            this.list.delete(headStack.value);
            this._size--;
            return headStack;
        }
        return null;
    }

    /**
     * Retorna el nodo con el valor indicado
     * @param {*} value - Valor del nodo a buscar
     * @returns {boolean}
     */
    search(value){
        if(!this.isEmpty()){
            //Desapilar para buscar
            let popList = new DoublyLinkedList();
            let popNode = null;
            let find = false;

            while(!this.isEmpty()){ //Mientras no esté vacía
                popNode =  this.pop();
                popList.add(popNode.value);
                if(popNode.value == value){
                    find = true;
                    break;
                }
            }

            //Apilar nuevamente 
            while(!popList.isEmpty()){
                this.push(popList.pop().value);
            }
        }
        return find;
    }

    /**
     * Invierte el orden de la pila;
     * @returns {boolean}
     */
    reverse(){
        if(!this.isEmpty()){
            let popList = new DoublyLinkedList();

            while(!this.isEmpty()){ //Mientras no esté vacía
                popList.addFirst(this.pop().value);
            }

            while(!popList.isEmpty()){
                this.push(popList.pop().value);
            }
            return true;
        }
        return false;
    }

    /**
     * Retorna una instacia nueva de la pila.
     * @returns {Stack} - Nueva instancia de la pila
     */
    clone(){
        if(!this.isEmpty()){
            let popList = new DoublyLinkedList();
            let popValue = null;
            let newStack = new Stack();

            while(!this.isEmpty()){ //Mientras no esté vacía
                popList.add(this.pop().value);
            }

            while(!popList.isEmpty()){
                popValue = popList.pop().value;
                this.push(popValue);
                newStack.push(popValue);
            }
            return newStack;
        }
        return new Stack();
    }

    /**
     * Elimina todos los elementos de la pila
     * @returns {boolean}
     */
    clear(){
        this.list.clear();
        return true;
    }

    /**
     * Retorna si la pila está vacía
     * @returns {boolean}
     */
    isEmpty(){
        return this.list.head == null;
    }

    /**
     * Retorna un String con el contenido de la pila
     * @returns {String}
     */
    print(){
        return this.list.print();
    }

}

const myStack = new Stack();

myStack.push("Lunes");
myStack.push("Martes");
myStack.push("Miercoles");
myStack.push("Jueves");
console.log(myStack.print());