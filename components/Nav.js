import NavIcon from './NavIcon';
import DeckMenu from './DeckMenu';

export default function Nav(props) {
  const { activeDeckName, decks, updateDeck } = props;
  return (
    <nav>
      <NavIcon />
      <DeckMenu decks={decks} activeDeckName={activeDeckName} updateDeck={updateDeck} />
    </nav>
  );
}