import * as showdown from 'showdown';

window.onload = () => {
    let converter = new showdown.Converter();
    let input = document.querySelector('textarea.left');
    let output = doucment.querySelector('textarea.right');

    const convertTextToMarkdown = () => {
        let markdownText = input.value;
        let html = converter.makeHtml(markdownText);
        output.innerHTML = html;
    }

    input.addEventListener('input', convertTextToMarkdown);

    convertTextToMarkdown();
}