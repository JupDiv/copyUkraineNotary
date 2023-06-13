import sheets from './sheets';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    // Process a POST request
    // const { name, phone, text } = req.body;

    const body = JSON.parse(req.body);

    const { name, phone, text } = body;

    // Define the ID of the Google Sheet you want to append data to.
    // This can be found in the URL of the Google Sheet.
    const spreadsheetId = '10zrusGDigA3wfXu2rk3scpR2nlaxR-cY-NKxRx9nq-c';

    // Define the range you want to append data to.
    // This should include the name of the sheet and the range of cells.
    const range = 'A1:C1';

    // Define the data you want to append.
    // This should be a 2D array, even if you're only appending a single row.
    const values = [[name, phone, text]];

    // Create the request.
    const request = {
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values,
      },
    };

    // Append the data to the Google Sheet.
    const response = await sheets.spreadsheets.values.append(request);

    // Send the response.
    res.status(200).json(response.data);
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
