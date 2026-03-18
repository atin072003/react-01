
const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Report",
        description: "Prepare monthly sales report",
        date: "2026-03-20",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Website",
        description: "Update homepage banner",
        date: "2026-03-15",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Meeting",
        description: "Attend project discussion meeting",
        date: "2026-03-18",
        category: "Meeting"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        description: "Resolve login authentication issue",
        date: "2026-03-19",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        description: "Review pull request from team",
        date: "2026-03-16",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Update",
        description: "Deploy new feature to production",
        date: "2026-03-14",
        category: "Deployment"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        description: "Create API documentation",
        date: "2026-03-21",
        category: "Documentation"
      }
    ]
  },

  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        description: "Create UI design for dashboard",
        date: "2026-03-22",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logo Update",
        description: "Update company logo in assets",
        date: "2026-03-12",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Feedback",
        description: "Collect feedback from client",
        date: "2026-03-18",
        category: "Communication"
      }
    ]
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test New Feature",
        description: "Perform QA testing for new feature",
        date: "2026-03-20",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Report",
        description: "Submit bug report for UI issue",
        date: "2026-03-15",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Automation Script",
        description: "Write automation script for login",
        date: "2026-03-10",
        category: "Automation"
      }
    ]
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Marketing Campaign",
        description: "Plan social media campaign",
        date: "2026-03-23",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Newsletter",
        description: "Send monthly newsletter",
        date: "2026-03-11",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        description: "Analyze competitor strategies",
        date: "2026-03-19",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Ad Campaign",
        description: "Launch paid ads campaign",
        date: "2026-03-13",
        category: "Marketing"
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    firstName: "Atin",
    email: "admin@example.com",
    password: "123"
  }
]

export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}