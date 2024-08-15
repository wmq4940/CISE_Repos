import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from React 18
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  const root = createRoot(div); // Create a root
  root.render(<App />); // Render the App component
  
  root.unmount(); // Unmount using the new API
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});
