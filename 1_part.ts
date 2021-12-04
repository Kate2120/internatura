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
        let arrayWords = [word1, word2];

        for(let key in memo.words){
            for(let i = 0; i < arrayWords.length; i++){
                if(key === arrayWords[i]){
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

interface CountedDigit {
    [index: string]: number,
}

function  countDigit(variableNumber: number): CountedDigit {
    let arrayDigit: number[] = [];
    let countedDigit: CountedDigit = {};
    for(; variableNumber > 0;) {
        arrayDigit.push(variableNumber % 10);
        let currenntNum = (variableNumber/10).toString();
        variableNumber = parseInt(currenntNum);
    }
    for(let i = 0; i <= arrayDigit.length && arrayDigit.length > 0;) {
        let counter = 1;
        for(let j = i + 1; j <= arrayDigit.length; j++) {
            if(arrayDigit[i] === arrayDigit[j]) {
                counter++;
                countedDigit[arrayDigit[i]] = counter;
            }
        }
        countedDigit[arrayDigit[i]] = counter;
        arrayDigit = arrayDigit.filter(function(item) {
            return item !== arrayDigit[i];
        });
    }
    return countedDigit;
};

interface CountedDigit {
    [index: string]: number,
}
function countDigit(variableNumber: number, arrayDigit: number[], countedDigit: CountedDigit, i: number): CountedDigit {
    arrayDigit = arrayDigit || [];
    countedDigit = countedDigit || {};
    i = i || 0;
    for (; variableNumber > 0;) {
        arrayDigit.push(variableNumber % 10);
        let currentNumberToString = (variableNumber/10).toString();
        nvariableNumber = parseInt(currentNumberToString);
    }
    if (i <= arrayDigit.length && arrayDigit.length > 0 ) {
        let counter = 1;
        for (let j = i + 1; j <= arrayDigit.length; j++) {
            if (arrayDigit[i] === arrayDigit[j]) {
                counter++;
                countedDigit[arrayDigit[i]] = counter;
            }
        }
        countedDigit[arrayDigit[i]] = counter;
        arrayDigit = arrayDigit.filter(function(item) {
            return item !== arrayDigit[i];
        });
        countDigit(variableNumber, arrayDigit, countedDigit, i);
    }
    return countedDigit;
}


interface CountedDigit {
    [index: string]: number,
}
interface Memo {
    [key: string]: CountedDigit,
}
let memoizedDigit = (function() {
    let memo: Memo = {};

    return  function countDigit(variableNumber: number, arrayCoutedDigit: number[], countedDigit: CountedDigit) {
        let key: string = variableNumber.toString();
        if (key in memo) {
            return countedDigit;
        }
        arrayCoutedDigit = arrayCoutedDigit || [];
        countedDigit = countedDigit || {};
        if(arrayCoutedDigit.length === 0){
        for (; variableNumber > 0;) {
            arrayCoutedDigit.push(variableNumber % 10);
            let currentNumToString = (variableNumber/10).toString();
            variableNumber = parseInt(currentNumToString);

        }
        }
        let i: number = 0;
        if (i <= arrayCoutedDigit.length && arrayCoutedDigit.length > 0 ) {
            let counter: number = 1;
            for (let j = i + 1; j <= arrayCoutedDigit.length; j++) {
                if (arrayCoutedDigit[i] === arrayCoutedDigit[j]) {
                    counter++;
                    countedDigit[arrayCoutedDigit[i]] = counter;
                }
            }
            countedDigit[arrayCoutedDigit[i]] = counter;
            arrayCoutedDigit = arrayCoutedDigit.filter(function(item) {
                return item !== arrayCoutedDigit[i];
            });

            countDigit(variableNumber, arrayCoutedDigit, countedDigit);
        }
        memo.key = countedDigit;
        return countedDigit;
    }})();

function uniqueWords(sentence: string): number {
    sentence = sentence.toLowerCase();
    let arrayCountedWords: string[] = sentence.split(/[^а-яА-ЯёЁ]+/gui);
    arrayCountedWords = arrayCountedWords.filter(function(item) {
        return item !== "";
    });
    for(let i: number = 0; i < arr.length - 1; i++) {
        for(let j: number = i + 1; j < arr.length; j++ ) {
            let a: string = arr[i];
            let b: string = arr[j];
            if(a === b) {
                arrayCountedWords = arrayCountedWords.filter(function(item) {
                    return item !== a;
                });
            }
        }
    }
    return arrayCountedWords.length;
}

function countUniqueWords(sentence: string, arrayUniqueWords: string[]): number {
    arrayUniqueWords = arrayUniqueWords || [];
    if(arrayUniqueWords.length === 0) {
        sentence = sentence.toLowerCase();
        arrayUniqueWords = sentence.split(/[^а-яА-ЯёЁ]+/gui);
        arrayUniqueWords = arrayUniqueWords.filter(function(item) {
            return item !== "";
        });
    }
    for(let i: number = 0; i < arrayUniqueWords.length; i++) {
        for(let j: number = i + 1; j < arrayUniqueWords.length; j++ ) {
            if(arrayUniqueWords[i] === arrayUniqueWords[j]) {
                arrayUniqueWords = arrayUniqueWords.filter(function(item) {
                    return item !== arrayUniqueWords[i];
                });
                return countUniqueWords(sentence, arrayUniqueWords);
            }
        }
    }
    return arrayUniqueWords.length;
}


interface Memo {
    [index: string]: number,
}

let memoisedCountWords = (function(){
    let memo: Memo = {};
    return function countUniqueWords(sentence: string, arrayWordsFromSentence: string[]): number {
        if(arg in memo){
            return memo[sentence];
        }
        arrayWordsFromSentence = arrayWordsFromSentence || [];
        if(arrayWordsFromSentence.length === 0) {
            sentence = sentence.toLowerCase();
            arrayWordsFromSentence = sentence.split(/[^а-яА-ЯёЁ]+/gui);
            arrayWordsFromSentence = arrayWordsFromSentence.filter(function(item) {
                return item !== "";
            });
        }
        for(let i: number = 0; i < arrayWordsFromSentence.length; i++) {
            for(let j: number = i + 1; j < arrayWordsFromSentence.length; j++ ) {
                if(arrayWordsFromSentence[i] === arrayWordsFromSentence[j]) {
                    arrayWordsFromSentence = arrayWordsFromSentence.filter(function(item) {
                        return item !== arrayWordsFromSentence[i];
                    });
                    return countUniqueWords(sentence, arrayWordsFromSentence);
                }
            }
        }
        memo[sentence] = arrayWordsFromSentence.length;
        return arrayWordsFromSentence.length;

    }})();

interface CountedUniqueWords {
    [index: string]: number,
}
function uniqueWords(sentence: string): CountedUniqueWords {
    sentence = sentence.toLowerCase()
    let arrayUniqueWords: string[] = sentence.split(/[^а-яА-ЯёЁ]+/gui);
    arrayUniqueWords = arrayUniqueWords.filter(function(item) {
        return item !== "";
    });
    let countedUniqueWords: CountedUniqueWords = {};
    for(let i: number = 0; i < arrayUniqueWords.length; ) {
        let counter: number = 1;
        for(let j: number = i + 1; j <= arrayUniqueWords.length; j++ ) {
            if(arrayUniqueWords[i] === arrayUniqueWords[j]) {
                counter++;
            } else if (j === arrayUniqueWords.length) {
                countedUniqueWords [arrayUniqueWords[i]] = counter;
                arrayUniqueWords = arrayUniqueWords.filter(function(item) {
                    return item !== arrayUniqueWords[i];});
            }
        }
    }
    return countedUniqueWords;
}

interface CountedWords {
    [index: string]: number,
}
function countWords (sentence: string, arrayWordsFromSEntence: string[], countedWords: CountedWords, i: number, j: number, counter: number): CountedWords {
    arrayWordsFromSEntence = arrayWordsFromSEntence || [];
    countedWords = countedWords || {};
    i = i || 0;
    j = j || 0;
    counter = counter || 0;
    if(arrayWordsFromSEntence.length === 0) {
        arrayWordsFromSEntence = sentence.toLowerCase().split((/[^а-яА-ЯёЁ]+/gui)).filter(function(item) {
            return item !== "";
        });
        arrayWordsFromSEntence = arrayWordsFromSEntence.filter(function(item) {
            return item !== "";
        });
    }
    if(i < arrayWordsFromSEntence.length) {
        if(j < arrayWordsFromSEntence.length) {
            if(arrayWordsFromSEntence[i] === arrayWordsFromSEntence[j]){
                counter++;
                return countWords(sentence, arrayWordsFromSEntence, countedWords, i, j + 1, counter);
            }
            return countWords(sentence, arrayWordsFromSEntence, countedWords, i, j + 1, counter);
        }
        if(typeof countedWords[arrayWordsFromSEntence[i]] === "undefined"){
            countedWords[arrayWordsFromSEntence[i]] = counter;
        }
        return countWords(sentence, arrayWordsFromSEntence, countedWords, i + 1, i+1, 0);
    }
    return countedWords;
}

interface CountedWords {
    [index: string]: number,
}
interface Memo {
    [index: string]: Result,
}

let memoisedCountWords = (function() {
    let memo: Memo = {};
    return function countWords (sentece: string, arrayWordsFromSentence: string[], countedWords: CountedWords, i: number, j: number, counter: number): CountedWords {
        if(sentece in memo) {
            return memo[sentece];
        }
        arrayWordsFromSentence = arrayWordsFromSentence || [];
        countedWords = countedWords || {};
        i = i || 0;
        j = j || 0;
        counter = counter || 0;
        if(arrayWordsFromSentence.length === 0) {
            arrayWordsFromSentence = sentece.toLowerCase().split((/[^а-яА-ЯёЁ]+/gui)).filter(function(item) {
                return item !== "";
            });
            arrayWordsFromSentence = arrayWordsFromSentence.filter(function(item) {
                return item !== "";
            });
        }
        if(i < arrayWordsFromSentence.length) {
            if(j < arrayWordsFromSentence.length) {
                if(arrayWordsFromSentence[i] === arrayWordsFromSentence[j]){
                    counter++;
                    return countWords(sentece, arrayWordsFromSentence, countedWords, i, j + 1, counter);
                }
                return countWords(sentece, arrayWordsFromSentence, countedWords, i, j + 1, counter);
            }
            if(typeof countedWords[arrayWordsFromSentence[i]] === "undefined"){
                countedWords[arrayWordsFromSentence[i]] = counter;
            }
            return countWords(sentece, arrayWordsFromSentence, countedWords, i + 1, i+1, 0);
        }
        memo[sentece] = countedWords;
        return countedWords;
    }})();

function fibonacci(limit: number, arrayDigitFibonacci: number[]): number[] {
    arrayDigitFibonacci = [0,1];
    for(let i: number = 0; i < limit - 2; i++){
        arrayDigitFibonacci.push (arrayDigitFibonacci[i] + arrayDigitFibonacci[i+1]);
    }
    return arrayDigitFibonacci;
}

function fibonacci(limit: number, arrayDigitFibonacci: number[], i: number): number[] {
    arrayDigitFibonacci = arrayDigitFibonacci || [0,1];
    i = i || 0;
    if(i < limit - 2){
        arrayDigitFibonacci.push (arrayDigitFibonacci[i] + arrayDigitFibonacci[i+1]);
        fibonacci(limit, arrayDigitFibonacci, i + 1)
    }
    return arrayDigitFibonacci;
}

interface Memo {
    [index: string]: number[],
}
let memoisedFibonacci = (function() {
    let memo: Memo = {};
    return function fibonacci(limit: number, i: number, arrayDigitFibonacci: number[], count: number): number[] {
        count = count || 0;
        arrayDigitFibonacci = arrayDigitFibonacci || [];
        i = i || 0;
        let key = limit.toString();
        if(key in memo) {
            return memo.key;
        } else if(Object.keys(memo).length > 0 && i < limit && count ===0) {
            arrayDigitFibonacci = memo[Object.keys(memo).length - 1];
            arrayDigitFibonacci.push(memo[Object.keys(memo).length - 1][Object.keys(memo).length - 2] + memo[Object.keys(memo).length - 1][Object.keys(memo).length - 1]);
            memo[i] = arrayDigitFibonacci.slice();
            count++;
            i = arrayDigitFibonacci.length -1;
            return fibonacci(limit, i + 1, arrayDigitFibonacci, count);
        } else if(count === 1 && i < limit) {
            arrayDigitFibonacci.push(arrayDigitFibonacci[i-2] + arrayDigitFibonacci[i-1]);
            memo[i] = arrayDigitFibonacci.slice();
            return fibonacci(limit, i + 1, arrayDigitFibonacci, count);
        } else if(i === 0 && Object.keys(memo).length === 0) {
            arrayDigitFibonacci.push(i);
            memo[i] = arrayDigitFibonacci.slice();
            i++;
            arr.push(i);
            memo[i] = arrayDigitFibonacci.slice();
            arrayDigitFibonacci.push(arrayDigitFibonacci[i-1] + arrayDigitFibonacci[i]);
            i++;
            memo[i] = arrayDigitFibonacci.slice();
            return fibonacci(limit, i+1, arrayDigitFibonacci, 0);
        }
        return arrayDigitFibonacci;
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

function sumMultipleTwo(arrayDigit: number[]): number {
    let sum: number = 0;
    let sum2: number = 0;
    for(let item of arrayDigit) {
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

function sumMultipleTwo(arrayDigit: number[], i: number, sum: number): number {
    i = i || 0;
    sum = sum || 0;
    if(i < arrayDigit.length ) {
        if(Array.isArray(arrayDigit[i])) {
            for(let item of arrayDigit[i]) {
                if(item%2 === 0){
                    sum += item;
                }
            }
            return sumMultipleTwo(arrayDigit, i + 1, sum);
        } else if(arrayDigit[i] % 2 === 0) {
            sum += arrayDigit[i];
        }
        return sumMultipleTwo(arrayDigit, i + 1, sum);
    }
    return sum;
}

interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedSumMultipleTwo = (function() {
    let memo: Memo = {};
    return function sumMultipleTwo(arrayDigit: (number| number[])[], i: number, sum: number): number {
        if(memo.array !== undefined && memo.result !== undefined){
            let counter: number = 0;
        for(let item of arrayDigit){
            for(let element of memo.array){
                if(item === element){
                    counter++;
                }
                if(counter === arrayDigit.length){
                    return memo.result;
                }
            }
        }
        }
        i = i || 0;
        sum = sum || 0;
        if(i < arrayDigit.length) {
            let current = arrayDigit[i];
             if(Array.isArray(current)) {
                for(let item of current) {
                    if(!Array.isArray(item)) {
                    if(item%2 === 0){
                        sum += item;
                    }
                  }
                }
                return sumMultipleTwo(arrayDigit, i + 1, sum);
            } else {
                if(current % 2 === 0) {
                    sum += current;
                }
                }
                
        
            return sumMultipleTwo(arrayDigit, i + 1, sum);
        }
        memo.array = arrayDigit;
        memo.result = sum;
        return sum;
    }})();


function sumMultipleThree(arrayDigit: number[]) {
    let sum: number = 0;
    for(let item of arrayDigit) {
        if(item % 3 === 0) {
            sum += item;
        }
    }
    return sum;
}

function sumMultipleThree(arrayDigit: (Array<number> | number)[]): number {
    let sumArray: number = 0;
    let sumSubarray: number = 0;
    for(let item of arrayDigit) {
        if(Array.isArray(item)) {
            for(let i: number = 0; i < item.length; i++){
                if(item[i] % 3 === 0) {
                    sumSubarray += item[i];
                }
            }
            item = sumSubarray;
            sumSubarray = 0;
        }
        if (item % 3 === 0) {
            sumArray += item;
        }
    }
    return sumArray;
}

function sumMultipleThree (arrayDigit: (Array<number> | number)[], i: number, sum: number): number {
    sum = sum || 0;
    i = i || 0;
    if(i < arrayDigit.length ) {
        let current = arrayDigit[i];
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
    return function sumMultipleThree (arrayDigit: (number| number[])[], i: number, sum: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arr) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arrayDigit.length) {
                        return memo.result;
                    }
                }
            }
        }
        sum = sum || 0;
        i = i || 0;
        if(i < arrayDigit.length ) {
            let current = arrayDigit[i];
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
            return sumMultipleThree(arrayDigit, i + 1, sum);
        }
        memo.array = arrayDigit;
        memo.result = sum;
        return sum;
    }})();

function sumPositiveOdd(arrayDigit: number[]): number {
    let sum: number = 0;
    for(let item of arrayDigit) {
        if(item % 2 !== 0 && item >= 0) {
            sum += item;
        }
    }
    return sum;
}

function sumPositiveOdd(arrayDigit: (Array<number> | number)[]): number {
    let sumArray: number = 0;
    let sumSubarray: number = 0;
    for(let item of arrayDigit) {
        if(Array.isArray(item)) {
            for(let i = 0; i < item.length; i++){
                if(item[i] % 2 !== 0 && item[i] >= 0) {
                    sumSubarray += item[i];
                }
            }
        } else{
        if(item % 2 !== 0 && item >= 0) {
            sumArray += item;
        }
        }
    }
    return sumArray + sumSubarray;
}

function sumMultipleThree (arrayDigit: (Array<number> | number)[], i: number, sum: number): number {
    sum = sum || 0;
    i = i || 0;
    if(i < arrayDigit.length ) {
        let current = arrayDigit[i];
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
        return sumMultipleThree(arrayDigit, i + 1, sum);
    }
    return sum;
}

interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedSumPositiveOdd = (function() {
    let memo: Memo = {};
    return function sumPositiveOdd (arrayDigit: (number| number[])[], i: number, sum: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arrayDigit) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arrayDigit.length) {
                        return memo.result;
                    }
                }
            }
        }
        sum = sum || 0;
        i = i || 0;
        if(i < arrayDigit.length ) {
            let current = arrayDigit[i];
            if(Array.isArray(current)) {
                for(let item of current) {
                    if(item% 2 !== 0 && item > 0){
                        sum += item;
                    }
                } i++;
            } else{
            if(current % 2!== 0 && arrayDigit[i] > 0) {
                sum += current;
            }
            }
            return sumPositiveOdd(arrayDigit, i + 1, sum);
        }
        memo.array = arrayDigit;
        memo.result = sum;
        return sum;
    }})();

