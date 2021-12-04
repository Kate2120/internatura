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

