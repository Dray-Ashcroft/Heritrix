<p align="center">
  <img src="assets/banner.png" alt="Heritrix — Pedigree and Mendelian Inheritance Simulator" width="100%">
</p>

<h1 align="center">Heritrix</h1>

<p align="center"><em>Pedigree and Mendelian Inheritance Simulator</em></p>

<p align="center"><a href="https://heritrix.stark-kodex.workers.dev"><strong>Explore Heritrix</strong></a></p>

<p align="center">
  <a href="#about">About</a> ·
  <a href="#screenshots">Screenshots</a> ·
  <a href="#modes">Modes</a> ·
  <a href="#controls">Controls</a> ·
  <a href="#science">Science</a> ·
  <a href="#technology">Technology</a> ·
  <a href="#credits">Credits</a> ·
  <a href="#releases">Releases</a> ·
  <a href="#license">License</a>
</p>

<p align="center"><em>Project dedicated to Lord Vishnu</em></p>

---

## About

An interactive three-generation pedigree that shows how a trait passes through one family under autosomal dominant, autosomal recessive, X-linked recessive and X-linked dominant inheritance. Tap any person for their genotype and how they inherited it, or build your own family with the Custom Cross.

Runs on phones, laptops and classroom smart panels, in light and dark themes.

---

## Screenshots

<table width="100%">
  <tr>
    <td width="25%" align="center">
      <img src="assets/screenshots/01-meet-heritrix.png" alt="Heritrix start screen" width="100%">
      <br><sub><b>1 · Meet Heritrix</b></sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/screenshots/02-autosomal-dominant.png" alt="Autosomal dominant pedigree" width="100%">
      <br><sub><b>2 · Autosomal Dominant</b></sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/screenshots/03-autosomal-recessive.png" alt="Autosomal recessive pedigree" width="100%">
      <br><sub><b>3 · Autosomal Recessive</b></sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/screenshots/04-x-linked-recessive.png" alt="X-linked recessive pedigree" width="100%">
      <br><sub><b>4 · X-Linked Recessive</b></sub>
    </td>
  </tr>
  <tr>
    <td width="25%" align="center">
      <img src="assets/screenshots/05-x-linked-dominant.png" alt="X-linked dominant pedigree" width="100%">
      <br><sub><b>5 · X-Linked Dominant</b></sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/screenshots/06-custom-cross.png" alt="Custom Cross builder" width="100%">
      <br><sub><b>6 · Custom Cross</b></sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/screenshots/07-your-pedigree.png" alt="Custom Cross pedigree chart" width="100%">
      <br><sub><b>7 · Your Pedigree</b></sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/screenshots/08-punnett-squares.png" alt="Punnett squares and probabilities" width="100%">
      <br><sub><b>8 · Punnett Squares</b></sub>
    </td>
  </tr>
</table>

---

## Modes

| Mode | What You See | Gen III Cross (II-4 × II-5) |
|:--|:--|:--|
| **Autosomal Dominant** | Affected in every generation; males and females equally affected | Aa × aa → 50% affected |
| **Autosomal Recessive** | Carrier parents, a skipped generation, an affected child | Aa × AA → 50% carriers |
| **X-Linked Recessive** | Mostly affected males; carrier daughters; no male-to-male transmission | X<sup>A</sup>X<sup>a</sup> × X<sup>A</sup>Y → half of sons affected |
| **X-Linked Dominant** | Affected father passes it to all daughters and no sons | X<sup>A</sup>X<sup>a</sup> × X<sup>a</sup>Y → 50% of each sex affected |
| **Custom Cross** | Pick the parents' and spouse's genotypes; the pedigree updates live | Your own cross, with Punnett squares |

**Concepts:** Mendelian inheritance · dominant and recessive alleles · genotype and phenotype · carriers · sex-linked inheritance · pedigree symbols and numbering · Punnett squares · probability

<details>
<summary><b>Custom Cross</b></summary>

