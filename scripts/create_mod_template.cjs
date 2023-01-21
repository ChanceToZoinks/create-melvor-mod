#!/usr/bin/env node

const { execSync } = require("child_process");

const run = (cmd) => {
  try {
    execSync(`${cmd}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to run command: ${cmd}`, e);
    return false;
  }
  return true;
}

const check = (thing_to_check) => {
  if (!thing_to_check) process.exit(-1);
}

const new_repo = process.argv[2];
const git_clone = `git clone --depth 1 https://github.com/ChanceToZoinks/create-melvor-mod ${new_repo}`;
const npm_install = `cd ${new_repo} && npm install`;

console.log(`Cloning from https://github.com/ChanceToZoinks/create-melvor-mod into: ${new_repo}`);
const cloned = run(git_clone);
check(cloned);

console.log(`Installing deps for ${new_repo}`);
const installed = run(npm_install);
check(installed);

console.log(`Installation complete.`);
