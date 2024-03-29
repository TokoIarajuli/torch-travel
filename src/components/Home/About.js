import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <Img
            fluid={aboutImage.childImageSharp.fluid}
            alt="Awesome Landscape"
          />
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Torch is an international travelling company founded by 3 moclils
            during the hackathon in 2018.
          </p>
          <p>
            Consisting of professional and interactive staff, Torch will offer
            you adventure of your lifetime.
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
