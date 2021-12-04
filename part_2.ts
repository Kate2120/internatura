interface Metod {
    [index : string]: any;
}
interface Context {
    [index : symbol]: any;
}
let custom: Metod = Function;
custom.prototype.customBind = function (context: Context){
    let key = Symbol();
    context[key] = this;
    return (function() {
        let result = context[key]();
        delete context[key];
        return result;
    });

}

interface Metod {
    [index : string]: any;
}
interface Context {
    [index : symbol]: any;
}
let custom: Metod = Function;
custom.prototype.customCall = function (context: Context){
    let key: symbol = Symbol();
    context[key] = this;
    return (function() {
        let result = context[key]();
        delete context[key];
        return result;
    })();

}

interface MetodArray {
    [index: string]: any;
}
let custom: MetodArray = Array;
custom.prototype.customMap = function(func: any): Array<any> {
    let newArray: Array<any> = [];
    for(let i = 0; i < this.length; i++){
        let result = func(this[i]);
        newArray.push(result);
    }
    return newArray;
};


interface MetodArray {
    [index: string]: any;
}
let custom: MetodArray = Array;
custom.prototype.customFilter = function(func: any): Array<any>{
    let newArray: Array<any> = [];
    for(let i: number = 0; i < this.length; i++){
        let result: boolean = func(this[i]);
        if(result === true){
            newArray.push(this[i])
        };

    }
    return newArray;
};


interface MetodArray {
    [index: string]: any;
}
let custom: MetodArray = Array;
custom.prototype.customReduce = function(func: any): any{
    let result: any;
    for(let i: number = 0; i < this.length; i++){
        result += func(this[i]);
    }
    return result;
};


interface MetodArray {
    [index: string]: any;
}
let custom: MetodArray = Array;
custom.prototype.customForEach = function(func: any): any{
    let result: any;
    for(let i: number = 0; i < this.length; i++){
        result = func(this[i]);
    }
    return result;
};

interface NextReturn{
    value: any,
    done: boolean,
}

interface ObjectIterable {
    prev: number,
    next: number,
    upTo: number,
    [Symbol.iterator](): MetodNext,
}
interface MetodNext {
    next(): NextReturn,
}
let func: Next; 
let obj: ObjectIterable = {
    prev: 0,
    next: 1,
    upTo: 10,
    [Symbol.iterator](){
        let counter: number = 0;
        let sum: number = 0;
        return {
            next: ():Result  => {
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
