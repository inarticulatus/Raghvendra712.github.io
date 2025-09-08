import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "public",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "article",
        label: "Articles",
        path: "src/content/articles",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: 'image',
            label: 'Hero',
            name: 'cover',
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
          },
          {
            type: "string",
            name: "snippet",
            label: "Snippet",
            required: true,
          },
          {
            type: "boolean",
            name: "portfolio",
            label: "Is it portfolio project?",
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Date'
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "about",
        label: "About",
        path: "src/content/about",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "rich-text",
            name: "achievements",
            label: "Achievements",
            required: false,
          },          
        ],
      },
            {
        name: "contact",
        label: "Contact",
        path: "src/content/contact",
        fields: [
          {
            type: "string",
            name: "email",
            label: "e-mail id",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "social",
            label: "Social Media links",
            required: true,
          },
          {
            type: "rich-text",
            name: "address",
            label: "Address",
            required: false,
          },          
        ],
      },

    ],
  },
}); 
