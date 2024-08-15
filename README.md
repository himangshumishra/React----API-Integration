
```markdown
# React-And-API-Integration

This repository contains the implementation of three tasks based on the provided Figma designs. The tasks are implemented using React with Vite and are integrated with the FreeAPI.app. The tasks are as follows:

## Tasks Overview

### 1. Random User Profile
- **API Used**: `https://api.freeapi.app/api/v1/public/randomusers/user/random`
- **Features**:
  - Matches the component styling as per the Figma design.
  - Refresh button to fetch the next set of random data.
  - Loading state for the card (custom implementation).
  - Maps API response fields as per the Figma design.
  - Hyperlinks for location and call, which open actions in a new tab.

### 2. Random Jokes Tweet
- **API Used**: `https://api.freeapi.app/api/v1/public/randomjokes/joke/random`
- **Features**:
  - Static tweet author details (e.g., Elon Musk).
  - Randomly generated timestamp, views, date, and other tweet analytics.
  - Loading state for the tweet card (custom implementation).
  - New joke data replaces the tweet card content on page reload.

### 3. Cats Listing
- **API Used**: `https://api.freeapi.app/api/v1/public/cats?page=1&limit=4`
- **Features**:
  - Paginated list of horizontally scrolling cards with cat information.
  - Custom loading state for the cards.
  - Pagination and limit implemented to display all cat records from the API.

## Project Structure

- **Base URL (`/`)**: Redirects to `/random-user`.
- **Routes**:
  - `/random-user`: Displays the Random User Profile task.
  - `/random-jokes`: Displays the Random Jokes Tweet task.
  - `/cats-listing`: Displays the Cats Listing task.

## Branding
- The branding logo is positioned as per the task requirements.
- Clicking the logo will open the "chaicode.com" website in a new tab.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/himangshumishra/React-And-API-Integration.git
   ```
2. Navigate to the project directory:
   ```bash
   cd React-And-API-Integration
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173` to view the project.

## Screenshots

*It will be included*

## Hosted Application

You can view the live application at: [https://react-and-api-integration.vercel.app/](https://react-and-api-integration.vercel.app/)

## Evaluation Parameters

The project will be evaluated based on the following criteria:

- Matching the component styling as per Figma.
- Implementing the features as described above.
- Proper API integration.
- Clean and maintainable code.
- Correct routing and redirection.
- Adherence to the submission instructions.

## Contact

- **GitHub**: [himangshumishra](https://github.com/himangshumishra)
- **Instagram**: [mishra.himangshu](https://www.instagram.com/mishra.himangshu)
- **LinkedIn**: [himangshumishra](https://www.linkedin.com/in/himangshumishra)
- **Twitter**: [himangshuji](https://twitter.com/himangshuji)
- **Email**: [imhimangshumishra@gmail.com](mailto:imhimangshumishra@gmail.com)

For any questions or issues, feel free to reach out.

