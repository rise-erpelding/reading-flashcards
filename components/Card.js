export default function Card(props) {
  const { activeDeck, currentIndex, updateIndex } = props;
  console.log(activeDeck);
  console.log(currentIndex);

  const incrementIndex = () => {
    updateIndex();
  }

  return (
    <section>
      <p>Card {currentIndex + 1} of {activeDeck.length}</p>
      <p>{activeDeck[currentIndex]}</p>
      <button onClick={incrementIndex}>Next Card</button>
    </section>
  )
}