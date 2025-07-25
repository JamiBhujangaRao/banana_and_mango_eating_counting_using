import React, {useState} from 'react'
import axios from 'axios'
import './index.css'

const TechNewsAgent = () => {
  const [agentStatus, setAgentStatus] = useState('inactive')
  const [agentId, setAgentId] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [apiKey, setApiKey] = useState(
    process.env.REACT_APP_ELEVENLABS_API_KEY || '',
  )
  const [message, setMessage] = useState('')

  // Tech news content for the agent
  const techNewsScript = `
Hey, I've got some quick tech updates for you — should I go ahead?

Great! Here's what's happening in tech this week:

In AI news: OpenAI just released some exciting updates to their models, making them even more capable at understanding context and generating human-like responses. There's also been significant progress in AI coding assistants that are helping developers write better code faster.

For programming updates: React 18 continues to gain adoption with its concurrent features, and there's growing excitement around frameworks like Next.js 14 which are making full-stack development more seamless. TypeScript adoption is also at an all-time high.

On the job front: The demand for AI engineers and full-stack developers is skyrocketing. Companies are especially looking for people with experience in machine learning, cloud platforms like AWS and Azure, and modern JavaScript frameworks.

That's your quick tech roundup! Anything specific you'd like me to dive deeper into?
  `

  const createAgent = async () => {
    if (!apiKey.trim()) {
      setMessage('Please enter your ElevenLabs API key')
      return
    }

    setIsCreating(true)
    setMessage('Creating your tech news agent...')

    try {
      const agentConfig = {
        name: 'Tech News Buddy',
        description:
          'A friendly tech-savvy agent that delivers quick updates about AI, programming, and job opportunities in a confident, helpful tone.',
        voice_settings: {
          stability: 0.85,
          similarity_boost: 0.8,
          style: 0.2,
          use_speaker_boost: true,
        },
        conversation_config: {
          agent_prompt: `You are a helpful, tech-savvy friend calling to share quick tech updates. You sound confident and friendly, like a colleague who genuinely wants to help. 

Key traits:
- Friendly and confident tone
- Tech-savvy but explains things clearly without jargon
- Sounds like a helpful colleague, NOT a sales rep
- Keeps updates short, clear, and engaging
- Covers AI, programming, and job opportunities
- Always asks permission before diving into details

Your opening line should always be: "Hey, I've got some quick tech updates for you — should I go ahead?"

Remember: You're a friend sharing cool tech stuff, not selling anything!`,
          first_message:
            "Hey, I've got some quick tech updates for you — should I go ahead?",
          language: 'en',
        },
        voice_id:
          process.env.REACT_APP_DEFAULT_VOICE_ID || 'kdmDKE6EkgrWrrykO9Qt', // Alexandra - A super realistic, young female voice that likes to chat
      }

      const response = await axios.post(
        'https://api.elevenlabs.io/v1/convai/agents',
        agentConfig,
        {
          headers: {
            'xi-api-key': apiKey,
            'Content-Type': 'application/json',
          },
        },
      )

      setAgentId(response.data.agent_id)
      setAgentStatus('active')
      setMessage(
        `Agent created successfully! Agent ID: ${response.data.agent_id}`,
      )
    } catch (error) {
      console.error('Error creating agent:', error)
      setMessage(
        `Error creating agent: ${
          error.response?.data?.detail || error.message
        }`,
      )
    } finally {
      setIsCreating(false)
    }
  }

  const deleteAgent = async () => {
    if (!agentId || !apiKey.trim()) return

    try {
      await axios.delete(
        `https://api.elevenlabs.io/v1/convai/agents/${agentId}`,
        {
          headers: {
            'xi-api-key': apiKey,
          },
        },
      )

      setAgentId(null)
      setAgentStatus('inactive')
      setMessage('Agent deleted successfully')
    } catch (error) {
      console.error('Error deleting agent:', error)
      setMessage(
        `Error deleting agent: ${
          error.response?.data?.detail || error.message
        }`,
      )
    }
  }

  return (
    <div className="tech-news-agent">
      <div className="container">
        <h1>Tech News Agent</h1>
        <p className="description">
          Create an ElevenLabs agent that makes friendly outbound calls with the
          latest tech updates!
        </p>

        <div className="form-section">
          <div className="input-group">
            <label htmlFor="apiKey">ElevenLabs API Key:</label>
            <input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              placeholder="Enter your ElevenLabs API key"
              className="api-input"
            />
          </div>

          <div className="agent-controls">
            {agentStatus === 'inactive' ? (
              <button
                onClick={createAgent}
                disabled={isCreating}
                className="create-btn"
              >
                {isCreating ? 'Creating Agent...' : 'Create Tech News Agent'}
              </button>
            ) : (
              <div className="active-agent">
                <div className="status-indicator">
                  <span className="status-dot active" />
                  <span>Agent Active</span>
                </div>
                <button onClick={deleteAgent} className="delete-btn">
                  Delete Agent
                </button>
              </div>
            )}
          </div>

          {message && (
            <div
              className={`message ${
                message.includes('Error') ? 'error' : 'success'
              }`}
            >
              {message}
            </div>
          )}
        </div>

        <div className="agent-info">
          <h2>Agent Features</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>🎯 Friendly Tone</h3>
              <p>Sounds like a helpful colleague, not a sales rep</p>
            </div>
            <div className="feature">
              <h3>🚀 Tech Updates</h3>
              <p>Latest in AI, programming, and job opportunities</p>
            </div>
            <div className="feature">
              <h3>👩 Female Voice</h3>
              <p>Uses a confident, friendly female voice</p>
            </div>
            <div className="feature">
              <h3>💬 Smart Script</h3>
              <p>
                Always asks permission: "Hey, I've got some quick tech updates
                for you — should I go ahead?"
              </p>
            </div>
          </div>
        </div>

        <div className="sample-script">
          <h2>Sample Script Preview</h2>
          <div className="script-content">
            <p>
              <strong>Opening:</strong> "Hey, I've got some quick tech updates
              for you — should I go ahead?"
            </p>
            <p>
              <strong>Content includes:</strong>
            </p>
            <ul>
              <li>Latest AI developments and model updates</li>
              <li>Programming framework news (React, Next.js, TypeScript)</li>
              <li>Hot job market trends for developers</li>
              <li>Clear, jargon-free explanations</li>
            </ul>
          </div>
        </div>

        {agentId && (
          <div className="agent-details">
            <h2>Agent Details</h2>
            <div className="details-card">
              <p>
                <strong>Agent ID:</strong> {agentId}
              </p>
              <p>
                <strong>Status:</strong> Ready for outbound calls
              </p>
              <p>
                <strong>Voice:</strong> Female, confident and friendly
              </p>
              <p>
                <strong>Purpose:</strong> Tech news updates with colleague-like
                tone
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TechNewsAgent
