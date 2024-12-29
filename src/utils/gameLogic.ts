export type Choice = "rock" | "paper" | "scissors";

export const getAIChoice = (): Choice => {
  const choices: Choice[] = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

export const determineWinner = (playerChoice: Choice, aiChoice: Choice): "player" | "ai" | "tie" => {
  if (playerChoice === aiChoice) return "tie";
  
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  
  return winConditions[playerChoice] === aiChoice ? "player" : "ai";
};