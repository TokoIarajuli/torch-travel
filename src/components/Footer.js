import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import icons from '../constants/icons'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              {' '}
              {item.text}{' '}
            </Link>
          )
        })}
      </div>
      <div className={styles.icons}>
        {icons.map((item, index) => {
          return (
            <a
              href={item.url}
              key={index}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Torch Ltd. {new Date().getUTCFullYear()} all rights
        reserved
      </div>
    </footer>
  )
}

export default Footer
