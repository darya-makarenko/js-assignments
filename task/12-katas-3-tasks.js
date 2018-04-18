'use strict';

/**
 * Возвращает true если слово попадается в заданной головоломке.
 * Каждое слово может быть построено при помощи прохода "змейкой" по таблице вверх, влево, вправо, вниз.
 * Каждый символ может быть использован только один раз ("змейка" не может пересекать себя).
 *
 * @param {array} puzzle
 * @param {array} searchStr
 * @return {bool}
 *
 * @example
 *   var puzzle = [ 
 *      'ANGULAR',
 *      'REDNCAE',
 *      'RFIDTCL',
 *      'AGNEGSA',
 *      'YTIRTSP',
 *   ]; 
 *   'ANGULAR'   => true   (первая строка)
 *   'REACT'     => true   (начиная с верхней правой R и дальше ↓ ← ← ↓)
 *   'UNDEFINED' => true
 *   'RED'       => true
 *   'STRING'    => true
 *   'CLASS'     => true
 *   'ARRAY'     => true   (первая колонка)
 *   'FUNCTION'  => false
 *   'NULL'      => false 
 */
function reqSnake(puzzle, searchStr, y, x, flagArr){
    if(searchStr == ""){
        return true;
    }
    let isFound = false;
    flagArr[y][x] = true;
    if((y - 1 >= 0)&&(!flagArr[y-1][x])
        &&(puzzle[y-1][x] == searchStr[0])){
        y = y-1;
        isFound = true;         
    }
    if((x - 1 >= 0)
        &&(!isFound)&&(!flagArr[y][x-1])
        &&(puzzle[y][x-1] == searchStr[0])){
        x= x-1;
        isFound = true;
    }
    if((x + 1 < puzzle[y].length)
        &&(!isFound)&&(!flagArr[y][x+1])
        &&(puzzle[y][x+1] == searchStr[0])){
        x = x+1;
        isFound = true;
    }
    if((y + 1 < puzzle.length)
        &&(!isFound)&&(!flagArr[y+1][x])
        &&(puzzle[y+1][x] == searchStr[0])){
        y = y+1;
        isFound = true;
    }

    if(!isFound){ return false; }
    let arr = searchStr.split('');
    arr.splice(0, 1);
    return reqSnake(puzzle, arr.join(''), y, x, flagArr);
}

function findStringInSnakingPuzzle(puzzle, searchStr) {
    let flagArr = [];
    for(let i = 0; i < puzzle.length; i++){
        flagArr[i] = [];
        for(let j = 0; j < puzzle[i].length; j++){
            flagArr[i][j] = false;
        }
    }
    for(let i = 0; i < puzzle.length; i++){
        //let index = puzzle[i].indexOf(searchStr[0]);
        for(let j = 0; j < puzzle[i].length; j++){
            if(puzzle[i][j] == searchStr[0]){
                let arr = searchStr.split('');
                arr.splice(0, 1);
                if(reqSnake(puzzle, arr.join(''), i, j, flagArr)){
                    return true;
                }
            }
        }
    }
    return false;
}

/**
 * Возвращает все перестановки заданной строки.
 * Принимаем, что все символы в заданной строке уникальные.
 * Порядок перестановок не имеет значения.
 *
 * @param {string} chars
 * @return {Iterable.<string>} все возможные строки, построенные из символов заданной строки
 *
 * @example
 *    'ab'  => 'ab','ba'
 *    'abc' => 'abc','acb','bac','bca','cab','cba'
 */
function recPerm(chars){
    if(chars.length == 1){
        return [chars];
    }
    let answer = [];
    for(let i = 0; i < chars.length; i++){
        let arr = chars.split('');
        arr.splice(i, 1);
        let result = recPerm(arr.join(''));
        for(let j = 0; j < result.length; j++){
            result[j] = chars[i] + result[j];
        }
        answer = answer.concat(result);
    }
    return answer;
}

function* getPermutations(chars) {
    yield* recPerm(chars);
    return;
}


/**
 * Возвращает наибольшую прибыль от игры на котировках акций.
 * Цены на акции храняться в массиве в порядке увеличения даты.
 * Прибыль -- это разница между покупкой и продажей.
 * Каждый день вы можете либо купить одну акцию, либо продать любое количество акций, купленных до этого, либо ничего не делать.
 * Таким образом, максимальная прибыль -- это максимальная разница всех пар в последовательности цен на акции.
 *
 * @param {array} quotes
 * @return {number} max profit
 *
 * @example
 *    [ 1, 2, 3, 4, 5, 6]   => 15  (купить по 1,2,3,4,5 и затем продать все по 6)
 *    [ 6, 5, 4, 3, 2, 1]   => 0   (ничего не покупать)
 *    [ 1, 6, 5, 10, 8, 7 ] => 18  (купить по 1,6,5 и затем продать все по 10)
 */
