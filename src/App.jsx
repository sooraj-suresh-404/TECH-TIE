import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { CustomThemeProvider } from './theme/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { useState } from 'react';

function App() {
  const [error, setError] = useState(null);

  if (error) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Something went wrong</h1>
        <button onClick={() => window.location.reload()}>Reload Page</button>
      </div>
    );
  }

  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Router>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Router>
    </CustomThemeProvider>
  );
}

export default App; 