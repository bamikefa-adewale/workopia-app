import { z } from "zod";

export const RegisterSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Email address required"),
  state: z.string().min(1, "State Cannot be Empty"),
  city: z.string().min(1, "Enter Your City "),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const LoginSchema = z.object({
  email: z.string().min(1, "Email cannot be Empty"),
  password: z.string().min(6, "Please Enter Password "),
});

export const JobListSchema = z.object({
  jobTitle: z.string().min(1, "Please Enter Job Title "),
  jobDescription: z.string().min(1, "Description Cannot be Empty"),
  annualSalary: z.string().min(1, "Salary Cannot be Empty"),
  requirements: z.string().min(1, "Requirement Cannot be Empty"),
  tags: z.string().min(1, "Tags Cannot be Empty"),
  jobType: z.string().min("select your job type"),
  remote: z.string().min(1, " cannot be Empty"),
  benefit: z.string().min(1, "Benefit Cannot be Empty"),
  companyName: z.string().min(1, "Company Cannot be Empty"),
  address: z.string().min(1, "Address Cannot be Empty"),
  city: z.string().min(1, "Cannot be Empty"),
  zipCode: z.string().min(1, "Cannot be Empty"),
  companyWebsite: z.string().min(1, "Company Website Cannot be Empty"),
  companyDescription: z.string().min(1, "Cannot be Empty"),
  state: z.string().min(1, "Cannot be Empty"),
  number: z.string().min(1, "Phone Number Cannot be Empty"),
  emailAddress: z.string().min(1, "Email Address Cannot be Empty"),
  // jobFile: z.string().min(1, "Upload your profile "),
});
