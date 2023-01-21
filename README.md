# create-melvor-mod

## What is this?
A template repo ready to make MelvorIdle mods using Typescript.

## Installation
### With npm
`npm i -g npx`

`npx create-melvor-mod PROJECT_NAME_HERE`
### Manual
`git clone https://github.com/ChanceToZoinks/create-melvor-mod PROJECT_NAME_HERE && cd PROJECT_NAME_HERE`

`npm install`

Don't forget to update the namespace in `manifest.json` and name in `package.json` to match your mod's name.

If you install nwjs version 0.54.0 into you MelvorIdle install location you can also change the paths in `.vscode/launch.json` to enable vscode to launch the game with a debugger attached (this also enabled F12 to open the devtools on the steam version).

Partially based on https://github.com/CherryMace/melvor-idle-mod-boilerplate.
