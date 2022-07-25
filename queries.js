
// 1.  Find all the topics and tasks which are thought in the month of October

// method 1
db.tasks.find(
  {
    $and:[
      {
        due_date:{
          $gte:new Date("2022-10-1")
        }
      },
      {
        due_date:{
        $lte:new Date("2022-10-31")
      }}]
  })

db.topics.find(
  {
    $and:[
      {
        topic_date:{
          $gte:new Date("2022-10-1")
        }
      },
      {
        topic_date:{
        $lte:new Date("2022-10-31")
      }}]
  })

// Method 2
db.topics.aggregate([
  {
    $lookup: {
      from: "tasks",
      localField: "topicid",
      foreignField: "topicid",
      as: "taskinfo",
    },
  },
  {
    $match: {
      $and: [
        {
          $or: [
            { topic_date: { $gt: new Date("30-sep-2020") } },
            { topic_date: { $lt: new Date("31-oct-2020") } },
          ],
        },

        {
          $or: [
            { "taskinfo.due_date": { $gt: new Date("30-sep-2020") } },
            { "taskinfo.due_date": { $lt: new Date("1-nov-2020") } },
          ],
        },
      ],
    },
  },
]);

// 2. Find all the company drives which appeared between 15 oct-2022 and 5-nov-2022
db.company_drives.find(
  {
    $and:[
      {
        comapany_drive:{
          $gte:new Date("2022-10-15")
        }
      },
      {
        comapany_drive:{
        $lte:new Date("2022-11-5")
      }}]
  })


 // 3. Find all the company drives and students who are appeared for the placement.

 db.company_drives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "user_id",
      as: "userinfo",
    },
  },
  {
    $project: {
      _id: 0,
      "userinfo.name": 1,
      company_name: 1,
      comapany_date: 1,
      "userinfo.email": 1,
      "userinfo.user_id": 1,
    },
  },
]);

 //4. Find the number of problems solved by the user in codekata
   
 db.codekata.find({},{solved_problems:1}) 	

 //method:2
 db.codekata.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "user_id",
      as: "userinfo",
    },
  },
  {
    $project: {
      _id: 0,
      user_id: 1,
      solved_problems: 1,
      "userinfo.name": 1,
    },
  },
]);

 // 5. Find all the mentors with who has the mentee's count more than 15

 db.mentors.find({mentees:{$gte:!5}})
  
// 6. Find the number of users who are absent and task is not submitted  between 15 oct-2022 and 31-oct-2022


db.attendance.aggregate([
  {
    $lookup: {
      from: "topics",
      localField: "topic_id",
      foreignField: "topic_id",
      as: "topics",
    },
  },
  {
    $lookup: {
      from: "tasks",
      localField: "topic_id",
      foreignField: "topic_id",
      as: "tasks",
    },
  },
  { $match: { $and: [{ attendence: false }, { "tasks.submitted": false }] } },
  {
    $match: {
      $and: [
        {
          $or: [
            { "topics.topic_date": { $gte: new Date("15-oct-2022") } },
            { "topics.topic_date": { $lte: new Date("31-oct-2022") } },
          ],
        },
        {
          $or: [
            { "tasks.due_date": { $gte: new Date("15-oct-2022") } },
            { "tasks.due_date": { $lte: new Date("31-oct-2022") } },
          ],
        },
      ],
    },
  },
  {
    $count: "No_of_students_absent",
  },
]);
