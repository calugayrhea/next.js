import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="text-sm font-medium text-gray-600">
          Email:
        </label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="ui-input mt-1" 
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="text-sm font-medium text-gray-600">
          Password:
        </label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="ui-input mt-1" 
          placeholder="Enter your password"
        />
      </div>
      <Button
        type="submit" 
        size="default" 
      >Login
      </Button>
    </form>
  );
};
export default LoginForm;
