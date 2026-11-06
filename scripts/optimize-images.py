#!/usr/bin/env python3
"""
Turn full-resolution photos into web-ready files for the portfolio.

Usage:
    python3 scripts/optimize-images.py <input_dir> [--category-from-folder]

<input_dir> should contain one sub-folder per category, e.g.
    originals/Wildlife/tiger.jpg
    originals/Street/market.jpg

For every image it writes:
    public/photos/<category>/<slug>.jpg         (long edge 2400px, for the lightbox/hero)
    public/photos/<category>/thumbs/<slug>.jpg  (900px wide, for grids)
and adds/updates an entry in src/data/photos.json. Existing entries (and any
title / featured flags you edited by hand) are kept, so you can run it again
whenever you add new photos.

Requires Pillow:  pip install pillow
"""
import json, os, re, sys
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "photos")
MANIFEST = os.path.join(ROOT, "src", "data", "photos.json")
FULL_EDGE, THUMB_W = 2400, 900


def slugify(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def save(im, path, quality, icc):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    kw = dict(quality=quality, optimize=True, progressive=True)
    if icc:
        kw["icc_profile"] = icc
    im.save(path, "JPEG", **kw)


def process(src, category):
    im = Image.open(src)
    icc = im.info.get("icc_profile")
    im = ImageOps.exif_transpose(im).convert("RGB")  # applies rotation, drops EXIF/GPS
    slug = slugify(os.path.splitext(os.path.basename(src))[0])
    cat = slugify(category)

    full = im.copy()
    full.thumbnail((FULL_EDGE, FULL_EDGE), Image.LANCZOS)
    save(full, os.path.join(OUT, cat, slug + ".jpg"), 82, icc)

    thumb = im.copy()
    if thumb.width > THUMB_W:
        thumb = thumb.resize((THUMB_W, round(thumb.height * THUMB_W / thumb.width)), Image.LANCZOS)
    save(thumb, os.path.join(OUT, cat, "thumbs", slug + ".jpg"), 78, icc)

    return {
        "id": f"{cat}-{slug}",
        "category": category,
        "src": f"photos/{cat}/{slug}.jpg",
        "thumb": f"photos/{cat}/thumbs/{slug}.jpg",
        "width": full.width,
        "height": full.height,
    }


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    in_dir = sys.argv[1]
    manifest = []
    if os.path.exists(MANIFEST):
        with open(MANIFEST) as f:
            manifest = json.load(f)
    by_id = {p["id"]: p for p in manifest}

    for category in sorted(os.listdir(in_dir)):
        folder = os.path.join(in_dir, category)
        if not os.path.isdir(folder):
            continue
        for name in sorted(os.listdir(folder)):
            if not name.lower().endswith((".jpg", ".jpeg", ".png")):
                continue
            entry = process(os.path.join(folder, name), category)
            old = by_id.get(entry["id"])
            if old:
                old.update(entry)  # keep hand-edited title/featured
            else:
                entry["title"] = os.path.splitext(name)[0]
                manifest.append(entry)
                by_id[entry["id"]] = entry
            print("ok", entry["src"])

    os.makedirs(os.path.dirname(MANIFEST), exist_ok=True)
    with open(MANIFEST, "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"{len(manifest)} photos in {os.path.relpath(MANIFEST, ROOT)}")


if __name__ == "__main__":
    main()
