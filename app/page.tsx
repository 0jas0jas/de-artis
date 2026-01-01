import { BlogPosts } from 'app/components/posts'
import { AnimatedHeading } from 'app/components/animated-heading'
import Link from 'next/link'

export const metadata = {
  title: 'writings',
  description: "all the stuff i've written :D",
}

function RSSIcon() {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-[var(--color-light-80)]"
    >
      <circle cx="3.429" cy="20.571" r="1.429" fill="currentColor"/>
      <path d="M11.429 20.571H8.857C8.857 16.046 5.239 12.428 0.714 12.428V9.857C6.665 9.857 11.429 14.621 11.429 20.571Z" fill="currentColor"/>
      <path d="M20.571 20.571H18C18 13.174 11.826 7 4.429 7V4.429C13.245 4.429 20.571 11.755 20.571 20.571Z" fill="currentColor"/>
    </svg>
  )
}

export default function Page() {
  return (
    <section>
      <div>
        <BlogPosts />
      </div>
    </section>
  )
}