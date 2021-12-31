export default function Card(props) {
  const { activeDeck, currentIndex, updateIndex } = props;

  const incrementIndex = () => {
    updateIndex();
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
        <button>Play again</button>
      </section>
    );
  }
}