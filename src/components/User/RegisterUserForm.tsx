import { TypeOf, ZodType, object, string, z } from "zod"
import { User } from "../../context/User/types"
import { settingsScheme } from "../Settings/Settings"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const createUserScheme: ZodType<User> = object({
  uuid: string(),
  firstName: string({ required_error: "first_name is required" }),
  lastName: string({ required_error: "password is required" }),
  fullName: string(),
  email: string().email(),
  password: string({ required_error: "password is required" }).min(8).max(16),
  comfirmPassword: string({ required_error: "password is required" }),
  role: z.enum(["ADMIN", "EMPLOYEE", "MANAGER"]),
  settings: settingsScheme
}).refine((val) => val.password === val.comfirmPassword, {
  message: "Password don't match",
  path: ["comfirmPassword"]
});

type CreateUserInput = TypeOf<typeof createUserScheme>;


function RegisterUserForm() {
  const method = useForm<CreateUserInput>({
    resolver: zodResolver(createUserScheme)
  });

  const {} = method;

  return (
    <div>RegisterUserForm</div>
  )
}

export default RegisterUserForm
