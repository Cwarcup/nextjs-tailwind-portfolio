import Link from 'next/link'

const CallToAction = () => {
  return (
    <div className="bg-accent-50 dark:bg-accent-800/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primaryText-900 md:text-4xl">
          <span className="block text-primaryText-800 dark:text-primaryText-100">
            Feeling curious?
          </span>
          <span className="block text-accent-600 dark:text-accent-100">
            This is an invitation to explore.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent-500 px-5 py-3 text-base font-medium text-white hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:text-slate-800"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
