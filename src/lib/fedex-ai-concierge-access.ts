export const FEDEX_AI_CONCIERGE_ACCESS_KEY = "fedex-ai-concierge-access";

export const FEDEX_AI_CONCIERGE_PASSWORD = "8888";

export function hasFedExAiConciergeAccess(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(FEDEX_AI_CONCIERGE_ACCESS_KEY) === "true";
}

export function grantFedExAiConciergeAccess(): void {
  sessionStorage.setItem(FEDEX_AI_CONCIERGE_ACCESS_KEY, "true");
}
