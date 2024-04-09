import React, { useState } from 'react';
import axios from 'axios';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

interface UserData {
  name: string;
  login: string;
  bio: string;
  location: string;
  blog: string;
  twitter_username: string;
  company: string;
}

interface UserSearchProps {
  toggleMode: () => void;
}

const UserSearch: React.FC<UserSearchProps> = ({ toggleMode }) => {
  const [username, setUsername] = useState<string>('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get<UserData>(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError(null);
    } catch (error) {
      setUserData(null);
      setError('User not found');
    }
  };

  return (
    <div className="container max-w-2xl mx-auto p-4">
      <div>
          <h1 className='text-text'>devfinder</h1>
          <div onClick={toggleMode}>
            <div className="dark-on text-moon">
              DARK <MoonIcon className='h-7 fill-moon' /> 
            </div>
            <div className="light-on">
              LIGHT <SunIcon className='h-7' />
            </div>
          </div>
      <div className="flex items-center ">
        
         
        </div>
        <div className='bg-card w-full rounded flex p-2'>
            <input
            type="text"
            placeholder="Search GitHub username..."
            className="mr-2 border rounded px-2 py-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <button
            className="bg-button  text-white px-4 py-2 rounded"
            onClick={handleSearch}
            >
            Search
        </button>
        </div>
     
      </div>
     
    </div>
  );
};

export default UserSearch;