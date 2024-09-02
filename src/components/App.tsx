import * as React from 'react';
import ShowUser from './user/UserToggle';
import { UserProvider } from './user/UserContext';
import ChoosePage from './pageNavigation/PageNavigator';
import { StatusProvider } from './status/StatusContextProvider';
import Shop from './shop/ProductShop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <UserProvider>
      <h1 className="text-center mb-4 mt-5">React State Management</h1>

      <div className="container my-5">
        <section className="mb-5">
          <ShowUser />
        </section>
        
        <section className="mb-5">      
          <Shop />
        </section>

        <section className="mb-5">
          <StatusProvider>
            <ChoosePage />
          </StatusProvider>
        </section>
      </div>
    </UserProvider>
  );
}

export default App;
