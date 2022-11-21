import Head from 'next/head'
import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import Testimonial from '@/components/Testimonial'
import Faq from '@/components/Faq'
import FeatureSection from '@/components/FeatureSection'
import CallToAction from '@/components/CallToAction'
import DivideLine from '@/components/DivideLine'
import siteMetadata from '@/data/siteMetadata'

const Home = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Container className="mt-32">
        <div className="grid max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl">
            {siteMetadata.authorHeadline}
          </h1>
          <p className="mt-6 text-base text-primaryText-600 dark:text-primaryText-400">
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
      <DivideLine />
      <FeatureSection />
      <Testimonial />
      <Faq />
      <CallToAction />
    </>
  )
}

export default Home
