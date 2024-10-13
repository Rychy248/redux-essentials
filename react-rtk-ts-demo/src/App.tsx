
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeView from './features/cake/cakeView';
import IceCreamView from './features/ice-cream/IceCreamView';
import UserView from './features/users/UserView';

function App() {
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  );
};

export default App
