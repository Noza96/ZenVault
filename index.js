const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile('./index.html');
});
server.listen(3000);

const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database or open an existing one
const db = new sqlite3.Database('./database/storage.db');

// Create a table
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS transactions (id INT, type TEXT)");

  // Insert data into the table
  const insertStatement = db.prepare("INSERT INTO transactions VALUES (?, ?)");
  insertStatement.run( 5, "asd");
  
  insertStatement.finalize();

  // Query data from the table
  db.each("SELECT id, type FROM transactions", (err, row) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`User ID: ${row.id}, type: ${row.type}`);
    }
  });
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Database connection closed.');
  }
});
