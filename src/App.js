import logo from './logo.svg';
import './App.css';

function App() {

  const handleFinish = () => {
    if (typeof window.reportComplete === "function") {
      window.reportComplete();
    } else {
      console.log("SCORM לא זמין כרגע");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={handleFinish}>
          לסיים לומדה
        </button>
      </header>
    </div>
  );
}

export default App;
