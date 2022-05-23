import figlet from 'figlet';
import gradient from 'gradient-string';
import {data} from './data.js';
import terminalLink from 'terminal-link';

const figletOptions = {
    font: 'colossal',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
};

const title = figlet.textSync('Azhariel', figletOptions)
const subtitleColor = gradient.vice;


export function writeInfo(infos){
    console.log(gradient.instagram.multiline(title));
    for (let info of Object.entries(infos)){
        if (info[0] === 'github') {
            console.log(`${subtitleColor(`${info[0]}:`)} ${terminalLink(info[1], `https://github.com/${info[1]}`)}`);
        } else if (info[0] === 'linkedin') {
            console.log(`${subtitleColor(`${info[0]}:`)} ${terminalLink(info[1], `https://linkedin.com/in/${info[1]}`)}`);
        } else {
        console.log(`${subtitleColor(`${info[0]}:`)} ${info[1]}`);
    }
    }
}
