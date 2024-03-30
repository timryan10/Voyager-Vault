## Backend Dependencies

- [bcrypt](https://www.npmjs.com/package/bcrypt) - version ^5.1.1
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - version ^2.4.3
- [bootstrap](https://www.npmjs.com/package/bootstrap) - version ^5.3.3
- [cors](https://www.npmjs.com/package/cors) - version ^2.8.5
- [dotenv](https://www.npmjs.com/package/dotenv) - version ^16.4.5
- [express](https://www.npmjs.com/package/express) - version ^4.18.3
- [express-validator](https://www.npmjs.com/package/express-validator) - version ^7.0.1
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - version ^9.0.2
- [mongodb](https://www.npmjs.com/package/mongodb) - version ^6.5.0
- [mongoose](https://www.npmjs.com/package/mongoose) - version ^8.2.2
- [nodemon](https://www.npmjs.com/package/nodemon) - version ^3.1.0

## API Routes

### Wishlist Routes

- **POST** `/wishlist/add`: Add a country to the user's wishlist.
  - Request body should contain the details of the country to be added.
  - Returns the saved wishlist item.
- **GET** `/wishlist/add/:id`: Fetch wishlist for a specific user.
  - Parameter: `id` - User ID.
  - Returns the wishlist items for the specified user.

### Destination Routes

- **POST** `/destination/add`: Add a country to the user's destinations.
  - Request body should contain the details of the country to be added.
  - Returns the saved country details.
- **GET** `/destination/add/:id`: Fetch destinations for a specific user.
  - Parameter: `id` - User ID.
  - Returns the destination countries for the specified user.
