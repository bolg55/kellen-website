import Link from 'next/link'
import { FaExclamationTriangle, FaSadTear } from 'react-icons/fa'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <>
      <Layout
        title='Page Not Found'
        description='Nothing to see here. Head back home'
        currentURL='https://kellenbolger.ca/404'
      />
      <div className='flex flex-col items-center text-5xl'>
        <div className='flex items-center my-10'>
          <FaExclamationTriangle className='mr-2' /> <h1>404</h1>
        </div>

        <h2>
          <FaSadTear className='my-10 text-blue-500 text-8xl' />
        </h2>
        <h4>Sorry, nothing here</h4>
      </div>
    </>
  )
}

export default NotFoundPage
