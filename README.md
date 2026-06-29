# 🪕 Riyaz Tracker — Definitive Codebase & Raga Architecture Documentation

A high-performance, local-first hybrid mobile application engineered for students and practitioners of Hindustani Classical Music. This repository houses the entire frontend architecture, real-time programmatic audio synthesis tools, interactive reference layers, and client-side state management systems.

The production deployment of this repository has passed all certification stages and is officially live on the Google App Store.

---

## 🎯 Deep-Dive Component Architecture

The software is structured using a strict separation-of-concerns model across three core web modules. Every element is customized to translate complex classical Indian music theory into efficient code execution.

### 📁 1. The Interface Layout Layer (`index.html`)
This component maps out the interactive canvas layout and establishes the semantic Document Object Model (DOM) structure.

* **Global Viewport Optimization Container:** Implements mobile meta constraints (`width=device-width, initial-scale=1.0, user-scalable=no`) to completely lock out accidental multi-touch layout pinching, keeping the user interface completely locked and native-feeling.
* **Tactile 13-Note Swar Keyboard Layout:** Renders a full chromatic classical Indian octave interface. Every key is explicitly mapped as an interactive DOM node embedded with target data attributes that trigger specific audio frequencies:
    * *Shuddha Swars (Natural Notes):* Formatted as wide white interactive blocks.
    * *Komal & Teevra Swars (Flat/Sharp Notes):* Positioned as elevated dark matte overlay keys.
* **20-Raga Core Grid Array:** A modular layout interface that dynamically populates profile cards for twenty core ragas. Each card prominently displays critical scale parameters upfront (**Thaat, Vadi, Samvadi, Prahar**) using structured labeling.
* **Micro-Interactivity Control Panel:** Houses the custom input hardware simulation selectors. Features the Master Play/Pause Toggle, a linear Tempo Speed Slider, and a configuration dropdown to shift the runtime sequence engine from standard scale loops into high-speed **Taan** patterns.
* **Modal Checklist Overlay Canvas:** An overlay panel that intercepts user interaction on individual raga tracks. It transitions open to provide interactive practice check-boxes, customized timing milestones, and classical references.

### 🎨 2. Presentation, Fluid Layouts & Micro-Animations (`style.css`)
This stylesheet manages the application's visual depth, tactile response states, and hardware-accelerated presentation layer.

* **GPU-Optimized Core Layouts:** Applies explicit `box-sizing: border-box` normalization alongside `will-change: transform, opacity` triggers. This offloads visual element modifications directly to the mobile device GPU, ensuring consistent 60fps performance inside web views.
* **Responsive Element Adaptation:** Uses dynamic CSS Flexbox and Grid calculations to seamlessly re-proportion keyboard scales and raga layout matrices whether displayed on compact smartphones or widescreen tablets.
* **Tactile Feedback Filters:** Contains style definitions that highlight active keys during playback. Pressed keys receive an immediate color-shifted gradient, and active sequencer tracks pulse with a vibrant glow to give users instantaneous visual confirmation of the rhythm.
* **Smooth Motion Keyframes:** Employs hardware-accelerated `@keyframes` transitions (`cubic-bezier(0.4, 0, 0.2, 1)`) to handle modal slide-overs fluidly without dropping frames.
* **Vocal Practice Dark Mode:** Utilizes a deeply saturated dark-palette background theme specifically tailored to prevent eye strain during long evening or early morning practice sessions (*Ratri & Pratah Riyaz*).

### ⚙️ 3. Audio Synthesis, State Management & Sequencing Engine (`script.js`)
The logical heartbeat of the application. It handles real-time oscillator audio math, timeline data mapping, and local progress retention.

* **Web Audio API Synthesis Pipeline:** Generates sound programmatically on the fly by instantiating a live browser `AudioContext`. When a key is tapped or a sequencer tick fires, it spins up programmatic `OscillatorNode` layers, passing them through custom `GainNode` volume controllers and `BiquadFilterNode` acoustic dampeners.
* **Humanized Vocal Vibrato Matrix:** To mimic the authentic texture of human vocal cords or traditional hand-pumped harmonium bellows, the script injects a microtonal Low-Frequency Oscillator (LFO) set to a steady 5.5 Hz rate, modulating the primary frequency targets by fractions of a semitone.
* **Aaroh & Avroh Automation Parsing:** Reads the specific array sets within the active raga profile to automate note progressions. It computes the precise scale jumps for ascending structures (**Aaroh**) and descending structures (**Avroh**), dynamically masking notes that must be omitted in specific ragas (e.g., dropping *Re* and *Pa* in Malkauns).
* **High-Speed Taan Execution Loop:** Houses the automated phrasing array engine. When the user toggles Taan mode, a custom timing mechanism accelerates note-switching intervals down to a lightning-fast 380 ms per step, forcing the audio engine to fire crisp, rapid-fire scalar runs to help students build agility.
* **Zero-Latency Visual Sync Loop:** Captures the exact millisecond an audio oscillator node fires, flashing an active visual CSS class on the corresponding DOM key element so audio and visuals are perfectly aligned.
* **Local Storage State Persistence Driver:** Implements instant data write pipelines using browser `localStorage`. When a student completes a practice checklist item inside a raga card, the app stores a JSON string locally (`localStorage.setItem('riyaz_progress', JSON.stringify(state))`). This keeps user progress completely intact across reboots without using external cloud servers.

---

## 🗺️ Master Raga Codebase Data Matrix

The following matrix showcases how the core audio engine parses melodic notes, sequencing behaviors, and cultural context variables across the application ledger:

| Raga | Thaat Classification | Aaroh (Scale Ascent) | Avroh (Scale Descent) | Taan Phrasing Pattern | Bollywood Correlation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Yaman** | Kalyan | N' R G M# D N S' | S' N D P M# G R S | N'R-GR-GM#-M#G-M#D-DN-S' | *Jab Deep Jale Aana* |
| **Bhairav** | Bhairav | S r G M P d N S' | S' N d P M G r S | S-r-G-M-P-d-N-S'---S'-N-d-P-M-G-r-S | *Albela Sajan Aayo Re* |
| **Malkauns**| Bhairavi | S g M d n S' | S' n d M g S | S-g-M-d-n-S'---n-d-M-g-S | *Man Tarpat Hari Darshan* |
| **Bhairavi**| Bhairavi | S r g M P d n S' | S' n d P M g r S | S-r-g-M-P-d-n-S'---S'-n-d-P-M-g-r-S | *Mitwa Re Mitwa* |

> *Note: Lowercase (r, g, d, n) represent Komal swars; Uppercase (M#) represents Teevra Ma; Standard uppercase represent Shuddha swars.*

---
