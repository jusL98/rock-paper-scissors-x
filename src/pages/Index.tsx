import { useState } from "react";
import { type Choice, getAIChoice, determineWinner } from "@/utils/gameLogic";
import GameChoice from "@/components/GameChoice";
import GameResult from "@/components/GameResult";
import ScoreBoard from "@/components/ScoreBoard";
import ThemeChooser from "@/components/ThemeChooser";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [aiChoice, setAiChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<"player" | "ai" | "tie" | null>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleChoice = (choice: Choice) => {
    if (!isPlaying) return;
    
    setPlayerChoice(choice);
    setIsPlaying(false);
    
    setTimeout(() => {
      const computerChoice = getAIChoice();
      setAiChoice(computerChoice);
      
      const gameResult = determineWinner(choice, computerChoice);
      setResult(gameResult);
      
      if (gameResult === "player") setPlayerScore(prev => prev + 1);
      if (gameResult === "ai") setAiScore(prev => prev + 1);
    }, 1000);
  };

  const handlePlayAgain = () => {
    setPlayerChoice(null);
    setAiChoice(null);
    setResult(null);
    setIsPlaying(true);
  };

  const handleResetScore = () => {
    setPlayerScore(0);
    setAiScore(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="fixed top-4 right-4">
        <ThemeChooser />
      </div>
      
      <h1 className="text-4xl font-mono font-bold mb-12">
        Rock Paper Scissors X
      </h1>
      
      <ScoreBoard playerScore={playerScore} aiScore={aiScore} />
      
      <Button 
        variant="outline" 
        onClick={handleResetScore}
        className="mb-8"
      >
        Reset Score
      </Button>
      
      <div className="flex flex-wrap gap-8 justify-center mb-12">
        {(["rock", "paper", "scissors"] as Choice[]).map((choice) => (
          <GameChoice
            key={choice}
            choice={choice}
            selected={playerChoice === choice || aiChoice === choice}
            onClick={handleChoice}
            disabled={!isPlaying}
          />
        ))}
      </div>
      
      <GameResult result={result} onPlayAgain={handlePlayAgain} />

      <div className="fixed bottom-4 right-4 text-sm font-bold dark:text-white text-black">
        created by x dev
      </div>
    </div>
  );
};

export default Index;