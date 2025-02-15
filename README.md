# Next.js 15 Unexpected Counter Behavior

This repository demonstrates a subtle bug in a Next.js 15 application where a counter on the `/about` page continues to increment even after navigating away from and then back to the page.  This is likely due to how React state is managed with `useEffect` and the `setInterval` function.

## Reproduction Steps
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.
5. Observe the counter incrementing.
6. Navigate to `/` (the home page).
7. Navigate back to `/about`.
8. Notice that the counter continues to increment from where it left off, not resetting.

## Solution
The solution involves correctly managing the interval within the `useEffect` cleanup function to ensure it's cleared when the component unmounts or when the dependency changes.