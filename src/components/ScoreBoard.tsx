interface ScoreBoardProps {
  playerScore: number;
  aiScore: number;
}

const ScoreBoard = ({ playerScore, aiScore }: ScoreBoardProps) => {
  return (
    <div className="flex gap-8 text-xl font-mono mb-8">
      <div className="flex flex-col items-center">
        <span className="text-sm text-muted-foreground">YOU</span>
        <span className="text-3xl font-bold">{playerScore}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm text-muted-foreground">AI</span>
        <span className="text-3xl font-bold">{aiScore}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;