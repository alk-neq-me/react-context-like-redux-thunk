import { Settings } from "../Settings/types"


export type RoleEnum = 
  | "ADMIN"
  | "EMPLOYEE"
  | "MANAGER"


export type User = {
  uuid: string,
  firstName: string,
  lastName: string,
  fullName?: string,
  email: string,
  password: string,
  comfirmPassword: string,
  role: RoleEnum,
  settings: Settings,

  createdAt?: Date,
  updatedAt?: Date
}


export type UserState = {
  loading: boolean,
  error: undefined,
  rows: User[]
}
