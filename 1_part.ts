function anagram(word1: string, word2: string) {
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
    let memo: Memo = {
        words: [],
    };
    
    let counter = 0;
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
