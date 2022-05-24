export default function DeckMenu(props) {
  const { activeDeckName, decks, updateDeck } = props;
  const deckNames = Object.keys(decks);

  const changeDeck = (deck) => {
    updateDeck(deck);
  }

  const deckClassNames = (deckName) => {
    if (deckName === activeDeckName) return "nav__list-item nav__list-item--active";
    return "nav__list-item";
  }

  const deckList = deckNames.map((deckName, index) => (
    <li key={index} onClick={() => changeDeck(deckName)} className={deckClassNames(deckName)}>
      <span className="nav__bullet-container">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect className="nav__rect-svg nav__rect-svg--bottom" x="17" y="4" width="65" height="92" rx="15" stroke="black" strokeWidth="4" fill="transparent" />
          <rect className="nav__rect-svg nav__rect-svg--middle" x="31" y="4" width="65" height="92" rx="15" stroke="black" strokeWidth="4" fill="transparent" />
          <rect className="nav__rect-svg nav__rect-svg--top" x="3" y="4" width="65" height="92" rx="15" stroke="black" strokeWidth="4" fill="#E0E0F5" />
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