function countZerro (arrayDigit: number[]) {
    let count: number = 0;
    for(let item of arrayDigit) {
        if(item === 0) {
            count++;
        }
    }
    return count;
}

function countZerro(arrayDigit: (number| number[])[]): number {
    let count1: number = 0;
    let count2: number = 0;
    for(let item of arrayDigit) {
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

function countZerro(arrayDigit: (number| number[])[], i: number, count: number): number {
    count = count || 0;
    i = i || 0;
    if(i < arrayDigit.length ) {
        let current = arrayDigit[i];
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
        return countZerro(arrayDigit, i + 1, count);
    }
    return count;
}


interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedCountZerro = (function() {
    let memo: Memo = {};
    return function countZerro (arrayDigit: (number| number[])[], i: number, count: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arrayDigit) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arrayDigit.length) {
                        return memo.result;
                    }
                }
            }
        }
        count = count || 0;
        i = i || 0;
        if(i < arrayDigit.length ) {
            let current  = arrayDigit[i];
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
            return countZerro(arrayDigit, i + 1, count);
        }
        memo.array = arrayDigit;
        memo.result = count;
        return count;
    }})();

function countNegative(arrayDigit: number[]): number {
    let count: number = 0;
    for(let item of arrayDigit) {
        if(item < 0) {
            count++;
        }
    }
    return count;
}

