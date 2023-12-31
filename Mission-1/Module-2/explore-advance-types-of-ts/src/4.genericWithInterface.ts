// Generic with Interface

interface IDeveloper<T, X = null> {
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

type THuaweiInfo = {
  brand: string;
  model: string;
  releaseYear: number;
};
const basicDeveloper: IDeveloper<THuaweiInfo> = {
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

interface IAppleInfo {
  brand: string;
  model: string;
  display: string;
  price: number;
  releaseYear: number;
}

interface IBikeInfo {
  brand: string;
  model: string;
}

const intermediateDeveloper: IDeveloper<IAppleInfo, IBikeInfo> = {
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
