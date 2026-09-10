# DELETE TV Studio

The editor is available at `/studio` and uses the existing season and film schemas.
Sign in with a Sanity account that has access to project `a9m3szg7`.
No API token belongs in the browser or is needed to configure the Studio.

## Local development

Use Node.js 22.12 or newer (required by the installed Sanity version).
Run `npm ci`, set the following in `.env.local`, then run `npm run dev`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=a9m3szg7
NEXT_PUBLIC_SANITY_DATASET=production
```

Open http://localhost:3000/studio.

## Preview and deployment

1. Deploy this branch as a Vercel preview. Keep the current production deployment
   serving traffic until the preview has passed checks.
2. Confirm the two environment variables above are available for Preview and
   Production in Vercel. Use the same dataset as the existing website.
3. In Sanity project settings, under API / CORS origins, allow the exact preview
   origin and `http://localhost:3000` with credentials. For production, allow
   `https://delete-tv.com` and `https://www.delete-tv.com` with credentials.
   Add only origins you control; do not use a wildcard with credentials.
4. On the preview, check the homepage, season pages, and `/studio`. Sign in and
   confirm all 12 seasons appear. Open a season and confirm its Wix Post URL
   field and local image paths load correctly. Preview uses real content:
   publishing there changes the shared production dataset.
5. Promote only after these checks. If necessary, roll back to the previous
   deployment in Vercel; this change does not migrate content.

## Editing

Open Season, choose the season, update Wix Post URL, and click Publish.
The existing public pages use a one-hour revalidation interval, so published
changes may take about an hour and a subsequent page request to appear.
This change leaves that caching behavior intact.
