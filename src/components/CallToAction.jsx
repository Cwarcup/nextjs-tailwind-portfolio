import Link from 'next/link'

const CallToAction = () => {
  return (
    <div className="bg-indigo-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Feeling curious?</span>
          <span className="block text-indigo-600">
            This is an invitation to explore.
          </span>
        </h2>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
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
