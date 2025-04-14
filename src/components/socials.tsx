import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/GabrielCarelli",
    icon: <FaGithub />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gabriel-carelli-14409a210/",
    icon: <FaLinkedin />,
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:gabrielcarelli2020@gmail.com",
    icon: <FaEnvelope />,
  },
];

interface SocialsProps {
  small?: boolean;
}

export default function Socials({ small = false }: SocialsProps) {
  return (
    <div className="flex space-x-4 mt-4">
      {socials.map(({ id, name, url, icon }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={name}
          className={`flex items-center justify-center rounded-xl bg-zinc-800 hover:bg-blue-600 transition-colors shadow-md border border-zinc-700 ${
            small ? "w-8 h-8 text-sm" : "w-10 h-10 text-lg"
          }`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
