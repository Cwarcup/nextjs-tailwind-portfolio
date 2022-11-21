import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Faq from '../components/Faq'
import CallToAction from '../components/CallToAction'
import { RiMentalHealthLine, RiOpenArmLine } from 'react-icons/ri'
import siteMetadata from '../../data/siteMetadata'

const Offerings = () => {
  return (
    <>
      <Head>
        <title>Offerings - {siteMetadata.author}</title>
        <meta name="description" content="Offerings" />
      </Head>
      <div className="relative overflow-hidden pt-16">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-600">
                    <RiMentalHealthLine
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100">
                    {siteMetadata.offerings[0].title}
                  </h2>
                  <p className="mt-4 text-lg text-primaryText-600 dark:text-primaryText-400">
                    {siteMetadata.offerings[0].description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex rounded-md border border-transparent bg-accent-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:text-slate-800"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-primaryText-100 pt-6 dark:border-primaryText-700/40">
                <blockquote>
                  <div>
                    <p className="text-base text-primaryText-600 dark:text-primaryText-400">
                      {siteMetadata.offerings[0].testimonial}
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-base font-medium text-primaryText-500">
                        {siteMetadata.offerings[0].testimonialAuthor},{' '}
                        {siteMetadata.offerings[0].testimonialAuthorTitle}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={siteMetadata.offerings[0].imgUrl}
                  alt={siteMetadata.offerings[0].title}
                  width={2560}
                  height={1536}
                  title={siteMetadata.offerings[0].imageAttribution}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-600">
                    <RiOpenArmLine
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100">
                    {siteMetadata.offerings[1].title}
                  </h2>
                  <p className="mt-4 text-lg text-primaryText-600 dark:text-primaryText-400">
                    {siteMetadata.offerings[1].description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex rounded-md border border-transparent bg-accent-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:text-slate-800"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={siteMetadata.offerings[1].imgUrl}
                  alt={siteMetadata.offerings[1].imageAttribution}
                  width={2560}
                  height={1536}
                  title={siteMetadata.offerings[1].imageAttribution}
                />
              </div>
            </div>
          </div>
        </div>
        <Faq />
        <CallToAction />
      </div>
    </>
  )
}

export default Offerings
