import { Typography } from "@mui/material";
import './App.css';

function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">DevBook!</Typography>
      <div data-test="book-list">
        <div className="book-item">
          <h2 className="titles">Refactoring</h2>
        </div>
        <div className="book-item">
          <h2 className="titles">Domain-driven design</h2>
        </div>
      </div>
    </>
  );
}

export default App;
