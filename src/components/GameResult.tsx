import { Button } from "@/components/ui/button";

interface GameResultProps {
  result: "player" | "ai" | "tie" | null;
  onPlayAgain: () => void;
}

const GameResult = ({ result, onPlayAgain }: GameResultProps) => {
  if (!result) return null;

  const messages = {
    player: "You win! 🎉",
    ai: "AI wins! 🤖",
    tie: "It's a tie! 🤝",
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8 animate-fade-in">
      <div className="text-2xl font-mono font-bold">
        {messages[result]}
      </div>
      <Button 
        onClick={onPlayAgain}
        className="mt-4 animate-fade-in"
      >
        Play Again
      </Button>
    </div>
  );
};

export default GameResult;