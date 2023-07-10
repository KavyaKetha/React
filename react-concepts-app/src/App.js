import './App.css';
import { ErrorBoundaryHandler } from './Components/ErrorBoundry/ErrorBoundaryHandler';
import { AppRoutes } from './Routes/AppRoutes';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundaryHandler>
          <AppRoutes />
        </ErrorBoundaryHandler>
      </header>
    </div>
  );
}

export default App;
