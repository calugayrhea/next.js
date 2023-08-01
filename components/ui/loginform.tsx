import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button';
import {  EyeIcon, EyeOffIcon, Github, Mail } from "lucide-react"

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      setLoading(true);
    
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
      alert('Login successful!'); 
    } catch (error) {
      setLoading(false);
      alert('Login failed. Please check your credentials.'); 
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password clicked!'); 
  };
  const handleAtlassianLogin = () => {
  };
  const handleGitHubLogin = () => {
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-gray-100 rounded-md shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg"
      >
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ui-input mt-1" 
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"} 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ui-input mt-1 pr-10" 
              placeholder="Enter your password"
              required
            />
            <span
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </span>
          </div>
        </div> 
      <Button variant ="destructive" className="w-full">
          {isLoading ? 'Logging In...' : 'Login'}
        </Button>
        <p 
          className="mt-2 text-sm text-center text-gray-500 cursor-pointer"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </p>
        <div className="mt-4">
          <Button variant ="default"
            className="w-full h-12 bg-blue-600 text-white rounded-lg"
            onClick={handleAtlassianLogin}
          >
            <Mail className="mr-2 h-4 w-4" /> Login with Atlassian
          </Button>
        </div>
        <div className="mt-2">
          <Button
            className="w-full h-12 bg-gray-800 text-white rounded-lg"
            onClick={handleGitHubLogin}
          >
            <Github className="mr-2 h-4 w-4" /> Login with GitHub
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
