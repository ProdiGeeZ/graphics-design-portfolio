// import { CalendarIcon, FileTextIcon, InputIcon } from "@radix-ui/react-icons";

// import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

// const projects = [
//     {
//         Icon: FileTextIcon,
//         name: "Manchester City",
//         description:
//             "Medusa Submarine Cable System is a neutral and independent infrastructure operator connecting Mediterranean countries with the Atlantic and the Red Sea.",
//         href: "/",
//         background: <img className="absolute" />,
//         cta: "View",
//         className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2",
//     },
//     {
//         Icon: CalendarIcon,
//         name: "JD Sports",
//         description:
//             "Gespromo is a sales management tool specifically designed for automotive parts distributors. It allows you to organize customers, manage sales, and improve productivity through an advanced CRM.",
//         background: <img className="absolute w-full h-auto"/>,
//         href: "/",
//         cta: "View",
//         className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-2",
//     },
//     {
//         Icon: InputIcon,
//         name: "BIC",
//         description:
//             "Supports 100+ languages and counting.",
//         background: <img className="absolute w-full" />,
//         href: "/",
//         cta: "View",
//         className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
//     },
//     {
//         Icon: InputIcon,
//         name: "TCG Limited",
//         description:
//             "Supports 100+ languages and counting.",
//         background: <img className="absolute" />,
//         href: "/",
//         cta: "View",
//         className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-2",
//     }
// ];

// export function ProjectSection() {
//     return (
//         <div className="container mx-auto px-4 py-16 sm:max-w-screen">
//             <h2 className="text-center md:text-left text-5xl font-bold mb-12 tracking-wide">FEATURED WORK</h2>
//             <BentoGrid className="grid-cols-1 lg:grid-cols-2 gap-6 mx-auto max-w-full">
//                 {projects.map((project) => (
//                     <BentoCard key={project.name} {...project} />
//                 ))}
//             </BentoGrid>
//         </div>
//     );
// }

import { ArrowUpRight } from 'lucide-react'
import { Badge } from "@/components/magicui/badge"

interface WorkItem {
    title: string
    subtitle: string
    category: string
    image: string
    link: string
}

const works: WorkItem[] = [
    {
        title: "JD Sports",
        subtitle: "Annual Report 2017",
        category: "Corporate Literature",
        image: "/placeholder.svg?height=600&width=800",
        link: "#"
    },
    {
        title: "Manchester City F.C",
        subtitle: "E-Newsletter Design",
        category: "Web Design",
        image: "/placeholder.svg?height=600&width=800",
        link: "#"
    },
    {
        title: "BiC",
        subtitle: "I designed boxes for BiC pens.",
        category: "Packaging Design & Advertising",
        image: "/placeholder.svg?height=600&width=800",
        link: "#"
    },
    {
        title: "TLG Ltd",
        subtitle: "Building & Reception Decor",
        category: "Environmental Design",
        image: "/placeholder.svg?height=600&width=800",
        link: "#"
    }
]

export function ProjectSection() {
    return (
        <section className="py-24 bg-[#edf1ff] max-w-screen">
            <div className="container mx-auto px-4 max-w-screen">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-5xl md:text-5xl font-bold mb-4">
                        Featured <span className="italic font-normal">works</span>
                    </h2>
                    <p className="text-[#353535] font-semibold">
                        Take a look at some of my projects.
                        <br />
                        Each piece showcases my creative journey, encapsulating my commitment to bringing ideas into visually compelling stories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {works.map((work, index) => (
                        <a
                            key={index}
                            href={work.link}
                            className="group relative rounded-3xl overflow-hidden bg-neutral-100 aspect-[4/3] block"
                        >
                            <img
                                src={work.image}
                                alt={`${work.title} ${work.subtitle}`}
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent">
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Badge variant="secondary" className="mb-3 bg-white/10 hover:bg-white/20 text-white">
                                                {work.category}
                                            </Badge>
                                            <h3 className="text-xl font-semibold">
                                                {work.title} <span className="italic text-muted text-xs items-center font-normal justify-center">{work.subtitle}</span>
                                            </h3>
                                        </div>
                                        <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:bg-orange group-hover:border-black group-hover:text-black">
                                            <ArrowUpRight className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}


