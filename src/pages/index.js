import React from "react"

import Layout from "@components/layout"
import SEO from "@components/seo"
import Hero from "@components/Hero"
import Section from "@components/elements/Section"
import Gallery from "@components/Gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Section heading="pretty things">
      <Gallery />
    </Section>
  </Layout>
)

export default IndexPage
