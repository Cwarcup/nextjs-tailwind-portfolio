import Head from 'next/head'
import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'

import siteMetadata from '@/data/siteMetadata'
import Testimonial from '@/components/Testimonial'
import Faq from '@/components/Faq'
import FeatureSection from '@/components/FeatureSection'
import CallToAction from '@/components/CallToAction'

const Home = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Head>
      <Container className="mt-9">
        <div className="grid max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {siteMetadata.authorHeadline}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {siteMetadata.authorAbout}
          </p>
          <div className="flex gap-6 mt-6">
            <SocialLink
              href={siteMetadata.socials.twitter}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href={siteMetadata.socials.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={siteMetadata.socials.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <FeatureSection />
      <Testimonial />
      <Faq />
      <CallToAction />
    </>
  )
}

export default Home
