import { TypeOf, ZodType, object, string, z } from "zod"
import { Settings } from "../../context/Settings/types"

export const settingsScheme: ZodType<Settings> = object({
  uuid: string(),
  theme: z.enum(["light", "dark"])
});

type SettingsInput = TypeOf<typeof settingsScheme>;

function Settings() {
  return (
    <div>Settings</div>
  )
}

export default Settings
