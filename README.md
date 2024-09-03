# CRL-Wilson-4

## Info
### Setup

Every time I format my computer I have a little list of software / tools I need to install for my web dev job.

- VS Code
- Git / Git Bash
- GitHub Desktop (not mandatory, we can install it later in the path)
- Node.js
- Google Chrome (Mozilla is nice to have as well)
- Other than that, I make sure I have access to :

- My professional email
- My GitHub account
- My Trello/Atlassian account

And finally, in my BeCode activities, I need access to :

- The Discord Becode server for our digital classroom.
- The Github classroom for our assignments.
- The Moodle platform for our course.
So now let's make sure everything is set for you! (if you don't understand yet what some of those things are, worry not ! We will get there very soon)

Text Editors Vs IDE's
To keep things simple: IDE's are just Text editors with extra features.

IDE stands for Integrated Development Environment. In other words it's a tool that give developers the environment in which they can work.

Just imagine a normal text writing tool or text editor, but with options to run programs or scripts, test those, access folder structures, see live changes, formatting text automatically, ...

There are a lot of different IDE's or text editors out there. Most of them are build for specific programming languages, but some are universally usable.

We will focus on more web oriented editors: VS Code (or WebStorm).

Visual Studio Code
VS Code is actually a more universal Text editor, technically it's not an IDE but with the amound of extensions you can install, it is very often considered one. In short you can build your VS Code to your own needs with the help of extensions.

A screen capture or image of a Visual studio code window with the extension tab open on the left

VS Code is a free open source code editor developed by Microsoft that can be used with a variety of programming languages. It allows the installation of very useful extensions.

I don't want to tell you to use it but… use it ! (Of course, if you have another preference go ahead )

## Why VS Code? 

Pro's
VS Code is a perfect example of how open source tools can be flexible. When you open a newly installed VS Code, it will only have the bare minimums to work with. It will then be up to you to add usefull extensions to create your personal "ideal" environment.

Con's
Since it's open sourced, it also relies a lot on voluntary maintenance, which is not a problem for most bigger extensions and the tool itself, but you should always be carefull when adding extensions, check if it is still maintained or actively used.

Install VS Code

JetBrains - WebStorm
Jetbrains is an organisation known for it's very good IDE's and some other tools. One of them is WebStorm, an IDE for web based (javascript) programming languages. There is also it's counter part PHPStorm for web based (PHP) languages, but is not yet relevant now... (maybe later if you choose to work with PHP)

Although they are not free, with the student packs given by us (on github, a platform we will introduce later in this exercise), you will be able to install/use all JetBrain tools for free during the training.

A screen capture of a Webstorm IDE window with the explorer menu, also known as the file tree, open on the left side.


IDE's like WebStorm still have the option to install extensions, but are generally more "complete" for gerenal use and require less plugins or extensions.

Why WebStorm?
Pro's
More dedicated support to the tools often mean that they are more stable and will be less "buggy". It requires less setup on installation, and is often "ready to use" from the start.

Con's 
There is less "freedom" in setting up your personal prefferences. There are also less extensions available. 

Installing software and tools: Git & Git Bash


Git and Git Bash
"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency". It's crucial to every developer day-to-day. We'll deep dive into it very soon, but for now, make sure GIT is installed on your computer.

During the training we will be using git as our version control manager. There are others like subversion, but git seems to be the most popular at the moment.

You can read more about both of them here:

git
subversion
 

Instructions
Like with all tools in your computer, please make sure that your operating system does not come already with the package/tool installed. This is done by doing:

git --version  # gives me the version of git on my OS if there's one installed
git version 2.39.2 (Apple Git-143)  # you will see something else depending on your OS (I have a Mac OS so I see this.)
 
If you don't see git version <version_of_git_on_my_pc> please continue with the other steps. If you already have git installed on your pc. Then, congratulations you already finished this section 😄.

Linux
Write each line below into a terminal. Do it one by one to make it easier on yourself to resolve problems.

It might be possible you have to enter your password.

sudo apt-get update # gathers the information of the pkgs to upgrade via `apt-get` which is the pkg manager for linux

sudo apt-get upgrade # upgrades the said pkgs found with `apt-get update`

sudo apt-get install git # installs git

git --version # to verify that it was correctly installed.
 
Mac
NOTE: Mac OS already comes with git installed via Xcode. So you might not need to do this. Check with git --version to see if it's already installed.

If it is not installed then follow the steps below:

Write each line below into a terminal. Do it one by one to make it easier on yourself to resolve problems.
It might be possible you have to enter your password.

# Installs homebrew (package manager for Mac OS). Read more about homebrew here <https://brew.sh/>;
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

# Install git
brew install git

# to verify that it was correctly installed.
git --version
 
More on: https://git-scm.com/download/mac

Windows
Follow the instructions here: https://git-scm.com/download/win



## Installing software and tools: Node JS


Node JS
"Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine", it allows us to run javascript outside of the browser (blablabla…). We will use it for a BUNCH of things ! Install the latest LTS version from node's website.



Google Chrome
Google Chrome has probably the best developer's tools for the web. Mozilla Firefox is pretty good as well. Another alternative is to install Brave, a Chrome-based browser that respects your privacy more.

Don't hesitate to install all of them so we can do cross-browser testing later on.

Install Chrome here

Setting up accounts: Email


Professional email
OK, there are no rules here. But I strongly recommend you to get a Gmail account in order to have access to the Google Suite and be able to login directly into some other services with this email. Just make sure your email does't look like fluffyAngelXXX957@gmail.com

Make it professional !
