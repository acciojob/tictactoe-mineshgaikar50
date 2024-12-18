/* General Styles */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
  }
  
  h1 {
    font-family: 'Comic Sans MS', cursive;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  label {
    font-size: 1.2rem;
  }
  
  input {
    padding: 8px;
    margin: 5px 0 10px;
    font-size: 1rem;
    text-align: center;
    border: 2px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border: 2px solid black;
    background-color: white;
    border-radius: 5px;
    transition: 0.3s;
  }
  
  button:hover {
    background-color: black;
    color: white;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Takes full viewport height */
    margin: 0;
  }
  /* Board Styles */
  .board {
    
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
    margin: 20px auto;
  }
  
  .cell {
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
    cursor: pointer;
    border: 2px solid black;
  }
  
  .cell.taken {
    pointer-events: none; /* Prevent clicking a filled cell */
  }
  .winning-cell {
    background-color: #81007f !important;
    color: white; /* Ensures text is visible on the new background */
  }
  
  /* Message */
  .message {
    font-size: 1.5rem;
    margin: 10px;
  }
  