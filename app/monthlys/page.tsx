import { MonthlyPosts } from '../components/monthly-posts'
import { AnimatedHeading } from '../components/animated-heading'
import Link from 'next/link'

export const metadata = {
  title: 'projects',
  description: 'cool shit i did',
}

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <AnimatedHeading className="font-semibold text-2xl tracking-tighter">
          Monthlys
        </AnimatedHeading>
        <Link href="https://www.youtube.com/watch?v=ZZ5LpwO-An4">
          <p className="text-[var(--color-dark)] dark:text-[var(--color-light)]">
            HEYEAYEAYEAYEAYEAEYAEYAYE
          </p>
        </Link>
      </div>
      <div>
        <MonthlyPosts />
      </div>
    </section>
  )
} 
