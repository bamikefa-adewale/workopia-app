import { z } from "zod";

export const RegisterSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Email address required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const LoginSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(6, "Password Required"),
});

export const JobListSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),
  jobDescription: z.string().min(1, "Description required"),
  annualSalary: z.string().min(1, "Salary required"),
  requirements: z.string().min(1, "cannot be Empty"),
  tags: z.string().min(1, "tags cannot be Empty"),
  jobType: z.string().min(1, "select your job types"),
  remote: z.string().min(1, " cannot be Empty"),
  benefit: z.string().min(1, "Benefit cannot be Empty"),
  companyName: z.string().min(1, "Company cannot be Empty"),
  address: z.string().min(1, "Address cannot be Empty"),
  city: z.string().min(1, "cannot be Empty"),
  zipCode: z.string().min(1, "cannot be Empty"),
  companyWebsite: z.string().min(1, "cannot be Empty"),
  companyDescription: z.string().min(1, "cannot be Empty"),
  state: z.string().min(1, "cannot be Empty"),
  number: z.string().min(1, "cannot be Empty"),
  emailAddress: z.string().min(1, "Email required be Empty"),
  // jobFile: z.string().min(1, "Upload your profile "),
});
