# Inventory Management Backend

This is a backend API for managing inventory and supplier data, designed using Node.js, Express, and MongoDB, following the MVC architecture. The project includes basic CRUD functionality for inventory items and suppliers, as well as a CSV bulk export/import feature and low stock alerts.

## Key Features
1. **Inventory Management API:**
   - Create, Read, Update, and Delete (CRUD) operations for managing inventory items.
   - Link inventory items to suppliers.
  
2. **Supplier Management API:**
   - Create, Read operations for managing suppliers.
  
3. **Low Stock Alerts (future implementation):**
   - Set up alerts when inventory levels fall below a specified threshold.

4. **Bulk Import/Export (future implementation):**
   - Implement CSV export of inventory data.
   - Bulk import of inventory data from CSV files.

## Technology Stack
- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js, used to build API endpoints.
- **MongoDB**: NoSQL database used for storing inventory and supplier data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Nodemon**: Tool for automatically restarting the server during development.

## Folder Structure
```bash
.
├── controllers/            # Controller files for handling business logic
│   ├── inventoryController.js
│   └── supplierController.js
├── models/                 # Mongoose models (data structure)
│   ├── inventoryModel.js
│   └── supplierModel.js
├── routes/                 # Express routes
│   ├── inventoryRoutes.js
│   └── supplierRoutes.js
├── config/                 # Database connection
│   └── db.js
├── app.js                  # Main application entry point
└── README.md               # Project documentation
```

## Prerequisites
- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)
- **MongoDB**: Install and run MongoDB locally or use a cloud-based MongoDB service like MongoDB Atlas.
- **Postman or cURL**: For testing API endpoints.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/inventory-management-backend.git
   cd inventory-management-backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the application using Nodemon:
   ```bash
   npx nodemon app.js
   ```

4. The server should now be running at `http://localhost:5000`.

## API Endpoints

### Inventory Routes
- **GET** `/api/inventory` - Fetch all inventory items.
- **POST** `/api/inventory` - Add a new inventory item.
- **PUT** `/api/inventory/:id` - Update an inventory item by ID.
- **DELETE** `/api/inventory/:id` - Delete an inventory item by ID.

### Supplier Routes
- **GET** `/api/suppliers` - Fetch all suppliers.
- **POST** `/api/suppliers` - Add a new supplier.

## Future Features
- **Bulk Import/Export**: Implement CSV export and import functionality.
- **Low Stock Alerts**: Set up alerts for inventory items with quantities below the defined threshold.

## Testing the API
You can test the API endpoints using Postman or cURL. Here's an example cURL request to add an inventory item:

```bash
curl -X POST http://localhost:5000/api/inventory \
  -H "Content-Type: application/json" \
  -d '{"name": "Item A", "quantity": 50, "supplier": "5f9f1b2b9b1e8b3e4c1b6a49"}'
```