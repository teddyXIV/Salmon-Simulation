# Salmon Simulation

####  A web application created to estimate the location and density of Chinook Salmon on their annual migration up the Columbia River.

#### By Teddy Peterschmidt

## Technologies Used
- arcGIS JavaScript API
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)
![postgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

## Description

This application allows the user to enter a date and view an estimate of Chinook Salmon populations on a map of the Columbia River for the specified date. Data for the project are the daily dam counts of Chinook Salmon provided by the [Columbia River DART program](https://www.cbr.washington.edu/dart). 

## Setup + Installation
* Clone this repository 
* Ensure sure that PostgreSQL, pgAdmin4, and Python are installed on your machine.
* In pgAdmin4, create a new database.  
* Create a `.env` file with these variables, and replace the values `DB_NAME`, `DB_USER`, and `DB_PASSWORD` with your database information: 
```
DB_NAME={YOUR-DB-NAME}
DB_USER={YOUR-DB-USER}
DB_PASSWORD={YOUR-DB-PASSWORD}
DB_HOST="localhost"
DB_PORT="5432"
```
* To set up the Python virtual environment and run the server:
    * Navigate to the "backend" directory in the terminal. 
    * Run the command `python -m venv venv` to set up the create the virtual environment.
    * Run the command `. venv/Scripts/activate`
    * Run the command `py manage.py migrate` to run the database migration
    * Clone and run the webscraper in this [repository](https://github.com/teddyXIV/salmon-scraper) to populate the database.
    * Run the command `py manage.py runserver`

* To run the frontend of the project:
    * In a new terminal, run navigate to the "redd" directory. 
    * Run the command `npm run dev`

## Known Bugs

* Segments of the river can be missing data for some dates when data is not available from the Columbia River Dart Program. 

## License   

[MIT License](./LICENSE)