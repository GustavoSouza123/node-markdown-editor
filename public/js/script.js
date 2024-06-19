window.onload = () => {
    let converter = new showdown.Converter();
    let input = document.querySelector('textarea.input');
    let output = document.querySelector('div.output');

    const convertTextToMarkdown = () => {
        let markdownText = input.value;
        let html = converter.makeHtml(markdownText);
        output.innerHTML = html;
    }

    input.addEventListener('input', convertTextToMarkdown);

    convertTextToMarkdown();
}