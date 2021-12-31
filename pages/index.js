import Head from 'next/head';
// import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import DeckMenu from '../components/DeckMenu';
import Heading from '../components/Heading';
import { useState } from 'react';
import { decks } from '../fixtures/decks';
import { shuffleDecks } from '../helpers/helpers';

export default function Home() {
  const deckNames = Object.keys(decks);
  const firstDeck = deckNames[0];
  const [shuffledDecks] = useState(shuffleDecks(decks));
  const [currentDeck, setCurrentDeck] = useState(firstDeck);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const updateDeck = (value) => {
    setCurrentDeck(value);
  }

  const updateIndex = () => {
    const nextIndex = currentCardIndex + 1;
    setCurrentCardIndex(nextIndex);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Reading Flashcards</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading level="h1" title="Welcome to Reading Flashcards THing" />
        <Heading level="h2" title="My Decks" />
        <DeckMenu decks={decks} activeDeckName={currentDeck} updateDeck={updateDeck} />
        <Heading level="h3" title={currentDeck} />
        <Card activeDeck={shuffledDecks[currentDeck]} currentIndex={currentCardIndex} updateIndex={updateIndex} />
      </main>
    </div>
  )
}
