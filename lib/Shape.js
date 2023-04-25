
class Shape {
    constructor(text, txtColor, color){
        this.text = text;
        this.txtColor = txtColor;
        this.color = color;
    } 
    getText() {
        return this.text;
    }
    getTxtColor() {
        return this.txtColor;
    }
    getColor() {
        return this.color;
    }
}

module.exports = Shape; 