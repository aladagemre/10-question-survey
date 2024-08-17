import React from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4 font-sans text-gray-800">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <Home />
      </div>
    </div>
  );
}

export default App;