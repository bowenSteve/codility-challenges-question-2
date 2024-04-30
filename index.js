function solution(S) {
    let lastAIndex = -1;
    let arrayA = []
    let arrayB = []
    // Find the index of the last occurrence of 'a'
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'a') {
            arrayA.push(i);
        }
    }

    // Check if any 'b' occurs after the last occurrence of 'a'
    for (let i = lastAIndex + 1; i < S.length; i++) {
        if (S[i] === 'b') {
            arrayB.push(i)
        }
    }
   let firstNum= arrayB[0]
   let lastNum= arrayA[arrayA.length -1]
    if (arrayA.length === 0){
        return 1
    }
    else if (firstNum < lastNum ){
        return 0
    }
    else {
        return 1
    }
}

// Test cases
console.log(solution("aabbb"));  // Output: 1
console.log(solution("ba"));     // Output: 0
console.log(solution("aaa"));    // Output: 1
console.log(solution("b"));      // Output: 1
console.log(solution("abba"));   // Output: 0