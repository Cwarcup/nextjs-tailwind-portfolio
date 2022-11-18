import emailjs from '@emailjs/browser'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { RiPhoneLine, RiMailLine } from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  // handle first name change
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  // handle last name change
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  // handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  // handle phone change
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  // handle subject change
  const handleSubjectChange = (e) => {
    setSubject(e.target.value)
  }

  // handle message change
  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_USER_ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          setFirstName('')
          setLastName('')
          setEmail('')
          setPhone('')
          setSubject('')
          setMessage('')
        },
        (err) => {
          console.log('FAILED...', err)
        }
      )
  }

  return (
    <>
      <Head>
        <title>Contact - {siteMetadata.author}</title>
        <meta name="description" content="Contact" />
      </Head>
      {/* Header */}
      <div className="pt-24 pb-8 lg:pt-32">
        <div className="relative z-10 pl-4 pr-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl lg:text-6xl">
            {siteMetadata.contactTitle}
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-primaryText-500">
            {siteMetadata.contactSubtitle}
          </p>
        </div>
      </div>

      {/* Contact section */}
      <section className="relative" aria-labelledby="contact-heading">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-lg shadow-xl dark:bg-slate-900">
            <h2 id="contact-heading" className="sr-only">
              Contact us
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative px-6 py-10 overflow-hidden rounded-lg bg-gradient-to-b from-accent-500 to-accent-600 sm:px-10 xl:p-12">
                {/* Decorative angle backgrounds */}
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white dark:text-slate-800">
                  Contact information
                </h3>
                <p className="max-w-3xl mt-6 text-base text-white dark:text-slate-800">
                  Please contact me with any questions or comments you may have.
                  You can also schedule a service through the form below.
                </p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex text-base text-white dark:text-slate-800">
                    <RiPhoneLine
                      className="flex-shrink-0 w-6 h-6 text-accent-200 dark:text-slate-800"
                      aria-hidden="true"
                    />
                    <span className="ml-3">{siteMetadata.phoneNumber}</span>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base text-white dark:text-slate-800">
                    <RiMailLine
                      className="flex-shrink-0 w-6 h-6 text-accent-200 dark:text-slate-800"
                      aria-hidden="true"
                    />
                    <span className="ml-3">{siteMetadata.email}</span>
                  </dd>
                </dl>
                <ul role="list" className="flex mt-8 space-x-12">
                  <li>
                    <Link
                      className="text-accent-200 hover:text-accent-100 dark:text-slate-800 dark:hover:text-slate-700"
                      href={siteMetadata.socials.facebook}
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-accent-200 hover:text-accent-100 dark:text-slate-800 dark:hover:text-slate-700"
                      href={siteMetadata.socials.github}
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-accent-200 hover:text-accent-100 dark:text-slate-800 dark:hover:text-slate-700"
                      href={siteMetadata.socials.twitter}
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact form */}
              <div className="px-6 py-10 bg-white rounded-lg dark:bg-slate-900 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-primaryText-800 dark:text-primaryText-100">
                  Send me a message
                </h3>
                {/* //TODO handle submit */}
                <form
                  onSubmit={handleOnSubmit}
                  method="POST"
                  className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        value={firstName}
                        onChange={handleFirstNameChange}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        value={lastName}
                        onChange={handleLastNameChange}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        value={email}
                        onChange={handleEmailChange}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                      >
                        Phone
                      </label>
                      <span
                        id="phone-optional"
                        className="text-sm text-primaryText-500"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        value={phone}
                        onChange={handlePhoneChange}
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                    >
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        value={subject}
                        onChange={handleSubjectChange}
                        type="text"
                        name="subject"
                        id="subject"
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                      >
                        Message
                      </label>
                      <span
                        id="message-max"
                        className="text-sm text-primaryText-500"
                      >
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        onChange={handleMessageChange}
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                        aria-describedby="message-max"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:text-slate-800 sm:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
