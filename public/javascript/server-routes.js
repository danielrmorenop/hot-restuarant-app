// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page(home)
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  // Displays current tables
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  // Displays the "Book a table" page
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });