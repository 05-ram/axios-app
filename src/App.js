import { RouterProvider } from 'react-router-dom';
import './App.css';
import RouterData from './routes';

function App() {
  const route = RouterData();
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
