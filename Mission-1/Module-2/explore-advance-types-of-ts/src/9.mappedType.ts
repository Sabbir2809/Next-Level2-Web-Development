{
  // Mapped types
  const arrayOfNumbers: number[] = [1, 2, 3, 4, 0];

  // const arrayOfString: string[] = ["1", "2", "3", "4", "5"];
  const arrayOfString = arrayOfNumbers.map((number) => number.toString());
  console.log(arrayOfString);

  // const arrayOfBoolean: boolean[] = [true, false, true, false];
  const arrayOfBoolean = arrayOfNumbers.map((item) => Boolean(item));
  console.log(arrayOfBoolean);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: string }> = {
    height: "500",
    width: "100",
  };
  console.log(area1);

  const area2: AreaString<{ height: string; width: number }> = {
    height: "500",
    width: 100,
  };
  console.log(area2);
}
