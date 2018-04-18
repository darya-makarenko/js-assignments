'use strict';

/**
 * Возвращает массив из 32 делений катушки компаса с названиями.
 * Смотрите детали здесь:
 * https://en.wikipedia.org/wiki/Points_of_the_compass#32_cardinal_points
 *
 * @return {array}
 *
 * Пример возвращаемого значения :
 *  [
 *     { abbreviation : 'N',     azimuth : 0.00 ,
 *     { abbreviation : 'NbE',   azimuth : 11.25 },
 *     { abbreviation : 'NNE',   azimuth : 22.50 },
 *       ...
 *     { abbreviation : 'NbW',   azimuth : 348.75 }
 *  ]
 */
function createCompassPoints() {
    var sides = ['N','E','S','W'];  // use array of cardinal directions only!
    let arr = [];
    let azimuth = 0;
    
    for(let i = 0; i < sides.length; i++)
    {
        if(i == 3)
        {
            func(sides[i], sides[0], arr, i);
        }
            func(sides[i], sides[i + 1], arr, i);
    }
    let numbers = [];
    let count = 0;
    for(let i = 0; i < 32; i++)
    {
        numbers.push(count);
        count += 11.25;
    }


    function func(x, y, arr, i)
    {
        if(i % 2 === 0)
        {
            arr.push(x);
            arr.push(x + 'b' + y);
            arr.push(x + x + y);
            arr.push(x + y + 'b' + x);
            arr.push(x + y);
            arr.push(x + y + 'b' + y);
            arr.push(y + x + y);
            arr.push(y + 'b' + x);
            return arr;
        }
        else
        {
            arr.push(x);
            arr.push(x + 'b' + y);
            arr.push(x + y + x);
            arr.push(y + x + 'b' + x);
            arr.push(y + x);
            arr.push(y + x + 'b' + y);
            arr.push(y + y + x);
            arr.push(y + 'b' + x)
        }
    }
    let abbreviation;

    return numbers.map((x, i, mas) => {
        return {abbreviation : arr[i], azimuth : x}
    })
}


/**
 * Раскройте фигурные скобки указанной строки.
 * Смотрите https://en.wikipedia.org/wiki/Bash_(Unix_shell)#Brace_expansion
 *
 * Во входной строке пары фигурных скобок, содержащие разделенные запятыми подстроки,
 * представляют наборы подстрок, которые могут появиться в этой позиции на выходе.
 *
 * @param {string} str
 * @return {Iterable.<string>}
 *
 * К СВЕДЕНИЮ: Порядок выходных строк не имеет значения.
 *
 * Пример:
 *   '~/{Downloads,Pictures}/*.{jpg,gif,png}'  => '~/Downloads/*.jpg',
 *                                                '~/Downloads/*.gif'
 *                                                '~/Downloads/*.png',
 *                                                '~/Pictures/*.jpg',
 *                                                '~/Pictures/*.gif',
 *                                                '~/Pictures/*.png'
 *
 *   'It{{em,alic}iz,erat}e{d,}, please.'  => 'Itemized, please.',
 *                                            'Itemize, please.',
 *                                            'Italicized, please.',
 *                                            'Italicize, please.',
 *                                            'Iterated, please.',
 *                                            'Iterate, please.'
 *
 *   'thumbnail.{png,jp{e,}g}'  => 'thumbnail.png'
 *                                 'thumbnail.jpeg'
 *                                 'thumbnail.jpg'
 *
 *   'nothing to do' => 'nothing to do'
 */
