import Link from 'next/link'

const SocialLink = ({ icon: Icon, ...props }) => {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-primaryText-500 transition group-hover:fill-primaryText-600 dark:fill-primaryText-400 dark:group-hover:fill-primaryText-300" />
    </Link>
  )
}

export default SocialLink
