Angular Password Strength Checker

This is an Angular application that provides a real-time password strength checker. It includes a field for entering a password and three sections that dynamically display the strength of the password based on certain criteria.

Password Strength Calculation
The strength of a password is determined as follows:

If the password contains only letters, digits, or symbols, it is considered easy.
If the password is a combination of letters-symbols, letters-digits, or digits-symbols, it is considered medium.
If the password contains letters, symbols, and numbers, it is considered strong.
Password Strength Indicator
The sections displaying the password strength are color-coded based on the following rules:

If the password field is empty, all sections will be gray.
If the password field has less than 8 characters, all sections will be red.
If the password is easy, the first section will be red, and the rest will be gray.
If the password is medium, the first two sections will be yellow, and the last section will be gray.
If the password is strong, all sections will be green.

Getting Started
To get started with the application, follow these steps:

Clone this repository.
Install the dependencies: npm install.
Run the development server: ng serve.
Open your browser and navigate to http://localhost:4200 to see the application.
Feel free to modify and customize the application according to your requirements.

Technologies Used
The following technologies and frameworks were used to build this Angular application:

Angular
HTML
CSS
