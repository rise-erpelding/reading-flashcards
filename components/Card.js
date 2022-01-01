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
      <section className="card">
        <p className="card__number">Card {currentIndex + 1} of {activeDeck.length}</p>
        <p className="card__content">{activeDeck[currentIndex]}</p>
        <button className="card__button--cta" onClick={incrementIndex}>Next Card</button>
      </section>
    );
  } else {
    return (
      <section className="card">
        <p>All done!</p>
        <button className="card__button--cta" onClick={shuffleDecks}>Play again</button>
      </section>
    );
  }
}