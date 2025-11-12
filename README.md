<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Yoga Recommender Chatbot

## Project Description

An intelligent AI-powered yoga assistant chatbot built with React and TypeScript that provides personalized yoga recommendations, pose guidance, and meditation advice. The application leverages Google's Gemini AI to deliver contextual responses about yoga practices, philosophy, and wellness techniques.

## Project Objectives

- Create an interactive chatbot interface for yoga enthusiasts
- Provide personalized yoga pose recommendations based on difficulty levels
- Offer guidance on yoga philosophy and meditation practices
- Implement real-time AI-powered conversations using Google Gemini API
- Build a responsive and user-friendly chat interface
- Enable difficulty-based filtering for yoga poses (Beginner, Intermediate, Advanced)

## Tools Used and Their Usage

| Tool/Technology | Usage in Project |
|----------------|------------------|
| **React 19.2.0** | Frontend framework for building the user interface and managing component state |
| **TypeScript** | Type-safe development with static typing for better code quality and debugging |
| **Vite** | Fast build tool and development server for modern web applications |
| **Google Gemini AI** | AI service for generating intelligent responses to yoga-related queries |
| **UUID** | Generating unique identifiers for chat messages |
| **CSS/Styling** | Custom styling for chat interface and responsive design |
| **Node.js** | Runtime environment for package management and development |

## Project Details

### Key Features Implemented:

**1. Chat Interface**
- Real-time messaging system with user and bot message distinction
- Message history with timestamps
- Loading states during AI response generation
- Error handling for API failures

**2. AI Integration**
- Connected to Google Gemini API for intelligent responses
- Context-aware conversations about yoga topics
- Personalized recommendations based on user queries

**3. Difficulty Filtering**
- Dropdown selection for yoga pose difficulty levels
- Filters: All, Beginner, Intermediate, Advanced
- Dynamic content adaptation based on selected difficulty

**4. Component Architecture**
- `App.tsx`: Main application component managing state and message flow
- `ChatWindow.tsx`: Displays conversation history and messages
- `MessageInput.tsx`: Handles user input and difficulty selection
- `types.ts`: TypeScript interfaces for type safety

**5. Service Layer**
- `geminiService.ts`: Handles API communication with Google Gemini
- Environment variable management for API keys
- Error handling and response processing

### Application Flow:
1. User opens the application and receives a greeting message
2. User can select difficulty level and type yoga-related questions
3. Messages are sent to Gemini AI for processing
4. AI responses are displayed in the chat interface
5. Conversation history is maintained throughout the session

## Project Conclusion and Learning Outcomes

### What Was Accomplished:
- Successfully built a functional AI chatbot specifically for yoga guidance
- Implemented real-time chat functionality with proper state management
- Integrated Google Gemini AI for intelligent, context-aware responses
- Created a clean, responsive user interface with TypeScript for type safety
- Developed a modular component architecture for maintainability

### Key Learning Points:
1. **AI Integration**: Learned how to integrate and work with Google Gemini API for conversational AI
2. **React State Management**: Gained experience with complex state management for chat applications
3. **TypeScript Implementation**: Enhanced skills in type-safe development and interface design
4. **Component Architecture**: Developed understanding of modular React component design
5. **API Error Handling**: Implemented robust error handling for external API calls
6. **User Experience Design**: Created intuitive chat interface with loading states and feedback

### Technical Skills Developed:
- Advanced React hooks usage (useState, useCallback, useEffect)
- TypeScript interface design and implementation
- API integration and asynchronous programming
- Modern build tools (Vite) configuration
- Environment variable management for secure API key handling

This project demonstrates the successful integration of modern web technologies with AI services to create a specialized, domain-focused chatbot application.

---

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key

3. Run the app:
   ```bash
   npm run dev
   ```

View your app in AI Studio: https://ai.studio/apps/drive/1QkdIFFIBwn2TWml4cKT5f_4XLf8zE7-0
