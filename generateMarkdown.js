function generateMarkdown(answer) {
    return `# ${answer.name} 
    ----------------------------------
    ## ${answer.username}
    --
    ## ${answer.description}
    --
    ## ${answer.built}
    --
    ## ${answer.contributors}
    --
    ## ${answer.usage}
    `;
    }
    
    module.exports = generateMarkdown;
