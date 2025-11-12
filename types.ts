export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export type YogaDifficulty = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';
