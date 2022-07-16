# Rocketflix

Don't know what to watch today? You've come to the right place!

![Rocketflix](https://user-images.githubusercontent.com/93556620/179327259-832339b3-9342-4f95-ae00-4ffe644bd107.mov)

## How to run

In order to run this application: 

1. clone this repository using ```git clone git@github.com:KrisMazzini/rocketflix.git``` ... or simply download the project zip;
2. open the console at the project directory;
3. install the dependencies using ```npm i``` or ```npm install```;
4. open the file located in ```src > services > api.js```
5. insert your TMDB API KEY in the first line (see instruction below on how to get an API KEY from TMDB)
![Code Snippet](https://user-images.githubusercontent.com/93556620/179327554-de4d7bc3-b2ba-4c33-9074-b148366b1dbc.png)
6. execute ```npm run dev``` in the command line;
7. open <http://localhost:3000> on your browser;

## Getting an API KEY from TMDB

1. create an account at <https://www.themoviedb.org/signup>
2. verify your email, then access <https://www.themoviedb.org/settings/api/request>
3. click on "Create", then choose developer
![TMDB](https://user-images.githubusercontent.com/93556620/179327165-ff2c9f98-230a-45a6-a301-d9959a69348b.png)
4. accept the terms and fill out your data
5. submit and you'll have a key
6. use the key in the file indicated on the previous section