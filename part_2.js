//bind

function sum() {
    return this.term1 + this.term2;
}
let digit = {
    term1: 2,
    term2: 1,
}

Function.prototype.customBind = function (context){
    let key = Symbol();
    context[key] = this;
    return (function() {
        let result = context[key]();
        delete context[key];
        return result;
    });

}

//call
Function.prototype.customCall = function (context){
    let key = Symbol();
    context[key] = this;
    return (function() {
        let result = context[key]();
        delete context[key];
        return result;
    })();

}

//map

Array.prototype.customMap = function(func){
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        let result = func(this[i]);
        newArray.push(result);
    }
    return newArray;
};

//filter

Array.prototype.customFilter = function(func){
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        let result = func(this[i]);
        if(result === true){
            newArray.push(this[i])
        };

    }
    return newArray;
};

//reduce

Array.prototype.customReduce = function(func){
    let result = 0;
    for(let i = 0; i < this.length; i++){
        result += func(this[i]);
    }
    return result;
};

//foreach

Array.prototype.customForEach = function(func){
    let result = 0;
    for(let i = 0; i < this.length; i++){
        result = func(this[i]);
    }
    return result;
};

//iterable object

let obj = {
    prev: 0,
    next: 1,
    upTo: 10,
    [Symbol.iterator](){
        let counter = 0;
        let sum = 0;
        return {
            next: () => {
                if(counter < this.upTo-2){
                    sum = this.prev + this.next;
                    this.prev = this.next;
                    this.next = sum;
                    counter++;
                    return {
                        value: sum,
                        done: false
                    }
                }
                return {
                    value: undefined,
                    done: true,
                }
            }
        }
    },

}

