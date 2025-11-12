import React, { useState, useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatMessage, YogaDifficulty } from './types';
import { sendMessageToGemini } from './services/geminiService';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<YogaDifficulty>('All');

  // Initialize a greeting message when the app loads
  useEffect(() => {
    const greeting: ChatMessage = {
      id: uuidv4(),
      text: "Hello! I'm your AI Yoga Assistant. Ask me anything about yoga, poses, philosophy, or meditation! You can also filter pose suggestions by difficulty level below.",
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages([greeting]);
  }, []); // Empty dependency array means this runs only once on mount.

  const handleSendMessage = useCallback(async (text: string) => {
    setIsLoading(true);
    setApiError(null); // Clear previous errors

    const newUserMessage: ChatMessage = {
      id: uuidv4(),
      text: text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    try {
      // Check if API key is selected before attempting to send message
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await window.aistudio.openSelectKey();
        // If the user cancels the key selection, hasSelectedApiKey might still return false
        const keyAfterSelection = await window.aistudio.hasSelectedApiKey();
        if (!keyAfterSelection) {
            throw new Error("API key not selected. Please select an API key to continue.");
        }
      }

      // Pass the selected difficulty level to the Gemini service
      const botResponseText = await sendMessageToGemini(text, selectedDifficulty);

      const newBotMessage: ChatMessage = {
        id: uuidv4(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    } catch (error: unknown) {
      console.error('Failed to send message:', error);
      let errorMessage = 'An unexpected error occurred.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setApiError(`Error: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [selectedDifficulty]); // Re-run useCallback if selectedDifficulty changes

  const difficultyLevels: YogaDifficulty[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-xl">
      <header className="p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md text-center">
        <h1 className="text-2xl font-bold">🧘‍♀️ Yoga Chatbot 🧘‍♂️</h1>
        <p className="text-sm mt-1 opacity-90">Your AI assistant for all things yoga.</p>
      </header>

      <div className="p-2 bg-gray-50 border-b border-gray-200 flex justify-center space-x-2 flex-wrap text-sm">
        {difficultyLevels.map((level) => (
          <button
            key={level}
            onClick={() => setSelectedDifficulty(level)}
            className={`px-3 py-1 rounded-full transition-colors duration-200 ${
              selectedDifficulty === level
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {apiError && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded mx-4 mt-4 animate-fadeIn">
          <p className="font-semibold">Oops! Something went wrong:</p>
          <p className="text-sm">{apiError}</p>
          <p className="text-xs mt-1">Please ensure your API key is correctly selected and try again. For billing information, visit <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="underline text-blue-800 hover:text-blue-600">ai.google.dev/gemini-api/docs/billing</a>.</p>
        </div>
      )}

      <ChatWindow messages={messages} isLoading={isLoading} />
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;
