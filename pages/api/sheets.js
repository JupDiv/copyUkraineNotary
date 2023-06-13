// Import the googleapis module
const { google } = require('googleapis');

// Load the service account key JSON file.
const SERVICE_ACCOUNT_KEY = require('./credentials.json'); // Update the path as needed

// Define the scopes for the Google Sheets API.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// Authenticate and set up the Google Sheets client.
const auth = new google.auth.JWT(
  SERVICE_ACCOUNT_KEY.client_email,
  null,
  SERVICE_ACCOUNT_KEY.private_key,
  SCOPES
);

const sheets = google.sheets({ version: 'v4', auth });

module.exports = sheets;
