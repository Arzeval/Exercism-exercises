
// @ts-check
/**
 * Get the first card in the given deck
 *
 * @param {[]} deck
 *
 * @returns {} the first card in the deck
 */
export function getFirstCard(deck) {
    const [a, ...rest] = deck
    return a
  }
  /**
   * Get the second card in the given deck
   *
   * @param {[]} deck
   *
   * @returns {} the second card in the deck
   */
  export function getSecondCard(deck) {
     const [a, b, ...rest] = deck
    return b
  }
  /**
   * Switch the position of the first two cards in the given deck
   *
   * @param {[]} deck
   *
   * @returns {[]} new deck with reordered cards
   */
  export function swapTopTwoCards(deck) {
     const [a, b, ...rest] = deck
    const array = [b, a, ...rest]
   return array
  }
  /**
   * Put the top card of the given deck into a separate discard pile
   *
   * @param {[]} deck
   *
   * @returns {[, []]} the top card of the given
   * deck and a new deck containing all the other cards
   */
  export function discardTopCard(deck) {
     const [a, ...rest] = deck
      const array = [a,[ ...rest]]
      return array
  }
  /** @type {Card[]} **/
  const FACE_CARDS = ['jack', 'queen', 'king'];
  /**
   * Insert face cards into the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card[]} new deck where the second,
   * third, and fourth cards are the face cards
   */
  export function insertFaceCards(deck) {
    
    if (deck.length === 0) {
      return [undefined, ...FACE_CARDS];
    } else {
      deck.splice(1, 0, ...FACE_CARDS);
      return deck;
    }
  }