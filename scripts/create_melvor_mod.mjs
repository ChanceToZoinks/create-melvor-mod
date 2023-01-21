#!/usr/bin/env node

"use strict";
import { execSync } from "child_process";
import { Command } from "commander";
import chalk from "chalk";
import * as fs from "fs";
import package_json from "../package.json" assert { type: "json" };
import manifest from "../manifest.json" assert { type: "json" };

const run = (cmd) => {
  try {
    execSync(`${cmd}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to run command: ${cmd}`, e);
    return false;
  }
  return true;
};

const check = (thing_to_check) => {
  if (!thing_to_check) process.exit(-1);
};

let project_name;
let project_author;
const program = new Command(package_json.name)
  .version(package_json.version)
  .arguments("<project-directory> <mod-namespace> <author>")
  .usage(`${chalk.green("<project-directory> <mod-namespace> <author>")}`)
  .action((name, namespace, author) => {
    project_name = name;
    manifest.namespace = namespace;
    project_author = author;
  })
  .parse();

const git_clone = `git clone --depth 1 https://github.com/ChanceToZoinks/create-melvor-mod ${project_name}`;
const npm_install = `cd ${project_name} && rm package.json && mv template_package.json package.json && npm install`;

console.log(`Creating new MelvorIdle mod project: ${project_name}`);
const cloned = run(git_clone);
check(cloned);

console.log(`Installing deps for ${project_name}`);
const installed = run(npm_install);
check(installed);

const new_package = JSON.parse(
  fs.readFileSync(`${project_name}/package.json`, "utf8")
);
new_package.name = project_name;
if (project_author) new_package.author = project_author;

fs.writeFileSync(
  `${project_name}/package.json`,
  JSON.stringify(new_package, null, 2),
  function writeJSON(err) {
    if (err) return console.error(err);
    console.log(`Updating package.json file for ${project_name}`);
  }
);

fs.writeFileSync(
  `${project_name}/manifest.json`,
  JSON.stringify(manifest, null, 2),
  function writeJSON(err) {
    if (err) return console.error(err);
    console.log(`Updating manifest file for ${project_name}`);
  }
);

console.log(`Installation complete.`);
