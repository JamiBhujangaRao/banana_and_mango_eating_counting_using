# Tech News Agent - Quick Setup Guide

## 🚀 Get Started in 3 Minutes

### Step 1: Get Your ElevenLabs API Key
1. Sign up at [ElevenLabs](https://elevenlabs.io)
2. Go to [API Settings](https://elevenlabs.io/app/settings/api-keys)
3. Click "Create API Key"
4. Copy your new API key

### Step 2: Run the Application
```bash
# Install dependencies
npm install

# Start the development server
npm start
```

### Step 3: Create Your Agent
1. Open http://localhost:3000 in your browser
2. Paste your ElevenLabs API key in the input field
3. Click "Create Tech News Agent"
4. Your agent is ready! 🎉

## 🎯 What You Get

✅ **Friendly AI Agent** - Sounds like a helpful colleague, not a sales rep  
✅ **Female Voice** - Uses Alexandra, a confident and realistic voice  
✅ **Smart Content** - Updates on AI, programming, and job opportunities  
✅ **Permission-Based** - Always asks: "Hey, I've got some quick tech updates for you — should I go ahead?"

## 📞 Sample Call Flow

**Agent:** "Hey, I've got some quick tech updates for you — should I go ahead?"

**User:** "Sure!"

**Agent:** "Great! Here's what's happening in tech this week:

In AI news: OpenAI just released some exciting updates... [continues with latest tech updates]"

## 🛠️ Advanced Options

### Environment Configuration
Create a `.env` file for automatic API key setup:
```bash
REACT_APP_ELEVENLABS_API_KEY=your_api_key_here
REACT_APP_DEFAULT_VOICE_ID=kdmDKE6EkgrWrrykO9Qt
```

### Production Deployment
```bash
# Build for production
npm run build

# Or use the automated deploy script
npm run deploy
```

### Customization
- **Voice**: Change `voice_id` in `src/components/TechNewsAgent/index.js`
- **Content**: Modify the `agent_prompt` for different personality or topics
- **Styling**: Update `src/components/TechNewsAgent/index.css`

## 🔧 Troubleshooting

**Build Issues?**
- Make sure you're using Node.js 14+
- Run `npm run format` to fix formatting
- Use `npm run dev` for development with legacy OpenSSL support

**API Errors?**
- Verify your API key is correct
- Check you have ElevenLabs Conversational AI access
- Ensure good internet connection

## 🌟 What's Next?

Your agent is configured to deliver engaging tech updates with these topics:
- **AI News**: Latest model releases and capabilities
- **Programming**: Framework updates (React, Next.js, TypeScript)
- **Job Market**: In-demand skills and opportunities

The agent automatically asks permission before sharing updates and maintains a friendly, colleague-like tone throughout the conversation.

---

**Need Help?** Check the full [README.md](README.md) for detailed documentation.

**Built with ❤️ using ElevenLabs AI**