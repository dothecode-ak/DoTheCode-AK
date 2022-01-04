const tinify = require("tinify");
tinify.key = "MhK0NC2R24vP6hzHRCNYFh9B1rtfbq3r";
var file_ext = '';
var v_type = 4;
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
    const source = tinify.fromFile(`./new_templates/Video0${v_type}_00${file_ext}.jpg`);
    source.toFile(`./new_dist/Video0${v_type}_00${file_ext}.jpg`);
}