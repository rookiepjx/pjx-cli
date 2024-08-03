#!/usr/bin/env node
// 特殊的注释 用于告诉操作系统用node解释器去执行这个文件，而不是显式地调用 node 命令

import { program } from "commander";
import inquirer from "inquirer";
import {checkPath, downloadTemp} from "./utils.js";
import fs from "node:fs";

// 读取 package.json并解析，通过命令行获取对应的参数
let json = fs.readFileSync("./package.json", "utf-8");
let pkg = JSON.parse(json);
// 获取版本号
program.version(pkg.version);

// 创建自定义命令 my-cli cerate 参数为项目名称,描述为创建项目
program
  .command("create <projectName>")
  .description("create a project")
  .action((projectName) => {
    //命令行交互工具
    inquirer
      .prompt([
        {
          type: "input",
          name: "projectName",
          message: "projectName",
          default: projectName,
        },
        {
          type: "confirm",
          name: "isTs",
          message: "是否支持typeScript",
        },
      ])
      .then((answers) => {
        if (checkPath(answers.projectName)) {
          console.log("文件已存在");
          return;
        }

        if (answers.isTs) {
          downloadTemp("ts", answers.projectName);
        } else {
          downloadTemp("js", answers.projectName);
        }
      });
  });

// 通过命令行获取对应的参数
program.parse(process.argv);
