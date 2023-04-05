// Import the classes from shapes.js
const { Circle, Square, Triangle } = require('./shapes');

// Circle test
describe('createLogo for Circle', () => {
    test('Should create an <svg> for a Circle shape', () => {
        const newCircle = new Circle('Circle', 'Black', 'Cir', 'Red');
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="Black" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="Red">Cir</text>
</svg>;`;
        expect(newCircle.createLogo()).toEqual(expectedSVG);
    });
});

// Square test
describe('createLogo for Square', () => {
    test('Should create an <svg> for a Square shape', () => {
        const newSquare = new Square('Square', 'Black', 'Squ', 'Red');
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="150" height="150" x="75" y="30" fill="Black" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="Red">Squ</text>
</svg>`;
        expect(newSquare.createLogo()).toEqual(expectedSVG);
    });
});

// Triangle test
describe('createLogo for Triangle', () => {
    test('Should create an <svg> for a Triangle shape', () => {
        const newTriangle = new Triangle('Triangle', 'Black', 'Tri', 'Red');
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,15 275,175 25,175" fill="Black" />
    <text x="150" y="140" font-size="60" text-anchor="middle" fill="Red">Tri</text>
</svg>`;
        expect(newTriangle.createLogo()).toEqual(expectedSVG);
    });
});