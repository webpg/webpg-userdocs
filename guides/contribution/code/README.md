# Contributing Code

## License
WebPG is an open source project; we gladly accept contributions by way of bug fixes, features and improvements.

The license associated with WebPG is the GNU General Public License (GNU GPL) v2

## Language
WebPG is has two distinct parts

* WebPG browser extension (JavaScript)
* WebPG binary interface to GnuPG (C/C++)

## Source Code
The source code for WebPG and it's components are stored in GIT repositories served by [github.com](https://github.com/webpg)

## Workflow
The typical workflow for WebPG is **_fork_** -> **_branch_** -> **commit** -> **_push_** -> **_create pull request_**

## Coding Conventions
The following are guidelines used for code submission

* No global variables (all variables should exist in appropriate class or the base [`webpg`](#!/api/webpg) class
* Indentation of 2 spaces (no tabs)
* Line length 78 cols or less (except comments)
* Verbose comments
* Prefer "===" over "=="
* Method parameters should be aligned
* Features should be tested in all supported browsers & host operating systems
* Whenever possible, methods used in multiple pages should exist in [`webpg.utils`](#!/api/webpg.utils) scope
* Methods/objects should be documented inline using [JSDuck](https://github.com/senchalabs/jsduck/wiki#wiki-syntax) format
* New features are great (**_awesome)**, even!), but open bugs are priority

## Attribution
At this time, attribution to contributors is (optionally) published in the about page of the WebPG extension.

Attribution is not limited to code contribution; those who become sponsors, perform extensive testing, write documentation and provide translations or bug reporting are also recognized.
