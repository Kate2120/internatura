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
