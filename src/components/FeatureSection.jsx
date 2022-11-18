import { RiMentalHealthLine, RiOpenArmLine } from 'react-icons/ri'

// TODO: Add your own features here. Make sure to add the icon from Remix-Design's repo:
const features = [
  {
    name: 'Coaching',
    description:
      'Coaching is a fast-paced direct approach to engage action-oriented individuals to achieve their goals and create meaningful change. ',
    icon: RiOpenArmLine,
  },
  {
    name: 'Counseling',
    description:
      'I am a trauma-informed counsellor and use a holistic approach to explore physical, mental, social, emotional, and spiritual health.',
    icon: RiMentalHealthLine,
  },
]
const FeatureSection = () => {
  return (
    <div className="pb-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-accent-600">
            Offerings
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primaryText-900 sm:text-4xl">
            One day you finally knew what you had to do, and began.
          </p>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-primaryText-600">
            My vision is to guide clients towards empowerment and self-efficacy.
            I am honored to be your companion on the path of healing and
            self-discovery. Whether your goal is to excel in your career, thrive
            in your relationships, or start to live authentically with intent
            and purpose, you can depend on me as a source of support.
          </p>
        </div>

        <div className="max-w-lg mt-20 sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-accent-500 sm:shrink-0">
                  <feature.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-primaryText-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-primaryText-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
