
import Image from "next/image";
import UntitledPng from "../../public/Untitled.png";
import Socials from "@/components/socials";
import { Projetos } from "@/data/Projetos";
import Link from "next/link";
import { ArrowRight } from "react-feather";
export default function Home() {
  return (
    <>
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Gabriel Carelli
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          Fullstack Web Developer • Web3 Enthusiast • Blogger •
          Tech Enthusiast
        </h2>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          I&apos;m a full-stack web developer with a passion for exploring new technologies—currently
          diving into Rust, Go, Web3, and advanced backend development.
          Outside of coding, I enjoy writing, which naturally led me to create and maintain my own
          blog where I share insights, experiments, and ideas.
        </p>
        <Socials />
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
        <Image
          src={UntitledPng} alt={"photo"} />
      </div>

    </div>
    <div className="my-16 flex flex-col">
        <h2 className="mb-8 text-3xl font-bold">
          Projects
        </h2>
        <div className="flex flex-col space-y-8">
          {Projetos.slice(0, 3).map(({index, project, name, url}) =>(
            <div key={index} className="group relative rounded-xl border-[1px] border-primary bg-secondary/5 p-4 transition duration-200 hover:border-accent md:hover:scale-[1.01]">
              <Link 
              href={url}
              className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4"
              >
                <div className="flex-col space-y-2">
                  <h3 className="flex flex-row items-center space-x-2 text-lg font-semibold">
                    {name}
                  </h3>
                  <p className="text-md text-gray-300">{project}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className="group mt-8 flex items-center justify-start space-x-2 text-xl font-medium"
        >
          <span>View All Projects</span>
          <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
      </>
  );
}
