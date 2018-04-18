'use strict';

/********************************************************************************************
 *                                                                                          *
 * Перед началом работы с заданием, пожалуйста ознакомьтесь с туториалом:                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield        *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Возвращает последовательность строк песни «99 бутылок пива»:
 *
 *  '99 bottles of beer on the wall, 99 bottles of beer.'
 *  'Take one down and pass it around, 98 bottles of beer on the wall.'
 *  '98 bottles of beer on the wall, 98 bottles of beer.'
 *  'Take one down and pass it around, 97 bottles of beer on the wall.'
 *  ...
 *  '1 bottle of beer on the wall, 1 bottle of beer.'
 *  'Take one down and pass it around, no more bottles of beer on the wall.'
 *  'No more bottles of beer on the wall, no more bottles of beer.'
 *  'Go to the store and buy some more, 99 bottles of beer on the wall.'
 *
 *  Перевод:
 *  '<количество> бутылок пива на стене'
 *  '<количество> бутылок пива!'
 *  'Возьми одну, пусти по кругу'
 *  '<количество минус 1> бутылок пива на стене!'
 *  ...
 *  'Нет бутылок пива на стене!'
 *  'Нет бутылок пива!'
 *  'Пойди в магазин и купи ещё'
 *  '99 бутылок пива на стене!'
 *
 * Полный текст песни
 * http://99-bottles-of-beer.net/lyrics.html
 *
 * Замечание: Попробуй закончить задание быстрее чем закончится песня:
 * https://www.youtube.com/watch?v=Z7bmyjxJuVY   :)
 *
 *
 * @return {Iterable.<string>}
 *
 */
