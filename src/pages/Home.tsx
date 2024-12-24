import { ClientSection } from "@/components/custom/Clients-Section"
import { Hero } from "@/components/custom/Hero"
import { ProjectSection } from "@/components/custom/projects"
import Services from "@/components/custom/Services"
import { TextReveal } from "@/components/custom/TextReveal"

const Home = () => {
    return (
        <div className="sm:max-w-screen">
            <Hero/>
            <ClientSection />
            <TextReveal />
            <div className="bg-[#0e0e0e]">
            <ProjectSection />
            </div>
            <Services/>
        </div>
    )
}

export default Home
