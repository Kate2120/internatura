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

interface Memo {
    [index: string]: number[],
}
let memoisedFibonacci = (function() {
    let memo: Memo = {};
    return function fibonacci(N: number, i: number, arr: number[], count: number): number[] {
        count = count || 0;
        arr = arr || [];
        i = i || 0;
        let key = N.toString();
        if(key in memo) {
            return memo.key;
        } else if(Object.keys(memo).length > 0 && i < N && count ===0) {
            arr = memo[Object.keys(memo).length - 1];
            arr.push(memo[Object.keys(memo).length - 1][Object.keys(memo).length - 2] + memo[Object.keys(memo).length - 1][Object.keys(memo).length - 1]);
            memo[i] = arr.slice();
            count++;
            i = arr.length -1;
            return fibonacci(N, i + 1, arr, count);
        } else if(count === 1 && i < N) {
            arr.push(arr[i-2] + arr[i-1]);
            memo[i] = arr.slice();
            return fibonacci(N, i + 1, arr, count);
        } else if(i === 0 && Object.keys(memo).length === 0) {
            arr.push(i);
            memo[i] = arr.slice();
            i++;
            arr.push(i);
            memo[i] = arr.slice();
            arr.push(arr[i-1] + arr[i]);
            i++;
            memo[i] = arr.slice();
            return fibonacci(N, i+1, arr, 0);
        }
        return arr;
    }})();

function sumMultipleTwo(arr: number[]): number {
    let sum: number = 0;
    for(let item of arr) {
        if(item % 2 === 0) {
            sum += item;
        }
    }
    return sum;
}

function sumMultipleTwo(arr: number[]): number {
    let sum: number = 0;
    let sum2: number = 0;
    for(let item of arr) {
        if(Array.isArray(item)) {
            for(let i = 0; i < item.length; i++){
                if(item[i] % 2 === 0) {
                    sum2 += item[i];
                }
            }
            item = sum2;
            sum2 = 0;
        }
        if(item % 2 === 0) {
            sum += item;
        }
    }
    return sum;
}

function sumMultipleTwo(arr: number[], i: number, sum: number): number {
    i = i || 0;
    sum = sum || 0;
    if(i < arr.length ) {
        if(Array.isArray(arr[i])) {
            for(let item of arr[i]) {
                if(item%2 === 0){
                    sum += item;
                }
            }
            return sumMultipleTwo(arr, i + 1, sum);
        } else if(arr[i] % 2 === 0) {
            sum += arr[i];
        }
        return sumMultipleTwo(arr, i + 1, sum);
    }
    return sum;
}

interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedSumMultipleTwo = (function() {
    let memo: Memo = {};
    return function sumMultipleTwo(arr: (number| number[])[], i: number, sum: number): number {
        if(memo.array !== undefined && memo.result !== undefined){
            let counter: number = 0;
        for(let item of arr){
            for(let element of memo.array){
                if(item === element){
                    counter++;
                }
                if(counter === arr.length){
                    return memo.result;
                }
            }
        }
        }
        i = i || 0;
        sum = sum || 0;
        if(i < arr.length) {
            let current = arr[i];
             if(Array.isArray(current)) {
                for(let item of current) {
                    if(!Array.isArray(item)) {
                    if(item%2 === 0){
                        sum += item;
                    }
                  }
                }
                return sumMultipleTwo(arr, i + 1, sum);
            } else {
                if(current % 2 === 0) {
                    sum += current;
                }
                }
                
        
            return sumMultipleTwo(arr, i + 1, sum);
        }
        memo.array = arr;
        memo.result = sum;
        return sum;
    }})();


function sumMultipleThree(arr: number[]) {
    let sum: number = 0;
    for(let item of arr) {
        if(item % 3 === 0) {
            sum += item;
        }
    }
    return sum;
}

function sumMultipleThree(arr: (Array<number> | number)[]): number {
    let sum: number = 0;
    let sum2: number = 0;
    for(let item of arr) {
        if(Array.isArray(item)) {
            for(let i: number = 0; i < item.length; i++){
                if(item[i] % 3 === 0) {
                    sum2 += item[i];
                }
            }
            item = sum2;
            sum2 = 0;
            console.log(item);
        }
        if (item % 3 === 0) {
            sum += item;
        }
    }
    return sum;
}

