# Advanced/Alternate Installations

## Type of installation
There are a variety of ways to install WebPG, each one providing a different desired effect.

## Webstore install
The typical method is to install WebPG via the "webstore" provided by each respective browser (for example, the chrome webstore)

This is the default/typical install, and it is subject to the following pros/cons -

#### Pros
* Fast, easy installation
* Some review/enforcement of coding standards (vetting)

#### Cons
* Some posit that such online repositories are a likely target for DNS spoofing/hijacking to install malicious code
* Updates/Versions can lag behind official WebPG releases (due to the review process)

The process for installing WebPG using the various online webstore repositories is noted [here](#!/guide/installation)

## Manual installation
Manual installation of WebPG is merely a means to install the WebPG extension with all updates coming from the official WebPG Website (https://webpg.org)

This method of installation ensures the most up-to-date version is automatically installed when new versions are released.

#### Pros
* Updates to the latest version automatically
* Ensures security and bug fixes are distributed quickly
* Shorter release cycle

#### Cons
* Code is not "blessed off" by online webstore repository (however, code is still vetted by the WebPG development community)
* Some browsers may not currently (or in the future) support manual installation

The process for installing WebPG using the manual installation method is noted [here](#!/guide/installation_manual)

## Offline Version
The offline version of WebPG is designed to never update itself or make requests to online resources except the configured key server.

This is helpful in cases where one requires a controlled environment, are without internet access, are only authorized intranet access, require a specific version/feature or need to vet/audit code used in the specific extension version.

#### Pros
* Codebase does not change automatically (predictability/forced stability)
* Can be distributed manually or via third-party automation (domain script, etc.)
* Does not make queries/requests to online resources (casual surveyors cannot identify you as a WebPG user)

#### Cons
* Users will not receive automatic updates (bug/security fixes or new features)
* Support for outdated versions may require monetary compensation (as it removes focus from primary development)

The process for installing WebPG using the manual installation method is noted [here](#!/guide/installation_offline)

## Development Version
The development version of WebPG is the very cutting-edge of release cycles. It is mostly designed for developers to use for implementation of new features or to distribute for testing.

The development version is what all release versions are based off of.

#### Pros
* Great for development/testing
* Automatically updates via the webpg.org update server

#### Cons
* Changes often (sometimes, very often)
* May include various features (new and old) that are in an interim state (read: broken)
* Not well tested (depending on the development stage)

The process for installing WebPG using the manual installation method is noted [here](#!/guide/installation_development)
