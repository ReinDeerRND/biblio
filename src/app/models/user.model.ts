export interface User {
  id: string;
  family_name: string;
  name: string;
  middle_name?: string;
  email?: string;
  phone?: string;
  reg_date?: Date;
  birth_date?: Date;
  address?: string;
  active?: boolean;
}
