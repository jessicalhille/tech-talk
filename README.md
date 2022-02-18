# Tech-Talk Blog
  ![made-with](https://img.shields.io/badge/Made%20with-CSS-1f425f.svg)
  ![made-with](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)
  ![made-with](https://img.shields.io/badge/Made%20with-Node.js-1f425f.svg)
  ![made-with](https://img.shields.io/badge/Made%20with-Handlebars-1f425f.svg)
  ![GitHub issues](https://img.shields.io/github/issues/jessicalhille/tech-talk)
  ![GitHub branches](https://badgen.net/github/branches/jessicalhille/tech-talk)
  ![GitHub contributors](https://img.shields.io/github/contributors/jessicalhille/tech-talk)
  ![Github license](http://img.shields.io/badge/license-MIT-blue.svg)


  ## Description
  A CMS-style blog sit similar to a Wordpress site, where developers can publish their blog posts and comment on other developers' posts as well.
  ##### Link to Deployed Application: https://agile-forest-43043.herokuapp.com/

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  To use this application, please run the following on your command line:
  * npm init
  * npm install

  ## Usage
  After cloning this repository to your local device and installing the packages listed above, first create a .env file in the root of the folder and add this code to the file:
  
  * DB_NAME='workout_tracker_db'
  * DB_USER='< your SQL user >'
  * DB_PW='< your SQL password >'
  
  Then, run the following commands in the root of your project:
  * mysql -u root -p (enter password when prompted)
  * source db/schema.sql
  * quit
  * npm start (run the application on your localhost:3001)
  
  There are seed files located in this project. If you would like to use the seed files, simply type 'npm run seed' in the command line before starting the application.
  ### Screenshot of Deployed Application
  Homepage

<img width="973" alt="Screen Shot 2022-02-15 at 10 57 54 PM" src="https://user-images.githubusercontent.com/91511805/154199204-71706a81-7bd3-418e-bf43-e52dd48a00d3.png">
  
  Single-Post view with comments

<img width="973" alt="Screen Shot 2022-02-15 at 10 59 08 PM" src="https://user-images.githubusercontent.com/91511805/154199268-b6422d91-fd49-46cc-b092-1884531ac58f.png">
  
  Personal dashboard after a user logs in

<img width="1358" alt="Screen Shot 2022-02-17 at 8 26 32 PM" src="https://user-images.githubusercontent.com/91511805/154605925-f095ec08-894f-4ad6-9ce8-43d279cdd3fe.png">


  ## Contributing
  No guidelines for contribution at this time.

  ## Tests
  No tests required for this application.

  ## License
  This project is licensed under the MIT license.

  ## Questions
  If you have any questions about this project, please contact me directly at jessicalhille@gmail.com.
  You can view more of my projects at https://github.com/jessicalhille.

