// This general class that each of the shape classes inherit
class Logo {
    constructor(shapeCol, text, textCol) {
        this.shapeCol = shapeCol;
        this.text = text;
        this.textCol = textCol;
    }
}

// Circle class
class Circle extends Logo {
    constructor(shape, shapeCol, text, textCol) {
        super(shapeCol, text, textCol);
        this.shape = shape;
    }
    
    createLogo() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeCol}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
</svg>;`
    }
}

// Square Class
class Square extends Logo {
    constructor(shape, shapeCol, text, textCol) {
        super(shapeCol, text, textCol);
        this.shape = shape;
    }

    createLogo() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="150" height="150" x="75" y="30" fill="${this.shapeCol}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
</svg>`
    }
}

// Triangle Class
class Triangle extends Logo {
    constructor(shape, shapeCol, text, textCol) {
        super(shapeCol, text, textCol);
        this.shape = shape;
    }

    createLogo() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,15 275,175 25,175" fill="${this.shapeCol}" />
    <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
</svg>`
    }
}

// Exports
module.exports = {
    Circle, Square, Triangle
}