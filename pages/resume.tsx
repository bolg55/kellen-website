import { languages, tools } from '../data'
import Bar from '../components/Bar'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import Layout from '../components/Layout'

const resume = () => {
  return (
    <>
      <Layout
        title='Resume | kellenbolger.ca'
        description="Contact me today about building your project or if you're looking to hire, I am open to new opportunities."
        currentURL='https://www.kellenbolger.ca/resume'
      />
      <motion.div
        variants={routeAnimation}
        initial='initial'
        animate='animate'
        className='px-6 py-2'>
        {/* education & exp */}
        <motion.h5
          variants={fadeInUp}
          initial='initial'
          animate='animate'
          exit='exit'
          className='my-3 text-2xl font-bold'>
          Experience
        </motion.h5>
        <motion.div
          variants={stagger}
          initial='initial'
          animate='animate'
          className='grid gap-6 md:grid-cols-2'>
          <motion.div variants={fadeInUp}>
            <h5 className='my-2 text-xl font-bold'>Founder</h5>
            <p className='font-semibold'>Action Backers</p>
            <p className='my-3'>
              An online education platform focused on building Machine Learning
              models which can be applied to betting on sports.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h5 className='my-2 text-xl font-bold'>Software Engineer</h5>
            <p className='font-semibold'>Freelance</p>
            <p className='my-3'>
              I&apos;ve been doing freelance software engineering for a few
              years now, with a focus on web development.
            </p>
          </motion.div>
        </motion.div>
        {/* languages & tools */}
        <div className='grid gap-6 md:grid-cols-2'>
          <div>
            <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
            <div className='my-2'>
              {languages.map((language) => (
                <Bar data={language} key={language.name} />
              ))}
            </div>
          </div>
          <div>
            <h5 className='my-3 text-2xl font-bold'>Tools & Software</h5>
            <div className='my-2'>
              {tools.map((tool) => (
                <Bar data={tool} key={tool.name} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default resume
