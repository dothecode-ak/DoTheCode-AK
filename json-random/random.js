const level_1_Yellow_items = [{ item: 'p2', angle: 360 }, { item: 'p1', angle: 90 }, { item: 'p1', angle: 90 }, { item: 'p2', angle: 360 }, { item: 'p2', angle: 90 }, { item: 'p1', angle: 180 }, { item: 'p1', angle: 90 }, { item: 'p2', angle: 360 }, { item: 'p2', angle: 270 }, { item: 'p1', angle: 180 }, { item: 'p1', angle: 180 }, { item: 'p2', angle: 180 }];
// const rotationAngleArray = ['90', '180', '270', '360'];
let anglearr = [90, 180, 270, 360, 270, 360]
for (var t = 0; t < level_1_Yellow_items.length; t++) {
    level_1_Yellow_items[t].angle = anglearr[Math.floor(Math.random() * anglearr.length)];
}

console.log(level_1_Yellow_items);