function countNegative(arrayDigit: (number[] | number)[]): number {
    let countArray: number = 0;
    let countSubArray: number = 0;
    for(let item of arrayDigit) {
        if(Array.isArray(item)) {
            for(let i = 0; i < item.length; i++){
                if(item[i] < 0) {
                    countSubArray++;
                }
            }
        }
        if (item < 0) {
            countArray++;
        }
    }
    return countArray + countSubArray;
}


function countNegative (arrayDigit: (number[]| number)[], i: number, count: number): number {
    count = count || 0;
    i = i || 0;
    if(i < arrayDigit.length ) {
        let current = arrayDigit[i];
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
        return countNegative(arrayDigit, i + 1, count);
    }
    return count;
}

interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedCountNegative = (function() {
    let memo: Memo = {};
    return function countNegative (arrayDigit: (number[] | number)[], i: number, count: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arrayDigit) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arrayDigit.length) {
                        return memo.result;
                    }
                }
            }
        }
        count = count || 0;
        i = i || 0;
        if(i < arrayDigit.length ) {
            let current = arrayDigit[i];
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
            return countNegative(arrayDigit, i + 1, count);
        }
        memo.array = arrayDigit;
        memo.result = count;
        return count;
    }})();

function countPositive(arrayDigit: number[]): number {
    let count: number = 0;
    for(let item of arrayDigit) {
        if(item > 0) {
            count++;
        }
    }
    return count;
}

