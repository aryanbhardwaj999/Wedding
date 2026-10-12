"""Turn your own photos into transparent cutouts for the reel.
  1) put full-length garment photos (jpg/png) in  my-photos/
  2) python scripts/make_cutouts.py
  3) results appear in public/cutouts/<name>.webp  (use the name in src/stamp/stampData.js: { img: '<name>' })
Needs:  pip install "rembg[cpu]" pillow
"""
import glob, os
from PIL import Image
from rembg import remove, new_session

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src, out = os.path.join(root, 'my-photos'), os.path.join(root, 'public', 'cutouts')
os.makedirs(out, exist_ok=True)
sess = new_session('u2net')
files = [f for e in ('jpg', 'jpeg', 'png', 'webp') for f in glob.glob(os.path.join(src, f'*.{e}'))]
if not files:
    print('No photos found in my-photos/')
for f in files:
    im = Image.open(f).convert('RGBA')
    im.thumbnail((1400, 1400))
    cut = remove(im, session=sess)
    bb = cut.getchannel('A').point(lambda v: 255 if v > 40 else 0).getbbox()
    if bb:
        cut = cut.crop(bb)
    if cut.height > 860:
        cut = cut.resize((int(cut.width * 860 / cut.height), 860), Image.LANCZOS)
    name = os.path.splitext(os.path.basename(f))[0]
    cut.save(os.path.join(out, name + '.webp'), 'WEBP', quality=88, method=6)
    print('saved', name)
