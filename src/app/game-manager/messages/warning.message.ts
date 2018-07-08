
export function invalidNumber(input: number): string {
    return `${input} is not a number.`;
}

export function invalidRange(input1: number, input2: number) {
    return `${input1} and ${input2} is not a valid range.`;
}

export function emptyInput(): string {
    return 'Please input a number';
}
