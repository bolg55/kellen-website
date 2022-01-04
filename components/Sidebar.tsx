import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineDownload,
} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Image
        src='https://res.cloudinary.com/dxghtqpao/image/upload/v1641194192/KellenAvatar_jwpsiz.png'
        alt='Kellen Bolger avatar'
        className='mx-auto rounded-full '
        height='128'
        width='128'
        quality='100'
      />
      <h1 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-green'>Kellen </span>
        Bolger
      </h1>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
        Web Developer
      </p>
      <a
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'
        href='/assets/Kellen Bolger Resume_2021.pdf'
        download='Kellen Bolger Resume.pdf'>
        <AiOutlineDownload className='w-6 h-6' />
        Download Resume
      </a>
      {/* social icons */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
        <a href='https://github.com/bolg55' target='_blank' rel='noreferrer'>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a
          href='https://linkedin.com/in/kellenbolger/'
          target='_blank'
          rel='noreferrer'>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
        <a
          href='https://twitter.com/kellenbolger'
          target='_blank'
          rel='noreferrer'>
          <AiFillTwitterSquare className='w-8 h-8 cursor-pointer' />
        </a>
      </div>
      {/* address */}
      <div
        className='py-4 my-5 bg-gray-200 dark:bg-dark-200'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Waterloo, Ontario</span>
        </div>
        <p className='my-2'>kellen@kellenbolger.ca</p>
        <p className='my-2'>(519) 498-8096</p>
      </div>
      {/* Email Button */}
      <button
        className='w-9/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
        onClick={() => window.open('mailto:kellen@kellenbolger.ca')}>
        Email me
      </button>
      <button
        onClick={changeTheme}
        className='w-9/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>
        Toggle theme
      </button>
    </div>
  )
}

export default Sidebar
