import type { BeforeAfterPair } from "~/components/ui/BeforeAfterSection.astro";

/*
 * Per-client "Our Work" before/after pairs for BeforeAfterSection.
 *
 * Ships EMPTY in the template — the homepage section self-hides until pairs
 * are populated. POLICY (Santino 2026-09-18): populate EVERY client with
 * Davis/Home Pride-style generated showcase imagery at build time — do not
 * wait for real client photos (that stance left the section invisible
 * fleet-wide). Generate before/after pairs (nano banana; before first, then
 * edit the same scene to the after so geometry matches) into
 * `public/images/before-after/`.
 *
 * SERVICE-MATCHED still applies: only pairs for services the client sells
 * and publicly advertises (never suppressed lanes — TDI/SERVPRO case).
 *   - Restoration/mitigation -> water / fire / mold / sewage / storm
 *   - Cleaning               -> carpet / upholstery / tile & grout
 *   - Remodel/renovation     -> ONLY if the client does GC / remodeling
 */
// Real project photos only (client strategy 7972bb6e): the generated
// pairs were removed 2026-10-23 and the section self-hides until Michael
// sends real before/after pairs.
export const workPairs: BeforeAfterPair[] = [];