function* get99BottlesOfBeer() {
    let song =  '99 bottles of beer on the wall, 99 bottles of beer.\n' +
                'Take one down and pass it around, 98 bottles of beer on the wall.\n' +
                '98 bottles of beer on the wall, 98 bottles of beer.\n' +
                'Take one down and pass it around, 97 bottles of beer on the wall.\n' +
                '97 bottles of beer on the wall, 97 bottles of beer.\n' +
                'Take one down and pass it around, 96 bottles of beer on the wall.\n' +
                '96 bottles of beer on the wall, 96 bottles of beer.\n' +
                'Take one down and pass it around, 95 bottles of beer on the wall.\n' +
                '95 bottles of beer on the wall, 95 bottles of beer.\n' +
                'Take one down and pass it around, 94 bottles of beer on the wall.\n' +
                '94 bottles of beer on the wall, 94 bottles of beer.\n' +
                'Take one down and pass it around, 93 bottles of beer on the wall.\n' +
                '93 bottles of beer on the wall, 93 bottles of beer.\n' +
                'Take one down and pass it around, 92 bottles of beer on the wall.\n' +
                '92 bottles of beer on the wall, 92 bottles of beer.\n' +
                'Take one down and pass it around, 91 bottles of beer on the wall.\n' +
                '91 bottles of beer on the wall, 91 bottles of beer.\n' +
                'Take one down and pass it around, 90 bottles of beer on the wall.\n' +
                '90 bottles of beer on the wall, 90 bottles of beer.\n' +
                'Take one down and pass it around, 89 bottles of beer on the wall.\n' +
                '89 bottles of beer on the wall, 89 bottles of beer.\n' +
                'Take one down and pass it around, 88 bottles of beer on the wall.\n' +
                '88 bottles of beer on the wall, 88 bottles of beer.\n' +
                'Take one down and pass it around, 87 bottles of beer on the wall.\n' +
                '87 bottles of beer on the wall, 87 bottles of beer.\n' +
                'Take one down and pass it around, 86 bottles of beer on the wall.\n' +
                '86 bottles of beer on the wall, 86 bottles of beer.\n' +
                'Take one down and pass it around, 85 bottles of beer on the wall.\n' +
                '85 bottles of beer on the wall, 85 bottles of beer.\n' +
                'Take one down and pass it around, 84 bottles of beer on the wall.\n' +
                '84 bottles of beer on the wall, 84 bottles of beer.\n' +
                'Take one down and pass it around, 83 bottles of beer on the wall.\n' +
                '83 bottles of beer on the wall, 83 bottles of beer.\n' +
                'Take one down and pass it around, 82 bottles of beer on the wall.\n' +
                '82 bottles of beer on the wall, 82 bottles of beer.\n' +
                'Take one down and pass it around, 81 bottles of beer on the wall.\n' +
                '81 bottles of beer on the wall, 81 bottles of beer.\n' +
                'Take one down and pass it around, 80 bottles of beer on the wall.\n' +
                '80 bottles of beer on the wall, 80 bottles of beer.\n' +
                'Take one down and pass it around, 79 bottles of beer on the wall.\n' +
                '79 bottles of beer on the wall, 79 bottles of beer.\n' +
                'Take one down and pass it around, 78 bottles of beer on the wall.\n' +
                '78 bottles of beer on the wall, 78 bottles of beer.\n' +
                'Take one down and pass it around, 77 bottles of beer on the wall.\n' +
                '77 bottles of beer on the wall, 77 bottles of beer.\n' +
                'Take one down and pass it around, 76 bottles of beer on the wall.\n' +
                '76 bottles of beer on the wall, 76 bottles of beer.\n' +
                'Take one down and pass it around, 75 bottles of beer on the wall.\n' +
                '75 bottles of beer on the wall, 75 bottles of beer.\n' +
                'Take one down and pass it around, 74 bottles of beer on the wall.\n' +
                '74 bottles of beer on the wall, 74 bottles of beer.\n' +
                'Take one down and pass it around, 73 bottles of beer on the wall.\n' +
                '73 bottles of beer on the wall, 73 bottles of beer.\n' +
                'Take one down and pass it around, 72 bottles of beer on the wall.\n' +
                '72 bottles of beer on the wall, 72 bottles of beer.\n' +
                'Take one down and pass it around, 71 bottles of beer on the wall.\n' +
                '71 bottles of beer on the wall, 71 bottles of beer.\n' +
                'Take one down and pass it around, 70 bottles of beer on the wall.\n' +
                '70 bottles of beer on the wall, 70 bottles of beer.\n' +
                'Take one down and pass it around, 69 bottles of beer on the wall.\n' +
                '69 bottles of beer on the wall, 69 bottles of beer.\n' +
                'Take one down and pass it around, 68 bottles of beer on the wall.\n' +
                '68 bottles of beer on the wall, 68 bottles of beer.\n' +
                'Take one down and pass it around, 67 bottles of beer on the wall.\n' +
                '67 bottles of beer on the wall, 67 bottles of beer.\n' +
                'Take one down and pass it around, 66 bottles of beer on the wall.\n' +
                '66 bottles of beer on the wall, 66 bottles of beer.\n' +
                'Take one down and pass it around, 65 bottles of beer on the wall.\n' +
                '65 bottles of beer on the wall, 65 bottles of beer.\n' +
                'Take one down and pass it around, 64 bottles of beer on the wall.\n' +
                '64 bottles of beer on the wall, 64 bottles of beer.\n' +
                'Take one down and pass it around, 63 bottles of beer on the wall.\n' +
                '63 bottles of beer on the wall, 63 bottles of beer.\n' +
                'Take one down and pass it around, 62 bottles of beer on the wall.\n' +
                '62 bottles of beer on the wall, 62 bottles of beer.\n' +
                'Take one down and pass it around, 61 bottles of beer on the wall.\n' +
                '61 bottles of beer on the wall, 61 bottles of beer.\n' +
                'Take one down and pass it around, 60 bottles of beer on the wall.\n' +
                '60 bottles of beer on the wall, 60 bottles of beer.\n' +
                'Take one down and pass it around, 59 bottles of beer on the wall.\n' +
                '59 bottles of beer on the wall, 59 bottles of beer.\n' +
                'Take one down and pass it around, 58 bottles of beer on the wall.\n' +
                '58 bottles of beer on the wall, 58 bottles of beer.\n' +
                'Take one down and pass it around, 57 bottles of beer on the wall.\n' +
                '57 bottles of beer on the wall, 57 bottles of beer.\n' +
                'Take one down and pass it around, 56 bottles of beer on the wall.\n' +
                '56 bottles of beer on the wall, 56 bottles of beer.\n' +
                'Take one down and pass it around, 55 bottles of beer on the wall.\n' +
                '55 bottles of beer on the wall, 55 bottles of beer.\n' +
                'Take one down and pass it around, 54 bottles of beer on the wall.\n' +
                '54 bottles of beer on the wall, 54 bottles of beer.\n' +
                'Take one down and pass it around, 53 bottles of beer on the wall.\n' +
                '53 bottles of beer on the wall, 53 bottles of beer.\n' +
                'Take one down and pass it around, 52 bottles of beer on the wall.\n' +
                '52 bottles of beer on the wall, 52 bottles of beer.\n' +
                'Take one down and pass it around, 51 bottles of beer on the wall.\n' +
                '51 bottles of beer on the wall, 51 bottles of beer.\n' +
                'Take one down and pass it around, 50 bottles of beer on the wall.\n' +
                '50 bottles of beer on the wall, 50 bottles of beer.\n' +
                'Take one down and pass it around, 49 bottles of beer on the wall.\n' +
                '49 bottles of beer on the wall, 49 bottles of beer.\n' +
                'Take one down and pass it around, 48 bottles of beer on the wall.\n' +
                '48 bottles of beer on the wall, 48 bottles of beer.\n' +
                'Take one down and pass it around, 47 bottles of beer on the wall.\n' +
                '47 bottles of beer on the wall, 47 bottles of beer.\n' +
                'Take one down and pass it around, 46 bottles of beer on the wall.\n' +
                '46 bottles of beer on the wall, 46 bottles of beer.\n' +
                'Take one down and pass it around, 45 bottles of beer on the wall.\n' +
                '45 bottles of beer on the wall, 45 bottles of beer.\n' +
                'Take one down and pass it around, 44 bottles of beer on the wall.\n' +
                '44 bottles of beer on the wall, 44 bottles of beer.\n' +
                'Take one down and pass it around, 43 bottles of beer on the wall.\n' +
                '43 bottles of beer on the wall, 43 bottles of beer.\n' +
                'Take one down and pass it around, 42 bottles of beer on the wall.\n' +
                '42 bottles of beer on the wall, 42 bottles of beer.\n' +
                'Take one down and pass it around, 41 bottles of beer on the wall.\n' +
                '41 bottles of beer on the wall, 41 bottles of beer.\n' +
                'Take one down and pass it around, 40 bottles of beer on the wall.\n' +
                '40 bottles of beer on the wall, 40 bottles of beer.\n' +
                'Take one down and pass it around, 39 bottles of beer on the wall.\n' +
                '39 bottles of beer on the wall, 39 bottles of beer.\n' +
                'Take one down and pass it around, 38 bottles of beer on the wall.\n' +
                '38 bottles of beer on the wall, 38 bottles of beer.\n' +
                'Take one down and pass it around, 37 bottles of beer on the wall.\n' +
                '37 bottles of beer on the wall, 37 bottles of beer.\n' +
                'Take one down and pass it around, 36 bottles of beer on the wall.\n' +
                '36 bottles of beer on the wall, 36 bottles of beer.\n' +
                'Take one down and pass it around, 35 bottles of beer on the wall.\n' +
                '35 bottles of beer on the wall, 35 bottles of beer.\n' +
                'Take one down and pass it around, 34 bottles of beer on the wall.\n' +
                '34 bottles of beer on the wall, 34 bottles of beer.\n' +
                'Take one down and pass it around, 33 bottles of beer on the wall.\n' +
                '33 bottles of beer on the wall, 33 bottles of beer.\n' +
                'Take one down and pass it around, 32 bottles of beer on the wall.\n' +
                '32 bottles of beer on the wall, 32 bottles of beer.\n' +
                'Take one down and pass it around, 31 bottles of beer on the wall.\n' +
                '31 bottles of beer on the wall, 31 bottles of beer.\n' +
                'Take one down and pass it around, 30 bottles of beer on the wall.\n' +
                '30 bottles of beer on the wall, 30 bottles of beer.\n' +
                'Take one down and pass it around, 29 bottles of beer on the wall.\n' +
                '29 bottles of beer on the wall, 29 bottles of beer.\n' +
                'Take one down and pass it around, 28 bottles of beer on the wall.\n' +
                '28 bottles of beer on the wall, 28 bottles of beer.\n' +
                'Take one down and pass it around, 27 bottles of beer on the wall.\n' +
                '27 bottles of beer on the wall, 27 bottles of beer.\n' +
                'Take one down and pass it around, 26 bottles of beer on the wall.\n' +
                '26 bottles of beer on the wall, 26 bottles of beer.\n' +
                'Take one down and pass it around, 25 bottles of beer on the wall.\n' +
                '25 bottles of beer on the wall, 25 bottles of beer.\n' +
                'Take one down and pass it around, 24 bottles of beer on the wall.\n' +
                '24 bottles of beer on the wall, 24 bottles of beer.\n' +
                'Take one down and pass it around, 23 bottles of beer on the wall.\n' +
                '23 bottles of beer on the wall, 23 bottles of beer.\n' +
                'Take one down and pass it around, 22 bottles of beer on the wall.\n' +
                '22 bottles of beer on the wall, 22 bottles of beer.\n' +
                'Take one down and pass it around, 21 bottles of beer on the wall.\n' +
                '21 bottles of beer on the wall, 21 bottles of beer.\n' +
                'Take one down and pass it around, 20 bottles of beer on the wall.\n' +
                '20 bottles of beer on the wall, 20 bottles of beer.\n' +
                'Take one down and pass it around, 19 bottles of beer on the wall.\n' +
                '19 bottles of beer on the wall, 19 bottles of beer.\n' +
                'Take one down and pass it around, 18 bottles of beer on the wall.\n' +
                '18 bottles of beer on the wall, 18 bottles of beer.\n' +
                'Take one down and pass it around, 17 bottles of beer on the wall.\n' +
                '17 bottles of beer on the wall, 17 bottles of beer.\n' +
                'Take one down and pass it around, 16 bottles of beer on the wall.\n' +
                '16 bottles of beer on the wall, 16 bottles of beer.\n' +
                'Take one down and pass it around, 15 bottles of beer on the wall.\n' +
                '15 bottles of beer on the wall, 15 bottles of beer.\n' +
                'Take one down and pass it around, 14 bottles of beer on the wall.\n' +
                '14 bottles of beer on the wall, 14 bottles of beer.\n' +
                'Take one down and pass it around, 13 bottles of beer on the wall.\n' +
                '13 bottles of beer on the wall, 13 bottles of beer.\n' +
                'Take one down and pass it around, 12 bottles of beer on the wall.\n' +
                '12 bottles of beer on the wall, 12 bottles of beer.\n' +
                'Take one down and pass it around, 11 bottles of beer on the wall.\n' +
                '11 bottles of beer on the wall, 11 bottles of beer.\n' +
                'Take one down and pass it around, 10 bottles of beer on the wall.\n' +
                '10 bottles of beer on the wall, 10 bottles of beer.\n' +
                'Take one down and pass it around, 9 bottles of beer on the wall.\n' +
                '9 bottles of beer on the wall, 9 bottles of beer.\n' +
                'Take one down and pass it around, 8 bottles of beer on the wall.\n' +
                '8 bottles of beer on the wall, 8 bottles of beer.\n' +
                'Take one down and pass it around, 7 bottles of beer on the wall.\n' +
                '7 bottles of beer on the wall, 7 bottles of beer.\n' +
                'Take one down and pass it around, 6 bottles of beer on the wall.\n' +
                '6 bottles of beer on the wall, 6 bottles of beer.\n' +
                'Take one down and pass it around, 5 bottles of beer on the wall.\n' +
                '5 bottles of beer on the wall, 5 bottles of beer.\n' +
                'Take one down and pass it around, 4 bottles of beer on the wall.\n' +
                '4 bottles of beer on the wall, 4 bottles of beer.\n' +
                'Take one down and pass it around, 3 bottles of beer on the wall.\n' +
                '3 bottles of beer on the wall, 3 bottles of beer.\n' +
                'Take one down and pass it around, 2 bottles of beer on the wall.\n' +
                '2 bottles of beer on the wall, 2 bottles of beer.\n' +
                'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
                '1 bottle of beer on the wall, 1 bottle of beer.\n' +
                'Take one down and pass it around, no more bottles of beer on the wall.\n' +
                'No more bottles of beer on the wall, no more bottles of beer.\n' + 
                'Go to the store and buy some more, 99 bottles of beer on the wall.';

    let songRegExp = new RegExp('\n[\s\t]*');
    yield* song.split(songRegExp);
}


