# Module-5: In-Depth Exploration of MongoDB Queries

1. The current database to use:

```mongodb
const databaseName = "practice";
use(databaseName);
```

2. Create a new collection:

```mongodb
const databaseName = "practice";
use(databaseName);
```

3. Delete collection:

```mongodb
db.info.drop();
```

4. Insert a New Document:

```mongodb
db.employee.insertOne({})

db.products.insertMany([{},{},]);
```

5. Find Document:

```mongodb
db.test.find({gender: "Male"},{name: 1, email: 1, age: 1, phone: 1}).count()

db.test.find({ gender: "Male" }).projection({ name: 1, email: 1, age: 1, phone: 1 });
```

6. Operators: $eq, $ne, $gt, $lt, $gte, $lte, $in, $nin, $or, $and, $nt, $exists, $type, $size, $all, $elemMatch

```mongodb
db.test.find({ age: { $lte: 18 } }).sort({ age: 1 });
db.test.find(
    {
      age: { $gte: 18, $lte: 30 },
      gender: "Female",
    },
    {
      age: 1,
      gender: 1,
      _id: 0,
    }
  ).sort({ age: -1 });

db.test.find(
    {
      gender: "Female",
      age: { $gte: 18, $lte: 30 },
      interests: { $in: ["Cooking", "Travelling"] },
    },
    {
      _id: 0,
      age: 1,
      gender: 1,
      interests: 1,
    }
  ).sort({ age: -1 });

db.test.find({
    $and: [{ gender: { $eq: "Female" } }, { age: { $gte: 15 } }, { age: { $lte: 20 } }],
  })
  .projection({
    name: 1,
    gender: 1,
    age: 1,
  }).sort({ age: 1 });


db.test.find({
    $and: [{ "skills.name": { $eq: "JAVASCRIPT" } }, { "skills.level": "Expert" }],
  })
  .projection({
    skills: 1,
  }).sort({ age: 1 });


db.test.find({
    "skills.name": { $in: ["JAVASCRIPT", "PYTHON"] },
  })
  .projection({
    skills: 1,
  }).sort({ age: 1 });


db.test.find({ company: { $exists: true } });

db.test.find({ age: { $type: "string" } }).count();

db.test.find({ friends: { $type: "array" } }).count();

db.test.find({ friends: { $size: 5 } });

db.test.find({ company: { $type: "undefined" } });
```

7. Array Query [array, object, array of object ]: $all , $elemMatch

```mongodb
db.test.find({ interests: ["Gaming", "Cooking", "Writing"] }).projection({ interests: 1 });

db.test.find({
    interests: { $all: ["Reading", "Travelling", "Gaming"] },
  }).projection({ interests: 1 });

db.test.find({
    skills: {
      $elemMatch: {
        name: "JAVASCRIPT",
        level: "Expert",
        isLearning: false,
      },
    },
  }).projection({ skills: 1 }).count();
```

8. Update Query: [$set, $addToSet,$each, $push, $unset, $pop,$pull, $pullAll ]

```mongodb
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000066") },
  { $set: { interests: ["Coding", "Writing", "Travelling"] } }
);

db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000066") }, { $addToSet: { interests: "Gaming" } });

db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000066") },
  { $addToSet: { interests: { $each: ["Cricket", "Football"] } } }
);

db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000066") },
  { $push: { interests: { $each: ["Cricket", "Football"] } } }
);

db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000066") }, { $unset: { birthday: 1 } });

db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000066") }, { $pop: { friends: -1 } });

db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000066") }, { $pull: { interests: "Cricket" } });

db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000066") },
  { $pullAll: { interests: ["Football", "Football"] } }
);

db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000066") },
  {
    $set: {
      "address.city": "Dhaka",
      "address.country": "Bangladesh",
    },
  }
);

db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000066"), "education.major": "History" },
  {
    $set: {
      "education.$.major": "CSE",
    },
  }
);

```
