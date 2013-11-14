# Prerequisites

* GnuPG
* Key Agent
* gpgconf

#### GnuPG

WebPG Does **not** implement OpenPGP; it merely *extends* it. This means that GnuPG must be installed on the host system in order to use WebPG.

#### Key Agent

WebPG does **not** interact with passphrase collection. A valid key agent is must present to unlock the keyring for private key operations.

#### gpgconf

In order to properly manage GnuPG options, the gpgconf utility must be installed; gpgconf is included in gpg2 for most platforms.

## Windows

WebPG functions best with GnuPG installed via the gpg4win package on windows, which is freely available @ [http://gpg4win.org/](http://gpg4win.org/)

## Mac OSX

For OSX it is recommended that GPGTools be installed, which is freely available @ [https://gpgtools.org/](https://gpgtools.org/)

## GNU Linux (Ubuntu, Fedora, etc.)

The standard system package for GnuPG is suffice (via synaptic, YUM, etc.)
