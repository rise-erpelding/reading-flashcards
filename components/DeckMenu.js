export default function DeckMenu(props) {
  const { activeDeckName, decks, updateDeck } = props;
  const deckNames = Object.keys(decks);

  const changeDeck = (deck) => {
    updateDeck(deck);
  }

  // activeDeckName will be used to make the active deck look different in the menu

  const deckList = deckNames.map((deckName, index) => (
    <li key={index} onClick={() => changeDeck(deckName)} className="nav__list-item">{deckName}</li>
  ));

  return (
    <div className="nav__menu">
      <ul className="nav__list">
        {deckList}
      </ul>
    </div>
  )
}