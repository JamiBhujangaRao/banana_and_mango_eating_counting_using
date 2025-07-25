# Tech News Agent

Create an ElevenLabs conversational AI agent that makes friendly outbound calls with the latest tech updates!

## Features

🎯 **Friendly Tone** - Sounds like a helpful colleague, not a sales rep  
🚀 **Tech Updates** - Latest in AI, programming, and job opportunities  
👩 **Female Voice** - Uses Alexandra, a confident and friendly female voice  
💬 **Smart Script** - Always asks permission: "Hey, I've got some quick tech updates for you — should I go ahead?"

## Quick Start

### Prerequisites

- Node.js (version 10.13 or higher)
- npm or pnpm
- ElevenLabs API key

### Installation

1. **Clone or download this project**
   ```bash
   git clone <your-repo-url>
   cd tech-news-agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   pnpm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Getting Your ElevenLabs API Key

1. Sign up at [ElevenLabs](https://elevenlabs.io)
2. Go to your [Profile Settings](https://elevenlabs.io/app/settings/api-keys)
3. Generate a new API key
4. Copy and paste it into the app

## How It Works

1. **Enter your ElevenLabs API key** in the secure input field
2. **Click "Create Tech News Agent"** to set up your AI agent
3. **Your agent is ready!** It will be configured with:
   - Friendly, confident female voice (Alexandra)
   - Tech news script covering AI, programming, and job opportunities
   - Conversational prompts that ask permission before sharing updates
   - Professional tone that sounds like a helpful colleague

## Agent Configuration

The agent is pre-configured with:

- **Voice**: Alexandra (kdmDKE6EkgrWrrykO9Qt) - realistic, young female voice
- **Personality**: Confident, friendly, tech-savvy colleague
- **Content**: AI news, programming updates, job market trends
- **Opening**: "Hey, I've got some quick tech updates for you — should I go ahead?"

## Sample Content

The agent delivers updates on:

- **AI News**: Latest model releases, capabilities, coding assistants
- **Programming**: React 18, Next.js 14, TypeScript adoption trends
- **Job Market**: Demand for AI engineers, full-stack developers, hot skills

## Tech Stack

- **Frontend**: React 17, Modern CSS with gradients and animations
- **API**: ElevenLabs Conversational AI API
- **HTTP Client**: Axios for API requests
- **Styling**: Custom CSS with responsive design

## Project Structure

```
src/
├── components/
│   └── TechNewsAgent/
│       ├── index.js       # Main component with ElevenLabs integration
│       └── index.css      # Modern styling and animations
├── App.js                 # Main app component
├── App.css               # Global styles
└── index.js              # React entry point
```

## Customization

### Voice Selection
To use a different voice, replace the `voice_id` in `src/components/TechNewsAgent/index.js`:

```javascript
voice_id: "kdmDKE6EkgrWrrykO9Qt" // Replace with your preferred voice ID
```

### Content Updates
Modify the `agent_prompt` in the same file to customize:
- Personality traits
- Content focus areas
- Speaking style
- Opening messages

### Styling
Update `src/components/TechNewsAgent/index.css` to change:
- Color scheme
- Layout
- Animations
- Responsive breakpoints

## ElevenLabs Integration

This app uses the ElevenLabs Conversational AI API to:

1. **Create agents** via `/v1/convai/agents` endpoint
2. **Configure voice settings** for optimal conversational quality
3. **Set conversation prompts** for consistent, engaging interactions
4. **Manage agent lifecycle** (create/delete as needed)

## Security Notes

- API keys are handled securely (password input type)
- Keys are only stored in component state (not persisted)
- All API calls use HTTPS
- Agent creation requires explicit user action

## Development

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run test suite
- `npm run lint` - Check code quality

### Adding Features

Some ideas for enhancements:
- Save API key to local storage (with encryption)
- Add more voice options
- Create multiple agent templates
- Add scheduling for automated calls
- Export agent configurations

## Troubleshooting

### Common Issues

**"Please enter your ElevenLabs API key"**
- Ensure you've entered a valid API key from your ElevenLabs account

**"Error creating agent: 401 Unauthorized"**
- Check that your API key is correct and has sufficient permissions
- Verify your ElevenLabs account has access to Conversational AI features

**"Error creating agent: Network Error"**
- Check your internet connection
- Ensure CORS is properly configured if running in production

### Support

- [ElevenLabs Documentation](https://elevenlabs.io/docs)
- [ElevenLabs Community](https://discord.gg/elevenlabs)
- [API Reference](https://elevenlabs.io/docs/api-reference)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ using ElevenLabs AI Voice Technology**