| Step | What Happens |
|:--|:--|
| Choose a pattern | Autosomal dominant, autosomal recessive, X-linked recessive or X-linked dominant |
| Gen I · Parents | Pick the father's and mother's genotypes; Gen II fills with a typical spread of children |
| Gen II · Spouse | Pick the genotype of II-4's spouse; Gen III fills from II-4 × II-5 |
| Tap a child | Step through every genotype the cross allows; changing II-4 updates Gen III |
| Random | Draw a random family from the same parents |
| Punnett squares | Both crosses with genotype and phenotype probabilities |

</details>

<details>
<summary><b>Pedigree symbols</b></summary>

| Symbol | Meaning |
|:--|:--|
| Square · Circle | Male · Female |
| Filled | Affected |
| Half-shaded | Carrier: one recessive allele, unaffected |
| I-1, II-4 … | Generation (Roman numeral) and position, numbered left to right |

</details>

---

## Controls

| Control | Function |
|:--|:--|
| Mode tabs · 1–4 · C | Choose a pattern or Custom Cross |
| Tap a symbol | Genotype, status and inheritance explanation |
| Replay · R | Play the pattern again |
| Pause · P | Pause or resume the animation |
| Speed | 0.5× to 2× |
| Sun / Moon · T | Light or dark theme (remembered) |

---

## Science

<details>
<summary><b>Identifying the pattern</b></summary>

| Pattern | Clues in a pedigree |
|:--|:--|
| Autosomal dominant | Appears in every generation · every affected child has an affected parent · males and females equally affected · Aa × aa → 50% of children affected |
| Autosomal recessive | Can skip generations · unaffected carrier parents (Aa × Aa) have a 25% chance of an affected child · aa × aa → all children affected |
| X-linked recessive | Far more males affected · affected sons usually have carrier mothers · no male-to-male transmission · an affected father passes X<sup>a</sup> to all his daughters |
| X-linked dominant | Affected father → all daughters affected, no sons · affected heterozygous mother → 50% of sons and daughters affected |

</details>

<details>
<summary><b>Monohybrid cross reference</b></summary>

| Cross | Genotypes | Phenotypes |
|:--|:--|:--|
| Aa × Aa | 1 AA : 2 Aa : 1 aa | Dominant trait 3 : 1 · Recessive trait 1 : 3 (affected : unaffected) |
| Aa × aa | 1 Aa : 1 aa | 1 : 1 |
| AA × aa | All Aa | All show the dominant phenotype |
| X<sup>A</sup>X<sup>a</sup> × X<sup>A</sup>Y | X<sup>A</sup>X<sup>A</sup> · X<sup>A</sup>X<sup>a</sup> · X<sup>A</sup>Y · X<sup>a</sup>Y | Recessive: half of sons affected, half of daughters carriers |

Probabilities apply to each child independently, so a small family can differ from the expected ratio.

</details>

---

## Technology

HTML · CSS · JavaScript · No external libraries · Cloudflare Workers

<details>
<summary><b>Project files</b></summary>

| File | Contents |
|:--|:--|
| `index.html` | Page structure |
| `style.css` | Styling, light and dark themes |
| `script.js` | Pedigree animation, inheritance data and Custom Cross logic |
| `assets/banner.png` | README banner |
| `assets/screenshots/` | README screenshots, numbered in display order |

</details>

---

## Credits

| Contributor | Role |
|:--|:--|
| **Sai Prasad**, M.Sc. Agri. Entomology, ASRB NET | Project Designer |
| Claude Opus 5.5 | Development |
| OpenAI Astra 6 | Image Generation |
| Perplexity Sonar 2 | Scientific Reasoning |

<details>
<summary><b>Fonts</b></summary>

| Component | Licence |
|:--|:--|
| IBM Plex Sans · IBM Plex Mono | SIL Open Font License 1.1 |

</details>

---

## Releases

| Release | Title | Date |
|:--|:--|:--|
| RC II | Revamp | 15 Nov 2026 |
| RC I | Initial Release | 07 Jun 2026 |

Full history: [CHANGELOG.md](CHANGELOG.md)

---

## License

Source code: **GNU GPL-3.0** (see [LICENSE](LICENSE)).

<p align="center"><sub>GitHub · Codeberg &nbsp;|&nbsp; Hosted on Cloudflare Workers</sub></p>
