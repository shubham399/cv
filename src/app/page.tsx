'use server;'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperice } from '@/components/work-experience';
import { ProjectCard } from "@/components/project-card";
import Skills from "@/components/skills-card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()


export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default async function Page() {

  const work = await fetch('https://shubhkumar.in/api/experience', {
    next: {
      revalidate: 24 * 60 * 60
    }
  }).then(resp => resp.json());
  const certifications = await fetch('https://shubhkumar.in/api/certificates', {
    next: {
      revalidate: 24 * 60 * 60
    }
  }).then(resp => resp.json());
  const education = await fetch('https://shubhkumar.in/api/education', {
    next: {
      revalidate: 24 * 60 * 60
    }
  }).then(resp => resp.json());
  const skills = await fetch('https://shubhkumar.in/api/skills', {
    next: {
      revalidate: 24 * 60 * 60
    }
  }).then(resp => resp.json());

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4  md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4 print:grid print:grid-cols-2 print:gap-2">
        <div className="flex items-center justify-between col-start-1 col-span-2">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold text-[#1d4dd6] ">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px] col-start-1">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
              {RESUME_DATA.personalWebsiteUrl ? (
                <a href={RESUME_DATA.personalWebsiteUrl}>
                  <span className="underline">{RESUME_DATA.personalWebsiteUrl}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section className="col-start-1 col-span-2 row-start-2">
          <h2 className="text-xl font-bold text-[#1d4dd6]">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <WorkExperice initialWork={work} />
        <Section className="print:col-start-1 print:col-span-2">
          <h2 className="text-xl font-bold text-[#1d4dd6]">Education</h2>
          {education.map((education: any) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-[12px]">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section className="break-before-page print:col-start-1 print:col-span-2">
          <h2 className="text-xl font-bold text-[#1d4dd6]">Skills</h2>
          <Skills skills={skills} />
        </Section>

        <Section className="print:col-start-1">
          <h2 className="text-xl font-bold text-[#1d4dd6]">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
        <Section className="scroll-mb-16  print:col-start-2">
          <h2 className="text-xl font-bold text-[#1d4dd6]">Certifications</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((project: any) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description || project.issuer}
                  tags={project.tags || []}
                  link={"link" in project ? project.link : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
        cal={RESUME_DATA.cal}
      />
    </main>
  );
}
