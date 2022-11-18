import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import siteMetadata from '@/data/siteMetadata'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/SocialIcons'
import avatarImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-primaryText-800 transition hover:text-teal-500 dark:text-primaryText-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-primaryText-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

const About = () => {
  return (
    <>
      <Head>
        <title>About - {siteMetadata.author}</title>
        <meta name="description" content={siteMetadata.description} />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={avatarImage}
                alt="picture of the author"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-primaryText-100 object-cover dark:bg-primaryText-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl">
              {siteMetadata.authorHeadline}
            </h1>
            <div className="mt-6 space-y-7 text-base text-primaryText-600 dark:text-primaryText-400">
              <p className="whitespace-pre-wrap">
                {siteMetadata.authorAboutExtended}
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href={siteMetadata.socials.twitter}
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href={siteMetadata.socials.instagram}
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href={siteMetadata.socials.github}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={siteMetadata.socials.linkedin}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMetadata.email}`}
                icon={MailIcon}
                className="mt-8 border-t border-primaryText-100 pt-8 dark:border-primaryText-700/40"
              >
                {siteMetadata.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default About
