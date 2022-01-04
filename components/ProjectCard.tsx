import { FunctionComponent, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaShareSquare } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { IProject } from '../type'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animations'

const ProjectCard: FunctionComponent<{
  project: IProject
  showDetail: null | number
  setShowDetail: (id: null | number) => void
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_tech,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className='cursor-pointer'
        onClick={() => setShowDetail(id)}
        width='480'
        height='320'
        layout='responsive'
      />

      <p className='my-2 text-center'>{name}</p>

      {showDetail === id && (
        <div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100'>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.div
              variants={fadeInUp}
              className='border-2 border-gray-100'>
              <Image
                src={image_path}
                alt={name}
                width='480'
                height='320'
                layout='responsive'
              />
            </motion.div>
            <motion.div
              className='flex justify-center my-4 space-x-3'
              variants={fadeInUp}>
              <a
                href={github_url}
                target='_blank'
                rel='noreferrer'
                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                target='_blank'
                rel='noreferrer'
                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                <FaShareSquare /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.h2
              className='mb-3 text-xl font-medium md:text-2xl'
              variants={fadeInUp}>
              {name}
            </motion.h2>
            <motion.h3 className='mb-3 font-medium' variants={fadeInUp}>
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
              {key_tech.map((tech) => (
                <span
                  className='px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200'
                  key={tech}>
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'>
            <MdClose />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
