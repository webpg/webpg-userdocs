# WebPG Options

## General Options

### Enable Inline formatting of PGP Messages and Keys
  With this option enabled, WebPG will detect PGP message and Keys displayed on pages and render them as an interactive component.

### Always encrypt to your default key in addition to the recipient
  This option automatically adds the users default key to the list of recipients when performing encryption operations. This option is useful to ensure that data encrypted to others can be decrypted with your key as well.
  
##### NOTE: This option affects all instances of GnuPG using the same GnuPG configuration file.

### Enable WebPG GMAIL integration
  This option enables the WebPG provided UI enhancements to the GMAIL web interface. If this option is enabled with GMAIL already loaded in a tab, the tab will need to be reloaded for the option to take effect.

### Automatically Sign outgoing messages in GMAIL
  Automatically enables signing of outgoing messages in GMAIL.

## Advanced Options

### GnuPG home directory
  Provides a way to override the default GnuPG home directory. This option only affects WebPG.

### GnuPG binary
  Provides a way to override the default GnuPG binary. This option only affects WebPG.

### GPGCONF binary
  Provides a way to override the default GPGCONF binary. This option only affects WebPG.

### Keyserver
  Provdes a way to specify the GnuPG keyserver.

##### NOTE: This option affects all instances of GnuPG using the same GnuPG configuration file.
