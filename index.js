import data from './data.json' assert {type: 'json'}

const prefix = "<span class=\"guest\">guest</span><span class=\"at-symbol\">@</span><span class=\"host\">claudiupopa.ro</span><span class=\"path\">:~</span>"
let cliElement = document.getElementById('cli');
let commandElement = document.getElementById('currentCommand');
let outputElement = document.getElementById('output')
let command = "";
let forbiddenKeys = ['escape', 'delete', 'home', 'end', 'insert', 'control', 'metakey', 'alt', 'shift', 'capslock', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'pageup', 'pagedown']
let initialMessage = navigator.userAgentData.mobile ? data.initMobile : data.initDesktop

let historyManager = {
    commands: [],
    manage: function () {
        this.commands.push(command)
        this.position = this.commands.length
    },
    position: 0,
    previous: function() {
        if (this.position - 1 < -1) {
            return
        }

        if (this.position != 0) {
            this.position--;
        }

        return this.commands[this.position]
    },
    next: function() {
        if(this.position + 1 >= this.commands.length){
            return
        }

        this.position++;
        return this.commands[this.position]  
    }
}

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
            '<span class="commad-name" x-data @click="runCommand(`claudiupopa`)">claudiupopa</span>    <span class="command-description">Who is Claudiu?</span>',
            '<span class="commad-name"  x-data @click="runCommand(`whoami`)">whoami</span>         <span class="command-description">Who are you?</span>',
            '<span class="commad-name"  x-data @click="runCommand(`projects`)">projects</span>       <span class="command-description">See my projects.</span>',
            `<span class='commad-name'  x-data @click="runCommand('party')">party</span>          <span class="command-description">Let's get this party started.</span>`,
            '<span class="commad-name"  x-data @click="runCommand(`social`)">social</span>         <span class="command-description">Display social network.</span>',
            '<span class="commad-name"  x-data @click="runCommand(`email`)">email</span>          <span class="command-description">Send me an email.</span>',
            '<span class="commad-name"  x-data @click="runCommand(`phone`)">phone</span>          <span class="command-description">Wanna have a conversation?</span>',
            '<span class="commad-name"  x-data @click="runCommand(`ping`)">ping</span>           <span class="command-description">Pong</span>',
            '<span class="commad-name"  x-data @click="runCommand(`banner`)">banner</span>         <span class="command-description">Display my banner.</span>',
            '<span class="commad-name"  x-data @click="runCommand(`history`)">history</span>        <span class="command-description">See your commands history</span>',
            '<span class="commad-name"  x-data @click="runCommand(`life`)">life</span>           <span class="command-description">It\'s ALIVEE!!!</span>',
            '<span class="commad-name"  x-data @click="runCommand(`death`)">death</span>          <span class="command-description">Don\'t you dare to use this command!</span>',
            '<span class="commad-name"  x-data @click="runCommand(`manual`)">manual</span>         <span class="command-description">See the manual.</span>',
            '<span class="commad-name"  x-data @click="runCommand(`clear`)">clear</span>          <span class="command-description">Clear the console.</span>',
            '<span class="commad-name"  x-data @click="runCommand(`exit`)">exit</span>           <span class="command-description">See ya later!</span>',
            '<span class="commad-name"">[tab]</span>          <span class="command-description">Trigger completion.</span>',
            '<span class="commad-name"">[ctrl+l]</span>       <span class="command-description">Clear terminal.</span>',
            '<span class="commad-name"">[ctrl+c]</span>       <span class="command-description">Cancel commmand.</span>',
            '<span class="commad-name"">[ctrl+d]</span>       <span class="command-description">Start drawing.</span>',
        ]
    },
    whoami: () => data.whoami,
    banner: () => { 
        if (navigator.userAgentData.mobile) {
            return "This command is available only on desktop mode."
        }

        return data.banner
    },
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
    party: () => {
        if (navigator.userAgentData.mobile) {
            return "This command is available only on desktop mode."
        }

        return `🎉🎉🎉\n ${data.party}\n\n🎉🎉🎉`
    },
    life: () => {
        setTimeout(() => {
            document.dispatchEvent(new CustomEvent('startgameoflife'))
        }, 300)
        
        return "This is an implementation of John Conway's Game of Life. Enjoy!"
    },
    death: () => {
        setTimeout(() => {
            document.dispatchEvent(new CustomEvent('stopgameoflife'))
        })

        return "😢 You killed all of them! You nasty animal!!"
    },

    exit: () => {
        setTimeout(() => {
            window.close()
        }, 600)

        return "👋 Bye!"
    },
    history: () => historyManager.commands,
    man: (command) => {
        let argument = command.split(' ')[1]

        if (argument === undefined)
        {
            return `Usage: man COMMAND`
        }

        argument = argument.trim()
        if (data.man[argument] === undefined) {
            return `Manual for ${argument} not found.`
        }

        return `COMMAND: ${argument}${data.man[argument]}`
    }
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
            historyManager.manage()
            runCommand(command)
            render()
        }else{
            renderCommandLine(command)
            clearCommandInput()
        }

        cliElement.scrollIntoView()
        return;
    }

    if(key === 'arrowup')
    {
        command = historyManager.previous() ?? command
        render()
        return;
    } 

    if(key === 'arrowdown')
    {
        command = historyManager.next() ?? command
        render()
        return;
    } 

    if(key === 'c' && e.ctrlKey)
    {
        renderCommandLine(command)
        clearCommandInput()
        return;
    }  

    if(key === 'd' && e.ctrlKey)
    {
        document.dispatchEvent(new CustomEvent('drawingmap'))
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

function runCommand(line)
{
    renderCommandLine(line)

    let cmds = Object.keys(commands)
    
    let cmd = line.split(' ')[0].trim()

    if (cmds.includes(cmd.trim()))
    {
        output(commands[cmd](line))
        cliElement.scrollIntoView()
        return
    }else{
        output(`<span class="error-command">${cmd}</span>: command not found. Use '<span class='highlight'>help</span>' to see the list of available commands.`)
        cliElement.scrollIntoView()
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
window.runCommand = runCommand