const fs = require('fs');
const inquirer = require('inquirer');

// Prompt the user for information
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your name:',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Enter your location:',
    },
    {
      type: 'input',
      name: 'bio',
      message: 'Enter a short bio:',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub URL:',
    },
  ])
  .then((answers) => {
    // Generate HTML document using template literals
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Profile</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #333;
          }
          p {
            color: #666;
          }
          a {
            color: #007bff;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${answers.name}'s Profile</h1>
          <p><strong>Location:</strong> ${answers.location}</p>
          <p><strong>Bio:</strong> ${answers.bio}</p>
          <p><strong>LinkedIn:</strong> <a href="${answers.linkedin}" target="_blank">${answers.linkedin}</a></p>
          <p><strong>GitHub:</strong> <a href="${answers.github}" target="_blank">${answers.github}</a></p>
        </div>
      </body>
      </html>
    `;

    // Write the HTML document to the file system
    fs.writeFileSync('user_profile.html', htmlContent, 'utf-8');

    console.log('Profile HTML file has been generated: user_profile.html');
  })
  .catch((error) => console.error(error));