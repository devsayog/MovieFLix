import { Helmet } from 'react-helmet-async'

type SeoTypes = {
  title?: string
  description?: string
  url: string
  image?: string
}

function Seo({ title, description, url, image }: SeoTypes) {
  console.log(import.meta.env.BASE_URL)
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

Seo.defaultProps = {
  description:
    'MovieFlix - Collection of movies. Place where you can search and find information about different movies and actors.',
  image: `/movie-png.png`,
  title: 'MovieFlix',
}

export default Seo
