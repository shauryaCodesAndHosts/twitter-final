# [Twitter-clone](https://shaurya-x-twitter.cyclic.cloud/)
## _IVYKIDS Assignment Submission_  (SRM University)


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Details : 
- Name : [Shaurya Yamdagni](https://shaurya-yamdagni.me/)
- Registration Number : RA2011003030003
- Email : sy0638@srmist.edu.in

## Features

- Can CRUD user
- Can CRUD tweets
- Like/unlike the tweets 
- Follow/unfollow the users


## Tech

This clone uses a number of open source projects to work properly:

- [React](https://react.dev/) - HTML enhanced for web apps!
- [node.js](https://nodejs.org/en) - evented I/O for the backend
- [Express](https://expressjs.com/) - fast node.js network app framework [@tjholowaychuk]
- [MongoDB](https://www.mongodb.com/) - for storing the models
- [Firebase](https://firebase.google.com/) - for image hosting
- [tailwind](https://tailwindcss.com/) - for inbuilt css classess 


## Installation

This clone requires [Node.js](https://nodejs.org/) v18+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd twitter-final
npm install
node start
```

For connecting with database ...

- Create a file .env in the root folder 
- Create the env variable with the name "MONGO" and assign the mongoDB connection token
- Create another env variable wiht the name "JWT" and assign any value 




## [API](https://www.postman.com/avionics-technologist-17107692/workspace/twitter/folder/27131600-d29b241e-31fd-467a-a16e-e9c7b523d49c)


# Twitter Clone API Documentation

## Info
- **API Name:** Twitter Clone
- **Postman Collection Schema:** [Link](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)
- **Postman Collection Link:** [Link](https://www.postman.com/avionics-technologist-17107692/workspace/twitter/collection/27131600-e2293f65-3fca-4a6f-bcab-b02d55db7e73?action=share&source=collection_link&creator=27131600)

## Authentication

### SignUp
- **Method:** POST
- **Endpoint:** `localhost:8000/api/auth/signup`
- **Request Body:**
```json
{
    "username" : "test",
    "email" : "test@gmail.com",
    "password" : "admin @123"
}
```

### Example
- **Method:** POST
- **Endpoint:** `localhost:8000/api/auth/signup`
- **Request Body:**
```json
{
    "username" : "shaurya3",
    "email" : "shauyrayamdagni3@gmail.com",
    "password" : "admin@123"
}
```

### SignIn
- **Method:** POST
- **Endpoint:** `localhost:8000/api/auth/signin`
- **Request Body:**
```json
{
    "username" : "saksham",
    "password" : "admin@123"
}
```

## Users

### Get a User
- **Method:** GET
- **Endpoint:** `localhost:8000/api/users/find/{ID}`

### Update User
- **Method:** PUT
- **Endpoint:** `localhost:8000/api/users/{ID}`
- **Request Body:**
```json
{
    "description" : "Hello I am Shaurya Yamdagni, currently pursuing Btech in Computer Science..."
}
```

### Delete User
- **Method:** DELETE
- **Endpoint:** `localhost:8000/api/users/{ID}`

### Follow User
- **Method:** PUT
- **Endpoint:** `localhost:8000/api/users/follow/{ID}`
- **Request Body:**
```json
{
    "id" : "{ID}"
}
```

### Unfollow User
- **Method:** PUT
- **Endpoint:** `localhost:8000/api/users/unfollow/{ID}`
- **Request Body:**
```json
{
    "id" : "{ID}"
}
```

## Tweets

### Post Tweet
- **Method:** POST
- **Endpoint:** `localhost:8000/api/tweets/`
- **Request Body:**
```json
{
    "userId" : "{ID}",
    "description" : "When I am not around"
}
```

### Delete Tweet
- **Method:** DELETE
- **Endpoint:** `localhost:8000/api/tweets/{ID}`
- **Request Body:**
```json
{
    "userId" : "{ID}"
}
```

### Like/Dislike Tweet
- **Method:** PUT
- **Endpoint:** `localhost:8000/api/tweets/{ID}/like`
- **Request Body:**
```json
{
    "userId" : "{ID}"
}
```

### Get Timeline Tweets
- **Method:** GET
- **Endpoint:** `localhost:8000/api/tweets/timeline/{ID}`

### Get User Tweets
- **Method:** GET
- **Endpoint:** `localhost:8000/api/tweets/user/all/{ID}`

### Explore Tweets
- **Method:** GET
- **Endpoint:** `localhost:8000/api/tweets/explore`

## Get All Users
- **Method:** GET
- **Endpoint:** `localhost:8000/api/users`