function sumMultipleThree (arr: (Array<number> | number)[], i: number, sum: number): number {
    sum = sum || 0;
    i = i || 0;
    if(i < arr.length ) {
        let current = arr[i];
        if(Array.isArray(current)) {
            for(let item of current) {
                if(item%3 === 0){
                    sum += item;
                }
            }
            i++;
        } else {
        if(current % 3 === 0) {
            sum += current;
        }
        }
        return sumMultipleThree(arr, i + 1, sum);
    }
    return sum;
}

interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedSumMultipleTree = (function() {
    let memo: Memo = {};
    return function sumMultipleThree (arr: (number| number[])[], i: number, sum: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arr) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arr.length) {
                        return memo.result;
                    }
                }
            }
        }
        sum = sum || 0;
        i = i || 0;
        if(i < arr.length ) {
            let current = arr[i];
            if(Array.isArray(current)) {
                for(let item of current) {
                    if(item%3 === 0){
                        sum += item;
                    }
                }
                i++;
            } else{
            if(current % 3 === 0) {
                sum += current;
            }
            }
            return sumMultipleThree(arr, i + 1, sum);
        }
        memo.array = arr;
        memo.result = sum;
        return sum;
    }})();

function sumPositiveOdd(arr: number[]): number {
    let sum: number = 0;
    for(let item of arr) {
        if(item % 2 !== 0 && item >= 0) {
            sum += item;
        }
    }
    return sum;
}

function sumPositiveOdd(arr: (Array<number> | number)[]): number {
    let sum: number = 0;
    let sum2: number = 0;
    for(let item of arr) {
        if(Array.isArray(item)) {
            for(let i = 0; i < item.length; i++){
                if(item[i] % 2 !== 0 && item[i] >= 0) {
                    sum2 += item[i];
                }
            }
        } else{
        if(item % 2 !== 0 && item >= 0) {
            sum += item;
        }
        }
    }
    return sum + sum2;
}

function sumMultipleThree (arr: (Array<number> | number)[], i: number, sum: number): number {
    sum = sum || 0;
    i = i || 0;
    if(i < arr.length ) {
        let current = arr[i];
        if(Array.isArray(current)) {
            for(let item of current) {
                if(item%3 === 0){
                    sum += item;
                }
            }
            i++;
        } else {
        if(current % 3 === 0) {
            sum += current;
        }
        }
        return sumMultipleThree(arr, i + 1, sum);
    }
    return sum;
}

interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedSumPositiveOdd = (function() {
    let memo: Memo = {};
    return function sumPositiveOdd (arr: (number| number[])[], i: number, sum: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arr) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arr.length) {
                        return memo.result;
                    }
                }
            }
        }
        sum = sum || 0;
        i = i || 0;
        if(i < arr.length ) {
            let current = arr[i];
            if(Array.isArray(current)) {
                for(let item of current) {
                    if(item% 2 !== 0 && item > 0){
                        sum += item;
                    }
                } i++;
            } else{
            if(current % 2!== 0 && arr[i] > 0) {
                sum += current;
            }
            }
            return sumPositiveOdd(arr, i + 1, sum);
        }
        memo.array = arr;
        memo.result = sum;
        return sum;
    }})();

function countZerro (arr: number[]) {
    let count: number = 0;
    for(let item of arr) {
        if(item === 0) {
            count++;
        }
    }
    return count;
}

function countZerro(arr: (number| number[])[]): number {
    let count1: number = 0;
    let count2: number = 0;
    for(let item of arr) {
        if(Array.isArray(item)) {
            for(let i: number = 0; i < item.length; i++){
                if(item[i] === 0) {
                    count1++;
                }
            }
        }
        if(item === 0) {
            count2++;
        }
    }
    return count1 + count2;
}

