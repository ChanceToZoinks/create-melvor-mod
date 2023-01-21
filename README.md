# create-melvor-mod

## What is this?

A template repo ready to make MelvorIdle mods using Typescript.

## Installation

### With npm

`npm i -g npx`

`npx create-melvor-mod PROJECT_NAME PROJECT_NAMESPACE PROJECT_AUTHOR`

### Manual

`git clone https://github.com/ChanceToZoinks/create-melvor-mod PROJECT_NAME && cd PROJECT_NAME`

`npm install`

If you manually install don't forget to update the namespace in `manifest.json` and name/author in `package.json` to match your mod.

If you install nwjs version 0.54.0 into you MelvorIdle install location you can also change the paths in `.vscode/launch.json` to enable vscode to launch the game with a debugger attached (this also enabled F12 to open the devtools on the steam version).

Partially based on https://github.com/CherryMace/melvor-idle-mod-boilerplate.

Npm: https://www.npmjs.com/package/create-melvor-mod
