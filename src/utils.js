import ora from "ora";
import fs from "node:fs";
import download from "download-git-repo";

const spinner = ora("下载中...");

// 检查路径是否存在
export const checkPath = (path) => {
  return fs.existsSync(path);
};

export const downloadTemp = (branch,project) => {
  return new Promise((resolve, reject) => {
    download(
      `direct:https://gitee.com/chinafaker/vue-template.git#${branch}`,
      project,
      { clone: true },
      function (err) {
        if (err) {
          reject(err);
          console.log(err);
        }
        resolve();
        spinner.succeed("下载完成");
      }
    );
  });
};
