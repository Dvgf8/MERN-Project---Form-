# Project Setup Guide

Follow these steps to get your development environment up and running smoothly.

---

## Front-End Setup
The client-side application is located in the `client` folder.

1. **Navigate to the directory:** `cd client`
2. **Install dependencies:** `npm install`
3. **Launch the development server:**`npm run dev`

## Back-End Setup (API)

The server handles the connection to your MongoDB Atlas cluster.

1. Environment Configuration 

  Before running the server, update your environment variables. Open your .env or config.env file and provide your specific details:

  * URI: Your MongoDB Atlas connection string.

  * PORT: The port you want the server to run on.

2. Start the API

  Use the following command to initialize the server with your environment file:

    `node --env-file=config.env server`

Security Tip: Keep your credentials safe! Ensure your .env or config.env files are added to your .gitignore so they aren't pushed to public repositories.
