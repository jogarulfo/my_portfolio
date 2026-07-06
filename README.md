# Portfolio Website — Robotics, AI & Athletics

Single-page portfolio for **Joseph RIGAL**, styled after the Mistral
"Worldwide Hackathon" aesthetic (near-black canvas, cream text, hot-orange
accent, mono labels, dashed rules — see `wordwide_hackathon.css` for reference).

Everything lives in one scrollable `index.html`; `projects.html`,
`athletics.html` and `contact.html` are kept as redirect stubs to the matching
`#anchor` so old links keep working.

## 📞 Contact

- **Email**: joseph.rigal@etu.ec-lyon.fr · jorigal56@gmail.com
- **LinkedIn**: [linkedin.com/in/joseph-rigal](https://www.linkedin.com/in/joseph-rigal-8299192a1/)
- **GitHub**: [github.com/jogarulfo](https://github.com/jogarulfo)
- **X**: [x.com/jogarulfo](https://x.com/jogarulfo)
- **Portfolio**: [josephrigal.com](https://josephrigal.com)

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## ✅ Done

- [x] Restyled to follow the Mistral Worldwide Hackathon look (`wordwide_hackathon.css`)
- [x] Converted to one scrollable single page with anchor nav + scrollspy
- [x] Added abstract geometric SVG illustrations (hero orbit, VIGIE scene)
- [x] Featured project: **VIGIE** — robot safety watchdog, Paris Builds winner (YC × Unaite), earned a YC interview — [repo](https://github.com/TristanLecourtois/robot-safety-watchdog)
- [x] Project: **LeJunior** — vision-guided pick-and-place on SO-101 (YOLO11 + ACT + state machine) — [repo](https://github.com/jogarulfo/lejunior)
- [x] Project: **LeSpectrobot** — non-visual perception via a dragonfly vibration sensor / spectrograms on LeRobot — [repo](https://github.com/jogarulfo/lespectrobot)
- [x] Project (incoming): electromagnet end-effector mod for the SO-101 / LeRobot
- [x] Project (planned): autonomous bin-picker rover (SO-101 + ROS)

## 🔭 Ideas / next

- [ ] Ship real illustrations or renders for each project (currently SVG + one photo)
- [ ] Add a favicon that matches the new dark/orange theme
- [ ] Wire the electromagnet & bin-picker repos once public
- [ ] Bundle the Aspekta font if a license is available (currently substituted with Space Grotesk)
