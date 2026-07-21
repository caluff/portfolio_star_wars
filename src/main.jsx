import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const loadVercelInsights = async () => {
  const [{inject}, {injectSpeedInsights}] = await Promise.all([
    import('@vercel/analytics'),
    import('@vercel/speed-insights'),
  ]);

  inject();
  injectSpeedInsights();
};

if ('requestIdleCallback' in window) {
  window.requestIdleCallback(() => void loadVercelInsights(), {timeout: 2000});
} else {
  window.setTimeout(() => void loadVercelInsights(), 0);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
