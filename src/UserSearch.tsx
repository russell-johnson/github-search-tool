import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPinIcon, LinkIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';
import Card from './components/Card';
import DarkModeControl from './components/DarkModeControl';
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

const UserSearch: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleSearch('russell-johnson');
  }, []);

  const handleSearch = async (user?: string) => {
    try {
      const response = await axios.get<UserData>(`https://api.github.com/users/${username || user}`);
      console.log(response.data)
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
    <div className='container max-w-3xl mx-auto p-4'>
      <div className='flex items-center mb-6'>
        <h1 className='flex-1 text-standard'>devfinder</h1>
        <DarkModeControl />
      </div>
      <Card className='p-2 flex'>
        <div className='flex flex-1 relative'>
          <input
            type='text'
            placeholder='Search GitHub username...'
            className='flex-1 border-0 bg-card text-standard rounded-l px-2 py-1 focus:outline-none'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          {error && (
            <span className='absolute inset-y-0 right-2 flex items-center pr-2 text-red-500'>{error}</span>
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
        <Card className='py-12 px-8 flex'>
          <div className="overflow-hidden">
            <img src={userData.avatar_url} alt='User Avatar' className='w-40 h-40 object-cover rounded-full' />
          </div>
          <div className='w-3/4 ml-6 text-standard'>
            <div className="flex justify-between">
              <div>
                <h1>{userData.name || userData.login}</h1>
                <a className="text-button text-sm" target='_blank' href={userData.html_url}>@{userData.login}</a>
              </div>
              <div>
                <small>Joined: {new Date(userData.created_at).toLocaleDateString()}</small>
              </div>
            </div>
            <p className='text-sm py-4'>{userData.bio || 'This profile has no bio'}</p>
            <div className='bg-accent rounded-md p-2 px-6 flex justify-between w-full'>
              <div className="flex flex-col">
                <small>Repos</small>
                <div className='text-lg'>{userData.public_repos}</div>
              </div>
              <div className="flex flex-col">
                <small>Followers</small>
                <div className='text-lg'>{userData.followers}</div>
              </div>
              <div className="flex flex-col">
                <small>Following</small>
                <div className='text-lg'>{userData.following}</div>
              </div>
            </div>
            <div className="mt-6">
              <div className='flex justify-between mt-4'>
                <div className="text-sm inline-flex space-x-4 mt-4">
                  <MapPinIcon className='h-5' />
                  <span>{userData.location || 'Not Available'}</span>
                </div>
                <div className="text-sm inline-flex space-x-4 mt-4">
                  {userData.twitter_username ? <a target='_blank' href={`https://twitter.com/${userData.twitter_username}`}>Twitter</a> : <span>Not Available</span>}
                </div>
              </div>
              <div className='flex justify-between'>
                <div className="text-sm inline-flex space-x-4 mt-4"><LinkIcon className='h-5' />{userData.blog ? <a target='_blank' className='text-standard' href={userData.blog}>{userData.blog}</a> : <span>Not Available</span>}</div>
                <div className="text-sm inline-flex space-x-4 mt-4"><BuildingOfficeIcon className='h-5' /> <span>{userData.company || 'Not Available'}</span></div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default UserSearch;
