import React from "react"

import Layout from "@components/layout"
import SEO from "@components/seo"
import Hero from "@components/Hero"
import Section from "@components/elements/Section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Section heading="pretty things" />
  </Layout>
)

export default IndexPage
