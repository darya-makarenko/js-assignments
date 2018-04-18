'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Перед началом работы с заданием, пожалуйста ознакомьтесь с туториалом:                         *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Возвращает объект Прямоугольник (rectangle) с параметрами высота (height) и ширина (width)
 * и методом getArea(), который возвращает площадь
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    var r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) 
{
    this.width = width;
    this.height = height;    
}

Rectangle.prototype.getArea = function()
{
    return this.height * this.width;
}


/**
 * Возвращает JSON представление объекта
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
    return JSON.stringify(obj);
}


/**
 * Возвращает объект указанного типа из представления JSON
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    var r = fromJSON(Rectangle.prototype, '{"width":10, "height":20}');
 *
 */
function fromJSON(proto, json) {
    let rec = Object.setPrototypeOf(JSON.parse(json), proto);
    return rec;
}


/**
 * Создатель css селекторов
 *
 * Каждый комплексый селектор может состоять из эелемента, id, класса, атрибута, псевдо-класса и
 * псевдо-элемента
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Может быть несколько вхождений
 *
 * Любые варианты селекторов могут быть скомбинированы с помощью ' ','+','~','>' .
 *
 * Задача состоит в том, чтобы создать отдельный класс, независимые классы или
 * иерархию классов и реализовать функциональность
 * для создания селекторов css с использованием предоставленного cssSelectorBuilder.
 * Каждый селектор должен иметь метод stringify ()
 * для вывода строкового представления в соответствии с спецификацией css.
 *
 * Созданный cssSelectorBuilder должен использоваться как фасад
 * только для создания ваших собственных классов,
 * например, первый метод cssSelectorBuilder может быть таким:
 *
 * Дизайн класса(ов) полностью зависит от вас,
 * но постарайтесь сделать его максимально простым, понятным и читаемым насколько это возможно.
 *
 * @example
 *
 *  var builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()  => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()  => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()        =>    'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  Если нужно больше примеров - можете посмотреть юнит тесты.
 */

const cssSelectorBuilder = {
    result: '',
    order: [
        false, //element
        false, //id
        false, //class
        false, //attr
        false, //pseudoClass
        false, //pseudoElement
    ],

    checkOrder: function (n) {
        let currentOrder = this.order.slice(n + 1);

        let isOrderRight = currentOrder.some(function (isAdded) {
            return isAdded;
        });

        if (isOrderRight) {
            throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
        }

        this.order[n] = true;
    },

    createNewInstance: function (property) {
        let obj = {};
        Object.assign(obj, this);
        obj.order = this.order.slice();

        if (property) {
            obj[property] = function () {
                throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
            };
        }

        this.result = '';
        this.order.fill(false);
        return obj;
    },

    element: function (value) {
        this.checkOrder(0);
        this.result += value;

        return this.createNewInstance('element');
    },

    id: function (value) {
        this.checkOrder(1);
        this.result += `#${value}`;

        return this.createNewInstance('id');
    },

    class: function (value) {
        this.checkOrder(2);
        this.result += `.${value}`;

        return this.createNewInstance();
    },

    attr: function (value) {
        this.checkOrder(3);
        this.result += `[${value}]`;

        return this.createNewInstance();
    },

    pseudoClass: function (value) {
        this.checkOrder(4);
        this.result += `:${value}`;

        return this.createNewInstance();
    },

    pseudoElement: function (value) {
        this.checkOrder(5);
        this.result += `::${value}`;

        return this.createNewInstance('pseudoElement');
    },

    combine: function (selector1, combinator, selector2) {
        this.result = selector1.stringify() + ' ' + combinator + ' ' + selector2.stringify();

        return this.createNewInstance();
    },

    stringify: function () {
        return this.result;
    }

};


module.exports = {
    Rectangle: Rectangle,
    getJSON: getJSON,
    fromJSON: fromJSON,
    cssSelectorBuilder: cssSelectorBuilder
};
