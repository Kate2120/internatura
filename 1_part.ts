function anagram(word1: string, word2: string): boolean {
    let countWord1: number = 0;
    let countWord2: number = 0;
    if (word1.length === word2.length){
        for (let i: number = 0; i < word1.length; i++) {
            for (let j: number = 0; j < word1.length; j++) {
                if (word1[i] === word2[j]) {
                    countWord1++;
                }
            }
        }
        for (let i: number = 0; i < word1.length; i++) {
            for (let j: number = 0; j < word1.length; j++) {
                if (word1[i] === word1[j]) {
                    countWord2++;
                }
            }
        }
        if (countWord1 === countWord2) {
            return true;
        }
        return false;
    }
    return false;
}


function anagram(word1: string, word2: string, i: number, j: number, countWord1: number, countWord2: number): boolean {
    countWord1 = countWord1 || 0;
    countWord2 = countWord2 || 0;
    if (word1.length !== word2.length){
        return false;
    }
    if( i < word1.length) {
        if(j < word1.length) {
            if (word1[i] === word2[j]) {
                countWord1++;
                if (word1[i] === word1[j]) {
                    countWord2++;
                }
            } else if (word1[i] === word1[j]) {
                countWord2++;
            }
            return anagram(word1, word2,i,j + 1, countWord1, countWord2);
        }
        return anagram(word1, word2,i + 1,0, countWord1, countWord2);

    }
    if (countWord1 !== countWord2) {
        return false;
    }
    return true;
}

interface Memo {
    words?: string[],
    result?: boolean,
}
let memoisedAnangram = (function() {
    let memo: Memo = {};
    let counter: number = 0;
    return function anagram(word1: string, word2: string, i: number, j: number, countWord1: number, countWord2: number): boolean | undefined {
        countWord1 = countWord1 || 0;
        countWord2 = countWord2 || 0;
        i = i || 0;
        j = j || 0;
        let arr = [word1, word2];

        for(let key in memo.words){
            for(let i = 0; i < arr.length; i++){
                if(key === arr[i]){
                    counter++;
                }
            }
            if(counter === key.length){
                return memo.result;
            }
        }

        if(word1.length === word2.length){
            if( i < word1.length) {
                if(j < word1.length) {
                    if (word1[i] === word2[j]) {
                        countWord1++;
                        if (word1[i] === word1[j]) {
                            countWord2++;
                        }
                    } else if (word1[i] === word1[j]) {
                        countWord2++;
                    }
                    return anagram(word1, word2,i,j + 1, countWord1, countWord2);
                }
                return anagram(word1, word2,i + 1,0, countWord1, countWord2);
            }
            if (countWord1 !== countWord2) {
                memo.words = arr;
                memo.result = false;
                return false;
            }
            memo.words = arr;
            memo.result = true;
            return true;
        }
        memo.words = arr;
        memo.result = false;
        return false;

    }})();

interface Result {
    [index: string]: number,
}

function  countDigit(num: number): Result {
    let arr: number[] = [];
    let obj: Result = {};
    for(; num > 0;) {
        arr.push(num % 10);
        let currenntNum = (num/10).toString();
        num = parseInt(currenntNum);
    }
    for(let i = 0; i <= arr.length && arr.length > 0;) {
        let counter = 1;
        for(let j = i + 1; j <= arr.length; j++) {
            if(arr[i] === arr[j]) {
                counter++;
                obj[arr[i]] = counter;
            }
        }
        obj[arr[i]] = counter;
        arr = arr.filter(function(item) {
            return item !== arr[i];
        });
    }
    return obj;
};

interface Result {
    [index: string]: number,
}
function countDigit(num: number, arr: number[], obj: Result, i: number): Result {
    arr = arr || [];
    obj = obj || {};
    i = i || 0;
    for (; num > 0;) {
        arr.push(num % 10);
        let currentNumberToString = (num/10).toString();
        num = parseInt(currentNumberToString);
    }
    if (i <= arr.length && arr.length > 0 ) {
        let counter = 1;
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
                obj[arr[i]] = counter;
            }
        }
        obj[arr[i]] = counter;
        arr = arr.filter(function(item) {
            return item !== arr[i];
        });
        countDigit(num, arr, obj, i);
    }
    return obj;
}


interface Result {
    [index: string]: number,
}
interface Memo {
    [key: string]: Result,
}
let memoizedDigit = (function() {
    let memo: Memo = {};

    return  function countDigit(num: number, arr: number[], obj: Result) {
        let key: string = num.toString();
        if (key in memo) {
            return obj;
        }
        arr = arr || [];
        obj = obj || {};
        if(arr.length === 0){
        for (; num > 0;) {
            arr.push(num % 10);
            let currentNumToString = (num/10).toString();
            num = parseInt(currentNumToString);

        }
        }
        let i = 0;
        if (i <= arr.length && arr.length > 0 ) {
            let counter: number = 1;
            for (let j = i + 1; j <= arr.length; j++) {
                if (arr[i] === arr[j]) {
                    counter++;
                    obj[arr[i]] = counter;
                }
            }
            obj[arr[i]] = counter;
            arr = arr.filter(function(item) {
                return item !== arr[i];
            });

            countDigit(num, arr,obj);
        }
        memo.key = obj;
        return obj;
    }})();

