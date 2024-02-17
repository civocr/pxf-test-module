# PXF Test Module README

The `pxf-test-module` is a Node.js module designed to demonstrate integration with the `pxf-user-module`, showcasing how to perform common authentication operations like registration, login, and updating user details. Utilizing Mongoose for MongoDB interactions, this module leverages environment variables for configuration and provides a practical example of using the `AuthenticationModule` from `pxf-user-module` with a `staff` model.

## Features

- Integration with MongoDB using Mongoose.
- Environment-based configuration using `dotenv-flow`.
- Utilization of the `AuthenticationModule` for handling user authentication processes including:
  - User registration
  - User login
  - Updating user details

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- MongoDB
- npm or yarn package manager

Additionally, the `pxf-user-module` should be installed and configured in your project as it is a dependency for this module.

## Installation

1. Clone the repository or download the `pxf-test-module` to your project directory.
2. Ensure you have Docker installed
3. Run this project in docker

## Usage

The module is designed to be run as a standalone script to demonstrate the authentication flow. Here's a breakdown of its functionality:

### Environment Configuration

- The module uses `dotenv-flow` to load environment variables, which should include your MongoDB connection string and other relevant settings.

### MongoDB Connection

- A connection to MongoDB is established using Mongoose, leveraging the configuration specified in your environment variables.

### Models

- The module requires model definitions from `./lib/models`. Ensure you have defined a `staff` model compatible with the `AuthenticationModule`.

### Authentication Operations

- The script demonstrates how to create an instance of the `AuthenticationModule`, passing the `staff` model for operations.
- It showcases the process of registering a new staff member, logging in as the staff member, and updating the staff member's details.

## Code Example

The core functionality is encapsulated in the `performAuthOperationsWithStaff` async function, which sequentially:
1. Registers a new staff member with an email and password.
2. Logs in the newly registered staff member.
3. Updates the staff member's password.

```javascript
async function performAuthOperationsWithStaff() {
    const staffAuthModule = new AuthenticationModule(models.staff);
    // Registration
    const newStaff = await staffAuthModule.register({ /* userDetails */ });

    // Login
    const loginStaff = await staffAuthModule.login('staff@example.com', 'securePassword123');

    // Update Details
    const updatedStaff = await staffAuthModule.update_details(loginStaff._id, { /* updateFields */ });
}
```

## API Endpoints

The application supports the following authentication endpoints:

- **POST `/register`**: Registers a new staff member.
  - Body: `{ "email": "email@example.com", "password": "yourPassword" }`

- **POST `/login`**: Authenticates a staff member.
  - Body: `{ "email": "email@example.com", "password": "yourPassword" }`

## Testing with Postman

To facilitate easy testing of the API endpoints, we've prepared a `postman.json` file that contains the pre-configured Postman collection for this module. Follow these steps to import the collection and start testing:

### Importing the Postman Collection

1. Download and install Postman from [the Postman website](https://www.postman.com/downloads/) if you haven't already.
2. Open Postman and click the "Import" button found at the top left corner of the application.
3. Choose the `postman.json` file provided in this repository, or drag and drop the file into the Postman window to import it.
4. Once imported, you will see the `PXF Test Module API` collection in your Postman sidebar, containing the configured requests for registration and login.

### Executing Requests

- Navigate to the `PXF Test Module API` collection in Postman.
- Select either the "Register Staff" or "Login Staff" request to open it.
- Click the "Send" button to execute the request. The response will be displayed in the lower section of the Postman interface.
- You can modify the request body as needed to test different inputs.


## Conclusion

The `pxf-test-module` provides a concise and practical demonstration of integrating sophisticated user authentication flows into your Node.js applications using the `pxf-user-module` and Mongoose. It exemplifies best practices for securely managing user data and simplifies the authentication process across projects.