# Shooting Simulator

Website of the **Shooting Simulator** project: a portable, 3D-printed **Rifle-gamepad** and Android apps for training air rifle, small-bore and biathlon shooting at home, at school or in a gym, without ammunition or a shooting range.

**Live site:** https://etsplay.github.io/shootingsimulator/

## About the project

The Rifle-gamepad is a rifle-shaped Bluetooth controller. A smartphone with a gyroscope is mounted on the barrel, and the apps turn the movement of the rifle into aiming on a virtual target.

The simulator helps you to:

- practice using an air or small-bore rifle;
- understand the importance of ergonomic settings during long shooting sessions under stress;
- get used to the trigger sensitivity;
- train muscle memory while looking for the right balance of muscle tension.

### Rifle-gamepad

| Part | Details |
| --- | --- |
| Base | Structural aluminum profile |
| Plastic parts | 3D printing (FDM), PETG |
| Connection | Bluetooth (gamepad) |
| Power | Power bank |

Adjustable elements: stock length, cheek piece height and angle, grip width, trigger position and sight height.

## Apps

| App | Description |
| --- | --- |
| **Olympic SS** (`com.ETs.OlympicSS`) | Air and small-bore rifle simulator with gyroscope aiming and a barrel vibration sensor: hold the rifle so the reading stays green or yellow. |
| **Biathlon SS** (`com.ETs.BiathlonSS`) | Biathlon simulator with a hit-or-miss handler: a shot counts as a hit if more than 80% of the bullet is inside the target. |

Requirements: Android 8 or higher and a smartphone with a gyroscope.

## Beta testing

The apps are available through the Google Play beta program:

1. Get an Android 8+ smartphone with a gyroscope and a Google account.
2. Join the Google group [shooting-simulator@googlegroups.com](https://groups.google.com/d/forum/shooting-simulator).
3. Install Olympic SS and/or Biathlon SS from the beta links on the [Beta page](https://etsplay.github.io/shootingsimulator/beta.html).
4. Get a Rifle-gamepad. It is made to order in Novi Sad, Serbia; the price for the testing program is 8 000 RSD (without a smartphone and power bank).

## Repository structure

```
.
├── index.html          # Home: the simulator and the Rifle-gamepad
├── apps.html           # Olympic SS and Biathlon SS with demo videos
├── beta.html           # Beta testing program
├── contact.html        # Contact
├── privacy.html        # Privacy policy of the apps
├── robots.txt
├── sitemap.xml
├── og-image.png        # Social preview image (1200x630)
├── favicon/            # Icons and web manifest
└── assets/
    ├── css/styles.css  # Styles, light/dark/auto theme
    ├── js/             # Theme switcher, mobile menu, blueprint background
    └── img/            # Images
```

The site is plain static HTML, CSS and JavaScript. There is no build step and no dependencies.

## Run locally

```bash
git clone https://github.com/etsplay/shootingsimulator.git
cd shootingsimulator
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

The site is published with GitHub Pages from the `main` branch. After pushing changes it is available at the live URL above within a minute or two.

## SEO notes

- Every page has its own `title`, `description`, canonical URL, Open Graph and Twitter Card tags.
- Structured data (JSON-LD): `WebSite`, `Person`, `Product`, `SoftwareApplication`, `ContactPage`, `BreadcrumbList`.
- `robots.txt` and `sitemap.xml` are in the repository root. When you add a page, add it to `sitemap.xml` too and update `lastmod` when its content changes.
- Use relative paths for assets: the site lives in the `/shootingsimulator/` subpath on GitHub Pages.

## Privacy

The apps do not collect, store, transmit or process any personal data. Details: [Privacy Policy](https://etsplay.github.io/shootingsimulator/privacy.html).

## Contact

Evgeny Tsitsorin, Novi Sad, Serbia

- Email: ets.playmarket@gmail.com
- LinkedIn: https://www.linkedin.com/in/evgeny-tsitsorin-9547771b6/
- GitHub: https://github.com/etsplay
