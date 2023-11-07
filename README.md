
# Bookstore API Documentation
## Instructions to set up and run the application locally

#### Prerequisites 
- [Node.js](https://nodejs.org/) (LTS version recommended)
- Basic knowledge of using the command line. 

### Setup Instructions

Follow these steps to set up and run the application locally:

**Step 1: Clone the Repository**

If you haven't already, clone the repository containing your Bookstore API application.

```bash
git clone <repository_url>
cd <repository_directory>
```

**Step 2: Install Dependencies**

In the project directory, use npm to install the required dependencies specified in the package.json file.

``` bash
npm install
```

**Step 3: Create and Update Update .env File**

```
PORT=3000
DB_URL=mongodb+srv://<username>:<password>@<cluster>.mv9asqf.mongodb.net/
```
**Step 4:  Start the Server**

Start your Node.js server by running the following command:
```
npm start
```

Your server should now be running on the specified port (usually 3000 by default). If successful, you'll see a message indicating that the server is running and DB is connected.


## Endpoints
**Base URL** \
The base URL for all API endpoints is http://localhost:3000 (replace with your actual server URL).

1. Get All Books \
**Endpoint**: GET /books \
**Description**: Retrieves a list of all books in the bookstore.
2. Get a Book by ID \
**Endpoint**: GET /books/:id \
**Description**: Retrieves the details of a specific book by its ID.
3. Add a New Book \
**Endpoint**: POST /books/add \
**Description**: Adds a new book to the bookstore.
4. Update a Book \
**Endpoint**: PUT /books/:id \
**Description**: Updates the details of a specific book by its ID.
5. Delete a Book \
**Endpoint**: DELETE /books/:id \
**Description**: Deletes a specific book by its ID.