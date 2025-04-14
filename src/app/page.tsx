
import Image from "next/image";
import UntitledPng from "../../public/Untitled.png";
import Socials from "@/components/socials";
export default function Home() {
  return (
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
          src={UntitledPng} alt={"photo"}  />
      </div>
    </div>
  );
}
