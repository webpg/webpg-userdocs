# Writing User Guides/Documentation

The WebPG User Guides/Documentation is sourced from Markdown files.

You can contribute the documentation via either the GitHub website, or from a [local copy of the userdocs repository](#using-a-local-repository).

## Using the GitHub website

For the examples used in this guide, I will be using the user-guide name as "mytopic"

### Overview of steps

- Fork the userdocs repository
- Create a branch for your edits
- Make edits
- Submit a pull request

### Fork the repository

Using the browser, go to the github.com repository [https://github.com/webpg/webpg-userdocs][ghr]

And then click on the "Fork" button in the top right -

{@img fork.png Fork Button}

### Create a branch for your edits

Click on the "branch: master" button, which will display a dropdown - type in the name for your branch (i.e. mytpic-docs or mytopic-fixes) and then click on the "Create branch: *mytopic-docs*" button.

{@img branch-name.png Branch Name}

### Make edits

#### Editing Existing Items
If you are editing an existing guide, simply navigate to the desired guide and click on the README.md file. Once there, you will have an "Edit" button at the top of the file display. Simply make your edits using the Markdown format, and optionally view the formatting by clicking on "Preview" at the top of the editor. Once you are satisfied with the Markdown, enter a "Commit Message" at the bottom and click on "Commit Changes".

#### Creating New Items
To create a new item, first navigate to the "guides" directory, near the top with the "branch: *mytopic-docs*" button it should say "webpg-userdocs / guides / [+]" &lt;- click on the [+]

You will now be able to type a file-path and name. Enter "mytopic/README.md" (*case sensitive*)

Change the "Indent Mode" to "Spaces" and the "Indent Size" to "2", and begin writing your guide in Markdown format.

{@img new-file.png New File}

Once you are done, enter your commit message and click on "Commit New File".

{@img commit-new-file.png Commit New File}

### Submit a pull request

Once you have completed your edits or new guide, simply go back to the base of the repository and click on "Compare & pull request"

{@img compare-review.png Compare and Pull Request}

Optionally edit the commit message(s) and click on "Send pull request"

{@img pull-request.png Pull Request}

The webpg-userdocs repository owners will be notified about your request, and they will review it and merge it if accepted.

## Using a local repository

Coming soon!

[ghr]: https://github.com/webpg/webpg-userdocs  "webpg/webpg-userdocs"
