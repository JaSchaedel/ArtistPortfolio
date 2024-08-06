# Artist Portfolio

## Web Development Project Overview
This is my capstone project for Code:You. The project utilizes the Code:You Demo api to store submitted values from a contact form. The project's goal is to demonstrate a general knowledge of HTML, CSS, and JavaScript. 

## Resources
The resources I used for this project are as follows:

- Code:You Demo Contact API
> This provides a place for the submitted values to be stored.

- Fonts
> The fonts for the site are provided by fonts.google.com

- icons
> The icons for this project were selected from fontawesome.com.


## Project Overview
The project is organized as follows:
- Landing page
- hero with link to gallery
- About
- Gallery
- Blog
- Contact


## Features Utilized for the Project

Features:

Arrays:
- Art Piece titles, descriptions, and availability are stored in an array and displayed in a modal when you click on the "see more" button shown with the image in the gallery image slider.
- Blog posts are stored in an array and displayed through clickable links under the Popular Posts section.
- The blog post that is automatically displayed first is the most recent post which comes from sorting through the array of blog posts.
- The art pieces displayed in the selection drop down come from the array of art pieces and displays only the pieces that are available.

Regular Expression Validation:
- A regular expression is used in the contact form to insure the user correctly inputs a valid email address. If the user fails to do so, the box border will turn red and inform the user of the invalid email adress.

Form and API:
- In the Contact section, I have created a Contact Form of which the submitted values are sent to and displayed in the Code:You Demo API. Once submitted, a modal pops up thanking the user for thier submission.

Other Features:
- Responsive design for desktop and mobile
- Visually appealing UI

# Getting Started
1. Clone this repository to your local machine using Git:
```bash
git clone https://github.com/JaSchaedel/ArtistPortfolio.git
```
2. Navigate to the project directory:
```bash
cd ArtistPortfolio
```
3. Inside you will see 2 folders:
- ArtistPortfolio
- CodeYouWebDemoApi-main

4. In order to prevent LiveServer from refreshing the page when something changes in the API (file read/write), Navigate to ArtistPortfolio directory and open in VsCode.
```bash
cd ArtistPortfolio code .
```

5. Running the API: It is recommended that CodeYouWebDemoApi is opened in another terminal.
``` bash
cd CodeYouWebDemoApi-main
```

6. Open Api in seperate VsCode window:
``` bash
code .
```

7. Once open, follow the instructions in the CodeYouDemoApi directory readme:
- npm install
- npm run build
- npm run start

