var Question = [
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Energy Drinks', 'Kitchen Cleaning'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Laundry', 'Make-up'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Cleaning Baby \nToys', 'Removing Nail \nPolish'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Car Cleaning', 'Gardening'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Mouth Cleansing', 'Treating a Cut'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Deodorizing Shoes', 'Refuelling'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Cleaning Floors', 'Mixing with \nbeverages'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', "Freshening Dog's \nCoat", 'Adding to \nBaby Food'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Furniture Cleaning', 'Keyboard Cleaning'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Cleaning Baby \nCombs', 'Construction Work'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Stain-Removal', 'Head-Ache \nRemedy'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Car Deodorizing', 'Hair Dye'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Fruits and \nVegetables Scrub', 'Consuming as a \nbeverage'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Refridgerator Cleaning', 'Steaming as a \nremedy to Cold'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Wardrobe \nFreshening', 'Manure for \nGardening'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Cleaning \nUpholstery Spills', ' Cleaning Laptop \nKeyboard'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Deodorizing \nGym Bags', 'Using as pet-food'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Freshening Musty \nTowels', 'As a hand \nmoisturiser'],
    ['Which of these can\nArm & Hammer\nPure Baking Soda\nbe used for?', 'Deodorizing Plastic \nContainers', 'Using for \ncarpentry'],
    ['Which of these can\nArm & Hammer Pure \nBaking Soda be\nused for?', 'Cleaning Bathroom \nTiles/Floors', 'For Pottery'],
    ['Which of these can\nArm & Hammer Pure \nBaking Soda be\nused for?', 'Cleaning Bath \nTubs', 'Printing Ink'],
    ['Arm & Hammer Pure \nBaking Soda can\nbe used as a silver\ntarnish remover', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda can\nbe used as a\ntaste-maker', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda is\nuseful for septic \ncare', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda can\neliminate litter box\nodor', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda\neliminates allergens', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda can\nbe used as an\nenergy drink', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda is\nperfect\nfor surface-\nsafe cleaning', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda is\nsuitable for\nbaby laundry', 'True', 'False'],
    ['Arm & Hammer is \nAmerica’s #1 Trusted \nBaking Soda Brand', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda is \nsuitable for\npolishing silverware', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda enables\neasy swimming-pool \ncare', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda helps \nremove plaque', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda can be\nused as sun-block', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda soothes\nsun-burn pain', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda\ndeodorizes and\ncleans water tanks', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda can be\nused to eliminate\ncarpet odor', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda can be\nused to freshen\nsheets and closets', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda can be\nused to treat\na common cold', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda can be\nused to deodorize\na garbage can', 'True', 'False'],
    ['Arm & Hammer Pure \nBaking Soda can be\nused to \ndeordorize drains', 'True', 'False'],
    ['Arm & Hammer Pure\nBaking Soda can be\nused to clean\ncanvasses and\nframes', 'True', 'False'],
    ['Arm & Hammer Pure\nBaking Soda can be\nused to clean\nShower Curtains', 'True', 'False'],
    ['Arm & Hammer Pure\nBaking Soda can be\nfor Deodorizing \ndrains', 'True', 'False'],
];
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var SelectiveQuestions = [];
Question = shuffle(Question);
for (var i = 0; i < 10; i++) {
    SelectiveQuestions.push(Question[i]);

}

console.log(SelectiveQuestions);


//create an array
var newArray = [{ productName: "Colgate", price: 50, companyName: "Patanjali" },
{ productName: "Soap", price: 40, companyName: "Uniliver" },
{ productName: "Rice", price: 50, companyName: "NA" },
{ productName: "Shirts", price: 4500, companyName: "Piter England" },
{ productName: "Paints", price: 4050, companyName: "Piter England" },
{ productName: "Hail Oil", price: 450, companyName: "Almond" },
{ productName: "Brush", price: 50, companyName: "Patanjali" },
{ productName: "Ring", price: 5000, companyName: "NA" },
];
for (var i = 0; i < newArray.length; i++) {
    if (newArray[i].companyName == "NA") {
        console.log(newArray[i]);
    }

}

// console.log(newArray);