function countZerro(arr: (number| number[])[], i: number, count: number): number {
    count = count || 0;
    i = i || 0;
    if(i < arr.length ) {
        let current = arr[i];
        if(Array.isArray(current)) {
            for(let item of current) {
                if(item === 0){
                    count++;
                }
            }
            i++;
        } else{
        if(current === 0) {
            count++;
        }
        }
        return countZerro(arr, i + 1, count);
    }
    return count;
}


interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedCountZerro = (function() {
    let memo: Memo = {};
    return function countZerro (arr: (number| number[])[], i: number, count: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arr) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arr.length) {
                        return memo.result;
                    }
                }
            }
        }
        count = count || 0;
        i = i || 0;
        if(i < arr.length ) {
            let current  = arr[i];
            if(Array.isArray(current)) {
                for(let item of current) {
                    if(item === 0){
                        count++;
                    }
                }
                i++;
            } else{
            if (current === 0) {
               
               } count++;
            }
            return countZerro(arr, i + 1, count);
        }
        memo.array = arr;
        memo.result = count;
        return count;
    }})();

function countNegative(arr: number[]): number {
    let count: number = 0;
    for(let item of arr) {
        if(item < 0) {
            count++;
        }
    }
    return count;
}

function countNegative(arr: (number[] | number)[]): number {
    let count1: number = 0;
    let count2: number = 0;
    for(let item of arr) {
        if(Array.isArray(item)) {
            for(let i = 0; i < item.length; i++){
                if(item[i] < 0) {
                    count1++;
                }
            }
        }
        if (item < 0) {
            count2++;
        }
    }
    return count1 + count2;
}


function countNegative (arr: (number[]| number)[], i: number, count: number): number {
    count = count || 0;
    i = i || 0;
    if(i < arr.length ) {
        let current = arr[i];
        if(Array.isArray(current)) {
            for(let item of current) {
                if(item < 0){
                    count++;
                }
            }
            i++;
        } else{
        if(current < 0) {
            count++;
        }
        }
        return countNegative(arr, i + 1, count);
    }
    return count;
}

interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedCountNegative = (function() {
    let memo: Memo = {};
    return function countNegative (arr: (number[] | number)[], i: number, count: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arr) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arr.length) {
                        return memo.result;
                    }
                }
            }
        }
        count = count || 0;
        i = i || 0;
        if(i < arr.length ) {
            let current = arr[i];
            if(Array.isArray(current)) {
                for(let item of current) {
                    if(item < 0){
                        count++;
                    }
                }
                i++;
            } else{
            if(current < 0) {
                count++;
            }
            }
            return countNegative(arr, i + 1, count);
        }
        memo.array = arr;
        memo.result = count;
        return count;
    }})();

function countPositive(arr: number[]): number {
    let count: number = 0;
    for(let item of arr) {
        if(item > 0) {
            count++;
        }
    }
    return count;
}

function countPositive(arr: (number[] | number)[]): number {
    let count1: number = 0;
    let count2: number = 0;
    for(let item of arr) {
        if(Array.isArray(item)) {
            for(let i = 0; i < item.length; i++){
                if(item[i] > 0) {
                    count1++;
                }
            }
        }
        if (item > 0) {
            count2++;
        }
    }
    return count1 + count2;
}

function countPositive(arr: (number[] | number)[], i: number, count: number): number {
    count = count || 0;
    i = i || 0;
    if(i < arr.length ) {
        let current = arr[i];
        if(Array.isArray(current)) {
            for(let item of current) {
                if(item > 0){
                    count++;
                }
            } i++;
        }
        if(current > 0) {
            count++;
        }
        return countPositive(arr, i + 1, count);
    }
    return count;
}

interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedCountPositive = (function() {
    let memo: Memo = {};
    return function countPositive(arr: (number[] | number)[], i: number, count: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arr) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arr.length) {
                        return memo.result;
                    }
                }
            }
        }
        count = count || 0;
        i = i || 0;
        if(i < arr.length ) {
            let current = arr[i];
            if(Array.isArray(current)) {
                for(let item of current) {
                    if(item > 0){
                        count++;
                    }
                } i++;
            } else{
            if(current > 0) {
                count++;
            }
            }
            return countPositive(arr, i + 1, count);
        }
        memo.array = arr;
        memo.result = count;
        return count;
    }})();

