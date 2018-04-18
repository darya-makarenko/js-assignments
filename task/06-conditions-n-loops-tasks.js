'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Пожалуйста, прочтите информацию по ссылкам перед выполнением заданий:                                 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Возврщает 'Fizz','Buzz' или начальное число согласно следеющим правилам:
 * 1) если не подпадает под следйющте правила вернуть начальное число
 * 2) число делится нацело на 3 вернуть 'Fizz'
 * 3) число кратно 5 вернуть 'Buzz'
 * 4) если число кратно 3 и 5 одновременно вернуть 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    let response = num;
    if (num % 15 == 0)
    {
        response = 'FizzBuzz';
    }
    else if (num % 5 == 0)
    {
        response = 'Buzz';
    }
    else if (num % 3 == 0)
    {
        response = 'Fizz';
    }

    return response;
}


/**
 * Возвращает факториал переданного целого числа n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    let i;
    let fact = 1;
    for (i = 1; i <= n; i++)
    {
        fact *= i;
    }
    return fact;
}


/**
 * Возвращается сумму целых чисел в промежутке между переданными числами, включая их
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for(let i = n1; i <= n2; i++)
    {
        sum += i;
    }
    return sum;
}


/**
 * Возвращает true, если с помощью трех переданных длин сторон a,b,c можно
 * посроить треугольник, если нет - false
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a,b,c) {
    if ((a + b <= c) || (a + c <= b) || (b + c <= a))
    {
        return false;
    }
    return true;
}


/**
 * Возвращает true, если 2 определенных прямоуголника перекрываются, если нет false.
 * Каждый прямоуголник представлен обьектом
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Пожлауйтса используйте принцип задания координат для canvas (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * этот способ отличается от декартовой системы координат.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
    let coord1 = [[rect1.left, rect1.top], [rect1.left + rect1.width, rect1.top + rect1.height]];
    let coord2 = [[rect2.left, rect2.top], [rect2.left + rect2.width, rect2.top + rect2.height]];

    if ((coord2[0][0] >= coord1[0][0]) && (coord2[0][0] <= coord1[1][0]))
    {
        if ((coord2[0][1] >= coord1[0][1]) && (coord2[0][1] <= coord1[1][1]))
        {
            return true;
        }
    }

    if ((coord1[0][0] >= coord2[0][0]) && (coord1[0][0] <= coord2[1][0]))
    {
        if ((coord1[0][1] >= coord2[0][1]) && (coord1[0][1] <= coord2[1][1]))
        {
            return true;
        }
    }

    return false;
}


/**
 * Возвращает true если точка лежим в пределах круга, если нет то false
 * Круг представляет собой объект:
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Точка представляет собой объект:
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
    let x0 = circle.center.x;
    let y0 = circle.center.y;
    let x1 = point.x;
    let y1 = point.y; 
    let dist = Math.sqrt((x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1));
    if (dist >= circle.radius)
    {
        return false;
    }
    return true;
}


/**
 * Возврщает первый неповторяющийся символ в строке, если его нет то возвращает null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    for (let i = 0; i < str.length; i++)
    {
        let ch = str.indexOf(str[i]);
        if (ch == i)
        {
            ch = str.indexOf(str[i], i + 1);
        }
        if (ch == -1)
        {
            return str[i];
        }
    }
    return null;
}


/**
 * Возвращает интервальную строку по 2 определенным числам и (включить / исключить) критериям.
 * Подробное описание задачи: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Обратите внимание на то, что меньшее число должно идти первым в описании
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * меньшее число должно быть впереди :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    let leftParen = ['(', '['];
    let rightParen = [')', ']'];
    let maxVal, minVal;
    if (a > b)
    {
        maxVal = a.toString();
        minVal = b.toString();
    }
    else
    {
        maxVal = b.toString();
        minVal = a.toString();    
    }
    return leftParen[Number(isStartIncluded)] + minVal + ', ' + maxVal + rightParen[Number(isEndIncluded)];
}


/**
 * Переворачивает переданную строку (ставит все символы строки в обратном порядке)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    let resStr = '';
    for (let i = str.length - 1; i >= 0; i--)
    {
        resStr += str[i];
    }
    str = resStr;
    return str;
}


/**
 * Переворачивает переданное целое число (ставит все цифры числа в обратном порядке)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    let strNum = num.toString();
    let resStr = '';
    for (let i = strNum.length - 1; i >= 0; i--)
    {
        resStr += strNum[i];
    }
    return +resStr;
}


/**
 * Проверяет на валидность CCN (credit card number) и возвращает true если CCN валиден
 * и возвращает false в противном случае.
 *
 * Описание алгоритма по ссылке : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    let sum = 0;
    let arr = (((ccn.toString()).split('').reverse())).map((x)=>(Number(x)));  
    for(let i = 0; i < arr.length; i++)
    {
        let p = 0;
        if (i % 2 > 0)
        {
            p = arr[i] * 2;
            if (p > 9)
            {
                p = p - 9;
            }
            sum = sum + p;
        }
        if (i % 2 == 0)
        {
            sum = sum + arr[i];
        }
    }
    if(sum % 10 == 0)
    {
        return true
    } 
    return false;
}


/**
 * Возвращает сумму всех цифр переданного чила след. образом:
 *   step1 : найти сумму всех цифр исходного числа
 *   step2 : если сумма на step1 больше 9 нужно проделать step1 с полученной суммой
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    let strNum = num.toString();
    let sum = 0;
    for (let i = 0; i < strNum.length; i++)
    {
        sum += Number(strNum[i]);
    }

    let strSum = sum.toString();
    do
    {  
        strSum = sum.toString();
        sum = 0;
        for (let i = 0; i < strSum.length; i++)
        {
            sum += Number(strSum[i]);
        } 

    }
    while (sum > 9);

    return sum;
}


/**
 * Возвращает true если переданная строка представляет собой правильную скобочную
 * структура, если нет -false
 * Правильная скобочная структура состоит из соответствующих закрывающихся,
 * открывающихся фигурных скобок, стоящих на соответствующих местях.
 * Скобочная последовательность может содержать:  [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++)
    {
        if ((str[i] == '[') || (str[i] == '(') || (str[i] == '{') || (str[i] == '<'))
        {
            stack.push(str[i]);
        }
        else
        {
            if (stack.length == 0)
            {
                return false;
            }

            let match = stack.pop();
            if (!((str[i] == ']') && (match == '[')))
            {
                if (!((str[i] == ')') && (match == '(')))
                {
                    if (!((str[i] == '}') && (match == '{')))
                    {
                        if (!((str[i] == '>') && (match == '<')))
                        {
                            return false;
                        }
                    }
                }
            } 
            
        }
    }
    if (stack.length != 0)
    {
        return false;
    }
    return true;
}


/**
 * Возвращает строку, составленной на основе периода от переданного начала и конца периода
 * Конечная строка должна удовлетворять следующим правилам:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    let date = endDate - startDate;
    let sec = 1000;
    let min = 60 * sec;
    let hour = 60 * min;
    let day = 24 * hour;
    let month = 30 * day;
    let year = 12 * month;

    if (date <= 45 * sec) 
    { 
        return 'a few seconds ago';
    }
    if ((date > 45 * sec) && (date <= 90 * sec))
    { 
        return 'a minute ago';
    }
    if ((date > 90 * sec) && (date <= 45 * min)) 
    {
        return Math.round((date - 0.001) / min) + ' minutes ago';
    }
    if ((date > 45 * min) && (date <= 90 * min)) 
    { 
        return 'an hour ago';
    }
    if ((date > 90 * min) && (date <= 22 * hour))
    {
        return Math.round((date - 0.001) / hour) + ' hours ago';
    }
    if ((date > 22 * hour) && (date <= 36 * hour))
    { 
        return 'a day ago';
    }
    if ((date > 36 * hour) && (date <= 25 * day))
    { 
        return Math.round((date - 0.001) / day) + ' days ago';
    }
    if ((date > 25 * day) && (date <= 45 * day))
    { 
        return 'a month ago';
    }
    if ((date > 45 * day) && (date <= 345*day))
    {
        return Math.round((date - 0.001) / month) + ' months ago';
    }
    if ((date > 345 * day) && (date <= 545 * day))
    { 
        return 'a year ago';
    }
    if (date > 545 * day)
    {
        return Math.round((date - 0.001) / year) + ' years ago';
    }
}

/**
 * Вернуть строку с представление числа в n-ой (бинарной, десятичной, и т.д., где n<=10) системе исчисления.
 * Более подробное описание
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    let result = []; 
    while (num != 0)
    {
        let digit = num % n;
        result.unshift(digit.toString());
        num = Math.floor(num / n);
    }
    return result.join('');
}


/**
 * Возбращает общий путь к директории из всех путей переданных в массиве
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    let toCompare = pathes[0];
    for (let i = 1; i < pathes.length; i++)
    {
        let j = 0;
        let commonTemp = '';
        while (toCompare[j] == pathes[i][j])
        {
            commonTemp += toCompare[j];
            j++;
        }
        if (j == 0)
        {
            return '';
        }
        toCompare = commonTemp;
    }
    let j = toCompare.length - 1;
    while ((j >= 0) && (toCompare[j] != '/'))
    {
        toCompare = toCompare.substring(0, j);
        j--;
    }
    return toCompare;
}


/**
 * Возвращает произведение двух переданных матриц.
 * Более подробное описание: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    let rowsM1 = m1.length; 
    let colsM1 = m1[0].length;
    let rowsM2 = m2.length;
    let colsM2 = m2[0].length;
    let matrix = [];
    if (colsM1 != rowsM2) return false;
    for (let i = 0; i < rowsM1; i++)
    {
        matrix[i] = [];
    }
    for (let k = 0; k < colsM2; k++) 
    {
        for (let i = 0; i < rowsM1; i++) 
        {
            let curSum = 0;
            for (let j = 0; j < rowsM2; j++)
            {
                curSum += m1[i][j] * m2[j][k];
            }
            matrix[i][k] = curSum;
        }
    }
    return matrix;
}


/**
 * Возвращает результат игры крестики-нолики для текущих позиций 'X', 'O'
 * Более подробное описание: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Позиции X и O представлены в виде матрицы 3x3 cо значениями: 'X','0', undefined
 * Функция должна возвращать победиля игры по текущей позиции.
 * Результат должен быть в виде: 'X' или '0' или undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    for (let i = 0; i < 3; i++)
    {
        let win = true;
        for (let j = 0; j < 2; j++)
        {
            if (position[i][j] != position[i][j + 1])
            {
                win = false;
                break;
            }
        }
        if ((win) && (position[i][0] != undefined))
        {
            return position[i][0];
        }
    }
    for (let j = 0; j < 3; j++)
    {
        let win = true;
        for (let i = 0; i < 2; i++)
        {
            if (position[i][j] != position[i + 1][j])
            {
                win = false;
                break;
            }
        }
        if ((win) && (position[0][j] != undefined))
        {
            return position[0][j];
        }
    }

    if ((position[0][0] != undefined) && (position[0][0] == position[1][1]) && (position[2][2] == position[1][1]))
    {
        return position[0][0];
    }
    if ((position[0][2] != undefined) && (position[0][2] == position[1][1]) && (position[1][1] == position[2][0]))
    {
        return position[0][2];
    }
    return undefined;
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};
