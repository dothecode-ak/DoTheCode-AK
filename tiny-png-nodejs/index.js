const tinify = require("tinify");
tinify.key = "MRvHCs0MhXD1rMK5wxQNsmrh2xR5s5n8";
var file_ext = '';
for (let i = 0; i <= 424; i++) {
    if (i <= 9) {
        file_ext = '00' + i
    }
    else if (i <= 99) {
        file_ext = '0' + i
    }
    else {
        file_ext = i
    }
    const source = tinify.fromFile(`./template/Video01_00${file_ext}.jpg`);
    source.toFile(`./dist/Video01_00${file_ext}.jpg`);
}