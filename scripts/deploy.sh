#!/bin/bash

# Tech News Agent Deployment Script
# This script builds and prepares the application for deployment

set -e

echo "🚀 Starting Tech News Agent deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create production build
echo "🔨 Building production version..."
npm run build

# Create deployment package info
echo "📋 Creating deployment info..."
cat > build/deployment-info.txt << EOF
Tech News Agent - Production Build
Built on: $(date)
Node version: $(node --version)
npm version: $(npm --version)

To deploy:
1. Upload the contents of the 'build' folder to your web server
2. Configure your web server to serve the index.html file
3. Ensure your ElevenLabs API key is properly configured

For more information, see README.md
EOF

echo "✅ Build completed successfully!"
echo "📁 Production files are in the 'build' directory"
echo ""
echo "Next steps:"
echo "1. Set up your environment variables (.env file)"
echo "2. Upload the build folder to your hosting provider"
echo "3. Configure your domain and SSL certificate"
echo ""
echo "🎉 Your Tech News Agent is ready for deployment!"