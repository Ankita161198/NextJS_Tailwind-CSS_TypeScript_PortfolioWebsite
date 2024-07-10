import Image from "next/image";
import { GetStaticProps ,GetServerSideProps} from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import dp from '../images/dp.jpeg';
import { PageInfo, Experience, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import dynamic from "next/dynamic";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home: React.FC<Props> = ({ pageInfo, experiences, projects, skills, socials }) => {
  return (
    <div className="bg-[#212529] h-screen text-[#e0afa0] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#2f353a]-400/20 scrollbar-thumb-[#e0afa0]/80">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
      </Head>
      
      <Header socials={socials}/>
    
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>
     
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
     
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>
      
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>
      
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>
      
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={dp}
              alt=""
              width={40}
              height={40}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

  // export default Home;
export default dynamic(() => Promise.resolve(Home), { ssr: false });

export const getStaticProps: GetServerSideProps<Props> = async () => {
  
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
      },
      revalidate:10,
    };
    
  
}
