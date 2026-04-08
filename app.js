const express = require('express');
const app = express();
const port = 3000;

// SRE BEST PRACTICE: A Health Check endpoint for Monitoring tools (Dynatrace/Actuator style)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

// MAIN APP: A simple API endpoint
app.get('/', (req, res) => {
  console.log(`[INFO] Request received at ${new Date().toISOString()}`); // This goes to Splunk!
  res.send('Hello RBC! Our Node.js SRE Demo is Running.');
});

// ERROR SIMULATION: To practice troubleshooting in Splunk later
app.get('/error', (req, res) => {
  console.error(`[ERROR] Manual error triggered!`);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`SRE Demo App listening at http://localhost:${port}`);
});