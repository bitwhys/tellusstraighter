import React from "react"

import Layout from "@components/layout"
import SEO from "@components/seo"
import Hero from "@components/Hero"
import Section from "@components/elements/Section"
import Gallery from "@components/Gallery"
import SinglePostFeedItem from "@components/SinglePostFeedItem"

const topic = "python"
const title = "Accumsan sit lacus, nascetur at tempus arcu bibendum a."
const date = "May 9, 2016"
const keywords = ["design", "server"]
const excerpts = [
  "Lorem ipsum dolor sit amet, consectetur.",
  "Lorem ipsum dolor sit.",
]
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Section heading="pretty things">
      <Gallery />
    </Section>
    <Section heading="my changelog">
      <SinglePostFeedItem
        date={date}
        excerpts={excerpts}
        title={title}
        topic={topic}
        keywords={keywords}
      />
      <SinglePostFeedItem
        date={date}
        excerpts={excerpts}
        title={title}
        topic="javascript"
        keywords={keywords}
      />
      <SinglePostFeedItem
        date={date}
        excerpts={excerpts}
        title={title}
        topic="ml"
        keywords={keywords}
      />
      <SinglePostFeedItem
        date={date}
        excerpts={excerpts}
        title={title}
        topic="javascript"
        keywords={keywords}
      />
      <SinglePostFeedItem
        date={date}
        excerpts={excerpts}
        title={title}
        topic="comp-sci"
        keywords={keywords}
      />
      <SinglePostFeedItem
        date={date}
        excerpts={excerpts}
        title={title}
        topic="react"
        keywords={keywords}
      />
    </Section>
  </Layout>
)

export default IndexPage
