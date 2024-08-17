# Help Center API

For running the project
You can visit the Live site Here:
[Live Demo](https://future-skills-render.onrender.com/)

Or to run it locally follow these steps:

The project has two folders Frontend and Backend.

- download zip file or clone the repo
- navigate to backend and run "npm install" command same for the frontend
- then you need to make a .env file in backend folder root location
- there add a variable named MONGO_URL
- You need to get this URL from mongodb Atlas by making account on it for free if you don't have already.
- Note that while making a cluster on atlas you will see a username and password. You will need the password so either copy it or change it to something you can remember
- Once you get URL and add in env file make 2 terminals in vs code
- go to frontend and backend folder in the terminals and run "npm run dev" in both
- on backend you will get a message of mongodb connected then you can proceed
- open frontend app running
- No card will be there at first
- Click on add card button and fill a title and description and submit
- card will be added and by clicking a card it will go to full card dedicated
- You can also search the cards by title
