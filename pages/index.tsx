import { services } from '../data'
import ServiceCard from '../components/ServiceCard'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import Layout from '../components/Layout'

const index = () => {
  return (
    <>
      <Layout />
      <motion.div
        variants={routeAnimation}
        initial='initial'
        animate='animate'
        exit='exit'
        className='flex flex-col flex-grow px-6 pt-1'>
        <h5 className='my-3 font-medium'>
          My name is Kellen, and I&apos;m a web developer from Waterloo,
          Ontario. I love building computers, Hackintosh-ing, Raspberry Pi-ing,
          and building cool projects with code. I&apos;m always eager to learn
          more and open to new opportunities.
        </h5>
        <div
          className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
          style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
          <h6 className='my-3 text-xl font-bold tracking-wide'>What I Do</h6>
          <motion.div
            className='grid gap-6 lg:grid-cols-2'
            variants={stagger}
            initial='initial'
            animate='animate'>
            {services.map((service) => (
              <motion.div
                variants={fadeInUp}
                key={service.id}
                className='bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200'>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default index
