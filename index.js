import data from './data.json' assert {type: 'json'}

const prefix = "<span class=\"guest\">guest</span><span class=\"at-symbol\">@</span><span class=\"host\">claudiupopa.ro</span><span class=\"path\">:~</span>"
let cliElement = document.getElementById('cli');
let commandElement = document.getElementById('currentCommand');
let outputElement = document.getElementById('output')
let command = "";
let forbiddenKeys = ['escape', 'delete', 'home', 'end', 'insert', 'control', 'metakey', 'alt', 'shift', 'capslock', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'pageup', 'pagedown']
let initialMessage = data.init

let commands = {
    ping: () => 'pong 🏓',
    claudiupopa: () => data.about,
    cp: () => data.about,
    clear: () => {
        outputElement.innerHTML = '';

        return '';
    },
    help: () => {
        return [
            '<span class="commad-name">claudiupopa</span>    <span class="command-description">Who is Claudiu?</span>',
            '<span class="commad-name">whoami</span>         <span class="command-description">Who are you?</span>',
            '<span class="commad-name">projects</span>       <span class="command-description">See my projects.</span>',
            `<span class='commad-name'>party</span>          <span class="command-description">Let's get this party started.</span>`,
            '<span class="commad-name">social</span>         <span class="command-description">Display social network.</span>',
            '<span class="commad-name">email</span>          <span class="command-description">Send me an email.</span>',
            '<span class="commad-name">phone</span>          <span class="command-description">Wanna have a conversation?</span>',
            '<span class="commad-name">ping</span>           <span class="command-description">Pong</span>',
            '<span class="commad-name">banner</span>         <span class="command-description">Display my banner.</span>',
            '<span class="commad-name">clear</span>          <span class="command-description">Clear the console.</span>',
        ]
    },
    whoami: () => data.whoami,
    banner: () => data.banner,
    email: () => {
        setTimeout(() => {
            window.open(`mailto:${data.email}`)
        }, 500)
        return `📮 Opening mailto:<a href="mailto:claudiupopa330@gmail.com">${data.email}</a>...`
    },
    phone: () => {
        setTimeout(() => {
            window.open(`tel:${data.tel}...`)
        }, 500)
        return `📱 Opening tel...`
    },
    projects: () => '👨‍💻 Still curating... most projects are offline, on GitHub, or confidential.',
    social: () => data.social,
    party: () => `🎉🎉🎉\n ${data.party}\n\n🎉🎉🎉`
}

function specialTyping(e)
{
    e.preventDefault();
    e.stopPropagation();
    let key = e.key.toLowerCase()
    if(key === 'l' && e.ctrlKey)
    {
        commands['clear']();
        return;
    }

    if(key === 'tab')
    {   
        if(command === '')
        {
            return;
        }

        let commandFound = findClosestCommand()
        command = commandFound != undefined ? commandFound : command;
        highlightCurrentCommand()
        render()
        return
    }

    if (key == 'backspace') {
        backspace()
        highlightCurrentCommand()
        render()
        return;
    }

    if (key == 'enter') {
        if(command !== ""){
            runCommand(command)
            render()
        }else{
            renderCommandLine(command)
            clearCommandInput()
        }

        cliElement.scrollIntoView()
        return;
    }

    if(key === 'c' && e.ctrlKey)
    {
        renderCommandLine(command)
        clearCommandInput()
        return;
    }  

    if(forbiddenKeys.includes(key))
    {
        return;
    }

    command += key;
    highlightCurrentCommand()
    render()
}

function highlightCurrentCommand()
{
    if(matchesCommand() === undefined)
    {
        commandElement.classList.remove('match')
        commandElement.classList.add('error')
    }else{
        commandElement.classList.remove('error')
        commandElement.classList.add('match')
    }
}

function findClosestCommand()
{
    let cmds = Object.keys(commands)

   return cmds.find(cmd => cmd.startsWith(command))
}

function matchesCommand()
{
    let cmds = Object.keys(commands)

   return cmds.find(cmd => cmd === command)
}

function render()
{
    commandElement.innerText = command;
}

function backspace()
{
    command = command.slice(0, -1)
}

function runCommand(cmd)
{
    renderCommandLine(cmd)

    let cmds = Object.keys(commands)

    if (cmds.includes(cmd.trim()))
    {
        output(commands[cmd]())
        return
    }else{
        output(`<span class="error-command">${cmd}</span>: command not found. Use '<span class='highlight'>help</span>' to see the list of available commands.`)
    }
}

function output(output)
{
    if (output == undefined || output == null || output == '')
    {
        return;
    }

    if(!Array.isArray(output) && !output.includes('\n'))
    {
        outputElement.appendChild(
            renderLine(output)
        )
        return
    }

    let lines = Array.isArray(output) ? output : output.split('\n').filter(el => el !== '')
    
    lines.forEach(line => {
        outputElement.appendChild(
            renderLine(line)
        )
    });
}

function renderCommandLine(cmd)
{
    outputElement.appendChild(
        renderLine(`${prefix} ${cmd}`)
    )

    command = "";
}

function renderLine(message)
{
    let p = document.createElement('pre');
    p.innerHTML = addSpaces(message)

    return p
}

function clearCommandInput()
{
    command = ''
    render()
}


function addSpaces(text)
{
    let newMessage = ''

    for(let i=0; i<text.length; i++)
    {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            newMessage += "&nbsp;&nbsp;";
            i++;
        } else {
            newMessage += text.charAt(i);
        }
    }

    return newMessage
}

document.getElementById('app').addEventListener('keydown', specialTyping)
output(initialMessage)