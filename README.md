# Voyager Vault

This is a project that lets you add countries you have been to in a list, you can also add countries you want to visit in the future to your "wishlist". We are using REST Countries API to pull country information such as population, and capitol city.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## To install the necessary dependencies for the backend, run the following command:

bash npm install bcrypt bcryptjs cors dotenv express express-validator jsonwebtoken mongodb mongoose

## front-end

axios: "^1.6.8" bootstrap: "^5.3.3" react: "^18.2.0" react-bootstrap: "^2.10.2" react-dom: "^18.2.0" react-query: "^3.39.3" react-router: "^6.22.3" react-router-dom: "^6.22.3" web-vitals: "^2.1.4"

## Usage

Step 1: Register and log in to your account

Step 2: Search for a country, if you want to add this country to a place you wish to visit someday, add the country to your wish list. If you have already visited this country add this country to destinations!

Step 3: you can view your countries you added to your wishlist in the wishlist tab, and view your countries you have already visited in you destinations tab.

Step 4: Having trouble picking your next vacation? let us pick for you. In the search tab we have a random country generator.

## Who Contributed

Charles: I worked on the REST Countries API call and made a country card component, created the login and register logic, some backend stuff like routes, and database, and schemas. I focused mostly on backend logic making sure adding countries to your wishlist and destinations got put in the right places. A lot of my time on this was trouble shooting user context, and JWT errors.

Melanie: Throughout the course of this project, my main focus was UI/UX and frontend development. I created the initial homepage layout and navigation bar using a bootstrap nav template with collapse functionality. I also created the base layout for secondary pages and was able to complete some initial troubleshooting errors and worked with Taylor for additional styling options.

Tim: For the final project my attention was more on the backend. I set up some of the skeletal structure of the backend to be tested and improved upon as the project continued such as the controllers and the routes to the database along with Charles. Most of my time was directed towards the sign up and login features of the application.

Taylor: I contributed to the homepage banner by adding images and integrating a Bootstrap carousel component with indicators for smooth navigation. This feature aims to engage visitors visually and encourage further exploration. Additionally, I developed the random destination generator on the countries page, creating the generateRandomCountry() function and using a useEffect hook to pull destinations from the country cards API. This feature encourages users to discover new destinations to visit for their next vacation. I also worked closely with Melanie on the UI/UX design of our website.

## License

Information about the project's license and any usage restrictions.
