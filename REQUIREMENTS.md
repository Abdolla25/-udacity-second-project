# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
I used different request methods as endpoints:
1. GET ALL.
2. GET ONE.
3. CREATE ONE.
4. UPDATE ONE.
5. DELETE ONE.

for each model, it should have all these endpoits depend on request type as following:


#### Users
endpoint: `/user/`

#### Products
endpoint: `/product/`

#### Orders
endpoint: `/order/`

##### GET ALL
- Method: `GET`.
- Parametes: `None`.
- Success Respone: `Code 200` with JSON object contains all data from database.
- Error Respone: `Code 404/401` with JSON object contains error message.
- example: `/user/`

##### GET ONE
- Method: `GET`.
- Parametes: `:id`.
- Success Respone: `Code 200` with JSON object contains the required data from database.
- Error Respone: `Code 404/401` with JSON object contains error message.
- example: `/user/1`

##### CREATE ONE
- Method: `POST`.
- Parametes: `None`.
- Success Respone: `Code 200` with JSON object contains the created data from database.
- Error Respone: `Code 404/401` with JSON object contains error message.

##### UPDATE ONE
- Method: `PUT`.
- Parametes: `:id`.
- Success Respone: `Code 200` with JSON object contains the updated data from database.
- Error Respone: `Code 404/401` with JSON object contains error message.

##### DELETE ONE
- Method: `DELETE`.
- Parametes: `:id`.
- Success Respone: `Code 200` with JSON object contains the updated data from database.
- Error Respone: `Code 404/401` with JSON object contains error message.

#### Orders
- Current Order by user (args: user id)[token required]
- Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

