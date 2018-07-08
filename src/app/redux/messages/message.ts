export function tooHigh(guess: number) {
    return `${guess} is too high`;
}

export function tooLow(guess: number) {
    return `${guess} is too low`;
}

export function outOfBounds(lowerBound: number, upperBound: number, guess: number) {
    return `${guess} is not between ${lowerBound} and ${upperBound}`;
}
