// Problem-4:

type TNumberOrString = Array<number | string>;

const sumNumbersInMixedList = (mixedData: TNumberOrString): number => {
  const numbersArray = mixedData.filter((number) => typeof number === "number");
  if (numbersArray.length === 0) {
    return 0;
  } else {
    const sum = (numbersArray as Array<number>).reduce((accumulator, currentValue): number => {
      return accumulator + currentValue;
    }, 0);
    return sum;
  }
};

const mixedData: TNumberOrString = [0, 1, "A", 8];
console.log(sumNumbersInMixedList(mixedData));
