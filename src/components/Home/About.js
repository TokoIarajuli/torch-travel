import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <img src={img} alt="About Company" />
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Torch Torch Torch Torch Torch Torch Torch Torch Torch Torch Torch
            Torch Torch Torch
          </p>
          <p>
            Torch Torch Torch Torch Torch Torch Torch Torch Torch Torch Torch
            Torch Torch Torch
          </p>
          <button type="button" className="btn-primary">
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
