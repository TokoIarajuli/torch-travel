import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import FeaturedTours from '../components/Home/FeaturedTour'

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Continue exporing"
        info="Torch offers you perfect tours for traveling"
      >
        <AniLink fade to="/tours" className="btn-white">
          Explore Tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
