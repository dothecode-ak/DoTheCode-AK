
var questionList = [
    "What is the correct spelling of the brand?", "What is the colour of the label?", "What is the name of Bisleri’s mascot?", "What are the unique features followed \nby Bisleri in the production process?", "Complete the following tagline:\n “Don’t worry, ab ghar __ ____!”", "What is unique about Bisleri's\n manufacturing plant at Mumbai?", "What are the authenticity marks\n on the Bisleri label?",
    "What must one do when someone \noffers them a fake Bisleri ?", "What essential minerals does Bisleri\n mineral water contain:", "Do you know the TDS (Total Dissolved Salts)\n content in Bisleri mineral water?"

];
var ansList = [
    { A: "Bilseri", B: "Bisleri", C: "Birseli", D: "Bisleri" },
    { A: "Green", B: "Blue", C: "Bisleri Green Pantone", D: "Bisleri Green Pantone" },
    { A: "Bhanu", B: "Baadal", C: "Binu", D: "Baadal", },
    { A: "Double Ozonization", B: "10 steps quality process and 114 tests", C: "All of the above", D: "All of the above" },
    { A: "Jaayegi Bisleri", B: "Laayegi Bisleri", C: "Aayegi Bisleri", D: "Aayegi Bisleri" },
    { A: "It’s the world’s first \nvertical manufacturing plant", B: "It’s the world’s largest\n mineral water plant", C: "It’s the world’s longest \nrunning mineral water plant", D: "It’s the world’s first vertical manufacturing plant" },
    { A: "The ISI and FSSAI mark at\n the back of the label", B: "The ISI and GSAI mark at\n the back of the label", C: "The FSSAI and GSAI mark at\n the back of the label", D: "The ISI and FSSAI mark at the back of the label" },
    { A: "Buy it", B: "Demand for only \noriginal and pure Bisleri", C: "Test", D: "Demand for only original and pure Bisleri" },
    { A: "Magnesium Sulphate &\n Potassium Bicarbonate", B: "Magnesium Bicarbonate &\n Potassium Sulphate", C: "Magnesium Chloride &\n Potassium Bromide", D: "Magnesium Sulphate & Potassium Bicarbonate" },
    { A: "60-80 ppm", B: "80-120 ppm", C: "100-200 ppm", D: "80-120 ppm" }];


var tokenList = ["ABC01", "ABC02", "ABC03", "ABC04", "ABC05", "ABC06", "ABC07", "ABC08", "ABC09", "ABC10"]
function shuffle(obj1, obj2, obj3) {
    var index = obj1.length;
    var rnd, tmp1, tmp2, tmp3;

    while (index) {
        rnd = Math.floor(Math.random() * index);
        index -= 1;
        tmp1 = obj1[index];
        tmp2 = obj2[index];
        tmp3 = obj3[index];
        obj1[index] = obj1[rnd];
        obj2[index] = obj2[rnd];
        obj3[index] = obj3[rnd];
        obj1[rnd] = tmp1;
        obj2[rnd] = tmp2;
        obj3[rnd] = tmp3;
    }
}

shuffle(questionList, ansList, tokenList);

console.log(questionList, ansList, tokenList);