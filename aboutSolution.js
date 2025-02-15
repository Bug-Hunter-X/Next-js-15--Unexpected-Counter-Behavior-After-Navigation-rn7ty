```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval;
    // Check if interval exists before setting a new one
    const startInterval = () => {
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }
    startInterval();
    // Cleanup function to clear the interval
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>The count is: {count}</p>
    </div>
  );
}
```