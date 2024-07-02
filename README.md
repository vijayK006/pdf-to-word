# PDF to Word Docx Converter

This project is a simple web application built with React that allows users to upload multiple PDF files, convert them to Word (.docx) format, and download the converted files. The application uses an external API to handle the conversion process.

## Features

- Upload multiple PDF files simultaneously.
- Convert uploaded PDF files to Word (.docx) format.
- Display download links for the converted files.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- An API endpoint to handle the PDF to Word conversion. The API should accept multiple files and return download links for the converted files.

## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/vijayK006/pdf-to-word.git
    ```

2. Navigate to the project directory:

    ```bash
    cd pdf-to-word-converter
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Use the file input to upload one or more PDF files.

4. Click the `Submit` button to start the conversion process.

5. Download the converted Word files using the provided download links.

## Project Structure

- `src/`: Contains the source code of the project.
  - `Pages/`: Contains reusable components.
  - `Home.jsx`: Main application component.
  - `App.js`: Entry point of the application.




