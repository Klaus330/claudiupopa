<template>
  <div class="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-10" />
  <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <div class="relative text-white w-5/6 xl:w-3/5 lg:w-3/4 md:w-4/5 h-3/6 rounded-xl terminal shadow-2xl">
      <div
        class="fixed w-5/6 xl:w-3/5 lg:w-3/4 md:w-4/5 rounded-t-xl px-2 py-2 bg-gray-600 flex items-end justify-end gap-2"
      >
        <span class="p-2 bg-green-400 rounded-full"></span>
        <span class="p-2 bg-yellow-400 rounded-full"></span>
        <span class="p-2 bg-red-400 rounded-full hover:bg-red-500 cursor-pointer" @click="close()"></span>
      </div>
      <div class="pt-10">
        <div id="output" class="px-3"></div>
        <p id="cli" class="px-3 mt-1 pb-2">
          <span class="prefix"
            ><span class="guest">guest</span><span class="at-symbol">@</span
            ><span class="host">claudiupopa.ro</span><span class="path">:~</span></span
          >
          <span id="currentCommand" class=""></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let emit = defineEmits(['closeTerminal'])


const data = {
  init:
    '<span class="mb">Claudiu Popa (CP) Not A Corporation. All skills reserved.</span>\n ██████╗██╗      █████╗ ██╗   ██╗██████╗ ██╗██╗   ██╗    ██████╗  ██████╗ ██████╗  █████╗ \n██╔════╝██║     ██╔══██╗██║   ██║██╔══██╗██║██║   ██║    ██╔══██╗██╔═══██╗██╔══██╗██╔══██╗\n██║     ██║     ███████║██║   ██║██║  ██║██║██║   ██║    ██████╔╝██║   ██║██████╔╝███████║\n██║     ██║     ██╔══██║██║   ██║██║  ██║██║██║   ██║    ██╔═══╝ ██║   ██║██╔═══╝ ██╔══██║\n╚██████╗███████╗██║  ██║╚██████╔╝██████╔╝██║╚██████╔╝    ██║     ╚██████╔╝██║     ██║  ██║\n ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝     ╚═╝      ╚═════╝ ╚═╝     ╚═╝  ╚═╝\n                                                                                                                                                                                                                      \n👋 Welcome to my interactive terminal.\nFor a list of available commands, type \'<span class="highlight">help</span>\'.',
  about:
    'Usage: claudiupopa [OPTIONS]\n\nOptions:\n    -w, --work              Software Developer at <a href="https://www.emag.ro" target="_blank">eMAG</a>\n    -a, --architectures     MVC, MVVM, Domain-Driven Design, Event Driven Architecture\n    -t, --tools             Laravel, Symfony, Javascript, Vue, Livewire, Docker, MySQL and many more\n    -e, --experience        2 years of professional experience\n    -p, --principles        PSR, SOLID, KISS, DRY, Design Patterns\n    -l, --learning          Currently learning microservices & AWS in depth\n    -v, --version           Latest',
  whoami:
    "💬 That is a really good question. Let's have a <a href='mailto:claudiupopa330@gmail.com'>conversation</a>.",
  banner:
    " ██████╗██╗      █████╗ ██╗   ██╗██████╗ ██╗██╗   ██╗    ██████╗  ██████╗ ██████╗  █████╗ \n██╔════╝██║     ██╔══██╗██║   ██║██╔══██╗██║██║   ██║    ██╔══██╗██╔═══██╗██╔══██╗██╔══██╗\n██║     ██║     ███████║██║   ██║██║  ██║██║██║   ██║    ██████╔╝██║   ██║██████╔╝███████║\n██║     ██║     ██╔══██║██║   ██║██║  ██║██║██║   ██║    ██╔═══╝ ██║   ██║██╔═══╝ ██╔══██║\n╚██████╗███████╗██║  ██║╚██████╔╝██████╔╝██║╚██████╔╝    ██║     ╚██████╔╝██║     ██║  ██║\n ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝     ╚═╝      ╚═════╝ ╚═╝     ╚═╝  ╚═╝\n                                                                                                                                                                                                                      ",
  email: "claudiupopa330@gmail.com",
  social:
    'linkedin        <a href="https://ro.linkedin.com/in/popa-claudiu" target="_blank">https://ro.linkedin.com/in/popa-claudiu</a>        \ngithub          <a href="https://github.com/Klaus330" target="_blank">https://github.com/Klaus330</a>',
  party:
    "\n██╗     ███████╗████████╗███████╗     ██████╗  ██████╗  ██████╗  ██████╗ ██╗\n██║     ██╔════╝╚══██╔══╝██╔════╝    ██╔════╝ ██╔═══██╗██╔═══██╗██╔═══██╗██║\n██║     █████╗     ██║   ███████╗    ██║  ███╗██║   ██║██║   ██║██║   ██║██║\n██║     ██╔══╝     ██║   ╚════██║    ██║   ██║██║   ██║██║   ██║██║   ██║╚═╝\n███████╗███████╗   ██║   ███████║    ╚██████╔╝╚██████╔╝╚██████╔╝╚██████╔╝██╗\n╚══════╝╚══════╝   ╚═╝   ╚══════╝     ╚═════╝  ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝",
};

const prefix =
  '<span class="guest">guest</span><span class="at-symbol">@</span><span class="host">claudiupopa.ro</span><span class="path">:~</span>';

let cliElement = ref();
let commandElement = ref();
let outputElement = ref();
onMounted(() => {
  cliElement.value = document.getElementById("cli");
  commandElement.value = document.getElementById("currentCommand");
  outputElement.value = document.getElementById("output");

  document.getElementById("body").addEventListener("keydown", specialTyping);
  output(initialMessage);
});

