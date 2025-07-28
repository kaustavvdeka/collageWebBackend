// backend/controllers/resultsController.ts

import { Request, Response } from "express";
import { users, results } from "../db";

export const verifyUserResult = (req: Request, res: Response) => {
  const { email, password, studentId } = req.body;

  const user = users.find(
    (u) =>
      u.studentId === studentId &&
      u.email === email &&
      u.password === password
  );

  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  const result = results.find((r) => r.studentId === studentId);

  if (!result) {
    return res
      .status(404)
      .json({ success: false, message: "No result found" });
  }

  return res.json({
    success: true,
    result,
    role: user.role,
  });
};

export const addOrUpdateResult = (req: Request, res: Response) => {
  const { email, studentId, semester, password, subjects } = req.body;

  const admin = users.find(
    (u) => u.email === email && u.password === password && u.role === "admin"
  );

  if (!admin) {
    return res.status(403).json({ message: "Unauthorized admin" });
  }

  const student = users.find(
    (u) => u.studentId === studentId && u.role === "student"
  );

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (!Array.isArray(subjects) || subjects.length === 0) {
    return res.status(400).json({ message: "Invalid subjects data" });
  }

  const totalMarks = subjects.reduce((sum, subj) => sum + Number(subj.marks), 0);
  const maxMarksTotal = subjects.reduce(
    (sum, subj) => sum + (Number(subj.maxMarks) || 100),
    0
  );
  const percentage = parseFloat(((totalMarks / maxMarksTotal) * 100).toFixed(2));

  const result = {
    studentId,
    semester,
    subjects,
    totalMarks,
    percentage,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const existingIndex = results.findIndex((r) => r.studentId === studentId);
  if (existingIndex >= 0) {
    results[existingIndex] = result;
  } else {
    results.push(result);
  }

  res.json({ success: true, message: "Result saved successfully", result });
};
