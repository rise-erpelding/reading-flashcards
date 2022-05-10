export default function DeckMenu(props) {
  const { activeDeckName, decks, updateDeck } = props;
  const deckNames = Object.keys(decks);

  const changeDeck = (deck) => {
    updateDeck(deck);
  }

  // activeDeckName will be used to make the active deck look different in the menu

  const deckList = deckNames.map((deckName, index) => (
    <li key={index} onClick={() => changeDeck(deckName)} className="nav__list-item">
      <span className="nav__bullet-container">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="17" y="4" width="65" height="92" rx="15" stroke="black" strokeWidth="4" fill="transparent" />
          <rect x="31" y="4" width="65" height="92" rx="15" stroke="black" strokeWidth="4" fill="transparent" />
          <rect x="3" y="4" width="65" height="92" rx="15" stroke="black" strokeWidth="4" fill="#E0E0F5" />
        </svg>
      </span>
      {deckName}
    </li>
  ));

  return (
    <div className="nav__menu">
      <label htmlFor="nav-button" className="nav__button--x">
        <span className="nav__icon nav__icon--x">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="25%" y1="75%" x2="75%" y2="25%" stroke="white" strokeWidth="4" />
            <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="white" strokeWidth="4" />
          </svg>
        </span>
      </label>
      <ul className="nav__list">
        {deckList}
      </ul>
    </div>
  )
}