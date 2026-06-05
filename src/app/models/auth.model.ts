export interface RegistrationFormData {
    family_name: string;
    name: string;
    middle_name: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeTerms: boolean;
}

export interface AuthPassItem {
    id: string;
    pass: string;
    deleted?: boolean;
}