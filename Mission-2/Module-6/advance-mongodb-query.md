# Module-6: Mastering MongoDB Aggregation and Indexing

1. The current database to use:

```mongodb
const databaseName = "practice";
use(databaseName);
```

2. Create a new collection:

```mongodb
const databaseName = "info";
use(databaseName);
```

3. Delete collection:

```mongodb
db.info.drop();
```

4. Aggregation: ($match, $project)

```mongodb
db.test.aggregate([
  // stage-1
  {
    $match: {
      gender: "Male",
      age: { $lt: 25 },
    },
  },
  // stage-2
  {
    $project: {
      name: 1,
      gender: 1,
      age: 1,
    },
  },
]);
```

5. Aggregation: ($addFields, $out)

```mongodb
db.test.aggregate([
  // stage-1
  {
    $match: {
      gender: "Male",
    },
  },
  // stage-2
  {
    $addFields: {
      course: "Level-2",
      eduTech: "Programming Hero",
    },
  },
  // stage-3
  {
    $out: "PH",
  },
]);
```

6. Aggregation: ($merge)

```mongodb
db.test.aggregate([
  // stage-1
  {
    $match: {
      gender: "Male",
    },
  },
  // stage-2
  {
    $addFields: {
      course: "Level-2",
      eduTech: "Programming Hero",
    },
  },
  // stage-3
  {
    $merge: "test",
  },
]);
```

7. Aggregation: ($group)

```mongodb
db.test.aggregate([
  // stage-1
  // {
  //   $group: {
  //     _id: "$address.country",
  //     count: {
  //       $sum: 1,
  //     },
  //   },
  // },
  {
    $group: {
      _id: "$address.country",
      count: { $sum: 1 },
      fullInfo: {
        // $push: "$name",
        $push: "$$ROOT",
      },
    },
  },
  // stage-2
  {
    $project: {
      "fullInfo.name": 1,
      "fullInfo.email": 1,
      "fullInfo.address.country": 1,
    },
  },
]);
```

8. Aggregation: ($group, $sum, $max, $min, $avg, $project)

```mongodb
db.test.aggregate([
  // Stage-1
  {
    $group: {
      _id: null,
      totalSalary: {
        $sum: "$salary",
      },
      maxSalary: {
        $max: "$salary",
      },
      minSalary: {
        $min: "$salary",
      },
      aveSalary: {
        $avg: "$salary",
      },
    },
  },
  // stage-2
  {
    $project: {
      totalSalary: 1,
      maxSalary: 1,
      minSalary: 1,
      averageSalary: "$aveSalary",
      rangeBetweenMinAndMax: { $subtract: ["$maxSalary", "$minSalary"] },
    },
  },
]);
```

9. Aggregation: ($unwind, $group)

```mongodb
db.test.aggregate([
  // stage-1
  {
    $unwind: "$interests",
  },
  // stage-2
  {
    $group: {
      _id: "$age",
      interestPerAge: { $push: "$interests" },
      howManyPeople: { $sum: 1 },
    },
  },
]);
```

10. Aggregation: ($bucket, $sort, $project, $limit)

```mongodb
db.test.aggregate([
  // stage-1
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [12, 18, 24, 30, 40, 60],
      default: "Age 80",
      output: {
        count: { $sum: 1 },
        Who: { $push: "$$ROOT" },
      },
    },
  },
  // stage-2
  {
    $sort: { count: 1 },
  },

  // stage-4
  {
    $project: {
      count: 1,
      "Who.name": 1,
      "Who.age": 1,
    },
  },
  // stage-3
  {
    $limit: 2,
  },
]);
```

11. Aggregation: ($facet, $unwind, $group, $limit)

```mongodb
db.test.aggregate([
  {
    $facet: {
      // pipeline-1
      friendsCount: [
        // stage-1
        { $unwind: "$friends" },
        // stage-2
        {
          $group: {
            _id: "$friends",
            count: {
              $sum: 1,
            },
          },
        },
      ],
      // pipeline-2
      educationCount: [
        // stage-1
        { $unwind: "$education" },
        // stage-2
        {
          $group: {
            _id: "$education",
            count: { $sum: 1 },
          },
        },
      ],
      // pipeline-3
      skills: [
        { $unwind: "$skills" },
        {
          $group: {
            _id: "$skills",
            count: { $sum: 1 },
          },
        },
      ],
    },
  },
]);
```

12. Aggregation: ($lookup, $project)

```mongodb
db.orders.aggregate([
  {
    $lookup: {
      from: "test",
      localField: "userId",
      foreignField: "_id",
      as: "userOrdersInfo",
    },
  },
  {
    $project: {
      order_number: 1,
      products: 1,
      "userOrders.name": 1,
      "userOrders.email": 1,
      "userOrders.gender": 1,
    },
  },
]);

```
