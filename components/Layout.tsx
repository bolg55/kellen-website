import Head from 'next/head'

const Layout = ({ title, keywords, description, currentURL, previewImage }) => {
  return (
    <div>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        {/* Open Graph */}
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <meta property='og:url' content={currentURL} />
        <meta property='og:image' content={previewImage} key='ogimage' />
        <meta
          property='og:site_name'
          content='kellenbolger.ca'
          key='ogsitename'
        />
        {/* Twitter */}
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content='@kellenbolger' key='twhandle' />
        <title>{title}</title>
      </Head>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'Kellen Bolger | A modern web developer',
  description:
    'My name is Kellen Bolger and I am a web developer who specializes in Next.js and React. I am open to offers, or contact me to work on your next project.',
  keywords:
    'next.js, react, javascript, developers kitchener, developers waterloo, front-end, front end developer, junior developer',
  previewImage:
    'https://res.cloudinary.com/dxghtqpao/image/upload/v1626978460/largeKBShort_dmz3d3.png',
  currentURL: 'https://www.kellenbolger.ca',
}
