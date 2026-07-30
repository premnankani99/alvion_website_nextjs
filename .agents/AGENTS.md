# Custom Rules for Alvion Next Project

- **Platform Previews Format**: When adding or updating Platform Previews in case study templates, NEVER use the default small clickable grid layout. Instead, ALWAYS use the custom 3D rotating carousel slider (as implemented in `landmaark-developer/page.tsx`, `insurx/page.tsx`, and `warehouse-management-system/page.tsx`). You should pass this custom carousel block as the `customPreviews` prop to the `CaseStudyTemplate` component.
