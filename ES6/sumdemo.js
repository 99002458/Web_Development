var sum = function(...arguments) {
    var add = 0;
    for (let i = 0; i < arguments.length; i++) {
        add += arguments[i];
    }
    return add
};

console.log(sum(10, 20, 30));
console.log(sum(10, 20));