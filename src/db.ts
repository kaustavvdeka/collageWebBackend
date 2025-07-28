export const users = [
  { studentId: "STU001", email: "john@example.com", password: "pass123", role: "student" },
  { studentId: "ADMIN001", email: "admin@example.com", password: "adminpass", role: "admin" },
];

export const results = [
  {
    studentId: "STU001",
    semester: "Spring 2025",
    subjects: [
      { name: "Mathematics", marks: 95 },
      { name: "Physics", marks: 88 },
      { name: "Chemistry", marks: 90 },
      { name: "English", marks: 85 },
      { name: "Computer Science", marks: 92 },
      { name: "Biology", marks: 87 },
    ],
    totalMarks: 537, // Sum of all subject marks
    percentage: Math.round((537 / 600) * 100), // Assuming each subject is out of 100
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
