// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// Ignore the exports because Astro's type checking doesn't apply to TypeScript files.
/**
 * we reexport components from this file so that they can be easily
 * imported in our .md or .mdx pages
 *
 * import { Aside } from "@components"
 */
export { default as CodeSample } from "./CodeSample/CodeSample.astro"
export { default as Address } from "./Address"
export { default as CopyText } from "./CopyText"
export { default as Aside } from "./Aside.astro"
export { default as ClickToZoom } from "./ClickToZoom.astro"
export { default as NetworkTabs } from "./Tabs/NetworkTabs.astro"
export { default as PackageManagerTabs } from "./Tabs/PackageManagerTabs.astro"
export { default as Accordion } from "./Quickstart/Accordion/Accordion.astro"
