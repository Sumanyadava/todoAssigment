# Todo Assignment

A todo List using Mern

## Demo

link to demo - [https://todo-delta-self.vercel.app/](https://todo-delta-self.vercel.app/)

## Run Locally

### Run Client

1. Clone the project:

   ```bash
   git clone https://github.com/Sumanyadava/todoAssigment.git
   ```

2. Navigate to the project :

   ```bash
   cd todoAssigment
   ```

3. Navigate to the client directory:

   ```bash
   cd client
   ```

4. Install dependencies:

   ```bash
   npm install
   ```
4.1 Rename .env.sample file to .env 

5. Start the client:

   ```bash
   npm run dev
   ```

### Run Server

1. Open another terminal window and navigate to the project directory:

   ```bash
   cd todoAssigment
   ```

2. Navigate to the server directory:

   ```bash
   cd server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```
3.1 Rename .env.sample file to .env 


4. Start the server:

   ```bash
   npm run start
   ```

5. If you encounter any issues, install nodemon:

   ```bash
   npm i -D nodemon
   ```

6. Run the server in development mode:

   ```bash
   npm run dev
   ```



## API Reference

#### Retrieve all To-Do items

```http
  GET /todos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Create a new To-Do item

```http
 POST /todos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key        |



#### Update an existing To-Do item

```http
  PUT /todos/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. todo ID      |


#### Delete a To-Do item
```http
 DELETE /todos/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. todo ID      |




## Support

For support, email - ansum2411@gmail.com


## Features

- Basic Todo List

  


## Tech Stack

**Client:** React , Redux, TailwindCSS , Daisy UI 

**Server:** Node, Express , mongoose 

**Database:** MongoDB

## Authors

- [@Sumanyadava](https://github.com/Sumanyadava)
