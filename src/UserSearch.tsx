import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SunIcon, MoonIcon, MapPinIcon, LinkIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';
import Card from './components/Card';

interface UserData {
  name: string;
  login: string;
  bio: string | null;
  location: string;
  blog: string;
  twitter_username: string | null;
  company: string;
  avatar_url: string;
  created_at: string;
  followers: number;
  following: number;
  html_url: string;
  public_repos: number;
}

interface UserSearchProps {
  toggleMode: () => void;
}

const UserSearch: React.FC<UserSearchProps> = ({ toggleMode }) => {
  const [username, setUsername] = useState<string>('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleSearch('russell-johnson');
  }, []);

  const handleSearch = async (user?: string) => {
    try {
      const response = await axios.get<UserData>(`https://api.github.com/users/${username || user}`);
      setUserData(response.data);
      setError(null);
    } catch (error) {
      setUserData(null);
      setError('No Results');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className='container max-w-2xl mx-auto p-4'>
      <div className='flex items-center mb-6'>
        <h1 className='flex-1 text-text'>devfinder</h1>
        <div className='hover:cursor-pointer' onClick={toggleMode}>
          <div className='dark-on hover:text-hover text-text flex items-center space-x-2 flex-end'>
            <h4>LIGHT</h4> <SunIcon className='h-7 hover:text-hover' />
          </div>
          <div className='light-on hover:text-hover text-text flex items-center space-x-2 flex-end'>
            <h4>DARK</h4> <MoonIcon className='h-7 hover:text-hover' />
          </div>
        </div>
      </div>

      <Card className='p-2 flex'>
        <div className='flex flex-1 relative'>
          <input
            type='text'
            placeholder='Search GitHub username...'
            className='flex-1 border-0 bg-card text-text rounded-l px-2 py-1 focus:outline-none'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          {error && (
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 text-red-500'>{error}</span>
          )}
        </div>
        <button
          className='bg-button text-white px-4 py-2 rounded-lg'
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </Card>

   
      {userData && (
       <Card className='p-8 flex'>
       <div className="overflow-hidden">
         <img src={userData.avatar_url} alt='User Avatar' className='w-40 h-40 object-cover rounded-full' />
       </div>
       <div className='w-3/4 ml-6 text-text'>
         <div className="flex justify-between">
           <div>
             <h1>{userData.name || userData.login}</h1>
             <p>{userData.login}</p>
           </div>
           <div>
             <p>Joined: {new Date(userData.created_at).toLocaleDateString()}</p>
           </div>
         </div>
         <p>{userData.bio || 'This profile has no bio'}</p>
         <div className='bg-main rounded-md p-2 px-6 flex justify-between w-full'>
           <div className="flex flex-col">
             <small>Repos</small>
             <p>{userData.public_repos}</p>
           </div>
           <div className="flex flex-col">
             <small>Followers</small>
             <h2>{userData.followers}</h2>
           </div>
           <div className="flex flex-col">
             <small>Following</small>
             <p>{userData.following}</p>
           </div>
         </div>
         <div>
           <p><MapPinIcon className='h-5'/> {userData.location || 'Location: Not Available'}</p>
           <p><LinkIcon className='h-5'/>{userData.blog ? <a className='text-text' href={userData.blog}>{userData.blog}</a> : 'Website: Not Available'}</p>
           <p>{userData.twitter_username ? <a href={`https://twitter.com/${userData.twitter_username}`}>Twitter</a> : 'Twitter: Not Available'}</p>
           <p><BuildingOfficeIcon className='h-5'/> {userData.html_url ? <a href={userData.html_url}>{userData.html_url}</a> : 'Company: Not Available'}</p>
         </div>
       </div>
     </Card>
      )}
    </div>
  );
};

export default UserSearch;
