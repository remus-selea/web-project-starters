import { createTag } from './tag.js';
import webpackLogo from './images/logo.png';
import './styles/style.scss';

function main() {
    const h1 = createTag('h1', '👋 Hello Webpack!');

    document.body.appendChild(h1);

    const img = document.createElement('img');

    img.src = webpackLogo;

    document.body.append(img);
}

main();
