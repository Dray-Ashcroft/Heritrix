<h1 align="center">Changelog</h1>

<p align="center"><em>Heritrix · Pedigree and Mendelian Inheritance Simulator</em></p>

<p align="center">
  <a href="#rc-ii--revamp">RC II</a> ·
  <a href="#rc-i--initial-release">RC I</a>
</p>

---

## Release Summary

| Release | Title | Date | Focus |
|:--|:--|:--|:--|
| RC II | Revamp | 15 Nov 2026 | New interface, light theme, live Custom Cross, genetics and notation fixes *(current)* |
| RC I | Initial Release | 07 Jun 2026 | Four inheritance patterns on a three-generation pedigree |

---

## RC II · Revamp

*15 Nov 2026 · Current release*

**Added**
- Light theme: sun/moon button or T key; follows the device setting on first visit and is remembered
- Live Custom Cross: pick the parents and spouse, and Gen II and Gen III fill in as the pedigree updates
- Tap any child in the Custom Cross to step through the genotypes the cross allows; changing II-4 updates Gen III
- Random family: draws a new set of children from the same parents
- Pedigree IDs (I-1, II-4, III-2 …) under every symbol
- Empty start: opens on a neutral pedigree until a pattern is chosen

**Changed**
- Centred heading, one row of mode tabs, chart with replay / pause / speed, one side panel
- Custom Cross moved to the side panel as a family tree; Punnett squares collapsed by default
- All four pattern descriptions rewritten for accuracy, with superscript genotypes (X<sup>a</sup>)
- Grey labels, names and hints brightened in both themes
- Pedigree fits phone screens; short tab labels (AD, AR, XLR, XLD)
- Split into `index.html`, `style.css` and `script.js`

**Fixed**
- Carriers never showed their half-shading; now drawn as the standard vertical half for both sexes
- Gen II and Gen III were numbered out of order (II-1, II-3, II-4, II-2); now left to right
- Autosomal recessive: the II-4 × Spouse panel showed the grandparents' cross (25/50/25); now Aa × AA → 50% carriers
- Custom Cross showed the mother's genotype as II-4's
- Custom Cross labelled Gen II probabilities as "Gen I"
- Custom Cross gave all same-sex siblings an identical genotype; now a typical spread
- The opening demo was cancelled on load, leaving an empty chart with no explanation

**Repository**
- README in the standard format, with numbered screenshots in `assets/screenshots/` (26 Nov 2026)
- New banner built from the app's own screens (26 Nov 2026)

---

## RC I · Initial Release

*07 Jun 2026*

**Added**
- Three-generation pedigree with animated inheritance
- Autosomal dominant, autosomal recessive, X-linked recessive and X-linked dominant modes
- Genotype pop-up for every person, with an explanation of how they inherited it
- Custom Cross with Punnett squares
- Offspring probabilities for the Gen III cross

---

<p align="center">
  <a href="README.md">README</a> · <a href="LICENSE">License (GPL-3.0)</a>
</p>
