# Morse Code Translator

This web application allows you to translate text into Morse code. <br>
This project is designed to showcase my frontend development skills and my ability to handle data effectively. While it may seem limiting, the backend route intentionally accepts only one letter at a time. This constraint is intentional to emphasize my capabilities in frontend development.

## Features

- Translate any text into Morse code.
- Utilize memoization to improve translation efficiency (Repetitive letters will not send request).
- Use Promise.all() to resolve promises concurrently to improve efficiency

<img width="1476" alt="Screen Shot 2023-10-24 at 4 15 00 PM" src="https://github.com/WingNinCheung/morse-code-translator/assets/96600317/a62c9f46-f343-404d-be3a-8cd2076cd851">

## Technologies Used

- Frontend - React, CSS
- Backend - Express

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/WingNinCheung/morse-code-translator.git
   ```

2. Change to the project directory:
   ```
   cd morse-code-translator
   ```
3. Install the required dependencies:
   ```
   npm install
   ```
4. Start the server in both directory:
     ```
    npm start 
    node server.js // in "/server"
    ```
