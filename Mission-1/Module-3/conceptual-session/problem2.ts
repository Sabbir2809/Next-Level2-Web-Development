const keyValueArray: [string, unknown][] = [
  ["id", 2809],
  ["name", "Sabbir"],
  ["isMarried", false],
];

const arrayToObject = <T extends string, U>(array: [T, U][]): Record<T, U> => {
  const transformedObject = array.reduce((finalObj, [key, value]) => {
    finalObj[key] = value;
    return finalObj;
  }, {} as Record<T, U>);
  return transformedObject;
};

console.log(arrayToObject(keyValueArray));
