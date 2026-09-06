export interface RegistrationFormData {
  family_name: string;
  name: string;
  middle_name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  birth_date: Date;
}

export interface AuthPassItem {
  id: string;
  pass: string;
}

export interface RagistrationUserData {
  family_name: string;
  name: string;
  middle_name?: string | undefined;
  reg_date: Date;
  email: string;
  birth_date: Date;
  phone: string;
  address: string;
  password: string;
}