function* expandBraces(str) {
    let result = [];

    function fillResultArray(s) {
        let prestr = '';
        let startIndex = s.indexOf('{');
        
        //if there are no braces
        if (startIndex === -1) {
            result.push(prestr + s);
            return;
        }

        prestr += s.slice(0, startIndex);
        s = s.slice(startIndex + 1);
        
        let bracesAmount = 1;
        let arr = [];
        let currentPart = '';
        
        while (bracesAmount != 0) {
            let openBraceIndex = s.indexOf('{') != -1 ? s.indexOf('{') : Infinity;
            let closeBraceIndex = s.indexOf('}') != -1 ? s.indexOf('}') : Infinity;
            let commaIndex = s.indexOf(',') != -1 ? s.indexOf(',') : Infinity;
            
            if (bracesAmount == 1 && commaIndex < openBraceIndex && commaIndex < closeBraceIndex) {
                currentPart += s.slice(0, Math.min(openBraceIndex, closeBraceIndex, commaIndex));
                arr.push(currentPart);
                currentPart = '';
            } else {
                currentPart += s.slice(0, Math.min(openBraceIndex, closeBraceIndex, commaIndex) + 1);
                
                if (Math.min(openBraceIndex, closeBraceIndex, commaIndex) != commaIndex) {
                    if(openBraceIndex < closeBraceIndex) bracesAmount++;  
                    else bracesAmount--;
                }
            }
            
            s = s.slice(Math.min(openBraceIndex, closeBraceIndex, commaIndex) + 1);
        }

        arr.push(currentPart.slice(0, -1));
        
        for (let i = 0; i < arr.length; i++) {
            fillResultArray(prestr + arr[i] + s);
        }
    }
    
    fillResultArray(str);

    yield* result;
}


/**
 * Возвращает ZigZag матрицу
 *
 * Основная идея в алгоритме сжатия JPEG -- отсортировать коэффициенты заданного изображения зигзагом и закодировать их.
 * В этом задании вам нужно реализовать простой метод для создания квадратной ZigZag матрицы.
 * Детали смотрите здесь: https://en.wikipedia.org/wiki/JPEG#Entropy_coding
 * https://ru.wikipedia.org/wiki/JPEG
 * Отсортированные зигзагом элементы расположаться так: https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/JPEG_ZigZag.svg/220px-JPEG_ZigZag.svg.png
 *
 * @param {number} n - размер матрицы
 * @return {array}  массив размером n x n с зигзагообразным путем
 *
 * @example
 *   1  => [[0]]
 *
 *   2  => [[ 0, 1 ],
 *          [ 2, 3 ]]
 *
 *         [[ 0, 1, 5 ],
 *   3  =>  [ 2, 4, 6 ],
 *          [ 3, 7, 8 ]]
 *
 *         [[ 0, 1, 5, 6 ],
 *   4 =>   [ 2, 4, 7,12 ],
 *          [ 3, 8,11,13 ],
 *          [ 9,10,14,15 ]]
 *
 */
function getZigZagMatrix(n) {
    let arr = Array.from({ length: n });
    for (let k = 0; k < n; k++) {
        arr[k] = Array.from({ length: n });
    }
    let i = 1;
    let j = 1;
    for (let k = 0; k < n * n; k++) 
    {
        arr[i - 1][j - 1] = k;
        if ((i + j) % 2 == 0) 
        {
            // Even stripes
            if (j < n)
            {
                j++;
            }
            else
            { 
                i += 2;
            }
            if (i > 1) 
            {
                i--;
            }
        } 
        else 
        {
            // Odd stripes
            if (i < n)
            {
                i++;
            }
            else
            { 
                j += 2;
            }
            if (j > 1) 
            {
                j--;
            }
        }
    }
    return arr;
}


/**
 * Возвращает true если заданный набор костяшек домино может быть расположен в ряд по правилам игры.
 * Детали игры домино смотрите тут: https://en.wikipedia.org/wiki/Dominoes
 * https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE
 * Каждая костяшка представлена как массив [x,y] из значений на ней.
 * Например, набор [1, 1], [2, 2], [1, 2] может быть расположен в ряд ([1, 1] -> [1, 2] -> [2, 2]),
 * тогда как набор [1, 1], [0, 3], [1, 4] не может.
 * К СВЕДЕНИЮ: в домино любая пара [i, j] может быть перевернута и представлена как [j, i].
 *
 * @params {array} dominoes
 * @return {bool}
 *
 * @example
 *
 * [[0,1],  [1,1]] => true
 * [[1,1], [2,2], [1,5], [5,6], [6,3]] => false
 * [[1,3], [2,3], [1,4], [2,4], [1,5], [2,5]]  => true
 * [[0,0], [0,1], [1,1], [0,2], [1,2], [2,2], [0,3], [1,3], [2,3], [3,3]] => false
 *
 */
