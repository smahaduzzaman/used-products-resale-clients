import { RouterProvider } from 'react-router-dom';
import router from './Routes/MainRoute/MainRoute';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ children }) {
  return (
    <div className="App max-[1440px] mx-auto" >
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </div>
  );
}

export default App;
