// Generic with Interface

interface Developer<T, X = null> {
  name: string;
  age: number;
  role: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
  bike?: X;
}

type huaweiInfo = {
  brand: string;
  model: string;
  releaseYear: number;
};
const basicDeveloper: Developer<huaweiInfo> = {
  name: "A",
  age: 1,
  role: "student",
  computer: {
    brand: "DCL",
    model: "DCL-DIU",
    releaseYear: 2021,
  },
  smartWatch: {
    brand: "Huawei",
    model: "HU5",
    releaseYear: 2022,
  },
};

interface appleInfo {
  brand: string;
  model: string;
  display: string;
  price: number;
  releaseYear: number;
}

interface bikeInfo {
  brand: string;
  model: string;
}

const intermediateDeveloper: Developer<appleInfo, bikeInfo> = {
  name: "B",
  age: 2,
  role: "admin",
  computer: {
    brand: "HP",
    model: "HP123",
    releaseYear: 2023,
  },
  smartWatch: {
    brand: "Apple",
    model: "A5",
    display: "LED",
    price: 100000,
    releaseYear: 2022,
  },
  bike: {
    brand: "Hero",
    model: "Hero2",
  },
};
