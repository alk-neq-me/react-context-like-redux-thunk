export type Settings = {
  uuid: string,
  theme: "light" | "dark",
}

export type SettingsState = {
  loading: boolean,
  error: undefined,
  row: Settings
}
