# Kerkesix.fi

Kerkesix (non-business) organization's web site based on Jekyll. History converted from old CMS-based web sites. 

Based on [Skinny Bones Jekyll theme](http://mmistakes.github.io/skinny-bones-jekyll/).

## Local development

See Makefile.

## Deploy to firebase

Deployment is done with Google Cloud Container builder on each push, see cloudbuild.yaml for details. To set this up create
a CI token with `firebase login:ci`, and set up a Cloud Container Builder job with that token.


To build and deploy locally for test purposes do

    make deploy
