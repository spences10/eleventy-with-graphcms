require("dotenv").config();

module.exports = async () => {
  const { GraphQLClient } = require("graphql-request");
  const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT);

  const { gql } = require("graphql-request");

  const query = gql`
    query Posts {
      posts {
        title
        slug
        date
        excerpt
        markdownContent
        tags
        coverImage {
          url
        }
      }
    }
  `;

  const { posts } = await client.request(query);

  return posts;
};