function countPositive(arrayDigit: (number[] | number)[]): number {
    let countArray: number = 0;
    let countSubArray: number = 0;
    for(let item of arrayDigit) {
        if(Array.isArray(item)) {
            for(let i = 0; i < item.length; i++){
                if(item[i] > 0) {
                    countArray++;
                }
            }
        }
        if (item > 0) {
            countSubArray++;
        }
    }
    return countArray + countSubArray;
}

function countPositive(arrayDigit: (number[] | number)[], i: number, count: number): number {
    count = count || 0;
    i = i || 0;
    if(i < arrayDigit.length ) {
        let current = arrayDigit[i];
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
        return countPositive(arrayDigit, i + 1, count);
    }
    return count;
}

interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedCountPositive = (function() {
    let memo: Memo = {};
    return function countPositive(arrayDigit: (number[] | number)[], i: number, count: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arrayDigit) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arrayDigit.length) {
                        return memo.result;
                    }
                }
            }
        }
        count = count || 0;
        i = i || 0;
        if(i < arrayDigit.length ) {
            let current = arrayDigit[i];
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
            return countPositive(arrayDigit, i + 1, count);
        }
        memo.array = arrayDigit;
        memo.result = count;
        return count;
    }})();

function countNative(arrayDigit: number[]): number {
    let count: number = 0;
    label:
        for(let item of arrayDigit) {
            for(let i: number = 2; i < item - 1; i++) {
                if(item % i === 0) {
                    continue label;
                }
            }
            count++;
        }
        return count;
}

function countPrimeNumbers(arrayDigit: number[]): number {
    let currentCount: number = 0;
    let countSubArray: number = 0;
    let countArray: number = 0;
    for(let item of arr) {
        if(Array.isArray(item)) {
            for(let el of item) {
                for(let i: number = 1; i < el; i++) {
                    if(el % i !== 0 ) {
                        currentCount++;
                        if(count === el - 2) {
                            countSubArray++;
                            currentCount = 0;
                        }
                    }
                }
                count = 0;
            }
        }
        for (let j: number = 1; j < item; j++) {
            if (item % j !== 0) {
                currentCount++;
                if (currentCount === item - 2) {
                    countArray++;
                    currentCount = 0;
                }
            }
        }
        currentCount = 0;
    }
    return countSubArray + countArray;
}

function countNative(arrayDigit: number[]): number {
    let count: number = 0;
    label:
        for(let item of arrayDigit) {
            for(let i = 2; i < item - 1; i++) {
                if(item % i === 0) {
                    continue label;
                }
            }
            count++;
        }
        return count;
}

function countPrimeNumbers(arrayDigit: (number[] | number)[]): number {
    let currentCount: number = 0;
    let countSubArray: number = 0;
    let countArray: number = 0;
    for(let item of arrayDigit) {
        let current = item;
        if(Array.isArray(current)) {
            for(let el of current) {
                for(let i = 1; i < el; i++) {
                    if(el % i !== 0 ) {
                        currentCount++;
                        if(currentCount === el - 2) {
                            countSubArray++;
                            count = 0;
                        }
                    }
                }
                count = 0;
            }
        } else{
        for(let j = 1; j < item; j++) {
            if(current % j !== 0) {
                currentCount++;
                if(currentCount === current - 2) {
                    countArray++;
                    currentCount = 0;
                }
            }
            }
        } currentCount = 0;
    }
    return countSubArray + countArray;
}

