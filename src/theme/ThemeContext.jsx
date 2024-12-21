import { createContext, useState, useContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const ThemeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

export const useThemeContext = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#2D46B9' : '#6B7FE3',
            light: mode === 'light' ? '#445ACA' : '#8A9BE8',
            dark: mode === 'light' ? '#1A309C' : '#4B63D6',
            contrastText: '#FFFFFF',
          },
          secondary: {
            main: mode === 'light' ? '#14C38E' : '#1BE8AB',
            light: mode === 'light' ? '#1DDBA3' : '#3EEBBE',
            dark: mode === 'light' ? '#0EA676' : '#15B98E',
            contrastText: '#FFFFFF',
          },
          background: {
            default: mode === 'light' ? '#F8F9FD' : '#0A0A0A',
            paper: mode === 'light' ? '#FFFFFF' : '#1A1A1A',
          },
          text: {
            primary: mode === 'light' ? '#1A1A1A' : '#FFFFFF',
            secondary: mode === 'light' ? '#666666' : '#B3B3B3',
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#2D46B9' : '#1A1A1A',
                color: '#FFFFFF',
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: mode === 'light' ? '#FFFFFF' : '#1A1A1A',
                borderRight: `1px solid ${
                  mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
                }`,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#FFFFFF' : '#1A1A1A',
                boxShadow: mode === 'light' 
                  ? '0px 2px 4px rgba(0, 0, 0, 0.1)'
                  : '0px 2px 4px rgba(0, 0, 0, 0.5)',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#FFFFFF' : '#1A1A1A',
                backgroundImage: 'none',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 8,
                padding: '8px 24px',
              },
              contained: {
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: 'none',
                },
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: mode === 'light' ? 'inherit' : '#FFFFFF',
              },
            },
          },
          MuiBottomNavigation: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#FFFFFF' : '#1A1A1A',
                borderTop: `1px solid ${
                  mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
                }`,
              },
            },
          },
          MuiBottomNavigationAction: {
            styleOverrides: {
              root: {
                color: mode === 'light' ? '#666666' : '#B3B3B3',
                '&.Mui-selected': {
                  color: mode === 'light' ? '#2D46B9' : '#6B7FE3',
                },
              },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                '&.Mui-selected': {
                  backgroundColor: mode === 'light' 
                    ? alpha('#2D46B9', 0.12)
                    : alpha('#6B7FE3', 0.16),
                  color: mode === 'light' ? '#2D46B9' : '#6B7FE3',
                  '& .MuiListItemIcon-root': {
                    color: mode === 'light' ? '#2D46B9' : '#6B7FE3',
                  },
                  '&:hover': {
                    backgroundColor: mode === 'light'
                      ? alpha('#2D46B9', 0.18)
                      : alpha('#6B7FE3', 0.24),
                  },
                },
              },
            },
          },
          MuiListItemIcon: {
            styleOverrides: {
              root: {
                color: mode === 'light' ? 'inherit' : '#B3B3B3',
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  backgroundColor: mode === 'light' ? '#FFFFFF' : '#1A1A1A',
                  '& fieldset': {
                    borderColor: mode === 'light'
                      ? 'rgba(0, 0, 0, 0.23)'
                      : 'rgba(255, 255, 255, 0.23)',
                  },
                  '&:hover fieldset': {
                    borderColor: mode === 'light' ? '#2D46B9' : '#6B7FE3',
                  },
                },
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                color: mode === 'light' ? '#666666' : '#B3B3B3',
                '&.Mui-selected': {
                  color: mode === 'light' ? '#2D46B9' : '#6B7FE3',
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}; 