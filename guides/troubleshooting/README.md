# Troubleshooting

## SELinux

If you have SELinux enabled in your system, it may prevent WebPG from working correctly. You can check SELinux status through the following command:

    sestatus

As output, you're supposed to see something like:

SELinux status:                 enabled  
SELinuxfs mount:                /sys/fs/selinux  
SELinux root directory:         /etc/selinux  
Loaded policy name:             targeted  
Current mode:                   permissive  
Mode from config file:          enforcing  
Policy MLS status:              enabled  
Policy deny_unknown status:     allowed  
Max kernel policy version:      29  

Nowadays, current versions of most GNU/Linux distributions have SELinux (some not enabled by default, though).

Sometimes, SELinux will prevent something from working correctly withou warning you, but most of the times you will get some sort of notification. If your Desktop Environment is GNOME, try pressing together Super+m. A hidden toolbar will pop up and you may see SELinux icon informing what happened and how you can solve it.

What you will probably be informed is about a protection against browser plugins. If your browser is Mozilla Firefox, to command SELinux to allow WebPG to work correctly, you should type as *root* in your terminal:

    setsebool -P unconfined_mozilla_plugin_transition 0

SELinux may also prevent GPG from writing to some directory. You should check SELinux logs in order to know exactly what should be done, but it will probably be something like:

    grep gpg /var/log/audit/audit.log | audit2allow -M mypol  
    semodule -i mypol.pp

To see SELinux alerts [that may have gone unheard of], run the following command:

    sealert -s
