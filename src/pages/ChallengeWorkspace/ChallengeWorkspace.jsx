import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Stack,
  CircularProgress,
} from '@mui/material';
import {
  PlayArrow as RunIcon,
  Save as SaveIcon,
  Check as SubmitIcon,
  Description as TestIcon,
  Terminal as ConsoleIcon,
  Refresh as ResetIcon,
} from '@mui/icons-material';
import Editor from '@monaco-editor/react';
import { achievementService, ACHIEVEMENT_TYPES } from '../../services/achievementService';

const testCases = [
  {
    id: 1,
    input: 'createChat({ users: ["user1", "user2"] })',
    expectedOutput: '{ id: "chat_1", users: ["user1", "user2"], messages: [] }',
    description: 'Should create a new chat instance with two users',
  },
  {
    id: 2,
    input: 'sendMessage({ chatId: "chat_1", user: "user1", content: "Hello!" })',
    expectedOutput: '{ status: "sent", timestamp: "..." }',
    description: 'Should send a message to the chat',
  },
];

const initialCode = `// Create a real-time chat component
function createChat({ users }) {
  // Your implementation here
}

function sendMessage({ chatId, user, content }) {
  // Your implementation here
}

// Example usage:
const chat = createChat({ users: ['user1', 'user2'] });
const message = sendMessage({
  chatId: chat.id,
  user: 'user1',
  content: 'Hello!'
});`;

const ChallengeWorkspace = () => {
  const [code, setCode] = useState(initialCode);
  const [activeTab, setActiveTab] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState('');
  const [testResults, setTestResults] = useState([]);

  const handleRunCode = async () => {
    setIsRunning(true);
    try {
      // Here you would typically send the code to a backend service
      // for execution in a sandbox environment
      setConsoleOutput('Running code...\nTest output will appear here');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate execution
    } catch (error) {
      setConsoleOutput(`Error: ${error.message}`);
    }
    setIsRunning(false);
  };

  const handleRunTests = async () => {
    setIsRunning(true);
    try {
      // Simulate test execution
      const results = testCases.map(test => ({
        ...test,
        passed: Math.random() > 0.5,
        output: 'Test output here',
      }));
      setTestResults(results);
    } catch (error) {
      console.error(error);
    }
    setIsRunning(false);
  };

  const handleSubmitChallenge = async () => {
    setIsRunning(true);
    try {
      // Simulate challenge submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track achievement progress
      await achievementService.trackProgress(
        ACHIEVEMENT_TYPES.CHALLENGES_COMPLETED,
        1
      );
      
      // Show success message
      setConsoleOutput('Challenge completed successfully!');
    } catch (error) {
      setConsoleOutput(`Error: ${error.message}`);
    }
    setIsRunning(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4, height: 'calc(100vh - 100px)' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        {/* Left Panel - Instructions & Tests */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ height: '100%', overflow: 'auto' }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                Build a Real-time Chat Component
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Create a chat component that supports real-time messaging between users.
                The component should handle message sending, receiving, and status updates.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Requirements:
              </Typography>
              <ul>
                <li>Create a chat instance with multiple users</li>
                <li>Support message sending with timestamps</li>
                <li>Handle message delivery status</li>
                <li>Implement basic error handling</li>
              </ul>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Test Cases:
              </Typography>
              {testCases.map((test, index) => (
                <Paper
                  key={test.id}
                  variant="outlined"
                  sx={{ p: 2, mb: 2, bgcolor: 'background.default' }}
                >
                  <Typography variant="subtitle2" gutterBottom>
                    Test {index + 1}: {test.description}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                    Input: {test.input}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                    Expected: {test.expectedOutput}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Right Panel - Code Editor & Console */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Toolbar */}
            <Box sx={{ p: 1, borderBottom: 1, borderColor: 'divider' }}>
              <Stack direction="row" spacing={1}>
                <Button
                  variant="contained"
                  startIcon={<RunIcon />}
                  onClick={handleRunCode}
                  disabled={isRunning}
                >
                  Run Code
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<TestIcon />}
                  onClick={handleRunTests}
                  disabled={isRunning}
                >
                  Run Tests
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<SaveIcon />}
                  disabled={isRunning}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<SubmitIcon />}
                  disabled={isRunning}
                  onClick={handleSubmitChallenge}
                >
                  Submit
                </Button>
              </Stack>
            </Box>

            {/* Editor */}
            <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
              <Editor
                height="100%"
                defaultLanguage="javascript"
                theme="vs-dark"
                value={code}
                onChange={setCode}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  automaticLayout: true,
                }}
              />
            </Box>

            {/* Console/Output */}
            <Box sx={{ height: '200px', borderTop: 1, borderColor: 'divider' }}>
              <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)}>
                <Tab icon={<ConsoleIcon />} label="Console" />
                <Tab icon={<TestIcon />} label="Test Results" />
              </Tabs>
              <Box sx={{ p: 2, height: 'calc(100% - 48px)', overflow: 'auto' }}>
                {activeTab === 0 ? (
                  <Typography
                    variant="body2"
                    component="pre"
                    sx={{ fontFamily: 'monospace', m: 0 }}
                  >
                    {consoleOutput}
                  </Typography>
                ) : (
                  <Box>
                    {testResults.map((result, index) => (
                      <Box
                        key={index}
                        sx={{
                          p: 1,
                          mb: 1,
                          borderRadius: 1,
                          bgcolor: result.passed ? 'success.main' : 'error.main',
                          color: 'white',
                        }}
                      >
                        <Typography variant="body2">
                          Test {index + 1}: {result.passed ? 'Passed' : 'Failed'}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {result.output}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChallengeWorkspace; 