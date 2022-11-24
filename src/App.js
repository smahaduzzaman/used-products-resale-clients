import { RouterProvider } from 'react-router-dom';
import router from './Routes/MainRoute/MainRoute';
import './App.css';

function App({ children }) {
  return (
    <div className="App max-[1440px] mx-auto" >
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </div>
  );
}

export default App;