/**
 * Возвращает последовательность Фибоначчи:
 *   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
 *
 * Подробности: https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @return {Iterable.<number>}
 *
 */
function* getFibonacciSequence() {
    let fn1 = 0;
    let fn2 = 1;
    while (true) 
    {  
        let current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        yield current;
    }
}


/**
 * Обход дерева с использованием поиска в глубину
 * Подробности: https://en.wikipedia.org/wiki/Depth-first_search
 *
 * У каждого узла(node) есть потомки (child) записанные в массив node.children
 * Листья не содержат потомков, т.е. у них отсутствует свойство 'children'
 *
 * @params {object} корень дерева
 * @return {Iterable.<object>} последовательность всех вершин в порядке поиска в глубину
 * @example
 *
 *   var node1 = { n:1 }, node2 = { n:2 }, node3 = { n:3 }, node4 = { n:4 },
 *       node5 = { n:5 }, node6 = { n:6 }, node7 = { n:7 }, node8 = { n:8 };
 *   node1.children = [ node2, node6, node7 ];
 *   node2.children = [ node3, node4 ];
 *   node4.children = [ node5 ];
 *   node7.children = [ node8 ];
 *
 *     source tree (root = 1):
 *            1
 *          / | \
 *         2  6  7
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       3   4     8
 *           |
 *           5
 *
 *  depthTraversalTree(node1) => node1, node2, node3, node4, node5, node6, node7, node8
 *
 */
