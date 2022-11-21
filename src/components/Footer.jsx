import Link from 'next/link'
import { Container } from '@/components/Container'
import siteMetadata from '@/data/siteMetadata'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-accent-500 dark:hover:text-accent-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-16">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-primaryText-100 dark:border-primaryText-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-primaryText-800 dark:text-primaryText-200">
                {siteMetadata.siteNavLinks.map((link, index) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-primaryText-400 dark:text-primaryText-500">
                &copy; {new Date().getFullYear()} Curtis Warcup. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
