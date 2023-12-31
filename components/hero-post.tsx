import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      {/* <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div> */}
      <div className="md:grid place-items-center md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
      <div className='md:w-1/2'>
          <p className="text-lg leading-relaxed mb-4">
          UI/UX Designer passionate about crafting comfortable and adaptable products integrating emotions into digital experiences. I've foundation in development and programming to ensure optimal user interfaces, being user-friendly designs, let's to create!.</p>
        </div>
        {/* <div> 
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default HeroPost
