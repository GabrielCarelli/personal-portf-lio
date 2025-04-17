import { ProjectsCarroussel } from '@/components/projects-carrousel'
import Link from 'next/link'
import React from 'react'
import { ArrowLeft } from 'react-feather'

export default function Projects() {
  return (
    <><div className='flex flex-col-reverse md:flex-row md:justify-between md:space-y-0'>
          <div className='mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3'>
              <h1 className='will-change-opacity text-5xl font-bold will-change-transform'>
                  Projetos
              </h1>
              <h2 className='will-change-opacity text-lg font-medium text-gray-300 will-change-transform'>
                  A selection of my most meaningful projects, all available on GitHub.
              </h2>
          </div>
      </div><ProjectsCarroussel />
      <Link
          href="/"
          className="group flex items-center justify-start space-x-2 text-xl font-medium"
        >
          <ArrowLeft className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
          <span>Go Back</span>
        </Link>
      </>
  )
}
