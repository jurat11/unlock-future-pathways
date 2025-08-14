export interface Application {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  currentEducation: string;
  intendedMajor: string;
  intendedCountry: string;
  englishProficiency: string;
  workExperience?: string;
  additionalInfo?: string;
  created_at: string;
  updated_at: string;
}
