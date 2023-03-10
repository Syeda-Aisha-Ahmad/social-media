import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router/Router';

function App() {
  return (
    <div className="max-w-[1350px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
