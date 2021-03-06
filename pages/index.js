/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
// import Image from 'next/image'
import Nav from '../components/Nav';
import Card from '../components/Card';
import Heading from '../components/Heading';
import { useState, useEffect } from 'react';
import { decks } from '../fixtures/decks';
import { shuffleDecks } from '../helpers/helpers';
import Header from '../components/Header';

export default function Home() {
  const deckNames = Object.keys(decks);
  const firstDeck = deckNames[0];
  const [shuffledDecks, setShuffledDecks] = useState(decks);
  const [currentDeck, setCurrentDeck] = useState(firstDeck);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  // allows us to shuffle the decks without a hydration error
  // https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => setShuffledDecks(shuffleDecks(decks)), []);

  const reShuffleDecks = () => {
    setShuffledDecks(shuffleDecks(decks));
    setCurrentCardIndex(0);
  }

  const updateDeck = (value) => {
    setCurrentDeck(value);
  }

  const updateIndex = () => {
    const nextIndex = currentCardIndex + 1;
    setCurrentCardIndex(nextIndex);
  }

  const toggleDisplayMenu = () => {
    const currentMenuState = showMenu;
    setShowMenu(!currentMenuState);
  }

  return (
    <div>
      <Head>
        <title>Reading Flashcards</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400&family=Montserrat+Alternates:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav decks={decks} activeDeckName={currentDeck} updateDeck={updateDeck} />
      {/* <DeckMenu decks={decks} activeDeckName={currentDeck} updateDeck={updateDeck} /> */}

      <main className="main">
        <Header></Header>
        <Heading level="h1" title={currentDeck} />
        <Card activeDeck={shuffledDecks[currentDeck]} currentIndex={currentCardIndex} updateIndex={updateIndex} reShuffleDecks={reShuffleDecks} />
      </main>
    </div>
  )
}
