# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Overview
The project consists of three main components: `Navbar`, `ActionBar`, and `DeclarationInfo`. Within DeclarationInfo, several UI components are implemented, such as `Accordion`, `AmountCard`, `EditableRow`, and `Warning`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Custom Hook`
The project utilizes a custom hook named `useFetchData.js` for efficient data fetching with proper error handling. This custom hook incorporates asynchronous operations and handles data formatting to improve readability.
In the code snippet above, the fetched data `(res.record)` is formatted using `reduce` and `Object.entries` to group the data by section. The result is stored in `formattedData`, and additional metadata is stored in `metaData`. This formatting enhances the structure and readability of the data.

