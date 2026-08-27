export const CONNECTED_WEALTH_ACCESS_KEY = "connected-wealth-access";

export const CONNECTED_WEALTH_PASSWORD = "6666";

export function hasConnectedWealthAccess(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(CONNECTED_WEALTH_ACCESS_KEY) === "true";
}

export function grantConnectedWealthAccess(): void {
  sessionStorage.setItem(CONNECTED_WEALTH_ACCESS_KEY, "true");
}
