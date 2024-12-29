import { type Choice } from "@/utils/gameLogic";
import { cn } from "@/lib/utils";

interface GameChoiceProps {
  choice: Choice;
  selected?: boolean;
  onClick: (choice: Choice) => void;
  disabled?: boolean;
}

const GameChoice = ({ choice, selected, onClick, disabled }: GameChoiceProps) => {
  const icons = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
  };

  return (
    <button
      onClick={() => onClick(choice)}
      disabled={disabled}
      className={cn(
        "w-24 h-24 rounded-full bg-secondary",
        "flex items-center justify-center text-4xl",
        "transition-all duration-300",
        "hover:scale-110 active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-primary",
        selected && "ring-2 ring-primary scale-110 animate-bounce",
        disabled && "opacity-50 cursor-not-allowed",
        "animate-fade-in"
      )}
      aria-label={choice}
    >
      {icons[choice]}
    </button>
  );
};

export default GameChoice;