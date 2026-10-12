// Phones play the pre-rendered video of the reel (same look, zero animation work for the phone).
export default function MobileVideo() {
  return (
    <div className="reel">
      <video className="mv" src="/reel.mp4" autoPlay loop muted playsInline preload="auto" />
    </div>
  );
}
