import './App.css';
import Header from './Components/Header'
import Twitch from './Components/Twitch';

function App() {
  return (
    <div className="App">
        <Header/><br/>
        <p>
          moria dnd pog
        </p>
        <Twitch/>
        <p>It is the springtime of year 1376: the human nobles of Winhall pamper a new child-king, the dragonborn politicians of Medamia negotiate new treaties, the Boron Empire continues to wage small skirmishes on their borders, the dragons prevail over the Ignan Mountains, and the merchants of Marzel try to bring unity to all through the power of gold, but more importantly than any of that, adventures roam all across the lands, hunting monsters, exploring ruins, collecting ancient relics, and much more.</p>
        <p>An era of peace upon the world is causing a large influx of adventurers, many having grown up unhappy with the typical life of a farmer, town guard, or another mundane lifestyle. Adventurer guilds are handing out jobs like crazy, as every noble and merchant would rather hire a lowly adventurer than pay for an experienced mercenary. Whether you're a wizard wanting to plunder magical secrets from ancient tombs, a paladin searching for glory under your god, or a wannabe hero looking to make a name for yourself, become an adventurer. The current economy is all based around adventurers, so its best to get to work.</p>
    </div>
  );
}

export default App;