function* depthTraversalTree(root) {
    let stack = [];
    stack.push(root);
    let current = 0;
    while (stack.length > 0) {
        current = stack.pop();
        yield current;
        if ('children' in current) {
            for (let i = current.children.length - 1; i >= 0 ; i--) {
                stack.push(current.children[i]);
            }
        }
    }
    
}


/**
 * Обход дерева с использованием поиска в ширину
 * Подробности: https://en.wikipedia.org/wiki/Breadth-first_search
 *
 * У каждого узла(node) есть потомки (child) записанные в массив node.children
 * Листья не содержат потомков, т.е. у них отсутствует свойство 'children'
 *
 * @params {object} корень дерева
 * @return {Iterable.<object>} последовательность всех вершин в порядке поиска в ширину
 * @example
 *     source tree (root = 1):
 *
 *            1
 *          / | \
 *         2  3  4
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       5   6     7
 *           |
 *           8
 *
 */
function* breadthTraversalTree(root) {
    let queue = [];
    let current;
    let index = 0;
    queue.unshift(root);
    while (queue.length  > index) {
        current = queue[index];
        yield current;
        if('children' in current) {
            current.children.forEach(function(value){
                queue.push(value);        
            });    
        }
        index++;
    }
}


/**
 * Слияние двух отсортированных последовательностей в одну.
 * Результат содержит все элементы объединенных последовательносте в отсортированном виде
 *
 * @params {Iterable.<number>} source1
 * @params {Iterable.<number>} source2
 * @return {Iterable.<number>} объединенная отсотрированная последовательность
 *
 * @example
 *   [ 1, 3, 5, ... ], [2, 4, 6, ... ]  => [ 1, 2, 3, 4, 5, 6, ... ]
 *   [ 0 ], [ 2, 4, 6, ... ]  => [ 0, 2, 4, 6, ... ]
 *   [ 1, 3, 5, ... ], [ -1 ] => [ -1, 1, 3, 5, ...]
 */
function* mergeSortedSequences(source1, source2) {
    let s1 = source1();
    let s2 = source2();

    let prev = s1.next();
    let next = s2.next();

    while (1) {
        if (prev.value === undefined || next.value === undefined) break;

        if (prev.value < next.value) {
            yield prev.value;
            prev = s1.next();
            continue;
        }
        else {
            yield next.value;
            next = s2.next();
            continue;
        }    
    }
    
    while (prev.value !== undefined) {
        yield prev.value;
        prev = s1.next();
        continue;
    }

    while (next.value !== undefined) {
        yield next.value;
        next = s2.next();
        continue;
    }

}


module.exports = {
    get99BottlesOfBeer: get99BottlesOfBeer,
    getFibonacciSequence: getFibonacciSequence,
    depthTraversalTree: depthTraversalTree,
    breadthTraversalTree: breadthTraversalTree,
    mergeSortedSequences: mergeSortedSequences
};
