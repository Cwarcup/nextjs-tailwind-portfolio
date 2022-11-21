import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'

import ecomLogo from '@/images/projects/ecom.svg'
import bananaLogo from '@/images/projects/bananaApp.svg'
import supaSnacksLogo from '@/images/projects/supaSnacks.svg'
import payByFonieLogo from '@/images/projects/payByFonie.svg'

// TODO: Add your own projects here. Logo images from https://heroicons.com/
const projectsData = [
  {
    title: 'E-commerce Website with TypeScript, React, Redux and Firebase',
    description: `This is a project that I built while learning React and Redux. It is a fully functional e-commerce website that allows users to sign in with their Google account, add items to their cart, and make payments with Stripe. It is built with TypeScript, React, Redux, Firebase, Stripe, and Tailwind.`,
    logo: ecomLogo,
    href: 'https://github.com/Cwarcup/ecom-firebase',
  },
  {
    title: 'Is this a banana?',
    description: `Is this a banana? No. Maybe? I don't know. Use this app to find out. I wanted to learn more about machine learning and how to use TensorFlow.js. I explored the TensorFlow.js website and found a pre-trained image classification model called MobileNet. I used this model to classify images of bananas and other objects.`,
    logo: bananaLogo,
    href: 'https://github.com/Cwarcup/wtf_is_this',
  },
  {
    title: 'Supa Snacks',
    description: `Supa Snacks is a mini-project to learn Supabase and introduce myself to React-Query. It's a simple app that allows you to add snacks to a list, edit and delete from. Users can also change the order of the snacks in the list. It is built using TypeScript, React, React-Query, Supabase and React Router Dom.`,
    logo: supaSnacksLogo,
    href: 'https://github.com/Cwarcup/supa-snacks',
  },
  {
    title: 'PayByFonie',
    description: `PayByFonie is a play on the app PayByPhone, a parking app that allows you to pay for parking via your phone. PayByFonie is a similar app, but allows you to search a destination and view parking meter data near that location. Users can search a location using the MapBox API, view the price and time limit of parking meters near that location, and obtain the PayByPhone meter number to pay for that meter. The app was built using React, and Node.js.`,
    logo: payByFonieLogo,
    href: 'https://github.com/Cwarcup/free-parking-mapper',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - {siteMetadata.author}</title>
        <meta name="description" content="Personal projects by Curtis Warcup" />
      </Head>
      <SimpleLayout
        title="Projects I've worked on"
        intro="These are some of the projects that I'm most proud of. I've built them to learn new technologies, or to solve a problem that I've encountered."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => {
            console.log(project)
            return (
              <Card as="li" key={project.title}>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="w-8 h-8"
                    unoptimized
                    width={32}
                    height={32}
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.href}>{project.title}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="flex-none w-6 h-6" />
                  <span className="ml-2">{project.title}</span>
                </p>
              </Card>
            )
          })}
        </ul>
      </SimpleLayout>
    </>
  )
}
