
export function isValidNumber(num: number): boolean {
    const stringNum = num.toString();
    const numSplit = stringNum.split('-');
    if (numSplit.length === 1) {return true; }
    if (numSplit.length === 2 && numSplit[0] === '') {return true; }
    return false;
  }

export function isEmpty(num: number): boolean {
    return num === undefined || num.toString().length === 0;
}
