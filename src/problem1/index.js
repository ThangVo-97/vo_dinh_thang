var sum_to_n_a = function (n) {
    // your code here
    if (n < 0) return
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
};

var sum_to_n_b = function (n) {
    // your code here
    if (n < 0) return
    let sum = 0
    while (n > 0) {
        sum += n;
        n--;
    }
    return sum
};

var sum_to_n_c = function (n) {
    // your code here
    if(n > 0) {
        return n + sum_to_n_c(n - 1);
    }
    else {
        return n;
    }
};