function getMostProfitFromStockQuotes(quotes) {
    let maxInd = 0;
    let profit = 0;
    while (quotes.length > 0){
        maxInd = 0;
        for (let i = 0; i < quotes.length; i++){
            if (quotes[i] > quotes[maxInd]){
                maxInd = i;
            }
        }
        if (maxInd != 0){
            for (let j = 0; j < maxInd; j++){
                profit += (quotes[maxInd] - quotes[j]);
            }
        }
        quotes.splice(0, maxInd + 1);
    }
    return profit;
}


/**
 * Класс, предосатвляющий метод по сокращению url.
 * Реализуйте любой алгоритм, но не храните ссылки в хранилище пар ключ\значение.
 * Укороченные ссылки должны быть как минимум в 1.5 раза короче исходных.
 *
 * @class
 *
 * @example
 *    
 *     var urlShortener = new UrlShortener();
 *     var shortLink = urlShortener.encode('https://en.wikipedia.org/wiki/URL_shortening');
 *     var original  = urlShortener.decode(shortLink); // => 'https://en.wikipedia.org/wiki/URL_shortening'
 * 
 */
function UrlShortener() {
    this.urlAllowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+
                           "abcdefghijklmnopqrstuvwxyz"+
                           "0123456789-_.~!*'();:@&=+$,/?#[]";
}

UrlShortener.prototype = {

    encode: function(url) {
        let replace = [];
        replace['wikipedia.org'] = '~0@';
        replace['https://'] = 's:/';
        replace['http://'] = 'p:/';
        replace['wikipedia'] = '~3@';
        replace['.org'] = '~4@';
        replace['shortening'] = '~5@';
        replace['wiki'] = '~6@';
        replace['developer'] = '~7@';
        replace['mozilla'] = '~8@';
        replace['JavaScript'] = '~9@';
        replace['javaScript'] = '~a@';
        replace['Javascript'] = '~b@';
        replace['javascript'] = '~c@';
        replace['reference'] = '~d@';
        replace['Reference'] = '~e@';
        replace['objects'] = '~f@';
        replace['Objects'] = '~g@';
        replace['Global'] = '~h@';
        replace['global'] = '~i@';
        replace['en-US'] = '~j@';
        replace['Percent'] = '~k@';
        replace['percent'] = '~l@';
        replace['characters'] = '~m@';
        replace['Characters'] = '~n@';
        replace['encod'] = '~o@';
        replace['encoding'] = '~p@';
        replace['Encod'] = '~q@';
        replace['Encoding'] = '~r@';
        replace['binary'] = '~s@';
        replace['Binary'] = '~t@';
        replace['text'] = '~u@';
        replace['Text'] = '~v@';
        replace['google.com'] = '~w@';
        replace['Plain'] = '~x@';
        replace['_plain_'] = '~y@';
        replace['_Plain_'] = '~z@';
        replace['wikipedia/'] = '~1@';
        replace['wikipedia.'] = '~1@';
        for(let key in replace){
            let index = url.indexOf(key);
            if(index != -1){
                url = url.split(key);
                url = url.join(replace[key]);   
            }
        }
        return url;
    },
    
    decode: function(code) {
        let replace = [];
        replace['~0@'] = 'wikipedia.org';
        replace['s:/'] = 'https://';
        replace['p:/'] = 'http://';
        replace['~3@'] = 'wikipedia';
        replace['~4@'] = '.org';
        replace['~5@'] = 'shortening';
        replace['~6@'] = 'wiki';
        replace['~7@'] = 'developer';
        replace['~8@'] = 'mozilla';
        replace['~9@'] = 'JavaScript';
        replace['~a@'] = 'javaScript';
        replace['~b@'] = 'Javascript';
        replace['~c@'] = 'javascript';
        replace['~d@'] = 'reference';
        replace['~e@'] = 'Reference';
        replace['~f@'] = 'objects';
        replace['~g@'] = 'Objects';
        replace['~h@'] = 'Global';
        replace['~i@'] = 'global';
        replace['~j@'] = 'en-US';
        replace['~k@'] = 'Percent';
        replace['~l@'] = 'percent';
        replace['~m@'] = 'characters';
        replace['~n@'] = 'Characters';
        replace['~o@'] = 'encod';
        replace['~p@'] = 'encoding';
        replace['~q@'] = 'Encod';
        replace['~r@'] = 'Encoding';
        replace['~s@'] = 'binary';
        replace['~t@'] = 'Binary';
        replace['~u@'] = 'text';
        replace['~v@'] = 'Text';
        replace['~w@'] = 'google.com';
        replace['~x@'] = 'Plain';
        replace['~y@'] = '_plain_';
        replace['~z@'] = '_Plain_';
        replace['~1@'] = 'wikipedia/';
        replace['~1@'] = 'wikipedia.';
        for(let key in replace){
            let index = code.indexOf(key);
            if(index != -1){
                code = code.split(key);
                code = code.join(replace[key]); 
            }
        }
        return code;
    } 
}


module.exports = {
    findStringInSnakingPuzzle: findStringInSnakingPuzzle,
    getPermutations: getPermutations,
    getMostProfitFromStockQuotes: getMostProfitFromStockQuotes,
    UrlShortener: UrlShortener
};
