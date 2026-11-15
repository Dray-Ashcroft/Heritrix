# Changelog

## 🔸 RC II — 2026-11-14

**A complete 3D revamp:** new car, environment, driver, road modes and branding.

### ✨ Added

- **Road modes:** Infinity and Traffic, selectable from the bottom-left of the road view.
  - **Traffic** cycles through a checkpoint barrier, a traffic light and a slow car, with a 10 s cooldown between events.
  - **Auto-brake** stops the car at the stop line or behind the slow car, so it never runs a stop.
  - An on-screen banner announces the next event.
- **Foot cam:** a mini view of the driver's legs on the pedals. The right foot presses the accelerator and moves across to the brake. It can be hidden, and stays hidden after a reload.
- **LED dash:** speed in green (km/h) and odometer in blue (m) on a digital cluster.
- **Free look:** drag to look around in Driver view; tap ⟲ or double-tap to face forward.
- **Loading screen** with a spinning tyre and progress bar.
- **Branding:** filled tyre logo (Material Design 3) beside the title.
- **Reflector posts** every 6 m along the bridge, for a clearer sense of speed.
- **Documentation:** rewritten README with screenshots, road modes, controls, teaching model and 3D model credits; this changelog.

### 🔄 Changed

- **Name:** QronoX Kinetrix → **Impetus Kinetrix** · *Mapping Motion through time*.
- **Car:** FREE Concept Car 004, with a centre driving seat, spinning wheels and working pedals.
- **Environment:** a suspension bridge over open water that repeats endlessly (Car_ Animation scene, other cars removed).
- **Steering wheel:** Lamborghini Essenza SCV12 race wheel.
- **Driver:** Connor RK900, full body, seated in a reclined sports-car position.
  - Hands grip the wheel; feet work the pedals.
  - Visible through the windshield in Chase view.
  - Driver view sees through his eyes; look down to see his body.
- **Footwell:** carpeted floor and walls, sloped toe-board and pedal bracket under the dash.
- **Physics:** acceleration 4.6 m/s² (0–100 km/h in about 6 s); top speed 38 m/s.
- **Layout:** larger, sharper road view; black background with thin, neutral card borders.
- **Screenshots:** six new screenshots in `assets/screenshots/`.

### 🗑️ Removed

- Speedometer and odometer cards (moved to the in-car LED dash).
- Previous car, interior, hands and scenery.
- Prosthetic leg model (replaced by the driver's own legs).
- Unused images and models from `assets/`.

### 🐛 Fixed

- Speedometer and odometer stuck at 0.
- Only one of four wheels spinning.
- Twisted left arm and backward-bending fingers.
- Pedals appearing reversed when braking.
- Leg appearing cut off in the foot cam; floating pedals; grid-like floor.
- Traffic light console warnings (unsupported texture UV sets).
- Empty foot cam and mode buttons on devices without 3D support.
- Pedals off-screen on landscape phones.

### 📦 Builds

- **Hosted:** `index.html`, `style.css`, `app.js`, `three.min.js`, `GLTFLoader.js` and `assets/`. Requires a web server.
- **Single file:** `Impetus-Kinetrix.html`, with all models embedded. Runs offline.

---

## 🔸 RC I

**Initial release** as QronoX Kinetrix.

- Distance–time graph driving simulator with accelerator, brake and cruise.
- Marked points, data table, journey summary and ghost trip comparison.
