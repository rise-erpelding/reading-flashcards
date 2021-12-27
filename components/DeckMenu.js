export default function DeckMenu(props) {
  const { activeDeck, decks } = props;
  console.log(activeDeck);
  console.log(decks);
  const deckNames = Object.keys(decks);
  console.log(deckNames);
  const listedDecks = deckNames.map((deckName, index) => (
    <li key={index}>{deckName}</li>
  ));
  return (
    <ul>
      {listedDecks}
      {/* <li>Red Sight Words (15 cards)</li>
      <li>Red Sight Words - All (25 cards)</li>
      <li>Capital Letters - (26 letters)</li>
      <li>Lowercase letters (26 letters)</li> */}
    </ul>
  )
}