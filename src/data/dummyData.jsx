// Users

export const users = [
  { id: 1,  name: "Aarav Sharma",    email: "aarav@gmail.com",     role: "student",    joinDate: "2024-01-15", status: "active"   },
  { id: 2,  name: "Priya Verma",     email: "priya@gmail.com",     role: "student",    joinDate: "2024-02-03", status: "active"   },
  { id: 3,  name: "Rohit Mehta",     email: "rohit@gmail.com",     role: "instructor", joinDate: "2024-01-10", status: "active"   },
  { id: 4,  name: "Sneha Patel",     email: "sneha@gmail.com",     role: "student",    joinDate: "2024-03-20", status: "inactive" },
  { id: 5,  name: "Karan Singh",     email: "karan@gmail.com",     role: "student",    joinDate: "2024-03-28", status: "active"   },
  { id: 6,  name: "Divya Nair",      email: "divya@gmail.com",     role: "instructor", joinDate: "2024-02-14", status: "active"   },
  { id: 7,  name: "Amit Joshi",      email: "amit@gmail.com",      role: "student",    joinDate: "2024-04-05", status: "active"   },
  { id: 8,  name: "Neha Gupta",      email: "neha@gmail.com",      role: "student",    joinDate: "2024-04-18", status: "inactive" },
  { id: 9,  name: "Vikram Rao",      email: "vikram@gmail.com",    role: "instructor", joinDate: "2024-01-22", status: "active"   },
  { id: 10, name: "Pooja Iyer",      email: "pooja@gmail.com",     role: "student",    joinDate: "2024-05-01", status: "active"   },
  { id: 11, name: "Suresh Tiwari",   email: "suresh@gmail.com",    role: "student",    joinDate: "2024-05-10", status: "active"   },
  { id: 12, name: "Ananya Das",      email: "ananya@gmail.com",    role: "student",    joinDate: "2024-05-22", status: "inactive" },
  { id: 13, name: "Manish Yadav",    email: "manish@gmail.com",    role: "instructor", joinDate: "2024-06-01", status: "active"   },
  { id: 14, name: "Ritika Saxena",   email: "ritika@gmail.com",    role: "student",    joinDate: "2024-06-15", status: "active"   },
  { id: 15, name: "Deepak Chandra",  email: "deepak@gmail.com",    role: "student",    joinDate: "2024-07-02", status: "active"   },
  { id: 16, name: "Kavya Reddy",     email: "kavya@gmail.com",     role: "student",    joinDate: "2024-07-18", status: "inactive" },
  { id: 17, name: "Nikhil Bhatt",    email: "nikhil@gmail.com",    role: "student",    joinDate: "2024-08-05", status: "active"   },
  { id: 18, name: "Swati Kulkarni",  email: "swati@gmail.com",     role: "instructor", joinDate: "2024-08-20", status: "active"   },
  { id: 19, name: "Arjun Mishra",    email: "arjun@gmail.com",     role: "student",    joinDate: "2024-09-01", status: "active"   },
  { id: 20, name: "Tanvi Bose",      email: "tanvi@gmail.com",     role: "student",    joinDate: "2024-09-14", status: "active"   },
]


//Courses

