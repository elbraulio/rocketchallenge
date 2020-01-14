# back
This module contains the app's back-end.

## Develop
**install**

`$ npm install`

**run**

`$ npm run dev`

**test**

`$ npm test`

## Schema
These are the schemas for requests.

1. Movie:
```
{
  "tags": String[], 
  "name": String, // required
  "createdAt": Date, // required
}
```

## Endpoints

`GET /movies`

Return all movies.

`POST /movies`

Create a new movie.

`DELETE /movies/:id`

Remove a movie by its id.