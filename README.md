# Kerkesix.fi

Kerkesix (non-business) organization's web site based on Next.js. History
converted from old CMS-based web sites to Jekyll, and from Jekyll to Next.js..

## Local development

See package.json.

## Deploy to firebase

Deployment is done with Github actions on each push, see .github folder for
details. To set this up create a CI token with `firebase login:ci`, save the
output to Github secret FIREBASE_TOKEN.
