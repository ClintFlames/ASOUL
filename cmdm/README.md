<div align="center">
    <p>
        <div>
            <a href="https://www.npmjs.com/package/cmdm">
                <img alt="npm version" src="https://img.shields.io/npm/v/cmdm">
                <a>
                    <a href="https://www.npmjs.com/package/cmdm">
                        <img src="https://img.shields.io/npm/dt/cmdm.svg" alt="npm downloads">
                    </a>
        </div>
        <div>
            <a href="https://github.com/CFormen3000/cmdm">
                <img alt="GitHub stars" src="https://img.shields.io/github/stars/CFormen3000/cmdm?logo=github">
            </a>
        </div>
    </p>
    <p>
        <a href="https://nodei.co/npm/cmdm/">
            <img src="https://nodei.co/npm/cmdm.png?downloads=true&stars=true">
        </a>
    </p>
</div>
#cmdm cool command manager.

cmdm will allow you to lead commands.

First, connect the module.
```javascript
const cmdm = require('cmdm');
```
Next, connect the folder with commands. I created a "cmds" folder in the project folder.
```javascript
cmdm.setPath(__dirname + '/cmds');
```
I created the file " calc.js "in the" cmds " folder.
P.S. if you need to pass arguments to the command, create the exported function "run".
My code is from " calc.js":
```javascript
module.exports.run = (argument) => {
	console.log(argument / 4);
};
```
You can now add a command.
```javascript
cmdm.load('calc', 'public', 'console');
//cmdm.load(command name, type of access, type of command);
```
You can now create a function to run the command.
```javascript
const xRun = (name, int) => {
	const cmd = cmdm.get(name);
	if(cmd.access == 'public') {
		if(cmd.type == 'console') {
			cmdm.run(name, int);
		};
	};
};
xRun('calc', 64);
```
If you did everything correctly then in the console you will get "16".

[Discord Server](https://discord.gg/d4rKqZs)