# Bloc

Bloc is an application for users to find a compiled list of clubs and organizations on their college campuses, join these organizations, and compile a schedule of events based on what organizations they are a part of

## Getting started/Installation

1. Clone and pull the repository to your local machine
2. Open a terminal and navigate to your backend folder and run "npm install"
3. In the same backend terminal:
- npm i express
- npm i -g nodemon
- npm i dotenv --save
- npm i pg
- npm i axios
- npm i cors
- npm i react-scroll
4. run "nodemon server.js" to start out backend server. You can navigate to "http://localhost:3001" to see where our backend is hosted.
5. Open another terminal and navigate to the frontend folder and run "npm install"
6. In the same frontend terminal, run:
- npm i @mui/material @emotion/react @emotion/styled
- npm i react-router-dom
7. Run "npm start" to start the frontend
8. Open a third terminal and navigate to the python folder that can be found inside the frontend's pages folder
9. To activate the virtual environment:
- pip install venv
- Mac/Linux: ". venv/Scripts/activate"
- Windows: "venv\Scripts\activate"
10. In the same terminal (virtual environment):
- pip install Flask
- Mac/Linux: 'export FLASK_APP=recommend.py'
- Windows: 'setx FLASK_APP "recommend.py"'
- flask run
11. You should now be able to navigate to http://127.0.0.1:5000/ to view the club recommendations for user 'test'. This will rerun the program every time it is accessed.

### Logging In
For testing and development purposes, the following user can be used to login:
- Username: test
- Password: test

If you would like to create a new account, that can be done so directly in the "users" database.

## Source History
v0.0 - 3/27/22

## Authors
Robert Zhang, Matthew Cheng, Richard She, Jason Liu, Jonathan Li, David Huang, Willie Sadler, Mihindu Samarasinghe
