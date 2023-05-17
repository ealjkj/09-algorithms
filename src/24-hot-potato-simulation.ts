import { Queue } from "./utils/queue";

export function hotPotatoTurn(
  players: string[],
  num: number,
  queue: Queue<string>
) {
  for (let player of players) {
    queue.enque(player);
  }

  for (let i = 0; i < num; i++) {
    const currentPlayer = queue.dequeue();
    if (!currentPlayer) return;
    queue.enque(currentPlayer);
  }
}

export function hotPotato(players: string[], min = 1, max = 0) {
  const queue: Queue<string> = new Queue();
  while (queue.length > 1) {
    const num = Math.floor(Math.random() * (max - min) + min);
    hotPotatoTurn(players, num, queue);
  }

  // Returns the winner
  return queue.dequeue();
}
