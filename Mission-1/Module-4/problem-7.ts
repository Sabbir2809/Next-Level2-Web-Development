const findFirstOccurrence = <T>(arr: T[], targetValue: T): number => {
  const index = arr.indexOf(targetValue);
  return index;
};

const numbers: number[] = [1, 2, 3, 4, 5, 2];

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;

const targetString = "cherry";

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
console.log(indexInNumbers);

const indexInStrings = findFirstOccurrence(strings, targetString);
console.log(indexInStrings);
