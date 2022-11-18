import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Faq from '@/components/Faq'
import CallToAction from '@/components/CallToAction'
import { RiMentalHealthLine, RiOpenArmLine } from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'

const Offerings = () => {
  return (
    <>
      <Head>
        <title>Offerings - {siteMetadata.author}</title>
        <meta name="description" content="Offerings" />
      </Head>
      <div className="relative pt-16 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-md">
                    <RiMentalHealthLine
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    {siteMetadata.offerings[0].title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    {siteMetadata.offerings[0].description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-8 border-t border-gray-200">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      {siteMetadata.offerings[0].testimonial}
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-base font-medium text-gray-700">
                        {siteMetadata.offerings[0].testimonialAuthor},{' '}
                        {siteMetadata.offerings[0].testimonialAuthorTitle}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={siteMetadata.offerings[0].imgUrl}
                  alt={siteMetadata.offerings[0].title}
                  width={2560}
                  height={1536}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-md">
                    <RiOpenArmLine
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    {siteMetadata.offerings[1].title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    {siteMetadata.offerings[1].description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={siteMetadata.offerings[1].imgUrl}
                  alt={siteMetadata.offerings[1].title}
                  width={2560}
                  height={1536}
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