function countNative(arr: number[]): number {
    let count: number = 0;
    label:
        for(let item of arr) {
            for(let i: number = 2; i < item - 1; i++) {
                if(item % i === 0) {
                    continue label;
                }
            }
            count++;
        }
        return count;
}

function countPrimeNumbers(arr: number[]): number {
    let count: number = 0;
    let count2: number = 0;
    let count3: number = 0;
    for(let item of arr) {
        if(Array.isArray(item)) {
            for(let el of item) {
                for(let i: number = 1; i < el; i++) {
                    if(el % i !== 0 ) {
                        count++;
                        if(count === el - 2) {
                            count2++;
                            count = 0;
                        }
                    }
                }
                count = 0;
            }
        }
        for (let j: number = 1; j < item; j++) {
            if (item % j !== 0) {
                count++;
                if (count === item - 2) {
                    count3++;
                    count = 0;
                }
            }
        }
        count = 0;
    }
    return count2 + count3;
}

function countNative(arr: number[]): number {
    let count: number = 0;
    label:
        for(let item of arr) {
            for(let i = 2; i < item - 1; i++) {
                if(item % i === 0) {
                    continue label;
                }
            }
            count++;
        }
        return count;
}

function countPrimeNumbers(arr: (number[] | number)[]): number {
    let count: number = 0;
    let count2: number = 0;
    let count3: number = 0;
    for(let item of arr) {
        let current = item;
        if(Array.isArray(current)) {
            for(let el of current) {
                for(let i = 1; i < el; i++) {
                    if(el % i !== 0 ) {
                        count++;
                        if(count === el - 2) {
                            count2++;
                            count = 0;
                        }
                    }
                }
                count = 0;
            }
        } else{
        for(let j = 1; j < item; j++) {
            if(current % j !== 0) {
                count++;
                if(count === current - 2) {
                    count3++;
                    count = 0;
                }
            }
            }
        } count = 0;
    }
    return count2 + count3;
}

function simpleDigit (arr: (number[] | number)[], i: number, sum: number, count: number): number {
    count = count || 0;
    sum = sum || 0;
    i = i || 0;
    if(i < arr.length) {
        let current = arr[i];
        if(Array.isArray(current)) {
            for(let item of current) {
                for(let j: number = 1; j < item; j++) {
                    if(item % j === 0 && item > 0) {
                        count++;
                    }
                }
                if(count === 1) {
                    sum += count;
                    count = 0;
                }
            }
        } else{
        for(let j: number = 1; j < current; j++) {

            if(current % j === 0 && current > 0) {
                count++;
            }
        }
        if(count === 1) {
            sum +=count;
            count = 0;
        }
        }
        count = 0;
        return simpleDigit (arr, i + 1, sum, count);
    }
    return sum;
}

interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedSimpleDigit = (function() {
    let memo: Memo = {};
    return function simpleDigit (arr: (number[] | number)[], i: number, sum: number, count: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arr) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arr.length) {
                        return memo.result;
                    }
                }
            }
        }
        count = count || 0;
        sum = sum || 0;
        i = i || 0;
        if(i < arr.length) {
            let current = arr[i];
            if(Array.isArray(current)) {
                for(let item of current) {
                    for(let j: number = 1; j < item; j++) {
                        if(item % j === 0 && item > 0) {
                            count++;
                        }
                    }
                    if(count === 1) {
                        sum += count;
                        count = 0;
                    }
                }
            } else{
            for(let j: number = 1; j < current; j++) {

                if(current % j === 0 && current > 0) {
                    count++;
                }
            }
            if(count === 1) {
                sum +=count;
                count = 0;
            }
            }
            count = 0;
            return simpleDigit (arr, i + 1, sum, count);
        }
        memo.array = arr;
        memo.result = sum;
        return sum;
    }})();

function decimalConversion(num: number): number {
    let sum: number = 0;
    let current = num.toString();
    for(let i: number = 0; i < current.length; i++) {
        if(parseInt(current[i]) === 1) {
            sum += Math.pow(2, current.length - i - 1);
        }
    }
    return sum;
}
