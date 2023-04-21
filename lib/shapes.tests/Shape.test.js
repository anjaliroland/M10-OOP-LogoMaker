const Shape = require('../shapes/Shape');

describe('Shape', () => {
    describe('shape instance', () => {
        it('should return a new shape as an object', () => {
            const e = new Shape();
            expect(typeof(e)).toEqual('object');
        })
    })
    // test for text
    describe('text input', () => {
        it('should be able to set text via constructor arguments', () => {
            const text = 'jam';
            const e = new Shape(text);
            expect(e.text).toEqual(text);
        })
    })
    // describe('text type', () => {
    //     it('should take in a string for logo', () => {
    //         const e = new Shape(text);
    //         expect(typeof(e)).toEqual('string');
    //     })
    // })
    // describe('text length', () => {
    //     it('should return false if more than 3 characters', () => {
    //         const e = new Shape(text);
    //         const result = (e > 3);
    //         expect(result).toEqual(false);
    //     })
    // })
    describe('getText', () => {
        it('should be able to get text via getText()', () => {
            const value = 'bob';
            const e = new Shape(value);
            expect(e.getText()).toEqual(value);
        })
    })


    // test for text color
    describe('txtColor input', () => {
        it('should be able to set txtColor via constructor arguments', () => {
            const txtColor = 'blue';
            const e = new Shape('text', txtColor);
            expect(e.txtColor).toEqual(txtColor);
        })
    })
    describe('getTxtColor', () => {
        it('should be able to get txtColor via getTxtColor()', () => {
            const value = 'orange';
            const e = new Shape('txt', (value));
            expect(e.getTxtColor()).toEqual(value);
        })
    })


    // test for color of shape
    describe('shape input', () => {
        it('should be able to set color via constructor arguments', () => {
            const color = 'red';
            const e = new Shape('txt', 'txtColor', color);
            expect(e.color).toEqual(color);
        })
    })

    describe('getColor', () => {
        it('should be able to get color via getColor()', () => {
            const value = 'purple';
            const e = new Shape('txt', 'txtColor', (value));
            expect(e.getColor()).toEqual(value);
        })
    })
})