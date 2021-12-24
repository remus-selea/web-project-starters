import { createTag } from './tag.js';


function main() {
    const h1 = createTag('h1', '👋 Hello Modules!');

    document.body.appendChild(h1);
}

main();
