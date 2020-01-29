import path from "path"
import slugify from "@sindresorhus/slugify"
import stripMarkdown from "strip-markdown"
import write from "write"
import { createFilePath } from "gatsby-source-filesystem"
import { introspectionQuery, graphql, printSchema } from "gatsby/graphql"

/**
 * Generate GraphQL schema.json file to be read by eslint
 * Thanks: https://gist.github.com/kkemple/6169e8dc16369b7c01ad7408fc7917a9
 * (via:https://github.com/damassi/gatsby-starter-typescript-rebass-netlifycms/blob/master/gatsby-node.js)
 */
exports.onPostBootstrap = async ({ store }) => {
  try {
    if (process.env.NODE_ENV !== "production") {
      const { schema } = store.getState()
      const jsonSchema = await graphql(schema, introspectionQuery)
      const sdlSchema = printSchema(schema)

      write.sync("schema.json", JSON.stringify(jsonSchema.data), {})
      write.sync("schema.graphql", sdlSchema, {})

      console.log("\n\n[gatsby-plugin-extract-schema] Wrote schema\n") // eslint-disable-line
    }
  } catch (error) {
    console.error(
      "\n\n[gatsby-plugin-extract-schema] Failed to write schema: ",
      error,
      "\n"
    )
  }
}

exports.onCreateWebpackConfig = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src", "components"),
        "@utils": path.resolve(__dirname, "src", "utils"),
        "@hooks": path.resolve(__dirname, "src", "hooks"),
      },
    },
  })
}

/**
 * credit: Kent C. Dodds
 * via: https://github.com/kentcdodds/kentcdodds.com/blob/master/gatsby-node.js
 * eslint-disable-next-line complexity
 */
exports.onCreateNode = ({ node, getNode, actions, reporter }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    let slug =
      node.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: `pages` })

    if (node.fileAbsolutePath.includes("content/blog/")) {
      slug = `/blog/${node.frontmatter.slug || slugify(parent.name)}`
    }

    createNodeField({
      name: "id",
      node,
      value: node.id,
    })

    createNodeField({
      name: "published",
      node,
      value: node.frontmatter.published,
    })

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title,
    })

    createNodeField({
      name: "author",
      node,
      value: node.frontmatter.author,
    })

    createNodeField({
      name: "description",
      node,
      value: node.frontmatter.description,
    })

    createNodeField({
      name: "plainTextDescription",
      node,
      value: stripMarkdown(node.frontmatter.description),
    })

    createNodeField({
      name: "slug",
      node,
      value: slug,
    })

    createNodeField({
      name: "date",
      node,
      value: node.frontmatter.date ? node.frontmatter.date.split(" ")[0] : "",
    })

    createNodeField({
      name: "banner",
      node,
      value: node.frontmatter.banner,
    })

    createNodeField({
      name: "bannerCredit",
      node,
      value: node.frontmatter.bannerCredit,
    })

    createNodeField({
      name: "topic",
      node,
      value: node.frontmatter.topic || "general",
    })

    createNodeField({
      name: "keywords",
      node,
      value: node.frontmatter.keywords || [],
    })

    createNodeField({
      name: "editLink",
      node,
      value: `https://github.com/bitwhys/bitwhys.tech/edit/master${node.fileAbsolutePath.replace(
        __dirname,
        ""
      )}`,
    })
  }
}
