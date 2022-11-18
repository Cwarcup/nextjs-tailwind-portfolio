import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'What flour is the best for pizza dough?',
    answer:
      'You can make pizza with bread flour or all-purpose flour. Bread flour is the best option because it has a higher protein content which means when it’s mixed with water, it has more gluten in the dough. Gluten is what makes the dough stretchy and gives it a chewier crust.',
  },
  {
    question: 'Can I use a rolling pin, or is that cheating?',
    answer:
      'Professional pizzaiolos are experts in stretchy and throwing dough, and the more you practice, you will be able to. But there is no shame in using a rolling pin as you learn about the best way to stretch your dough..',
  },
  {
    question: 'How to make a pizza without cheese?',
    answer:
      'What is wrong with you? Just kidding. Cheeseless pizza is fairly new, but it’s gaining popularity for those with dietary conditions or even some vegans. You can use cashew cheese or try some of the non-dairy shreds available in most supermarkets. Nutritional yeast is a common product that has a nutty, cheesy taste. Or you could skip the cheese and go veggie-heavy.',
  },
  {
    question: 'Should I use fresh tomatoes or canned?',
    answer:
      'According to the experts, canned tomatoes are best for making pizza sauce. Fresh tomatoes are fine when in season, but they are often too watery, and the flavor is inconsistent.',
  },
]

const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-primaryText-600 dark:text-primaryText-400">
            Can’t find the answer you’re looking for? Reach out to{' '}
            <a
              href={`mailto:${siteMetadata.email}`}
              className="font-medium text-accent-600 hover:text-accent-500"
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
                  <dt className="text-lg font-medium leading-6 text-primaryText-800 dark:text-primaryText-100">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-primaryText-600 dark:text-primaryText-400 ">
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
