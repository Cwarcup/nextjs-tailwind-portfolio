import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    question: 'What will your results be?',
    answer:
      'You will see who you are when you can step away from the cultural & social pressures and ideas of success, and decide what success is for you and how you want to claim it &  live it.',
  },
  {
    question: 'What is the best way to contact you?',
    answer: 'You can email me ☺️',
  },
]

const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primaryText-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-primaryText-500">
            Can’t find the answer you’re looking for? Reach out to{' '}
            <a
              href={`mailto:${siteMetadata.email}`}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              me
            </a>
            .
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-12">
            {faqs.map((faq) => (
              <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transitions={{ duration: 3, type: 'tween' }}
                key={faq.question}
              >
                <div>
                  <dt className="text-lg font-medium leading-6 text-primaryText-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-primaryText-500">
                    {faq.answer}
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Faq
