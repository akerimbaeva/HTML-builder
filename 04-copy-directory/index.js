const fs = require('fs');
const path = require('path');
const pathToFiles = path.join(__dirname, 'files');

const removeFiles = async (copyFiles) => {
  await fs.promises.rm(copyFiles, { force: true, recursive: true });
};

const copy = async (data, destination) => {
  const stat_data = await fs.promises.stat(data, { withFileTypes: true });
  if (stat_data.isDirectory()) {
    await fs.promises.mkdir(destination, { recursive: true });
    const file = await fs.promises.readdir(data, { withFileTypes: true });
    file.forEach((el) => {
      copy(path.join(data, `${el.name}`), path.join(destination, `${el.name}`)
      );
    });
  } else {
    await fs.promises.copyFile(data, destination);
  }
};

const copyFolder = async () => {
  await removeFiles(path.join(__dirname, 'files-copy'));
  await copy(pathToFiles, path.join(__dirname, 'files-copy'));
};

copyFolder(pathToFiles, path.join(__dirname, 'files-copy'));
