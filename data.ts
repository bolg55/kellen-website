import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { IProject, IService, ISkill } from './type'

import { BsCircleFill } from 'react-icons/bs'

export const services: IService[] = [
  {
    id: 1,
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>, <b>CSS</b> and <b>React.js</b> ',
  },
  {
    id: 2,
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'handle database, server, api using <b>Express</b>, <b>Strapi</b> & other popular frameworks',
  },
  {
    id: 3,
    Icon: AiOutlineApi,
    title: 'API Development',
    about:
      'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
  },
  {
    id: 4,
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about: 'a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ',
  },
  {
    id: 5,
    Icon: AiOutlineAntDesign,
    title: 'UI/UX Designer',
    about:
      'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
  },
  {
    id: 6,
    Icon: RiComputerLine,
    title: 'SaaS Development',
    about:
      'I can build a full SaaS solution using <b>Next.js</b>, <b>Stripe</b> and more',
  },
]

export const languages: ISkill[] = [
  { id: 1, Icon: BsCircleFill, name: 'Python', level: '45%' },
  { id: 2, Icon: BsCircleFill, name: 'JavaScript', level: '70%' },
  { id: 4, Icon: BsCircleFill, name: 'React', level: '75%' },
  { id: 5, Icon: BsCircleFill, name: 'Next.js', level: '80%' },
  { id: 6, Icon: BsCircleFill, name: 'Tailwind', level: '60%' },
  { id: 7, Icon: BsCircleFill, name: 'SQL', level: '65%' },
]

export const tools: ISkill[] = [
  { id: 1, Icon: BsCircleFill, name: 'Figma', level: '85%' },
  { id: 2, Icon: BsCircleFill, name: 'Photoshop', level: '45%' },
  { id: 3, Icon: BsCircleFill, name: 'Illustrator', level: '60%' },
  { id: 4, Icon: BsCircleFill, name: 'Framer', level: '45%' },
]

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Spotify Clone',
    description:
      'This Spotify clone uses the Spotify API to connect to existing account. Fully functional- plays songs, brings in playlists, controls the Spotify desktop or phone app. Persists loggedin state and authenticates user using nextauth. ',
    image_path:
      'https://res.cloudinary.com/dxghtqpao/image/upload/v1641504455/SpotifyClone2_v7wd2q.png',
    deployed_url: 'https://spotify-clone-bolg55.vercel.app/',
    github_url: 'https://github.com/bolg55/spotify-clone',
    category: ['react'],
    key_tech: ['React', 'Tailwind', 'Nextauth', 'Recoil', 'REST API'],
  },
  {
    id: 2,
    name: 'Netflix Clone',
    description:
      'This is a clone of Netflix. You can view movie trailers, search by category etc. Uses the TMDb API. ',
    image_path:
      'https://res.cloudinary.com/dxghtqpao/image/upload/v1627106822/medium_Notflix_8fc619d579.png',
    deployed_url: 'https://notflix-omega.vercel.app/',
    github_url: 'https://github.com/bolg55/notflix',
    category: ['react'],
    key_tech: ['React', 'Tailwind', 'REST API'],
  },
  {
    id: 3,
    name: 'NHL Machine Learning Model',
    description:
      'This is a Machine Learning model that I built in Python, that predicts the winner of NHL games. It currently has a 58% win rate! The model uses Logistic regression and a lot of stats that I have scraped into my own SQL database dating back to 2009. ',
    image_path:
      'https://res.cloudinary.com/dxghtqpao/image/upload/v1626757466/medium_Screenshot_2021_07_14_021251_648c8151bc.png',
    deployed_url: 'https://actionbackers.com/',
    github_url: 'https://github.com/bolg55/NHL_model_2021',
    category: ['python'],
    key_tech: ['Python', 'SQL'],
  },
  {
    id: 4,
    name: 'NHL Stats Scraper',
    description:
      'This is a web scraper that I built to scrape NHL stats for teams, players and goalies. The scraper adds the stats to a mySQL database that I built, and is then accessed by my NHL model. ',
    image_path:
      'https://res.cloudinary.com/dxghtqpao/image/upload/v1641323426/NHLScraper_j2clsk.png',
    deployed_url: 'https://actionbackers.com/',
    github_url: 'https://github.com/bolg55/NHL-database-update',
    category: ['python'],
    key_tech: ['Python', 'SQL', 'Web Scraping', 'Pandas'],
  },

  {
    id: 5,
    name: 'Action Backers',
    description: `An online business I built from the ground up. This site is currently built with WordPress I wanted to get an MVP up and running quickly, with functionality that I ${"wasn't"} able to build at the time, such as paywalled content, Stripe integration, and different user levels. I am rebuilding this site from the ground up using Next.js `,
    image_path:
      'https://res.cloudinary.com/dxghtqpao/image/upload/v1626757593/medium_Screenshot_2021_07_15_003615_e86dcff1cc.png',
    deployed_url: 'https://actionbackers.com/',
    github_url: 'https://actionbackers.com',
    category: ['wordpress'],
    key_tech: ['Wordpress', 'Python'],
  },
  {
    id: 6,
    name: 'Dad Joke Generator',
    description:
      'This is a quick app that I build for fun to generate random dad jokes. I wanted to work with Axios a bit and icanhazdadjoke.com has a simple API to work with. The app is simple- it will generate a "dad joke" on load and subsequently when pressing the "new joke" button, without re-rendering the page. ',
    image_path:
      'https://res.cloudinary.com/dxghtqpao/image/upload/v1628785132/medium_Screenshot_2021_07_22_230906_2daa4ec08c.png',
    deployed_url: 'https://dad-joke-generator.vercel.app/',
    github_url: 'https://github.com/bolg55/dad-joke-generator',
    category: ['react'],
    key_tech: ['Next.js', 'REST API'],
  },
  {
    id: 7,
    name: 'Kellenbolger.ca',
    description:
      "Web-ception! I built this site using all of the technologies I love working with most. I wanted to have a fast, responsive website with great functionality and the ability to easily add or change things without having to spend days doing so. It's also my first project using TypeScript.",
    image_path:
      'https://res.cloudinary.com/dxghtqpao/image/upload/v1641264181/kellen_new_site_22_lo56hx.png',
    deployed_url: 'https://kellenbolger.ca',
    github_url: 'https://github.com/bolg55',
    category: ['react'],
    key_tech: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript'],
  },
  {
    id: 8,
    name: 'Waves Music App',
    description:
      'This music app was built using React and SaSS. It is responsive, features a slide-out library menu, and functions like any typical music app would. It can play/ pause, track through the song, skip forward and back. Next iterations would be including a shuffle/ loop option and possibly a volume control. ',
    image_path:
      'https://res.cloudinary.com/dxghtqpao/image/upload/v1626757267/medium_Screenshot_2021_07_14_020202_d0d2a03081.png',
    deployed_url: 'https://bolg55-music-player.netlify.app/',
    github_url: 'https://github.com/bolg55/music-app',
    category: ['react'],
    key_tech: ['JavaScript', 'React', 'SaSS', 'Netlify'],
  },
]
