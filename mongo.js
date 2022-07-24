
// Design database for Zen class programme

use zen_class_database

db.users.insertManey([

    {
        user_id: 1,
        name: 'user1',
        email: 'user1@gmail.com',
        mentor_id: 1
    },
    {
        user_id: 2,
        name: 'user2',
        email: 'user2@gmail.com',
        mentor_id: 1
    },
    {
        user_id: 3,
        name: 'user3',
        email: 'user3@gmail.com',
        mentor_id: 1
    },
    {
        user_id: 4,
        name: 'user4',
        email: 'user4@gmail.com',
        mentor_id: 3
    },
    {
        user_id: 5,
        name: 'user5',
        email: 'user5@gmail.com',
        mentor_id: 3
    }
])

db.topics.insertManey([
    {
        topic_id: 1,
        topic: 'HTML',
        topic_date: new Date("2022-09-30")
    },
    {
        topic_id: 2,
        topic: 'CSS',
        topic_date: new Date("2022-10-5")
    },
    {
        topic_id: 3,
        topic: 'javascript',
        topic_date: new Date("2022-10-10")
    },
    {
        topic_id: 4,
        topic: 'React',
        topic_date: new Date("2022-10-15")
    },
])

db.tasks.find([
    {
        task_id: 1,
        topic_id: 1,
        user_id: 1,
        task: 'html Tasks',
        due_date: new Date("2022-10-10"),
        submitted: true
    },
    {
        task_id: 2,
        topic_id: 2,
        user_id: 2,
        task: 'CSS tasks',
        due_date: new Date("2022-10-15"),
        submitted: true
    },
    {
        task_id: 3,
        topic_id: 3,
        user_id: 3,
        task: 'Javascript task',
        due_date: new Date("2022-10-15"),
        submitted: false
    },
    {
        task_id: 4,
        topic_id: 4,
        user_id: 4,
        task: 'React task',
        due_date: new Date("2022-10-20"),
        submitted: true
    },
    {
        task_id: 5,
        topic_id: 4,
        user_id: 5,
        task: 'React task 2',
        due_date: new Date("2022-10-25"),
        submitted: true
    }
])

db.mentors.find([
    {
        mentor_id: 1,
        mentor_name: 'mentor1',
        mentor_email: 'mentor1@gmail.com',
        mentee: 20
    },
    {
        mentor_id: 2,
        mentor_name: 'mentor2',
        mentor_email: 'mentor2@gmail.com',
        mentee: 25
    },
    {
        mentor_id: 3,
        mentor_name: 'mentor3',
        mentor_email: 'mentor3@gmail.com',
        mentee: 10
    },
    {
        mentor_id: 4,
        mentor_name: 'mentor4',
        mentor_email: 'mentor4@gmail.com',
        mentee: 14
    }
])

db.company_drives.find([
    {
        user_id: 1,
        comapany_drive: new Date("2022-10-28"),
        company_name: 'Amazon'
    },
    {
        user_id: 2,
        comapany_drive: new Date("2022-11-1"),
        company_name: 'Wipro'
    },
    {
        user_id: 3,
        comapany_drive: new Date("2022-11-3"),
        company_name: 'TCS'
    },
    {
        user_id: 4,
        comapany_drive: new Date("2022-11-5"),
        company_name: 'Wipro'
    },
    {
        user_id: 5,
        comapany_drive: new Date("2022-11-7"),
        company_name: 'Google'
    }
])

db.codekata.find([
    {
        user_id: 1,
        solved_problems: 35,
        unsolved_problems: 20,
        total_problems: 55
    },
    {
        user_id: 2,
        solved_problems: 20,
        unsolved_problems: 35,
        total_problems: 55
    },
    {
        solved_problems: 50,
        total_problems: 5,
        unsolved_problems: 5,
        user_id: 3
    },
    {
        user_id: 4,
        solved_problems: 10,
        unsolved_problems: 45,
        total_problems: 55
    },
    {
        user_id: 5,
        solved_problems: 45,
        unsolved_problems: 10,
        total_problems: 55
    },
])