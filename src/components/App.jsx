import Header from './Header';
import Footer from './Footer';
import Game from './Game';
import '../styles/App.css';

function App() {
  return (
    <main>
      <Header title="Pyshic Memory Deck" />
      <Game />
      <Footer />
    </main>
  );
}

export default App;
