import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  TextField,
  IconButton,
  Badge,
  InputAdornment,
} from '@mui/material';
import {
  Send as SendIcon,
  Code as CodeIcon,
  AttachFile as AttachFileIcon,
  Image as ImageIcon,
} from '@mui/icons-material';

const conversations = [
  {
    id: 1,
    user: {
      name: 'Sarah Chen',
      avatar: '/path-to-avatar1.jpg',
      status: 'online',
      lastSeen: 'online'
    },
    lastMessage: 'I think we could use React Query for that feature',
    unread: 2,
    timestamp: '10:30 AM'
  },
  {
    id: 2,
    user: {
      name: 'Alex Kumar',
      avatar: '/path-to-avatar2.jpg',
      status: 'offline',
      lastSeen: '2 hours ago'
    },
    lastMessage: 'Here\'s the code snippet for the API integration',
    unread: 0,
    timestamp: 'Yesterday'
  }
];

const messages = [
  {
    id: 1,
    sender: 'Sarah Chen',
    content: 'Hey! I saw your profile and I think we could collaborate on that AI project you mentioned.',
    timestamp: '10:30 AM',
    type: 'text'
  },
  {
    id: 2,
    sender: 'me',
    content: "Hi Sarah! That sounds great! I've been working on the machine learning model using TensorFlow.",
    timestamp: '10:32 AM',
    type: 'text'
  },
  {
    id: 3,
    sender: 'Sarah Chen',
    content: `Here's what I've been working on:
\`\`\`python
def train_model(data):
    model = tf.keras.Sequential([
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.Dropout(0.2),
        tf.keras.layers.Dense(10, activation='softmax')
    ])
    return model
\`\`\``,
    timestamp: '10:35 AM',
    type: 'code'
  }
];

const ChatMessage = ({ message, isOwn }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: isOwn ? 'flex-end' : 'flex-start',
      mb: 2
    }}
  >
    <Box
      sx={{
        maxWidth: '70%',
        backgroundColor: isOwn ? 'primary.main' : 'background.paper',
        color: isOwn ? 'white' : 'text.primary',
        borderRadius: 2,
        p: 2,
        boxShadow: 1
      }}
    >
      {message.type === 'code' ? (
        <Box
          sx={{
            backgroundColor: 'background.default',
            p: 2,
            borderRadius: 1,
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            color: 'text.primary'
          }}
        >
          {message.content}
        </Box>
      ) : (
        <Typography>{message.content}</Typography>
      )}
      <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.7 }}>
        {message.timestamp}
      </Typography>
    </Box>
  </Box>
);

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add message sending logic here
      setMessage('');
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={2} sx={{ height: 'calc(100vh - 140px)' }}>
        {/* Conversations List */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper sx={{ height: '100%', overflow: 'hidden' }}>
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
              <Typography variant="h6">Messages</Typography>
            </Box>
            <List sx={{ overflow: 'auto', maxHeight: 'calc(100% - 64px)' }}>
              {conversations.map((conversation) => (
                <ListItem
                  key={conversation.id}
                  button
                  selected={selectedChat?.id === conversation.id}
                  onClick={() => setSelectedChat(conversation)}
                >
                  <ListItemAvatar>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                      color={conversation.user.status === 'online' ? 'success' : 'default'}
                    >
                      <Avatar src={conversation.user.avatar} />
                    </Badge>
                  </ListItemAvatar>
                  <ListItemText
                    primary={conversation.user.name}
                    secondary={conversation.lastMessage}
                    secondaryTypographyProps={{
                      noWrap: true,
                      style: { maxWidth: '200px' }
                    }}
                  />
                  {conversation.unread > 0 && (
                    <Badge badgeContent={conversation.unread} color="primary" />
                  )}
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Chat Area */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Chat Header */}
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
              <Typography variant="h6">{selectedChat?.user.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                {selectedChat?.user.status === 'online' ? 'Online' : `Last seen ${selectedChat?.user.lastSeen}`}
              </Typography>
            </Box>

            {/* Messages */}
            <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
              {messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  message={msg}
                  isOwn={msg.sender === 'me'}
                />
              ))}
            </Box>

            {/* Message Input */}
            <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small">
                        <CodeIcon />
                      </IconButton>
                      <IconButton size="small">
                        <AttachFileIcon />
                      </IconButton>
                      <IconButton size="small">
                        <ImageIcon />
                      </IconButton>
                      <IconButton onClick={handleSendMessage} color="primary">
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat; 