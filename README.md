# Smart Travel Website

Welcome to the Smart Travel Website, a modern web application that offers a seamless travel booking experience. This application is built using React for the frontend and Express for the backend, with Stripe integration for secure payment processing. It also features an admin panel for managing bookings and packages. Whether you are a developer looking to set up the environment or a user exploring the website, this README will guide you through the installation, setup, and usage of the Smart Travel Website.

## Table of Contents
1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the Application](#running-the-application)
6. [Usage](#usage)
7. [Admin Panel](#admin-panel)
8. [Contributing](#contributing)
9. [License](#license)

## Features
The Smart Travel Website offers the following features:

- Browse and select from a wide range of travel packages.
- View detailed information about each package, including destinations, itineraries, and prices.
- Securely book travel packages using Stripe for payment processing.
- User-friendly interface with a responsive design for desktop and mobile devices.
- Backend API for managing travel packages and handling payments.
- **Admin Panel:** Easily manage bookings and packages, view and process customer orders, and make updates to the website content and offerings.

## Prerequisites
Before you can run the Smart Travel Website, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Stripe Account](https://stripe.com/) for payment processing

## Installation
Follow these steps to set up the Smart Travel Website on your local machine:

1. Clone the repository from GitHub:

   ```shell
   git clone https://github.com/Hamza59272/Azeem-Tourism-Frontend.git
   ```

2. Navigate to the project directory:

   ```shell
   cd Smart-Travel
   ```

3. Install the frontend and backend dependencies:

   ```shell
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

## Configuration
Before running the application, you need to configure the Stripe API keys. To do this, follow these steps:

1. Create a `.env` file in the `server` directory and set the following environment variables:

   ```env
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

   Replace `your_stripe_secret_key` and `your_stripe_publishable_key` with your actual Stripe API keys.

2. Optionally, you can modify other configuration settings in the `server/config.js` file, such as port number and database connection details.

## Running the Application
To run the Smart Travel Website, follow these steps:

1. Start the backend server. From the `server` directory, run:

   ```shell
   npm start
   ```

2. In a separate terminal, navigate to the `client` directory and start the frontend application:

   ```shell
   npm start
   ```


## Usage
The Smart Travel Website is now up and running. Users can:

1. Browse the available travel packages.
2. Select a package and view its details.
3. Proceed to the payment page and securely make payments using Stripe.

## Admin Panel
As an administrator, you have access to the admin panel, where you can:

- View and manage bookings made by customers.
- Add, edit, or remove travel packages.
- Update website content and offerings.
- Process customer orders and payments.

## Contributing
We welcome contributions to the Smart Travel Website. If you would like to contribute, please follow our [contribution guidelines](CONTRIBUTING.md) and open a pull request.

## License
This project is licensed under the [MIT License](LICENSE), which means you are free to use and modify the code according to your needs.

Thank you for choosing the Smart Travel Website. We hope you find it a valuable addition to your travel business or a convenient platform for booking your next adventure. If you have any questions or encounter any issues, please don't hesitate to contact us. Enjoy your smart travels! 
