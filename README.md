# Kerkesix.fi

Kerkesix (non-business) organization's web site based on Jekyll. History converted from old CMS-based web sites.

Based on [Skinny Bones Jekyll theme](http://mmistakes.github.io/skinny-bones-jekyll/).

## Local development

See Makefile.

## Deploy to firebase

Deployment is done with Github actions on each push, see .github folder for details. To set this
up create a CI token with `firebase login:ci`, save the output to Github secret FIREBASE_TOKEN.

To build and deploy locally for test purposes do

    make deploy