function simpleDigit (arrayDigit: (number[] | number)[], i: number, sum: number, count: number): number {
    count = count || 0;
    sum = sum || 0;
    i = i || 0;
    if(i < arrayDigit.length) {
        let current = arrayDigit[i];
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
        return simpleDigit (arrayDigit, i + 1, sum, count);
    }
    return sum;
}

interface Memo {
    array?: (Array<number> | number)[]
    result?: number,
}
let memoisedSimpleDigit = (function() {
    let memo: Memo = {};
    return function simpleDigit (arrayDigit: (number[] | number)[], i: number, sum: number, count: number): number {
        if(memo.array !== undefined && memo.result !== undefined) {
            let counter: number = 0;
            for (let item of arrayDigit) {
                for (let element of memo.array) {
                    if (item === element) {
                        counter++;
                    }
                    if (counter === arrayDigit.length) {
                        return memo.result;
                    }
                }
            }
        }
        count = count || 0;
        sum = sum || 0;
        i = i || 0;
        if(i < arr.length) {
            let current = arrayDigit[i];
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
            return simpleDigit (arrayDigit, i + 1, sum, count);
        }
        memo.array = arrayDigit;
        memo.result = sum;
        return sum;
    }})();

function decimalConversion(incomingNumber: number): number {
    let sum: number = 0;
    let currentNumber = incomingNumber.toString();
    for(let i: number = 0; i < currentNumber.length; i++) {
        if(parseInt(currentNumber[i]) === 1) {
            sum += Math.pow(2, currentNumber.length - i - 1);
        }
    }
    return sum;
}

function decimalConversion (incomingNumber: number, i: number, sum: number, j: number): number {
    sum = sum || 0;
    i = i || 0;
    j = j || 0;
    let currentNumber = incomingNumber.toString();
    if(i <= current.length && j < currentNumber.length) {
        let digit = parseInt(currentNumber[j]);
        if(digit === 1) {
            sum += Math.pow(2, currentNumber.length - i)
        }
        return decimalConversion (incomingNumber, i + 1, sum, j + 1)
    }
    return sum;
}

function binaryTranslation(incomingNumber: number): string {
    let arrayNumbersofIncomingNumber: number[] = [];
    for (;incomingNumber >= 1;) {
        arrayNumbersofIncomingNumber.unshift (incomingNumber % 2);
        let currentIncomingNumberToString = (incomingNumber/2).toString();
        incomingNumber = parseInt(currentIncomingNumberToString);
    } return arr.join('')
}

function binaryTranslation(incomingNumber: number, arrayNumbersofIncomingNumber: number[]): string {
    arrayNumbersofIncomingNumber = arrayNumbersofIncomingNumber || [];
    if(incomingNumber >= 1) {
        arrayNumbersofIncomingNumber.unshift(a % 2);
        let incomingNumberToString = (incomingNumber/2).toString();
        return binaryTranslation(parseInt(incomingNumberToString), arrayNumbersofIncomingNumber);
    }
    return arrayNumbersofIncomingNumber.join('');
}

interface Memo {
    index?: number,
    result?: string,
}
let memoisedBinaryTranslation = (function() {
    let memo: Memo = {};
    return function binaryTranslation(incomingNumber: number, arrayNumbersofIncomingNumber: number[]): string {
         if(memo.index !== undefined && memo.result !== undefined){
        if(memo.index === incomingNumber) {
            return memo.result;
        }
        }
        arrayNumbersofIncomingNumber = arrayNumbersofIncomingNumber || [];
        if(incomingNumber >= 1) {
            arrayNumbersofIncomingNumber.unshift(incomingNumber % 2);
            let incomingNumberToString = (incomingNumber/2).toString();
            return binaryTranslation(parseInt(incomingNumberToString), arrayNumbersofIncomingNumber);
        }
        memo.index = incomingNumber;
        memo.result = arrayNumbersofIncomingNumber.join('');
        return arrayNumbersofIncomingNumber.join('');
    }})();

function decimalConversion(incomingNumber: number): number {
    let sum: number = 0;
    let incomingNumberToString = incomingNumber.toString();
    for(let i = 0; i < incomingNumberToString.length; i++) {
        if(parseInt(incomingNumberToString[i]) === 1) {
            sum += Math.pow(2, incomingNumberToString.length - i - 1);
        }
    }
    return sum;
}

function decimalConversion(incomingNumber: number, i: number, j: number, sum: number): number {
    i = i || 1;
    j = j || 0;
    sum = sum || 0;
    let incomingNumberToString = incomingNumber.toString();
    if(i <= incomingNumberToString.length && j < incomingNumberToString.length) {
        let digit = parseInt(incomingNumberToString[j]);
        if(digit == 1) {
            sum += Math.pow(2, incomingNumberToString.length - i)
        }
        return decimalConversion (incomingNumber, i + 1, j + 1, sum)
    }
    return sum;
}

interface Memo {
    index?: number,
    result?: number,
}
let memoisedDecimalConversion = (function() {
    let memo: Memo = {};
    return function decimalConversion(incomingNumber: number, i: number, j: number, sum: number): number {
        if(memo.index !== undefined && memo.result !== undefined){
        if(memo.index === incomingNumber) {
            return memo.result;
        }
        }
        i = i || 1;
        j = j || 0;
        sum = sum || 0;
        let incomingNumberToString = incomingNumber.toString();
        if(i <= incomingNumberToString.length && j < incomingNumberToString.length) {
            if(parseInt(incomingNumberToString) == 1) {
                sum += Math.pow(2, incomingNumberToString.length - i)
            }
            return decimalConversion (incomingNumber, i + 1, j + 1, sum)
        }
        memo.index = incomingNumber;
        memo.result = sum;
        return sum;
    }})();

function sum(minLimit: number, maxLimit: number): number {
    let sum: number = 0;
    let currentResult: number;
    for(let i: number = 0; i < maxLimit - (minLimit - 1); i++) {
        currentResult = minLimit + i;
        if(currentResult > 0) {
            sum += currentResult;
        }
    }
    return sum;
}

