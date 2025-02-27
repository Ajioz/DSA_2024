const mySortedCard = (card) => {
  const itemRank = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    jack: 11,
    queen: 12,
    king: 13,
    extra: 14,
    sunny: 15,
  };

  const sorted = card.sort(
    (a, b) =>
      itemRank[a.toString().toLowerCase()] -
      itemRank[b.toString().toLowerCase()]
  );
  return sorted;
};
// my example
const cards = [
  "Jack",
  8,
  2,
  2,
  6,
  "King",
  5,
  3,
  "Queen",
  "King",
  "Queen",
  10,
  7,
  "jack",
  "Extra",
  "Sunny",
];

const ajiozCard = mySortedCard(cards);
console.log("Result of sorted card: ", ajiozCard);
