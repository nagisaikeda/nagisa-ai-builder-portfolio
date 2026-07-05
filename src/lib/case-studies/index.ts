import { localPmOsCaseStudy } from "@/lib/case-studies/local-pm-os";
import { probeiqCaseStudy } from "@/lib/case-studies/probeiq";
import { readyleadCaseStudy } from "@/lib/case-studies/readylead";
import type { CaseStudy } from "@/lib/case-studies/types";

const caseStudies: Record<string, CaseStudy> = {
  readylead: readyleadCaseStudy,
  probeiq: probeiqCaseStudy,
  "local-pm-os": localPmOsCaseStudy,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export { connectedWealthStory } from "@/lib/case-studies/connected-wealth";
export { localPmOsCaseStudy, probeiqCaseStudy, readyleadCaseStudy };
export type { CaseStudy };
export type { ProductStory } from "@/lib/case-studies/product-story/types";
