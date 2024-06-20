window.onload = () => {
    let converter = new showdown.Converter();
    let input = document.querySelector('textarea.input');
    let output = document.querySelector('div.output');

    let previousMarkdownValue;

    const convertTextToMarkdown = () => {
        let markdownText = input.value;
        previousMarkdownValue = markdownText;
        let html = converter.makeHtml(markdownText);
        output.innerHTML = html;
    }

    let didChangeOccur = () => {
        if(previousMarkdownValue != input.value) {
            return true;
        }
        return false;
    }
    
    setInterval(() => {
        if(didChangeOccur()) {
            convertTextToMarkdown();
        }
    }, 1000);
    
    input.addEventListener('input', convertTextToMarkdown);

    sharejs.open('home', 'text', (error, doc) => {
        doc.attach_textarea(input);
        convertTextToMarkdown();
    });
}