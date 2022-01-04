
const dummy_array = ['a', 'b', 'c', 'd', 'e'];
//shift

let shift_data = dummy_array.shift();

console.log(dummy_array);

//unshift
let unshift_data = dummy_array.unshift('f')
console.log(dummy_array);

//delete

let delete_data = delete dummy_array[0]
console.log(dummy_array);

//concat

const arr1 = ['Anil', 'Kumar'];
const arr2 = ['Yadav'];
console.log(arr1.concat(arr2));

//merging there array
const arr3 = ['Ballia']

console.log(arr1.concat(arr2, arr3));

//splice

const splice_example = ['Anil', 'Kumar', 'Yadav', 'Ballia'];
splice_example.splice(3, 0, '28');
console.log(splice_example);

//slice
const slice_data = splice_example.slice(2);
console.log(slice_data);


// min & max array element
const index_array = [1, 2, 3, 89, 12];
console.log(Math.min(...index_array));
console.log(Math.max(...index_array));

// sorting array
const sort_index_arr = index_array.sort((a, b) => a - b);
console.log(sort_index_arr);

//map method

const _arr = [1, 2, 2, 3, 3, 3, 6];
const op = _arr.map((e) => e * 2);
console.log(op);

//filter method
let filter_data = _arr.filter((e) => e % 2 == 0)
console.log(filter_data);

//reducer method

let reduce_data = _arr.reduce((e, i) => {
    if (!e[i]) {
        e[i] = 1
    }
    else {
        e[i]++;
    }
    return e;
}, {});

console.log(reduce_data);

//replace method
var text = "Please visit AliveNow and AliveNow"
let d = text.replace(/AliveNow/g, "JS Developer");
// let e = d.replace("AliveNow", "JS Developer");
console.log(d);
