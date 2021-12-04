interface Func {
    [index : string]: any;
}
interface Context {
    [index : symbol]: any;
}
let custom: Func = Function;
custom.prototype.customBind = function (context: Context){
    let key = Symbol();
    context[key] = this;
    return (function() {
        let result = context[key]();
        delete context[key];
        return result;
    });

}

interface Func {
    [index : string]: any;
}
interface Context {
    [index : symbol]: any;
}
let custom: Func = Function;
custom.prototype.customCall = function (context: Context){
    let key: symbol = Symbol();
    context[key] = this;
    return (function() {
        let result = context[key]();
        delete context[key];
        return result;
    })();

}

interface Arr {
    [index: string]: any;
}
let custom: Arr = Array;
custom.prototype.customMap = function(func: any): Array<any> {
    let newArray: Array<any> = [];
    for(let i = 0; i < this.length; i++){
        let result = func(this[i]);
        newArray.push(result);
    }
    return newArray;
};


interface Arr {
    [index: string]: any;
}
let custom: Arr = Array;
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


interface Arr {
    [index: string]: any;
}
let custom: Arr = Array;
custom.prototype.customReduce = function(func: any): any{
    let result: any;
    for(let i: number = 0; i < this.length; i++){
        result += func(this[i]);
    }
    return result;
};


interface Arr {
    [index: string]: any;
}
let custom: Arr = Array;
custom.prototype.customForEach = function(func: any): any{
    let result: any;
    for(let i: number = 0; i < this.length; i++){
        result = func(this[i]);
    }
    return result;
};

interface Result{
    value: any,
    done: boolean,
}
let func: Next; 
interface Obj {
    prev: number,
    next: number,
    upTo: number,
    [Symbol.iterator](): Next,
}
interface Next {
    next(): Result,
}

let obj: Obj = {
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