function sumUpToMax(minLimit: number, maxLimit: number, sum: number): number {
    sum = sum || 0;
    if(minLimit <= maxLimit) {
        if(minLimit > 0) {
            sum += minLimit;
        }
        return sumUpToMax(minLimit + 1, maxLimit, sum);
    }
    return sum;
}


interface Memo {
    index?: number[],
    result?: number,
}
let memoisedSumUpToMax = (function() {
    let memo: Memo = {};
    return function sumUpToMax(minLimit: number, maxLimit: number, sum: number): number {
        let arrayLimits: number[] = [minLimit,maxLimit];
       if(memo.index !== undefined && memo.result !== undefined){
           let counter: number = 0;
        for(let item of memo.index){
            for(let element of arrayLimits){
                if(item === element){
                    counter++;
                }
                if(counter === memo.index.length){
                    return memo.result;
                }
            }
        }
        }
        sum = sum || 0;
        if(minLimit <= maxLimit) {
            if(minLimit > 0) {
                sum += minLimit;
            }
            return sumUpToMax(minLimit + 1, maxLimit, sum);
        }
        memo.index = arrayLimits;
        memo.result = sum;
        return sum;
    }})();


function sumUpToMax(minLimit: number, maxLimit: number): number {
    let sum: number = 0;
    let currentResult: number;
    for(let i: number = 0; i < maxLimit - 1; i++) {
        currentResult = minLimit + i;
        if(currentResult%3 === 0) {
            sum += currentResult;
        }
    } return sum;
}


function sumUpToMax(minLimit: number, maxLimit: number, divider: number, sum: number): number {
    sum = sum || 0;
    divider = divider || 3;
    if(minLimit <= maxLimit) {
        if(minLimit % divider === 0) {
            sum +=minLimit;
        }
        return sumUpToMax(minLimit + 1, maxLimit, divider, sum);
    }
    return sum;
}


interface Memo {
    index?: number[],
    result?: number,
}
let memoisedSumUpToMax = (function() {
    let memo: Memo = {};
    return function sumUpToMax(minLimit: number, maxLimit: number, divider: number, sum: number): number {
        let arrayLimits: number[] = [minLimit, maxLimit];
        if(memo.index !== undefined && memo.result !== undefined){
           let counter: number = 0;
        for(let item of memo.index){
            for(let element of arrayLimits){
                if(item === element){
                    counter++;
                }
                if(counter === memo.index.length){
                    return memo.result;
                }
            }
        }
        }
        sum = sum || 0;
        divider = divider || 3;
        if(minLimit <= maxLimit) {
            if(minLimit % divider === 0) {
                sum += minLimit;
            }
            return sumUpToMax(minLimit + 1, maxLimit, divider, sum);
        }
        memo.index = arrayLimits;
        memo.result = sum;
        return sum;
    }})();

function sumUptoMax(minLimit: number, maxLimit: number): number {
    let sum: number = 0;
    let currentResult: number = minLimit;
    for(let i: number = 1; i < maxLimit - (minLimit - 1); i++) {
        sum = currentResult + (minLimit + i);
        currentResult = sum;
    }
    return sum;
}


function sumUptoMax(minLimit: number, maxLimit: number): number {
    let sum: number = 0;
    if(minLimit <= maxLimit) {
        sum = minLimit + sumUptoMax(minLimit + 1, maxLimit);
    }
    return sum;
}


interface Memo {
    index?: number[],
    result?: number,
}
let memoisedSumUptoMax = (function (){
    let memo: Memo = {};
    return function sumUptoMax(minLimit: number, maxLimit: number): number {
        let arrLimits = [minLimit,maxLimit];
        if(memo.index !== undefined && memo.result !== undefined){
           let counter: number = 0;
        for(let item of memo.index){
            for(let element of arrLimits){
                if(item === element){
                    counter++;
                }
                if(counter === memo.index.length){
                    return memo.result;
                }
            }
        }
        }
        let sum: number = 0;
        if(minLimit <= maxLimit) {
            sum = minLimit + sumUptoMax(minLimit + 1, maxLimit);
        }
        
        memo.index = arrLimits;
        memo.result = sum;
        return sum;
    }})();


function sumAll(arr: number[]): number {
    let sum: number = 0;
    let count: number = 0;
    for(let item of arr) {
        sum += item;
        count++;
    } return sum/count;
}

function average(arr: number[]): number {
    let sum: number = 0;
    let count: number = 0;
    for(let item of arr) {
        if(Array.isArray(item)) {
            for(let element of item){
                count++;
                sum += element;
            }
        } else if(typeof item === "number") {
            count++;
            sum += item;
        }
    } 
    return sum/count;
}

function average(arr: (number[] | number)[], sum: number, count: number, i: number, j: number): number {
    sum = sum || 0;
    count = count || 0;
    i = i || 0;
    j = j || 0;
    if(i < arr.length) {
        let current = arr[i];
        if(Array.isArray(current)) {
            if(j < current.length) {
                count++;
                sum += parseInt(current[j]);
                return average(arr, sum, count, i, j + 1)
            }
        }
        if(typeof current === "number") {
            count++;
            sum += current;
            return average(arr, sum, count, i + 1, 0)
        }
    }
    return sum/count;
}


interface Memo {
    index?: number[],
    result?: number,
}
let memoisedAverage = (function() {
    let memo: Memo = {};
    return function average(arr: number[], sum: number, count: number, i: number, j: number): number {
        if(memo.index !== undefined && memo.result !== undefined){
           let counter: number = 0;
        for(let item of memo.index){
            for(let element of arr){
                if(item === element){
                    counter++;
                }
                if(counter === memo.index.length){
                    return memo.result;
                }
            }
        }
        }
        
        sum = sum || 0;
        count = count || 0;
        i = i || 0;
        j = j || 0;
        if(i < arr.length) {
            let current = arr[i];
            if(Array.isArray(current)) {
                if(j < current.length) {
                    count++;
                    sum += parseInt(current[j]);
                    return average(arr, sum, count, i, j + 1)
                }
            }
            if(typeof current === "number") {
                count++;
                sum += current;
                return average(arr, sum, count, i + 1, 0)
            }
        }
        memo.index = arr;
        memo.result = sum/count;
        return sum/count;
    }})();


