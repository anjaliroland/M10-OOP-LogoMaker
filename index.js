const inquirer =require('inquirer')
const fs = require('fs');
const Shapes = require('./lib/shapes/Shapes');
const Circle = require('./lib/shapes/Circle');
const Square = require('./lib/shapes/Square');
const Triangle = require('./lib/shapes/Triangle');
const Colors = require('./lib/Colors');
const Text = require('./lib/Text');

const prompts =[
    {
        type: 'input',
        name: 'text',
        message: "What 3 letters do you want on your logo?"
    },
    {
        type: 'input',
        name: 'txtcolor',
        message: "What color do you want the text to be?"
    },
    {
        type: 'list',
        name: 'shape',
        message: "Select what shape you want your logo to be.",
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "What color do you want the shape of your logo to be?"
    },
];

const createSvg = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('Generated logo.svg');
        }
   }) 
};

const init = () => {
    inquirer
    .prompt(prompts)
    .then((ans) => createSvg('logo.svg', makeLogo(ans)))
    .catch((err) => console.log(err));
};

init();