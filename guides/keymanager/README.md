# WebPG Key Manager

## Features

The WebPG Key Manager supports the following features -

* Key Generation (Using gpg backend)
* Key Import/Export (local, keyserver)
* Expiration
* Key Revocation
* Key/UID Signing
* Trust Assignment
* Photo Support


## Key Generation

Key Generation is accessible from the Key Manager, and supports basic and advanced Key generation

### Basic
The default Key generation dialog is rendered with the typical default settings as defined within GnuPG.

### Advanced
The advanced Key generation features can be accessed from the Key generation dialog by expanding the "Advanced Options" link.

The available options allow one to specify -

* Key Type (RSA, DSA and ElGamel)
* Key Size (512-4096, depending on key type)
* Key Expiration

## Key Import/Export

### Local
Public Keys can be imported and exported directly from the WebPG Key Manager interface.

Keys can also be imported/exported via the inline formatting feature when keys are detected on a web page, or alternately via the right-click context-menu.

### Remote
Public Keys can be both retrieved from the currently defined keyserver, as well as published to it.

### Revocation
Public Keys can revoked directly from the "Private Keys" tab by expanding the Key to be revoked, and clicking on "Revoke".

Revocation supports a revocation reason and optional notation.

### Key/UID Signing
Keys can be signed directly from the WebPG Key Manager inteface.

### Trust Assignment
In addition to signing, key trust levels can be selected directly from the Key Manager interface.

### Photo Support
Photos can be added to your own keys and deleted from any public key.