let command = "";
let forbiddenKeys = [
  "escape",
  "delete",
  "home",
  "end",
  "insert",
  "control",
  "metakey",
  "alt",
  "shift",
  "capslock",
  "arrowup",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "pageup",
  "pagedown",
];
let initialMessage = data.init;

let commands = {
  ping: () => "pong 🏓",
  claudiupopa: () => data.about,
  cp: () => data.about,
  clear: () => {
    outputElement.value.innerHTML = "";

    return "";
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
      '<span class="commad-name">fullversion</span>    <span class="command-description">See the full version of this web terminal.</span>',
      '<span class="commad-name">clear</span>          <span class="command-description">Clear the console.</span>',
    ];
  },
  whoami: () => data.whoami,
  banner: () => data.banner,
  email: () => {
    setTimeout(() => {
      window.open(`mailto:${data.email}`);
    }, 500);
    return `📮 Opening mailto:<a href="mailto:claudiupopa330@gmail.com">${data.email}</a>...`;
  },
  phone: () => {
    setTimeout(() => {
      window.open(`tel:${data.tel}...`);
    }, 500);
    return `📱 Opening tel...`;
  },
  projects: () =>
    "👨‍💻 Still curating... most projects are offline, on GitHub, or confidential.",
  social: () => data.social,
  party: () => `🎉🎉🎉\n ${data.party}\n\n🎉🎉🎉`,
  fullversion: () => {
    window.open('https://term.claudiupopa.ro')
  }
};

function close()
{
    commands["clear"]();
    document.dispatchEvent(new CustomEvent("unblockScrolling"))
    emit('closeTerminal');
    return
}

function specialTyping(e) {
  e.preventDefault();
  e.stopPropagation();
  let key = e.key.toLowerCase();
  if (key === "l" && e.ctrlKey) {
    commands["clear"]();
    return;
  }

  if (key === "tab") {
    if (command === "") {
      return;
    }

    let commandFound = findClosestCommand();
    command = commandFound != undefined ? commandFound : command;
    highlightCurrentCommand();
    render();
    return;
  }

  if (key == "backspace") {
    backspace();
    highlightCurrentCommand();
    render();
    return;
  }

  if (key == "enter") {
    if (command !== "") {
      runCommand(command);
      render();
    } else {
      renderCommandLine(command);
      clearCommandInput();
    }

    cliElement.value.scrollIntoView({
      block: "end",
      inline: "nearest",
    });
    return;
  }

  if (key === "c" && e.ctrlKey) {
    renderCommandLine(command);
    clearCommandInput();
    return;
  }

  if (forbiddenKeys.includes(key)) {
    return;
  }

  command += key;
  highlightCurrentCommand();
  render();
}

function highlightCurrentCommand() {
  if (matchesCommand() === undefined) {
    commandElement.value.classList.remove("match");
    commandElement.value.classList.add("error");
  } else {
    commandElement.value.classList.remove("error");
    commandElement.value.classList.add("match");
  }
}

function findClosestCommand() {
  let cmds = Object.keys(commands);

  return cmds.find((cmd) => cmd.startsWith(command));
}

function matchesCommand() {
  let cmds = Object.keys(commands);

  return cmds.find((cmd) => cmd === command);
}

function render() {
  commandElement.value.innerText = command;
}

function backspace() {
  command = command.slice(0, -1);
}

function runCommand(cmd) {
  renderCommandLine(cmd);

  let cmds = Object.keys(commands);

  if (cmds.includes(cmd.trim())) {
    output(commands[cmd]());
    return;
  } else {
    output(
      `<span class="error-command">${cmd}</span>: command not found. Use '<span class='highlight'>help</span>' to see the list of available commands.`
    );
  }
}

function output(output) {
  if (output == undefined || output == null || output == "") {
    return;
  }

  if (!Array.isArray(output) && !output.includes("\n")) {
    outputElement.value.appendChild(renderLine(output));
    return;
  }

  let lines = Array.isArray(output)
    ? output
    : output.split("\n").filter((el) => el !== "");

  lines.forEach((line) => {
    outputElement.value.appendChild(renderLine(line));
  });
}

function renderCommandLine(cmd) {
  outputElement.value.appendChild(renderLine(`${prefix} ${cmd}`));

  command = "";
}

function renderLine(message) {
  let p = document.createElement("pre");
  p.innerHTML = addSpaces(message);

  return p;
}

function clearCommandInput() {
  command = "";
  render();
}

function addSpaces(text) {
  let newMessage = "";

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      newMessage += "&nbsp;&nbsp;";
      i++;
    } else {
      newMessage += text.charAt(i);
    }
  }

  return newMessage;
}
</script>

<style>
.red {
  color: red;
}
.terminal {
  background-color: #2e3440;
  font-family: cursor, monospace;
  overflow-x: hidden;
  color: #d2d1e5;
}
#currentCommand {
  animation: blink 1s infinite;
  border-right: 10px solid #e5e9f1;
  margin: 0;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
#cli {
  font-family: cursor, monospace;
  font-size: 1rem;
  margin: 0;
}

.prefix {
  margin-right: 0.3rem;
}
pre {
  font-size: 1rem;
  margin: 0;
}

pre:has(> span.mb) {
  margin-bottom: 1rem;
}

.highlight {
  color: #88c0d0;
}

.commad-name {
  color: #81a2c1;
}

a {
  color: #b48ead;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.commad-description {
  color: #e5e9f1;
}

.error-command {
  color: #bf616a;
}

#currentCommand.error {
  color: #bf616a;
}

#currentCommand.match {
  color: #a3be8c;
}

.guest {
  color: #81a2c1;
}

.host {
  color: #ebcb8a;
}
.terminal::-webkit-scrollbar {
  display: none;
}

.terminal a {
  color: #b48ead;
  text-decoration: none;
}
</style>
