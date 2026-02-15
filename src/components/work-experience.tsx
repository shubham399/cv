"use client";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Section } from "./ui/section";
import { useState, useEffect } from "react";


export interface IExperience {
    company: string
    link: string
    badges: string[]
    title: string
    location: string
    skip: boolean;
    logo: string
    start: string
    end: any
    description: string[]
}


export const WorkExperience = ({ initialWork }: { initialWork: object }) => {
    const work = (initialWork as IExperience[])
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const totalYears = currentYear !== null ? work.filter(work => !work.skip).reduce((acc, work) => {
        const endYear = work.end ? parseInt(work.end) : currentYear;
        return acc + (endYear - parseInt(work.start));
    }, 0) : 0;

    return (<Section className={`print:col-start-1 print:col-span-2 print:row-start-3`}>
        <span className="flex items-center justify-between gap-x-2 text-base col-start-1 col-span-1">
            <h2 className="text-xl font-bold text-[#1d4dd6]">Work Experience
            </h2>
            <div className="text-sm tabular-nums text-gray-500">
                {currentYear !== null ? `${totalYears}+ Years` : '...'}
            </div>
        </span>
        {work.map((work) => {
            return (
                <Card key={work.company}>
                    <CardHeader>
                        <div className="flex items-center justify-between gap-x-2 text-base">
                            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                                <a className="hover:underline text-[#1d4dd6]" target="_blank" href={work.link}>
                                    {work.company}
                                </a>


                            </h3>
                            <div className="text-sm tabular-nums text-gray-500">
                                {work.start} - {work.end ?? "Present"}
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-x-2 text-base">

                            <h4 className="font-mono text-sm leading-none print:text-[12px]">
                                {work.title}
                            </h4>
                            <span className="inline-flex gap-x-1">
                                    {work.badges.map((badge) => (
                                        <Badge
                                            variant="secondary"
                                            className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                                            key={badge}
                                        >
                                            {badge}
                                        </Badge>
                                    ))}
                                </span>
                        </div>
                    </CardHeader>
                    <CardContent className="mt-2">
                        {Array.isArray(work.description) ? (
                            <ul className="list-disc leading-none justify-between list-inside">
                                {work.description.map((desc, index) => (
                                    <li className="text-pretty font-mono text-sm text-muted-foreground justify-between print:text-[12px]" key={index}>{desc.trim()}</li>
                                ))}
                            </ul>
                        ) : (
                            <>{work.description}</>

                        )}
                        {/* {work.description} */}
                    </CardContent>
                </Card>
            );
        })}
    </Section>)
}