function canDominoesMakeRow(dominoes) {
    let row = [];
    row[0] = dominoes[0][0];
    row[1] = dominoes[0][1];
    delete dominoes[0];

    let amountOfNotEmpty = 0;

    do 
    {
        amountOfNotEmpty = getAmountOfNotEmpty();

        for (let i = 0; i < dominoes.length; i++) 
        {
            if (!dominoes[i]) 
            {
                continue;
            }

            if (placeDomino(i)) 
            {
                delete dominoes[i];
            }
        }
    } while (amountOfNotEmpty != getAmountOfNotEmpty());

    if (amountOfNotEmpty > 0) 
    {
        return false;
    }
    else 
    {
        return true;
    }


    function getAmountOfNotEmpty() {
        return dominoes.reduce(function (amount, item, index) {
            if (dominoes[index])
            {
                return ++amount;
            }
            else
            { 
                return amount;
            }
        }, 0);
    }

    //returns true if domino had been placed successfully, else return false
    function placeDomino(i) {
        if (dominoes[i][0] == row[0]) {
            row.unshift(dominoes[i][0]);
            row.unshift(dominoes[i][1]);

            return true;
        } else if (dominoes[i][1] == row[0]) {
            row.unshift(dominoes[i][1]);
            row.unshift(dominoes[i][0]);

            return true;
        } else if (dominoes[i][0] == row[row.length - 1]) {
            row.push(dominoes[i][0]);
            row.push(dominoes[i][1]);

            return true;
        } else if (dominoes[i][1] == row[row.length - 1]) {
            row.push(dominoes[i][1]);
            row.push(dominoes[i][0]);

            return true;
        }

        return false;
    }
}


/**
 * Возвращает строковое представление заданного упорядоченного списка целых чисел.
 *
 * Строковое представление списка целых чисел будет состоять из элементов, разделенных запятыми. Элементами могут быть:
 *   - отдельное целое число
 *   - или диапазон целых чисел, заданный начальным числом, отделенным от конечного числа черточкой('-').
 *     (Диапазон включает все целые числа в интервале, включая начальное и конечное число)
 *     Синтаксис диапазона должен быть использован для любого диапазона, где больше двух чисел.
 *
 * @params {array} nums
 * @return {bool}
 *
 * @example
 *
 * [ 0, 1, 2, 3, 4, 5 ]   => '0-5'
 * [ 1, 4, 5 ]            => '1,4,5'
 * [ 0, 1, 2, 5, 7, 8, 9] => '0-2,5,7-9'
 * [ 1, 2, 4, 5]          => '1,2,4,5'
 */
function extractRanges(nums) {
    let range = new Array(0);
    let result = '';
    range.push(nums[0]);
    for (let i = 1; i < nums.length; i++)
    {
        if ((nums[i] - 1) != nums[i - 1])
        {
            addResult();
        }
        range.push(nums[i]);
    }

    function addResult()
    {
        let size = range.length;
        if (result !== '')
        {
            result += ',';
        }
        if (size > 2)
        {
            result += `${range[0]}-${range[size - 1]}`;
        }
        else
        {
            result += range.join();
        }
        range = [];
    }
    addResult();
    return result;
}

module.exports = {
    createCompassPoints : createCompassPoints,
    expandBraces : expandBraces,
    getZigZagMatrix : getZigZagMatrix,
    canDominoesMakeRow : canDominoesMakeRow,
    extractRanges : extractRanges
};
