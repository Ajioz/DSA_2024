function fibonacci(number) {
    let sequence = [0, 1];
    for (let i = 2; i <= number; i++){
        sequence.push(sequence[i - 2] + sequence[i - 1])
    }
    return sequence[number]
}

let result = fibonacci(8);
console.log(result)