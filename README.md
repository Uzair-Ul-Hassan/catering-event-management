## SETUP AND RUN INSTRUCTIONS

#### 1. Clone the repository.

#### 2. Run "npm install" to install the necessary dependencies.

#### 3. Run "npm start" to start the server.

## ARCHITECTURAL OVERVIEW

### src/ (Source Code Root)

#### controllers/: This folder contains the controllers, which handle the business logic for the application. Controllers typically interact with the incoming requests, process the data, and send responses.

#### models/: The models folder contains the data models or schemas for the application. It defines how data is structured and stored in the database.

#### router/: The router folder holds the route definitions for the application. It defines the API endpoints and how they map to the corresponding controllers. This is where the routing logic is set up.

#### types/: The types folder likely contains TypeScript type definitions/interfaces. These can help ensure type safety throughout the codebase, especially useful when using TypeScript.

#### app.js: This file is the entry point for the Express application. It configures the Express app, sets up middleware, and connects routes. It's where everything is brought together.

#### server.js: This file is responsible for starting the server. It imports and uses the configured Express app from app.js and listens on the specified port.

#### **tests**/: This **tests** folder holds the unit tests for the cateringEventController.

# Catering Event Management API Documentation

## Create Catering Event

- **Endpoint:** `POST /api/v1/cateringEvents`
- **Description:** Create a new catering event.
- **Request Body:**
  - `eventName` (string, required): The name of the event.
  - `location` (string, required): The location of the event.
  - `menuItems` (array, required): An array of menu items, each containing:
    - `itemName` (string, required): The name of the menu item.
    - `quantity` (number, required): The quantity of the menu item.
  - `clientDetails` (object, required): Details of the client, containing:
    - `clientName` (string, required): The name of the client.
    - `contactNumber` (string, required): The contact number of the client.
    - `email` (string, required): The email of the client.
- **Response:**
  - Status: 201 Created
  - Body:
    ```json
    {
      "message": "success",
      "data": {
        "cateringEvent": {
          "eventName": "EventName",
          "location": "EventLocation",
          "menuItems": [
            {
              "itemName": "ItemName1",
              "quantity": 2
            },
            {
              "itemName": "ItemName2",
              "quantity": 3
            }
          ],
          "clientDetails": {
            "clientName": "ClientName",
            "contactNumber": "ContactNumber",
            "email": "client@example.com"
          }
        }
      }
    }
    ```

## Get All Catering Events

- **Endpoint:** `GET /api/v1/cateringEvents`
- **Description:** Retrieve a list of all catering events.
- **Response:**
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "success",
      "results": 2,
      "data": {
        "cateringEvents": [
          {
            "eventName": "EventName1",
            "location": "EventLocation1"
            // ... other event details
          },
          {
            "eventName": "EventName2",
            "location": "EventLocation2"
            // ... other event details
          }
        ]
      }
    }
    ```

## Get Catering Event by ID

- **Endpoint:** `GET /api/v1/cateringEvents/:id`
- **Description:** Retrieve details of a specific catering event by ID.
- **Response:**
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "success",
      "data": {
        "cateringEvent": {
          "eventName": "EventName",
          "location": "EventLocation"
          // ... other event details
        }
      }
    }
    ```

## Update Catering Event

- **Endpoint:** `PATCH /api/v1/cateringEvents/:id`
- **Description:** Update details of a specific catering event by ID.
- **Request Body:**
  - `menuItems` (array of objects):
    - `itemName` (string): The name of the menu item.
    - `quantity` (integer): The quantity of the menu item.
    - `specialRequirements` (string): Any special requirements for the menu item.
- **Response:**
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "success",
      "data": {
        "cateringEvent": {
          "eventName": "UpdatedEventName",
          "location": "UpdatedEventLocation"
          // ... other updated event details
        }
      }
    }
    ```

## Delete Catering Event

- **Endpoint:** `DELETE /api/v1/cateringEvents/:id`
- **Description:** Delete a specific catering event by ID.
- **Response:**
  - Status: 204 No Content
  - Body:
    ```json
    {
      "status": "success"
    }
    ```
