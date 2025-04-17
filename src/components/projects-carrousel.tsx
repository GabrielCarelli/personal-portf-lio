"use client";

import React from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carroussel";

export function ProjectsCarroussel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-300 dark:text-neutral-200 font-sans">
        Get to know the projects.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}


const data = [
    {
      category: "Web App",
      title: "Financia Aê - Creative Crowdfunding",
      src: "https://images.unsplash.com/photo-1599585183326-87b1fff61c33?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <div className="p-6 text-neutral-600 dark:text-neutral-300">
          <p className="text-lg font-semibold">Help creative ideas to grow.</p>
          <p>
            Support the future of creativity.
            This platform helps creators fund and share their passion projects.
          </p>
          <br />
          <p>
            Financia Aê is a crowdfunding platform tailored for creative projects — from indie games and tabletop RPGs to books and interactive fiction.
            The platform empowers creators by offering tools to showcase their work, set funding goals, and build a community around their ideas.
            Users can explore a curated feed of projects, save favorites, and support initiatives they believe in.  
          </p>
          <br />
          <a
            href="https://github.com/GabrielCarelli/financiaae"
            target="_blank"
            className="text-blue-500 underline mt-2 inline-block"
          >
            Check it out
          </a>
        </div>
      ),
    },
    {
      category: "Web App",
      title: "AnimeHub",
      src: "https://m.media-amazon.com/images/I/91V-G74yEdL._UF894,1000_QL80_.jpg",
      content: (
        <div className="p-6 text-neutral-600 dark:text-neutral-300">
          <p className="text-lg font-semibold">A list of the best animes right now.</p> <br/>
          <p>
            AnimeHub is a platform created for anime enthusiasts to explore, track, and share their favorite series. Whether you&apos;re a casual viewer or a hardcore otaku, AnimeHub offers a sleek and intuitive interface to discover new titles, mark episodes watched, rate series, and engage with a growing community of fellow fans. With curated recommendations, up-to-date info, and personalized watchlists, AnimeHub becomes your ultimate companion in the world of anime.
          </p>
          <a
            href="https://watchanime-jade.vercel.app/"
            target="_blank"
            className="text-blue-500 underline mt-2 inline-block"
          >
            Check it out
          </a>
        </div>
      ),
    },
    {
      category: "Web App",
      title: "NextJS Pokédéx",
      src: "https://tm.ibxk.com.br/2016/08/16/16195128880838.jpg?ims=750x",
      content: (
        <div className="p-6 text-neutral-600 dark:text-neutral-300">
          <p className="text-lg font-semibold">A simple pokédéx app to learn api&apos;s</p>
          <p>
            That was a simple app to learn the fundamentals of consuming api&apos;s.
          </p>
          <a
            href="https://github.com/GabrielCarelli/nextjs-pokedex"
            target="_blank"
            className="text-blue-500 underline mt-2 inline-block"
          >
            Check it out
          </a>
        </div>
      ),
    },
    {
      category: "Web App",
      title: "Car Dealership CRM",
      src: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/08/ford_mustang_gt_performance_154.jpg?w=824",
      content: (
        <div className="p-6 text-neutral-600 dark:text-neutral-300">
          <p className="text-lg font-semibold">Helping Car shop.</p>
          <p>
          AutoCRM is a customer relationship management system designed specifically for car dealerships. It helps streamline sales processes, manage customer interactions, and track leads from first contact to final sale. With features like appointment scheduling, inventory management, test drive tracking, and sales performance dashboards, AutoCRM empowers sales teams to deliver a more personalized and efficient customer experience. Whether you&apos;re managing new or used vehicles, AutoCRM puts your entire dealership operation in one powerful platform.
          </p>
          <a
            href="https://seublog.com"
            target="_blank"
            className="text-blue-500 underline mt-2 inline-block"
          >
            Check it out
          </a>
        </div>
      ),
    },
  ];
  