function sumMultipleTwo (arr: number[]): number {
    let sum: number = 0;
    let count: number = 0;
    for (let item of arr) {
        if (item % 2 === 0) {
            sum += item;
            count++;
        }
    } return sum/count;
}

function sumMultipleTwo(arr: number[]): number {
    let sum: number = 0;
    let count: number = 0;
    for(let item of arr) {
        if(item % 2 !== 0) {
            sum += item;
            count++;
        }
    } return sum/count;
}


function averageOdd(arr: number[], count: number, sum: number): number {
    sum = sum || 0;
    count = count || 0;
    for(let item of arr) {
        if(Array.isArray(item)) {
            for(let el of item){
                if(el % 2 === 0) {
                    count++;
                    sum += el;
                }
            }
        }
        else if(typeof item === "number" && item % 2 === 0) {
            count++;
            sum += item;
        }
    }
    return sum/count;
}


function averageOdd(arr: number[], count: number, sum: number, i: number, j: number): number {
    sum = sum || 0;
    count = count || 0;
    i = i || 0;
    j = j || 0;
    if(i < arr.length) {
        let current = arr[i];
        if(Array.isArray(current)) {
            if(j < current.length){
                if(parseInt(current[j]) % 2 === 0 && parseInt(current[j]) > 0) {
                    count++;
                    sum += parseInt(current[j]);
                    return averageOdd(arr, count, sum, i, j + 1);
                }
            }
        }  else if(!(Array.isArray(arr[i])) && arr[i] % 2 === 0 && arr[i] > 0) {
            count++;
            sum += arr[i];
            return averageOdd(arr, count, sum, i + 1, 0);
        }
        return averageOdd(arr, count, sum, i + 1, 0);
    }
    return sum/count;
}


interface Memo {
    index?: number[],
    result?: number,
}
let memoisedAverageOdd = (function() {
    let memo: Memo = {};
    return function averageOdd(arr: number[], count: number, sum: number, i: number, j: number): number {
        if(memo.index !== undefined && memo.result !== undefined){
           let counter: number = 0;
        for(let item of memo.index){
            for(let element of arr){
                if(item === element){
                    counter++;
                }
                if(counter === memo.index.length){
                    return memo.result;
                }
            }
        }
        }
        sum = sum || 0;
        count = count || 0;
        i = i || 0;
        j = j || 0;
        if(i < arr.length) {
            let current = arr[i];
            if(Array.isArray(current)) {

                if(j < current.length){

                    if(parseInt(current[j]) % 2 === 0 && parseInt(current[j]) > 0) {
                        count++;
                        sum += parseInt(current[j]);
                        return averageOdd(arr, count, sum, i, j + 1);
                    }
                }
            } else if(!(Array.isArray(arr[i])) && arr[i] % 2 === 0 && arr[i] > 0) {
                count++;
                sum += arr[i];
                return averageOdd(arr, count, sum, i + 1, 0);
            }
            return averageOdd(arr, count, sum, i + 1, 0);
        }
        memo.index = arr;
        memo.result = sum/count;
        return sum/count;
    }})();

function matrixTranspose(arr: number[][]) {
    let arrSt: number[][] = [];
    for(let i: number = 0; i < arr[i].length; i++) {
        arrSt.push([]);
    }
    for(let a = 0; a < arr.length; a++) {
        for(let j = 0; j < arr[j].length; j++) {
            arrSt[j].push(arr[a][j]);
        }
    }
    return arrSt;
}


interface Memo {
    index?: number[][],
    result?: number[][],
}
let memoisedMatrixTranspose = (function() {
    let memo: Memo = {};
    return function matrixTranspose(arr: number[][], j: number, i: number, arrSt: number[][]): number[][] {
  if(memo.index !== undefined && memo.result !== undefined){
           let counter: number = 0;
        for(let item of memo.index){
            for(let element of arr){
                if(item === element){
                    counter++;
                }
                if(counter === memo.index.length){
                    return memo.result;
                }
            }
        }
        }
        arrSt = arrSt || [];
        j = j || 0;
        i = i || 0;
        if(i < arr.length)  {
            if(j < arr[0].length) {
                arrSt.push([]);
                arrSt[j].push(arr[i][j]);
                return matrixTranspose(arr, j+1, i, arrSt);
            }
            return matrixTranspose(arr, 0, i +1, arrSt);
        }
        memo.index = arr;
        memo.result = arrSt.filter(function (el) {
            return el.length !== 0;
        });
        return arrSt.filter(function (el) {
            return el.length !== 0;
        });
    }})();


function matrixTranspose(arr: number[][], j: number, i: number, arrSt: number[][]): number[][] {
    arrSt = arrSt || [];
    j = j || 0;
    i = i || 0;
    if(i < arr.length)  {
        if(j < arr[0].length) {
            arrSt.push([]);
            arrSt[j].push(arr[i][j]);
            return matrixTranspose(arr, j+1, i, arrSt);
        }
        return matrixTranspose(arr, 0, i +1, arrSt);
    }
    return arrSt.filter(function (el) {
        return el.length !== 0;
    });
}

function sumMatrix(...matrix: number[][][]) {
    let matrixSum: number[][] = [];
    let sum: number = 0;
    for(let i = 0; i < matrix[0].length; i++){
        matrixSum.push([]);
        for(let j = 0; j < matrix[0][0].length; j++) {
            for(let e = 0; e < matrix.length; e++) {
                sum += matrix[e][i][j];
            }
            matrixSum[i].push(sum);
            sum = 0;
        }
    }
    return matrixSum;
}

function sumMatrices(matr1: number[][], matr2: number[][], i: number, j: number, arrSumMatrices: number[][], sum: number): number[][] {
    arrSumMatrices = arrSumMatrices || [];
    sum = sum || 0;
    i = i || 0;
    j = j || 0;
    if(i < matr1.length) {
        if(j < matr1[j].length){
            if(j === 0) {
                arrSumMatrices.push([]);
            }
            sum = matr1[i][j] + matr2[i][j];
            arrSumMatrices[i].push(sum);
            return sumMatrices(matr1, matr2, i,j+1, arrSumMatrices, sum);
        }
        return sumMatrices(matr1,matr2, i+1,0, arrSumMatrices, sum);
    }
    return arrSumMatrices;
}

