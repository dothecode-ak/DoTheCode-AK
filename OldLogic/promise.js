let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];
let req = urls.map(url => fetch(url));
Promise.all(req).then(res => res.forEach(res => console.log(res.url, res.status)));