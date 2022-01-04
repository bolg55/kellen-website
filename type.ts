import { IconType } from 'react-icons'

export interface IService {
  title: string
  about: string
  Icon: IconType
  id: number
}

export interface ISkill {
  name: string
  level: string
  Icon: IconType
  id: number
}

export interface IProject {
  id: number
  name: string
  description: string
  image_path: string
  deployed_url: string
  github_url: string
  category: Category[]
  key_tech: string[]
}

export type Category =
  | 'react'
  | 'node'
  | 'express'
  | 'next.js'
  | 'python'
  | 'django'
  | 'mongo'
  | 'wordpress'
