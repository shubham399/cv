import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Skills component
const Skills = ({ skills }: { skills: any }) => {
    return (<section >
        <div className="grid grid-cols-2 gap-2 m-2 justify-around align-middle">
            {Object.entries(skills).map(([title, skillItems]: [string, any[]]) => {
                return <SkillCategory key={title} title={title} skillItems={skillItems} />
            })}
        </div>
    </section>)
};



const SkillCategory = ({ title, skillItems }: { title: string, skillItems: any[] }) => {
    return (<Card className="service-item gap-2 flex flex-col flex-wrap capitalize border border-muted p-3">
        <CardHeader className="">
            <CardTitle className="text-base">
                <p>{title}</p>
            </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-8 gap-4 justify-center items-center">
            {skillItems.map((skill: any) => (
                <SkillItem key={skill.skill} href={skill.href} alt={skill.skill} icon={skill.icon} />))

            }
        </CardContent>

    </Card>)
}

const SkillItem = ({ icon, href, alt }: { icon: string, href: string, alt: string }) => (

    <a href={href} target="_blank">
        <Image className="rounded-xl max-w-full h-8  w-8 aspect-square" src={icon} alt={alt} height={100} width={100} />
    </a>
);

export default Skills;