import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const app = readFileSync(new URL("../src/App.tsx", import.meta.url), "utf8")
const hero = readFileSync(new URL("../src/components/Hero.tsx", import.meta.url), "utf8")
const capabilities = readFileSync(new URL("../src/components/Capabilities.tsx", import.meta.url), "utf8")
const customers = readFileSync(new URL("../src/components/Customers.tsx", import.meta.url), "utf8")
const cta = readFileSync(new URL("../src/components/CTA.tsx", import.meta.url), "utf8")
const css = readFileSync(new URL("../src/index.css", import.meta.url), "utf8")

test("home uses one fixed meteor backdrop and scroll-depth sections", () => {
  assert.match(app, /function HomeBackdrop\(\)/)
  assert.match(app, /function HomeScrollSection\(/)
  assert.match(app, /<StarrySky \/>/)
  assert.match(app, /data-home-section/)
  assert.doesNotMatch(hero, /<StarrySky \/>/)
})

test("the legacy tech grid is disabled on the home route", () => {
  assert.match(app, /!isHome && <TechGrid \/>/)
})

test("scroll depth motion has a reduced-motion fallback", () => {
  assert.match(css, /\.home-cosmos/)
  assert.match(css, /\.home-scroll-section/)
  assert.match(css, /prefers-reduced-motion: reduce[\s\S]*\.home-scroll-section/)
})

test("home scrolling avoids per-frame section layout work", () => {
  const starrySky = readFileSync(new URL("../src/components/StarrySky.tsx", import.meta.url), "utf8")

  assert.doesNotMatch(app, /addEventListener\("scroll"/)
  assert.doesNotMatch(app, /getBoundingClientRect\(\)/)
  assert.match(starrySky, /home-meteor/)
  assert.doesNotMatch(css, /\.home-scroll-section\s*\{[^}]*filter:/s)
})

test("stars twinkle independently on a throttled canvas", () => {
  const starrySky = readFileSync(new URL("../src/components/StarrySky.tsx", import.meta.url), "utf8")

  assert.match(starrySky, /twinkleSpeed/)
  assert.match(starrySky, /twinkleOffset/)
  assert.match(starrySky, /FRAME_INTERVAL = 1000 \/ 24/)
  assert.match(starrySky, /Math\.min\(720,/)
  assert.match(starrySky, /requestAnimationFrame\(draw\)/)
  assert.doesNotMatch(starrySky, /home-star-twinkle/)
  assert.doesNotMatch(css, /home-star-twinkle/)
  assert.match(css, /\.home-meteor--one\s*\{[^}]*animation-duration:\s*16s/s)
  assert.match(css, /\.home-meteor--two\s*\{[^}]*animation-duration:\s*22s/s)
})

test("home exposes the approved command deck and enterprise capability matrix", () => {
  assert.match(hero, /data-visual-direction="command-deck"/)
  assert.match(capabilities, /data-visual-direction="capability-matrix"/)
  assert.match(css, /\.command-deck/)
  assert.match(css, /\.capability-matrix/)
})

test("the homepage closes with one deployment matrix and a command-style CTA", () => {
  assert.match(customers, /data-visual-direction="deployment-matrix"/)
  assert.match(cta, /data-visual-direction="command-cta"/)
  assert.match(css, /\.deployment-matrix/)
  assert.match(css, /\.command-cta/)
})
