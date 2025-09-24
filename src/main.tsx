import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>Loading translations...</div>}>
    <App />
  </Suspense>
);
