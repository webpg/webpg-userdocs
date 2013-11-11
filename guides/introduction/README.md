# Introduction to WebPG

## What is WebPG

WebPG is a suite of tools to provide GnuPG/PGP cryptography to the browser.

## Supported Systems

WebPG is currently supported on Linux, OSX and Windows, and supports the following browsers/applications:

- Chrome/Chromium
- Mozilla Firefox
- Mozilla Seamonkey
- Mozilla Thunderbird

More application support coming soon!

## Features

- Public/Private Key management
  - Key Generation (Using gpg backend)
  - Key Management (subkeys, user IDs, photos)
  - Key Revocation
  - Trust Management
  - Key/UID Signing
  - Public Key Import/Export (local, keyserver)
- Encryption (Public Key and Symmetric)
- Decryption (Public Key and Symmetric)
- Digital Signing (Data and Keys/UIDs)

## Security

While every attempt is made by the development team to create a stable and secure product, there are some considerations to keep in mind.

#### Stability/Bugs

WebPG has support for multiple operating systems in multiple browsers/mail applications; this will inevitably result in some bugs/issues.
Please be patient with the development process and keep in mind that resolving issues is predicated on time and availability.

Additionally, the development team does not have the means to test WebPG on every possible combination of operating system, application and system configuration -- so we need **you**! Letting us know when there is an issue is key to getting the issue resolved; if you don't report bugs/problems, we don't always know about them.

#### Security Considerations

WebPG is not intended to make the browser or the host operating system more secure, and can only add a marginal layer of security for the data exchanged using this tool. WebPG is designed as a utility to protect against passive attempts to obtain personal/confidential information and is only as secure as the weakest vulnerability within the host browser, operating system or the application itself.

The original design intent of WebPG is to provide seamless verification and decryption of PGP data on the web, and provide tools to easily create, manage and verify PGP Keys with a comprehensive, in-browser Key Manager.

#### Security of Keyring(s) and Private-key Operations

The underlying module that provides access to GnuPG/PGP operations was designed to protect the user from malicious operations that may be attempted from an external source.

This is accomplished by implementing of the following:

- WebPG *never* attempts collect a passphrase from the user directly
- Operation that requires access to the private keyring is deferred to the key agent
- The module that interacts with GnuPG is isolated from the rest of the browser, and can only be accessed via the extension whenever possible
- The codebase used is freely available for audit/review
- The GnuPG module supports using a non-default GnuPG keyring location for optionally separating the system keyring(s) from the ones used online
- Exporting of GnuPG Private Keys is disabled

## Getting Help

Help is available in a variety of forms - please visit the [webpg.org support page][1]

[1]: https://webpg.org/?view=support
