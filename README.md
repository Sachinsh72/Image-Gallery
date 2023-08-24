# Image Gallery 
Design a react based image gallery which handle a sample API of photo collection all its have title and description, allowing
users to see the collection also get the title and description.

Live Link: <a href="reactimggallery.netlify.app" target="_blank">reactimggallery.netlify.com</a>

## Features
- API Handling and 
- Router 

## Using React Feature
- React Router 
- useEffect() 
- Axios

## Api 
`https://api.slingacademy.com/v1/sample-data/photos`

The response is in JSON format.

### Data Structure
Each photo record comes with the fields below:

- id: The id of the photo
- url: The URL of the photo
- title: The title of the photo (just some meaningless text)
- description: The description of the photo (a long meaningless sentence)
- user: The id of the user who owns the photo

### Get a Single Photo by ID

`https://api.slingacademy.com/v1/sample-data/photos/[photo id]`


## Usage

### Install
- `npm create vite@latest`


### Run
- `cd image-Gallery`
- `npm install`
- `npm run dev`

## Development
Want to contribute? Great! Make the changes and reach out to me over sachinsharma.7thfeb@gmail.com