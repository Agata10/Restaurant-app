<<<<<<< HEAD

# Restaurant-app

=======

## Table of Contents

- [Mockup](#mockup)
- [General Info](#general-information)
- [Technologies](#technologies)
- [Challenges](#challenges)
- [Link to webpage](#link-to-webpage)
- [Setup](#setup)
- [Usage](#usage)

## Mockup

![Wepage](./public/mockup.jpeg)

## General information

Project is one of the task from [Meta Course](https://www.coursera.org/learn/meta-front-end-developer-capstone) .

The main goal was building the feature of reserving a table for Little Lemon Restaurant. The menu, login and order online are not working !!!!!! It was not the task to focus on.

Tasks:

1. Planning and creating UX/UI design which included wireframe and prototyping in Figma
2. Working with meta tags and open graph protocol to make sure my app is accessible.
3. Creating responisve layout.
4. Using semating HTML tags, labels and ARIA attribiutes for accesssiblity.
5. Practising using hooks: useState, useReducer, useFormik, useEffect
6. Working with external API which would get different times for booking a table depending on the chosen date.
7. Writing unit test with Jest and React Testing Library.

## Technologies

- CSS3
- HTML5
- JavaScript
- React
- React Testing Library
- Jest unit testing
- LocalStorage
- API
- from validation with useFormik

## Challenges

The API given by Meta was unfortunately is not working so I did not use useEffect hook. I put the API in seperate file and just imported needed functions.

For form validation instead of using JavaScript/HTML I wanted to learn useFormik and that is what I used.

I used LocalStrage to check if my data is correctly submitted.

I wrote tests to check if the data from API has proper initial state values and if the updating time is working correctly( updating the state).

I wrote tests to check if the form has diabled button when the inputs are empty and check if form is submmiting correctly if everything is filled.

## Link to game

## Setup

1. Fork repository

2. Clone reposiory
   `git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

3. Run
   `npm start`

4. Testing, run
   `npm test`

## Usage

The websites main task was creatig a booking page. Reserving a table has a form validation with useFormik.