interface Memo {
    index?: number[][][],
    result?: number[][],
}
let memoisedSumMatrices = (function() {
    let memo: Memo = {};
    return function sumMatrices(matr1: number[][], matr2: number[][], i: number, j: number, arrSumMatrices: number[][], sum: number): number[][] {
        let arr = [matr1, matr2];
        if(memo.index !== undefined && memo.result !== undefined){
           let counter: number = 0;
        for(let item of memo.index){
            for(let element of arr){
                if(item === element){
                    counter++;
                }
                if(counter === memo.index.length){
                    return memo.result;
                }
            }
        }
        }
        arrSumMatrices = arrSumMatrices || [];
        sum = sum || 0;
        i = i || 0;
        j = j || 0;
        if(i < matr1.length) {
            if(j < matr1[j].length){
                if(j === 0) {
                    arrSumMatrices.push([]);
                }
                sum = matr1[i][j] + matr2[i][j];
                arrSumMatrices[i].push(sum);
                return sumMatrices(matr1, matr2, i,j+1, arrSumMatrices, sum);
            }
            return sumMatrices(matr1,matr2, i+1,0, arrSumMatrices, sum);
        }
        memo.index = arr;
        memo.result = arrSumMatrices;
        return arrSumMatrices;
    }})();


function matrixCleanZero(matrix: number[][]): number[][] {
    for(let i: number = 0; i < matrix.length; i++) {
        for(let j: number = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                matrix.splice(i,1);
            }
        }
    }
    return matrix;
}


function matrixCleanZero(matrix: number[][], i: number, j: number): number[][] {
    i = i || 0;
    j = j || 0;
    if (i < matrix.length) {
        if (j < matrix[i].length) {
            if (matrix[i][j] === 0) {
                matrix.splice(i,1);
            } 
            return matrixCleanZero (matrix, i,j+1);
        } 
        return matrixCleanZero (matrix, i+1,0);
    }
    return matrix;
}


interface Memo {
    index?: number[][],
    result?: number[][],
}
let memoisedMatrixCleanZero = (function() {
    let memo: Memo = {};
    return function matrixCleanZero (matrix: number[][], i: number, j: number): number[][] {
if(memo.index !== undefined && memo.result !== undefined){
           let counter: number = 0;
        for(let item of memo.index){
            for(let element of matrix){
                if(item === element){
                    counter++;
                }
                if(counter === memo.index.length){
                    return memo.result;
                }
            }
        }
        }
        i = i || 0;
        j = j || 0;
        if (i < matrix.length) {
            if (j < matrix[i].length) {
                if (matrix[i][j] === 0) {
                    matrix.splice(i,1);
                } 
                return matrixCleanZero (matrix, i,j+1);

            } 
            return matrixCleanZero (matrix, i+1,0);
        }
        memo.index = matrix
        memo.result = matrix;
        return matrix;
    }})();

function matrixCleanZero(matrix: number[][]): number[][] {
    for(let i: number = 0; i < matrix.length; i++) {
        for(let j: number = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                for(let i = 0; i < matrix.length; i++) {
                    matrix[i].splice(j,1);
                }
            }
        }
    }
    return matrix;
}

function matrixCleanZero(matrix: number[][], i: number ,j: number, count: number): number[][] {
    i = i || 0;
    j = j || 0;
    count = count || 0;
    if(i < matrix.length) {
        if(j < matrix[i].length) {
            if(matrix[i][j] === 0) {
                count++;
                matrix[i].splice(j,1);
                return matrixCleanZero (matrix, i+1, j, count);
            } else if(count > 0) {
                matrix[i].splice(j,1);
                return matrixCleanZero(matrix, i+1, j, count);
            }
            return matrixCleanZero(matrix, 0,j+1, count);
        }
    }
    return matrix;
}

interface Memo {
    index?: number[][],
    result?: number[][],
}
let memoisedMatrixCleanZero = (function() {
    let memo: Memo = {};
    return function matrixCleanZero(matrix: number[][], i: number ,j: number, count: number): number[][] {
        if(memo.index !== undefined && memo.result !== undefined){
           let counter: number = 0;
        for(let item of memo.index){
            for(let element of matrix){
                if(item === element){
                    counter++;
                }
                if(counter === memo.index.length){
                    return memo.result;
                }
            }
        }
        }
        i = i || 0;
        j = j || 0;
        count = count || 0;
        if(i < matrix.length) {
            if(j < matrix[i].length) {
                if(matrix[i][j] === 0) {
                    count++;
                    matrix[i].splice(j,1);
                    return matrixCleanZero (matrix, i+1, j, count);
                } else if(count > 0) {
                    matrix[i].splice(j,1);
                    return matrixCleanZero(matrix, i+1, j, count);
                }
                return matrixCleanZero(matrix, 0,j+1, count);
            }
        }
        memo.index = matrix;
        memo.result = matrix;
        return matrix;
    }})();

function factorial(n: number): number {
    let a: number = 1;
    let b: number = 2;
    let c: number = 0;
    for(let i: number = 2; i <= n; i++ ) {
        c = a * b;
        a = c;
        b = b + 1;
    } 
    return c;
}

function factorial(n: number, result: number): number {
    result = result || 1;
    if(n > 0) {
        result = n * factorial(n -1, 1);
    }
    return result;
}

interface Memo{
    [index: string]: number,
}
let memoisedFactorial = (function() {
    let memo: Memo = {};
    return function factorial(n: number, result: number): number {
        let current = n.toString();
        if(current in memo) {
            return memo[current];
        }
        result = result || 1;
        if(n > 0) {
            result = n * factorial(n -1, 1);
        }
        memo[current] = result;
        return result;
    }})();

interface Memo{
    [index: string]: number,
}
let memoisedFactorial = (function() {
    let memo: Memo = {};
    return function factorial(n: number, result: number): number {
        let current = n.toString();
        if(current in memo) {
            return memo[current];
        }
        result = result || 1;
        if(n > 0) {
            result = n * factorial(n -1, 1);
        }
        memo[current] = result;
        return result;
    }})();
