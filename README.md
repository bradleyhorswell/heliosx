## About

A simple, extensible consultation form that collects user input for prescribing treatment related to Genovian pear allergies. Built with TypeScript, React, Next.js, and Material UI, with tests using Vitest and React Testing Library.

Live app example at: [https://heliosx-wine.vercel.app/](https://heliosx-wine.vercel.app/)

## Getting Started

### Installation

Tested using Node `v20.19.0`.

```bash
git clone https://github.com/bradleyhorswell/heliosx.git
cd heliosx
npm install
```

### Running locally

Start the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Running tests

Run tests:

```bash
npm run test
```

## Tech Choices

- **Next.js (App Router)** - Bootstrapped from `create-next-app`. I've used Next.js in projects before and appreciate how it's well-suited for scaling into a full web app — features like file-based routing, shared layouts (e.g for a persistent Header/Footer), and SSR out-of-the-box. This app is quite small, so I'm not using these too heavily yet, but Next.js is pretty quick to get setup with, and they're ready to go if and when needed!
- **Material UI (MUI)** - I've been working with MUI (as part of a Design System) recently and like how it gives us some styled, atomic components out-of-the-box to spin up a UI fast. That said, I'm aware of the tradeoffs including a heavier bundle size, tighter coupling to MUI's component APIs, and less flexibility than utility-first CSS approaches like Tailwind.
- **Vitest + React Testing Library** - I initially started out using Jest, but after a bit of config friction getting it to play nicely with Next.js, swapped over to Vitest for faster and simpler testing setup.

## Time Constraint Tradeoffs

To keep the scope focused, a few tradeoffs were made including:

- **State Management** - I went with `useState` for simplicity, something like Redux felt overkill here. A more complex form (with validation, multiple inputs, etc) might benefit from extracting the state into a custom hook or using a form library like Formik with Zod/Yup validation.
- **UX** - With more time I'd consider a few improvements, including:
  - A back/previous button
  - A progress bar instead of "Question 1 of X" text
  - A review answers screen before submission
  - Some graceful error handling and feedback on submit
- **Question Model** - The question data typing is pretty minimal to suit the requirements (no `required` flags, validation, etc) but includes a `type` field as an example placeholder for future extensibility. This could be expanded to support multiple input types based on the backend contract.
- **Submission Logic** - Currently mocked to mimic latency. In a real-world app I'd consider using a data fetching library like SWR to manage API calls — loading/error states, retries, caching, etc.
- **Styling & Design** - Responsive yet kept very minimal, not currently themed or branded outside of MUI's defaults.
- **Tests** - Test coverage is currently light, just a couple working happy path examples for the form. With more time I'd expand the coverage, including any unhappy paths or edge cases and fuller integration testing (e.g with Cypress).
