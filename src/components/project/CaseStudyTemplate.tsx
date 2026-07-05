import { ArchitectureDiagram } from "@/components/project/ArchitectureDiagram";
import { ProcessSteps } from "@/components/project/ProcessSteps";
import { ProjectCTA } from "@/components/project/ProjectCTA";
import { ProjectDemo } from "@/components/project/ProjectDemo";
import { ProjectFooter, ProjectTagList } from "@/components/project/ProjectFooter";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectSection } from "@/components/project/ProjectSection";
import { ProjectScreenshots } from "@/components/project/ProjectScreenshots";
import { ProjectSnapshot } from "@/components/project/ProjectSnapshot";
import { WorkflowDiagram } from "@/components/project/WorkflowDiagram";
import type { CaseStudy } from "@/lib/case-studies/types";

export function CaseStudyTemplate({ study }: { study: CaseStudy }) {
  return (
    <article>
      <ProjectHero
        title={study.title}
        eyebrow={study.eyebrow}
        tagline={study.tagline}
        description={study.description}
        chips={study.chips}
        demoUrl={study.demoUrl}
        githubUrl={study.githubUrl}
        demoLabel={study.demoLabel}
        githubLabel={study.githubLabel}
        backLabel={study.backLabel}
        backHref={study.backHref}
        heroImage={study.heroImage}
        heroImageAspect={study.heroImageAspect}
        showGithub={study.showGithub}
      />

      {study.snapshot && study.snapshot.length > 0 && (
        <ProjectSnapshot items={study.snapshot} />
      )}

      <ProjectSection
        heading={study.opportunity.heading}
        body={study.opportunity.body}
        takeaway={study.opportunity.takeaway}
      />

      {study.extraSections?.map((section) => (
        <ProjectSection
          key={section.heading}
          heading={section.heading}
          body={section.body}
          takeaway={section.takeaway}
        />
      ))}

      {(study.thesis.heading || study.thesis.body) && (
        <ProjectSection
          heading={study.thesis.heading}
          body={study.thesis.body}
        />
      )}

      {study.solutionFlow && (
        <ArchitectureDiagram
          heading={study.solutionFlow.heading ?? ""}
          hideHeading={Boolean(study.thesis.heading)}
          layers={study.solutionFlow.layers}
          footer={study.solutionFlow.body}
          className={study.thesis.heading ? "!pt-0" : ""}
        />
      )}

      {study.workflow && (
        <WorkflowDiagram
          heading={study.workflow.heading}
          steps={study.workflow.steps}
        />
      )}

      {study.contributions && (
        <ProjectGrid
          heading={study.contributions.heading}
          intro={study.contributions.intro}
          items={study.contributions.items}
          variant="list"
        />
      )}

      {study.designDecisions && (
        <ProjectGrid
          heading={study.designDecisions.heading}
          cards={study.designDecisions.cards}
          variant="cards"
          columns={2}
        />
      )}

      {study.demo && <ProjectDemo {...study.demo} />}

      {study.screenshots && study.screenshots.items.length > 0 && (
        <ProjectScreenshots
          heading={study.screenshots.heading}
          screenshots={study.screenshots.items}
        />
      )}

      {study.howItWorks && (
        <ProcessSteps
          heading={study.howItWorks.heading}
          steps={study.howItWorks.steps}
        />
      )}

      {study.architecture && (
        <ArchitectureDiagram
          heading={study.architecture.heading}
          layers={study.architecture.layers}
          stack={study.architecture.stack}
        />
      )}

      {study.aiStack && (
        <ProjectTagList
          heading={study.aiStack.heading}
          tags={study.aiStack.tags}
        />
      )}

      {study.keyFeatures && (
        <ProjectGrid
          heading={study.keyFeatures.heading}
          items={study.keyFeatures.items}
          variant="list"
        />
      )}

      {study.challenges && (
        <ProjectGrid
          heading={study.challenges.heading}
          items={study.challenges.items}
          variant="list"
        />
      )}

      {study.mvp && (
        <ProjectGrid
          heading={study.mvp.heading}
          intro={study.mvp.body}
          items={study.mvp.items}
          variant="list"
        />
      )}

      {study.outcome && (
        <ProjectSection heading={study.outcome.heading} body={study.outcome.body}>
          <div className="rounded-2xl border border-border bg-canvas-warm px-6 py-5 text-[0.9375rem] font-medium text-ink md:px-8 md:py-6">
            {study.outcome.highlight}
          </div>
        </ProjectSection>
      )}

      {study.lessons && (
        <>
          {study.lessons.body && (
            <ProjectSection
              heading={study.lessons.heading}
              body={study.lessons.body}
            />
          )}
          {study.lessons.items && study.lessons.items.length > 0 && (
            <ProjectGrid
              heading={
                study.lessons.itemsHeading ??
                (study.lessons.body ? undefined : study.lessons.heading)
              }
              items={study.lessons.items}
              variant="list"
            />
          )}
        </>
      )}

      {study.impact && (
        <ProjectSection
          heading={study.impact.heading}
          body={study.impact.body}
          takeaway={study.impact.takeaway}
        />
      )}

      {study.futureWork && (
        <>
          {study.futureWork.body && (
            <ProjectSection
              heading={study.futureWork.heading}
              body={study.futureWork.body}
            />
          )}
          {study.futureWork.items.length > 0 && (
            <ProjectGrid
              heading={
                study.futureWork.body ? undefined : study.futureWork.heading
              }
              items={study.futureWork.items}
              variant="list"
            />
          )}
        </>
      )}

      {study.footer && (
        <ProjectFooter
          heading={study.footer.heading}
          roles={study.footer.roles}
          demoUrl={study.demoUrl}
          githubUrl={study.githubUrl}
          demoLabel={study.demoLabel}
          githubLabel={study.githubLabel}
          backLabel={study.backLabel ?? "Back to Projects"}
          backHref={study.backHref ?? "/#ai-products"}
        />
      )}

      <ProjectCTA
        heading={study.relatedHeading ?? "More AI Work"}
        projects={study.relatedProjects}
      />
    </article>
  );
}
