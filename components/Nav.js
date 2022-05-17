import NavIcon from './NavIcon';
import DeckMenu from './DeckMenu';

export default function Nav(props) {
  const { activeDeckName, decks, updateDeck } = props;
  return (
    <nav className="nav">
      <NavIcon />
      <DeckMenu decks={decks} activeDeckName={activeDeckName} updateDeck={updateDeck} />
      <div className="nav__isolation-layer"></div>
    </nav>
  );
}