import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type TSkill = { icon: string, href: string, alt: string }

// Skills component
const Skills = ({ skills }: { skills: object }) => {
    return (<section >
        <div className="print:grid-cols-2 print:gap-2  grid grid-cols-1 md:grid-cols-2 gap-2 m-2 justify-around align-middle">
            {Object.entries(skills).map(([title, skillItems]: [string, any[]]) => {
                return <SkillCategory key={title} title={title} skillItems={skillItems} />
            })}
        </div>
    </section>)
};



const SkillCategory = ({ title, skillItems }: { title: string, skillItems: any[] }) => {
    return (<Card className="service-item gap-2 flex flex-col flex-wrap capitalize border border-muted p-3 print:border-none">
        <CardHeader className="">
            <CardTitle className="text-base">
                <p>{title}</p>
            </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-4 md:grid-cols-6 gap-2 lg:gap-4 justify-center items-center print:hidden">
            {skillItems.map((skill: any, index: number) => (
                <SkillItem key={index} href={skill.href} alt={skill.skill} icon={skill.icon} />))

            }
        </CardContent>
        <CardContent className="hidden p-2 print:block">
            <ul className="list-disc text-xs grid grid-cols-2 gap-1 mx-2">
                {skillItems.map((skill: any, index: number) => (
                    <li key={index}> {skill.skill}</li>))

                }
            </ul>
        </CardContent>

    </Card>)
}


const SkillItem = ({ icon, href, alt }: { icon: string, href: string, alt: string }) => (
    <>
        <a href={href} target="_blank" className="group relative flex justify-center items-center print:hidden">
            <div className="relative">
                <Image
                    className="print:hidden w-full h-auto rounded-xl transition-transform duration-300 transform group-hover:scale-150"
                    src={icon}
                    alt={alt}
                    width="0"
                    height="0"
                    sizes="100vw"
                />
            </div>
        </a>
    </>
);

export default Skills;
