export default function Card(props) {
  const { activeDeck, currentIndex, updateIndex, reShuffleDecks } = props;

  const incrementIndex = () => {
    updateIndex();
  }

  const shuffleDecks = () => {
    reShuffleDecks();
  }

  if (currentIndex < activeDeck.length) {
    return (
      <section>
        <p>Card {currentIndex + 1} of {activeDeck.length}</p>
        <p>{activeDeck[currentIndex]}</p>
        <button onClick={incrementIndex}>Next Card</button>
      </section>
    );
  } else {
    return (
      <section>
        <p>All done!</p>
        <button onClick={shuffleDecks}>Play again</button>
      </section>
    );
  }
}