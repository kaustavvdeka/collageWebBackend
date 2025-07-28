export interface Subject {
  name: string;
  marks: number;
  maxMarks: number;  // Optional: helps calculate percentage per subject
  credits?: number;
  grade?: string;
  points?: number;
}

export interface Result {
  studentId: string;
  semester: string;
  subjects: Subject[];
  totalMarks: number;
  percentage: number;
  createdAt: Date;     // Tracks when result was added
  updatedAt?: Date;    // Tracks edits (optional)
}