export default function DeckMenu(props) {
  const { activeDeckName, decks, updateDeck } = props;
  const deckNames = Object.keys(decks);
  const listedDecks = deckNames.map((deckName, index) => (
    <option value={deckName} key={index}>{deckName}</option>
  ));

  const changeDeck = (event) => {
    updateDeck(event.target.value);
  }

  return (
    <div className="nav__menu">
      <label htmlFor="deck-select">Choose a deck:</label>
      <select defaultValue={activeDeckName} name="decks" id="deck-select" onChange={changeDeck}>
        {listedDecks}
      </select>
    </div>
  )
}