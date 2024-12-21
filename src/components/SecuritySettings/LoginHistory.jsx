import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import {
  CheckCircle as SuccessIcon,
  Error as FailureIcon,
} from '@mui/icons-material';

const loginHistory = [
  {
    id: 1,
    date: '2024-03-10 14:30:00',
    device: 'Chrome on MacOS',
    location: 'San Francisco, US',
    ip: '192.168.1.1',
    status: 'success',
  },
  {
    id: 2,
    date: '2024-03-09 10:15:00',
    device: 'Firefox on Windows',
    location: 'New York, US',
    ip: '192.168.1.2',
    status: 'failed',
  },
];

const LoginHistory = () => {
  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        Login History
      </Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date & Time</TableCell>
              <TableCell>Device</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loginHistory.map((login) => (
              <TableRow key={login.id}>
                <TableCell>{login.date}</TableCell>
                <TableCell>{login.device}</TableCell>
                <TableCell>{login.location}</TableCell>
                <TableCell>{login.ip}</TableCell>
                <TableCell>
                  <Chip
                    icon={login.status === 'success' ? <SuccessIcon /> : <FailureIcon />}
                    label={login.status}
                    color={login.status === 'success' ? 'success' : 'error'}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LoginHistory; 