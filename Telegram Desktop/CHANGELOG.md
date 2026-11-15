# Changelog

All notable changes to **Impetus Kinetrix** (formerly QronoX Kinetrix).

Releases are numbered **RC** + Roman numerals (RC I, RC II, RC III …).

---

## [RC II] — 2026-11-14

A complete 3D revamp: new car, bridge, driver, road modes and branding.

### ✨ Added

- **Infinity / Traffic road modes** (bottom-left buttons with minimalist icons)
  - **Traffic** cycles checkpoint barrier → traffic light → slow car, with a 10 s cooldown between each, then repeats.
  - Auto-brake stops the car at the white line or behind the slow car, so it never runs a stop.
  - A banner shows what is coming next.
- **Foot cam**: a mini view (top left) of the driver's legs working the pedals. The right foot presses the accelerator and moves across to the brake. It can be hidden and stays hidden after a reload.
- **Live LED dash**: speed in green LEDs (km/h) and odometer in blue LEDs (m), side by side, on a digital cluster.
- **Free look in Driver view**: drag to look around inside the car; tap ⟲ or double-tap to face forward.
- **Loading screen** with a spinning tyre and progress bar.
- **Brand**: MD3 filled tyre logo next to the title.
- **Reflector posts** every 6 m along the bridge, so speed feels right in Driver view.
- **README** rewritten (screenshots, road modes, controls, teaching model, 3D model credits).
- **Screenshots** in `assets/screenshots/` and the README: Intro, Checkpoint Simulation, Traffic Simulation, Summary Avg Speed.
- **CHANGELOG.md** (this file).

### 🔄 Changed

- **Name**: QronoX Kinetrix → **Impetus Kinetrix**, subtitle *Mapping Motion through time*.
- **Car**: FREE Concept Car 004, centre driving seat, spinning wheels, working pedals.
- **Environment**: long suspension bridge over water (Car_ Animation scene, other cars removed). Repeats so the road never ends.
- **Steering wheel**: race wheel (Lamborghini Essenza SCV12).
- **Driver**: Connor RK900, whole body, seated and reclined like a sports-car driver.
  - Hands grip the wheel; fingers wrap the rim.
  - Feet on the pedals.
  - Visible through the windshield in Chase view.
  - In Driver view the camera is his eyes (head hidden); look down to see his body.
- **Footwell**: carpeted floor and walls, sloped toe-board, and a pedal bracket under the dash. Replaces the grid floor and floating pedals.
- **Acceleration**: 4.6 m/s² (0–100 km/h in about 6 s); top speed 38 m/s.
- **Road view**: larger, sharper.
- **Page style**: black background with thin, plain card borders.

### 🗑️ Removed

- Speedometer and odometer cards below the road (now on the in-car LED dash).
- Old toy-like car, interior, hands and scenery.
- Robotic prosthetic leg (replaced by Connor's own legs).

### 🐛 Fixed

- Speedometer and odometer stuck at 0.
- Only one of four wheels spinning.
- Driver's left arm twisted; fingers folding backwards.
- Pedals looking reversed when braking.
- Leg looking cut off in the foot cam.
- Traffic light console warnings (unsupported texture UV sets).
- Foot cam and mode buttons showing empty on devices without 3D support.
- Pedals off-screen on landscape phones.

### 📦 Builds

- **Repo**: `index.html` + `style.css` + `app.js` + `three.min.js` + `GLTFLoader.js` + `assets/models/*.glb`. Needs a web server.
- **Single file**: `Impetus-Kinetrix.html` with every model inside. Runs offline by double-click.

---

## [RC I]

- Original QronoX Kinetrix: distance–time graph driving simulator with accelerator, brake, cruise, marked points, table, journey summary and ghost trip.
