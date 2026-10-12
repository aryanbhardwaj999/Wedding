import Reel from './components/Reel.jsx';
import StampReel from './stamp/StampReel.jsx';

// default: the stamp reel. Add ?v=classic for the earlier street-scene reel.
const classic = new URLSearchParams(window.location.search).get('v') === 'classic';

export default function App() {
  return <main className="stage">{classic ? <Reel /> : <StampReel />}</main>;
}
