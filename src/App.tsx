import {useEffect} from 'react';
import './App.css';
import UserSearch from './UserSearch';
import { keepMode } from './utils/theme';
function App() {
  useEffect(() => {
    keepMode();
  }, []);

  return (
    <div className={"bg-main h-full flex align-center"}>
      <UserSearch />
    </div>
  );  
}

export default App;
