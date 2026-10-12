import StampReel from './stamp/StampReel.jsx';
import MobileVideo from './stamp/MobileVideo.jsx';

const params = new URLSearchParams(window.location.search);
const phone = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 600;
// phones get the pre-rendered video (smooth everywhere); add ?live to force the live animation
const useVideo = phone && !params.has('live') && !params.has('render');

export default function App() {
  return <main className="stage">{useVideo ? <MobileVideo /> : <StampReel />}</main>;
}
