# Homepage Visual Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将首页优化为“深空指挥舱 + 企业级能力矩阵”的品牌体验，同时保留现有内容、路由和 Agent 星图记忆点。

**Architecture:** 继续使用现有 React、Tailwind 与 CSS 动效体系，以少量可复用语义类统一首页表面、区块标题和矩阵单元。重构只覆盖首页展示组件，不改子页面路由或业务链接；自动化测试锁定关键结构，浏览器验收覆盖桌面和移动端。

**Tech Stack:** React 18、TypeScript、Tailwind CSS、Vite、Node test runner、Lucide React

---

### Task 1: Lock the approved visual direction

**Files:**
- Create: `PRODUCT.md`
- Modify: `tests/home-scroll-experience.test.mjs`

- [ ] **Step 1: Add a failing source-level contract test**

断言首页 Hero 暴露 `command-deck`，能力区暴露 `capability-matrix`，并且关键首页区块不再渲染装饰性 glow-orb 文案。

- [ ] **Step 2: Run the test and confirm RED**

Run: `npm test`

Expected: 新增断言因生产组件尚未包含语义结构而失败。

### Task 2: Establish the command-deck visual system

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace violet-heavy tokens with a navy/cyan/limited-violet palette**

增加 `command-deck`、`command-surface`、`status-chip`、`section-kicker` 和 `matrix-cell` 等语义类；收敛圆角、模糊和阴影，并为 reduced motion 保留完整内容。

- [ ] **Step 2: Recompose the hero hierarchy**

将品牌、判断句、可信证据和 CTA 组织为左侧决策区；将 Agent 星图放入右侧运行态面板，显示系统状态与能力节点，不新增营销式说明卡。

- [ ] **Step 3: Simplify navigation chrome**

保留滚动定位、进度与移动菜单行为，去除轨道粒子、强闪烁和多重玻璃效果，强化品牌识别与当前区块状态。

- [ ] **Step 4: Run tests and build**

Run: `npm test`

Run: `npm run build`

Expected: tests pass and Vite build exits 0.

### Task 3: Convert homepage content into enterprise matrices

**Files:**
- Modify: `src/components/PainPoints.tsx`
- Modify: `src/components/WhatWeDo.tsx`
- Modify: `src/components/Technology.tsx`
- Modify: `src/components/Capabilities.tsx`
- Modify: `src/components/Values.tsx`

- [ ] **Step 1: Normalize section headings and spacing**

使用一致的序号、中文标题、短说明与横向状态信息，移除重复英文眉题、装饰圆球、六边形网格和电路角标。

- [ ] **Step 2: Rebuild repeated cards as bordered matrix cells**

用连续边界、行列关系和有限色彩强调组织复杂能力；每个单元保留图标、标题和说明，hover 只做轻微表面变化。

- [ ] **Step 3: Turn capability tabs into a segmented enterprise control**

保持现有四模块切换与图片资产，用更明确的选中状态、内容编号、可信能力标签和稳定图片框架呈现。

- [ ] **Step 4: Run tests and build**

Run: `npm test && npm run build`

Expected: all tests pass and production assets compile.

### Task 4: Visual verification and responsive hardening

**Files:**
- Modify as needed: `src/index.css`
- Modify as needed: homepage components from Tasks 2-3

- [ ] **Step 1: Start the local Vite server**

Run: `npm run dev -- --host 127.0.0.1`

Expected: Vite reports an available localhost URL.

- [ ] **Step 2: Inspect desktop and mobile in the visual companion/browser**

Check at 1440x900 and 390x844: hero framing, navigation, section rhythm, tab interactions, text wrapping, image loading, horizontal overflow, and visible focus states.

- [ ] **Step 3: Apply only evidence-based responsive fixes**

修正真实截图中出现的重叠、裁切、对比度、空白或断点问题，不添加新的装饰层。

- [ ] **Step 4: Run final verification**

Run: `npm test`

Run: `npm run build`

Expected: zero test failures and build exit code 0.

