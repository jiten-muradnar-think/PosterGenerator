# PosterGenerator

# Project Overview:

Tech Stack: Node.js, MongoDB, React.
- User-friendly interface for creating personalized posters by combining background, text, and images.
- Post generated content directly on LinkedIn.
- LinkedIn API integration for posting, dynamic image generation with customizable components, color adjustment for pictures, error handling.


# BACKEND Installation

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies
```bash
npm install
```
4. Set the environment variables
```bash
Make sure to update the .env file with the required configuration settings as per .env.example
```
5. Run the Application   Make sure to update the .env file with the required configuration settings as per .env.example
```bash
npm run dev
```
6. Retrieve the template from the `template.html` file, save it in the `postertemplates` table within the `template` field in the MongoDB database, obtain the generated ID, and subsequently update this generated ID in the frontend .env file.

# FRONTEND Installation 

1. Clone the repository
2. Navigate to the project directory
3. Update the .env
   ```bash
   Make sure to update the .env file with the required configuration settings as per .env.example
   ```
4. Install the dependencies
   ```bash
   npm install
   ```
5. Run the Application
   ```bash
    npm start
   ```