function uniqueWords(sentence: string): number {
    sentence = sentence.toLowerCase();
    let arr: string[] = sentence.split(/[^а-яА-ЯёЁ]+/gui);
    arr = arr.filter(function(item) {
        return item !== "";
    });
    for(let i: number = 0; i < arr.length - 1; i++) {
        for(let j: number = i + 1; j < arr.length; j++ ) {
            let a: string = arr[i];
            let b: string = arr[j];
            if(a === b) {
                arr = arr.filter(function(item) {
                    return item !== a;
                });
            }
        }
    }
    return arr.length;
}

function countUniqueWords(arg: string, arr: string[]): number {
    arr = arr || [];
    if(arr.length === 0) {
        arg = arg.toLowerCase();
        arr = arg.split(/[^а-яА-ЯёЁ]+/gui);
        arr = arr.filter(function(item) {
            return item !== "";
        });
    }
    for(let i: number = 0; i < arr.length; i++) {
        for(let j: number = i + 1; j < arr.length; j++ ) {
            if(arr[i] === arr[j]) {
                arr = arr.filter(function(item) {
                    return item !== arr[i];
                });
                return countUniqueWords(arg, arr);
            }
        }
    }
    return arr.length;
}


interface Memo {
    [index: string]: number,
}

let memoisedCountWords = (function(){
    let memo: Memo = {};
    return function countUniqueWords(arg: string, arr: string[]): number {
        if(arg in memo){
            return memo[arg];
        }
        arr = arr || [];
        if(arr.length === 0) {
            arg = arg.toLowerCase();
            console.log(arg);
            arr = arg.split(/[^а-яА-ЯёЁ]+/gui);
            arr = arr.filter(function(item) {
                return item !== "";
            });
        }
        for(let i: number = 0; i < arr.length; i++) {
            for(let j: number = i + 1; j < arr.length; j++ ) {
                if(arr[i] === arr[j]) {
                    arr = arr.filter(function(item) {
                        return item !== arr[i];
                    });
                    return countUniqueWords(arg, arr);
                }
            }
        }
        memo[arg] = arr.length;
        return arr.length;

    }})();

interface Result {
    [index: string]: number,
}
function uniqueWords(sentence: string): Result {
    sentence = sentence.toLowerCase()
    let arr: string[] = sentence.split(/[^а-яА-ЯёЁ]+/gui);
    arr = arr.filter(function(item) {
        return item !== "";
    });
    let obj: Result = {};
    for(let i: number = 0; i < arr.length; ) {
        let counter: number = 1;
        for(let j: number = i + 1; j <= arr.length; j++ ) {
            if(arr[i] === arr[j]) {
                counter++;
            } else if (j === arr.length) {
                obj [arr[i]] = counter;
                arr = arr.filter(function(item) {
                    return item !== arr[i];});
            }
        }
    }
    return obj;
}

interface Result {
    [index: string]: number,
}
function countWords (arg: string, arr: string[], obj: Result, i: number, j: number, counter: number): Result {
    arr = arr || [];
    obj = obj || {};
    i = i || 0;
    j = j || 0;
    counter = counter || 0;
    if(arr.length === 0) {
        arr = arg.toLowerCase().split((/[^а-яА-ЯёЁ]+/gui)).filter(function(item) {
            return item !== "";
        });
        arr = arr.filter(function(item) {
            return item !== "";
        });
    }
    if(i < arr.length) {
        if(j < arr.length) {
            if(arr[i] === arr[j]){
                counter++;
                return countWords(arg, arr, obj, i, j + 1, counter);
            }
            return countWords(arg, arr, obj, i, j + 1, counter);
        }
        if(typeof obj[arr[i]] === "undefined"){
            obj[arr[i]] = counter;
        }
        return countWords(arg, arr, obj, i + 1, i+1, 0);
    }
    return obj;
}

interface Result {
    [index: string]: number,
}
interface Memo {
    [index: string]: Result,
}

let memoisedCountWords = (function() {
    let memo: Memo = {};
    return function countWords (arg: string, arr: string[], obj: Result, i: number, j: number, counter: number): Result {
        if(arg in memo) {
            return memo[arg];
        }
        arr = arr || [];
        obj = obj || {};
        i = i || 0;
        j = j || 0;
        counter = counter || 0;
        if(arr.length === 0) {
            arr = arg.toLowerCase().split((/[^а-яА-ЯёЁ]+/gui)).filter(function(item) {
                return item !== "";
            });
            arr = arr.filter(function(item) {
                return item !== "";
            });
        }
        if(i < arr.length) {
            if(j < arr.length) {
                if(arr[i] === arr[j]){
                    counter++;
                    return countWords(arg, arr, obj, i, j + 1, counter);
                }
                return countWords(arg, arr, obj, i, j + 1, counter);
            }
            if(typeof obj[arr[i]] === "undefined"){
                obj[arr[i]] = counter;
            }
            return countWords(arg, arr, obj, i + 1, i+1, 0);
        }
        memo[arg] = obj;
        return obj;
    }})();

function fibonacci(n: number, arr: number[]): number[] {
    arr = [0,1];
    for(let i: number = 0; i < n - 2; i++){
        arr.push (arr[i] + arr[i+1]);
    }
    return arr;
}

function fibonacci(n: number, arr: number[], i: number): number[] {
    arr = arr || [0,1];
    i = i || 0;
    if(i < n - 2){
        arr.push (arr[i] + arr[i+1]);
        fibonacci(n, arr, i + 1)
    }
    return arr;
}