export const courses = [
  { id: 1,  title: "React for Beginners",         instructor: "Rohit Mehta",     category: "Frontend",  enrollments: 120, completionRate: 72, status: "active"   },
  { id: 2,  title: "Node.js & Express APIs",       instructor: "Divya Nair",      category: "Backend",   enrollments: 95,  completionRate: 61, status: "active"   },
  { id: 3,  title: "MySQL Masterclass",            instructor: "Vikram Rao",      category: "Database",  enrollments: 78,  completionRate: 55, status: "active"   },
  { id: 4,  title: "Tailwind CSS Crash Course",    instructor: "Rohit Mehta",     category: "Frontend",  enrollments: 140, completionRate: 83, status: "active"   },
  { id: 5,  title: "JavaScript ES6+",              instructor: "Manish Yadav",    category: "Frontend",  enrollments: 200, completionRate: 90, status: "active"   },
  { id: 6,  title: "MongoDB Basics",               instructor: "Divya Nair",      category: "Database",  enrollments: 60,  completionRate: 48, status: "inactive" },
  { id: 7,  title: "TypeScript Fundamentals",      instructor: "Vikram Rao",      category: "Frontend",  enrollments: 88,  completionRate: 67, status: "active"   },
  { id: 8,  title: "REST API Design",              instructor: "Manish Yadav",    category: "Backend",   enrollments: 74,  completionRate: 59, status: "active"   },
  { id: 9,  title: "Git & GitHub for Developers",  instructor: "Swati Kulkarni",  category: "DevOps",    enrollments: 180, completionRate: 95, status: "active"   },
  { id: 10, title: "Docker & Containers",          instructor: "Swati Kulkarni",  category: "DevOps",    enrollments: 45,  completionRate: 40, status: "inactive" },
]


//Enrollments 

export const enrollments = [
  { id: 1,  userId: 1,  courseId: 1,  enrolledOn: "2024-02-01", status: "completed" },
  { id: 2,  userId: 2,  courseId: 5,  enrolledOn: "2024-02-10", status: "ongoing"   },
  { id: 3,  userId: 4,  courseId: 3,  enrolledOn: "2024-03-22", status: "completed" },
  { id: 4,  userId: 5,  courseId: 2,  enrolledOn: "2024-04-01", status: "ongoing"   },
  { id: 5,  userId: 7,  courseId: 4,  enrolledOn: "2024-04-10", status: "completed" },
  { id: 6,  userId: 8,  courseId: 6,  enrolledOn: "2024-04-20", status: "ongoing"   },
  { id: 7,  userId: 10, courseId: 9,  enrolledOn: "2024-05-05", status: "completed" },
  { id: 8,  userId: 11, courseId: 7,  enrolledOn: "2024-05-15", status: "ongoing"   },
  { id: 9,  userId: 14, courseId: 1,  enrolledOn: "2024-06-20", status: "completed" },
  { id: 10, userId: 15, courseId: 8,  enrolledOn: "2024-07-05", status: "ongoing"   },
  { id: 11, userId: 17, courseId: 5,  enrolledOn: "2024-08-10", status: "completed" },
  { id: 12, userId: 19, courseId: 9,  enrolledOn: "2024-09-03", status: "ongoing"   },
  { id: 13, userId: 20, courseId: 2,  enrolledOn: "2024-09-16", status: "completed" },
  { id: 14, userId: 3,  courseId: 10, enrolledOn: "2024-09-20", status: "ongoing"   },
  { id: 15, userId: 6,  courseId: 4,  enrolledOn: "2024-09-25", status: "completed" },
]


// Monthly Enrollments

export const monthlyEnrollments = [
  { month: "Jan", enrollments: 30 },
  { month: "Feb", enrollments: 55 },
  { month: "Mar", enrollments: 40 },
  { month: "Apr", enrollments: 80 },
  { month: "May", enrollments: 65 },
  { month: "Jun", enrollments: 90 },
  { month: "Jul", enrollments: 75 },
  { month: "Aug", enrollments: 110 },
  { month: "Sep", enrollments: 95 },
]


//Completion Status 

export const completionStats = [
  { name: "Completed", value: 8  },
  { name: "Ongoing",   value: 7  },
]


//Derived Stats 

export const getStats = () => {
  const totalUsers       = users.length
  const totalCourses     = courses.length
  const totalEnrollments = enrollments.length
  const avgCompletion    = Math.round(
    courses.reduce((sum, c) => sum + c.completionRate, 0) / courses.length
  )

  return { totalUsers, totalCourses, totalEnrollments, avgCompletion }
}