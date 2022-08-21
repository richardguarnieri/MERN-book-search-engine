<!-- This template was created following The Markdown Guide - https://www.markdownguide.org/ -->

<!-- If you are editing this README.md on VS Code, please highlight and replace the following keywords enclosed in backticks (``) using:
* MacOS: CMD + Shift + L
* Windows: CRTL + Shift + L

GitHub Username: `richardguarnieri`
GitHub Repository: `MERN-book-search-engine`
Your Name: `Richard Guarnieri`
Email: `richard.gm@outlook.com`
LinkedIn Username: `rguarnieri`
Twitter Username: `ric_guarnieri`
Project Title: `MERN Book Search Engine`
Project Description: `A MERN (MongoDB, Express, React and Node) Application using GraphQL!`
-->

<!-- Please also update the following links -->
[logo]: ./img/logo.png
[application-image]: ./img/app-image.png
[application-url]: https://peaceful-hollows-56780.herokuapp.com/

<div id="home"><div> 

<!-- Badges / Shields -->
<!-- These were created using https://shields.io/ - feel free to replace / create yours by modifying links below: -->

<div align="center">
    <a href="https://github.com/richardguarnieri/MERN-book-search-engine/graphs/contributors">
        <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/richardguarnieri/MERN-book-search-engine?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/MERN-book-search-engine/network/members">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/richardguarnieri/MERN-book-search-engine?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/MERN-book-search-engine/stargazers">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/richardguarnieri/MERN-book-search-engine?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/MERN-book-search-engine/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/richardguarnieri/MERN-book-search-engine?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/MERN-book-search-engine/blob/main/LICENSE">
        <img alt="GitHub license" src="https://img.shields.io/github/license/richardguarnieri/MERN-book-search-engine?label=license&style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/MERN-book-search-engine/commits/main">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/richardguarnieri/MERN-book-search-engine?style=for-the-badge">
    <a>
    <a href="https://www.linkedin.com/in/rguarnieri/">
        <img alt="LinkedIn shield" src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555">
    <a>
</div>
<br>


<!-- Header -->

<div align="center">
    <a href="https://github.com/richardguarnieri/MERN-book-search-engine">
        <img src="./img/logo.png" alt="Logo" width="300" height="auto">
    </a>
    <h1 align="center">MERN Book Search Engine</h1>
    <div>
        A MERN (MongoDB, Express, React and Node) Application using GraphQL!
        <br>
        <a href="https://github.com/richardguarnieri/MERN-book-search-engine">
            <strong>Explore Documentation</strong>
        </a>
        <br>
        <br>
        <a href="https://github.com/richardguarnieri/MERN-book-search-engine">View Demo</a>
        ·
        <a href="https://github.com/richardguarnieri/MERN-book-search-engine/issues">Report Bug / Request Feature</a>
    </div>
</div>
<br>


<!-- Table of Contents -->
## Table of Contents
* [The Project](#the-project)
    * [Technology Stack](#technology-stack)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [How to Use](#how-to-use)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Miscellaneous](#miscellaneous)
    * [User Story](#user-story)
    * [Acceptance Criteria](#acceptance-criteria)
<br>


<!-- The Project -->
## The Project

[![Application Image][application-image]][application-url]

The MERN stack is a cluster of powerful and robust technologies used to create scalable web applications. This stack has significant benefits when developing high quality web applications, it is highly malleable and allows applications and software to be developed rapidly.

This is a fully functioning Google Books API search engine with a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It allows users to save book searches to the back end and uses JWT (JSON Web Tokens) for authentication.

The app is deployed on Heroku: [https://peaceful-hollows-56780.herokuapp.com/][application-url].

<p align="right"> - <a href="#home">Return to Home</a></p>

### Technology Stack
* [HTML](https://html.spec.whatwg.org/)
* [CSS](https://www.w3.org/TR/CSS/#css)
* [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
* [Mongoose](https://mongoosejs.com/)
* [Express.js](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [GraphQL](https://graphql.org/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [apollo-server-express](https://www.apollographql.com/docs/)
* [@apollo/client](https://www.apollographql.com/docs/)
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Getting Started -->
## Getting Started
Make sure you have an active internet connection. To use the application all you need to do is click Heroku's link: [https://peaceful-hollows-56780.herokuapp.com/][application-url].

<p align="right"> - <a href="#home">Return to Home</a></p>

### Prerequisites
A web brower to run the application.

<p align="right"> - <a href="#home">Return to Home</a></p>

### Installation
Unless you are cloning the repo, nothing to install. Otherwise, you would need all the node packages listed in the [Technology Stack](#technology-stack) section.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- How to Use -->
## How to Use
When you first open the application you will be routed to the search books page. You can use this page to search for any books such as "Star Wars" or "The Lord of the Rings". In order to save books to your book collection, you must first sign up to create an account. After you have signed in you will see an option to save any book to your collection after doing a search. You can view your collection by going to the navigation bar and clicking "See Your Books". In this page, you will also have the option to remove books from your collection.

All in all, a simple MERN book search application!

_For more examples, please refer to the [Documentation][documentation-url]._

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contribuiting -->
## Contributing
Contributions are much welcomed! If you have suggestions to make this application better, please fork the repo and create a pull request. 

You can also open an issue [here][github-issues-url] and tag it with the **"enhancement"** label.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- License -->
## License
This project is licensed under the terms of the MIT license. 

See `LICENSE` for more information.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contact -->
## Contact
Richard Guarnieri: richard.gm@outlook.com · LinkedIn: [rguarnieri][linkedin-url] · Twitter: [@ric_guarnieri][twitter-url]

Application URL: [https://peaceful-hollows-56780.herokuapp.com/][application-url]

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Miscellaneous -->
## Miscellaneous
### User Story
```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

<p align="right"> - <a href="#home">Return to Home</a></p>

### Acceptance Criteria
```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- References, Links and Images -->
<!-- Badges / Shields Styles -->
[github-contributors-shield]: https://img.shields.io/github/contributors/richardguarnieri/MERN-book-search-engine?style=for-the-badge
[github-forks-shield]: https://img.shields.io/github/forks/richardguarnieri/MERN-book-search-engine?style=for-the-badge
[github-stars-shield]: https://img.shields.io/github/stars/richardguarnieri/MERN-book-search-engine?style=for-the-badge
[github-issues-shield]: https://img.shields.io/github/issues/richardguarnieri/MERN-book-search-engine?style=for-the-badge
[github-license-shield]: https://img.shields.io/github/license/richardguarnieri/MERN-book-search-engine?style=for-the-badge
[github-last-commit-shield]: https://img.shields.io/github/last-commit/richardguarnieri/MERN-book-search-engine?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- Badges / Shields URL -->
[github-contributors-url]: https://github.com/richardguarnieri/MERN-book-search-engine/graphs/contributors
[github-forks-url]: https://github.com/richardguarnieri/MERN-book-search-engine/network/members
[github-stars-url]: https://github.com/richardguarnieri/MERN-book-search-engine/stargazers
[github-issues-url]: https://github.com/richardguarnieri/MERN-book-search-engine/issues
[github-license-url]: https://github.com/richardguarnieri/MERN-book-search-engine/blob/main/LICENSE
[linkedin-url]: https://linkedin.com/in/rguarnieri

<!-- Non Badge / Shield Reference Links -->
[documentation-url]: https://github.com/richardguarnieri/MERN-book-search-engine
[twitter-url]: https://twitter.com/ric_guarnieri