Svg_Product_Designer
========================

Compact Version of Angular Product Designer

##Coding Convention
Please make sure you go through the coding convention and adhere to the convention without fail. Please follow the changes to the wiki.
https://github.com/riaxe/product_designer/wiki/Coding-Conventions

##Initial Setup
###Required 
  - Git(http://git-scm.com/download/win)
  - NodeJS(http://nodejs.org/)
  - Tortoisegit(Optional)(https://code.google.com/p/tortoisegit/wiki/Download?tm=2)
 
###Installation
 
- Make sure you install all the required package. While installing keeping mind you check the option to access from windows command prompt.
- Go to command prompt and run  "npm install -g grunt-cli"
- Make sure you have create your own git account.
- Go to git and and clone the product designer project.(https://github.com/riaxe/product_designer)
- Go to your project directory(root where you find gruntfile.js) using command prompt
- run "npm install"
- Follow the Host Setup mentioned below to set up development host.
- make changes to the file run "grunt app". This will merge all the js and css files and put it on 'clientapp' dir and open the  project url in 'http://dev.inkxe.com:3333'. I made it to open in default browser.
- You need to run grunt app when you pull a latest build on git.
- If you do any changes to any files then it will be automatically concatenated and merged.
- To stop the server open command prompt and press 'Ctrl+C' and then put 'Y' for confirmation.

###Host Setup
###Mac
To get started, launch Terminal, type the following command, and press Return. As with all sudo commands, you’ll need to also enter your admin password to execute it:

sudo nano /private/etc/hosts

You’ll now see the hosts file open in the Nano editor. To navigate and edit the file, use the arrow keys on your keyboard.

Add this line to the end of host file -   127.0.0.1	dev.inkxe.com


When you’re done making changes, press Control-X to exit the editor, Y to save, and Return to overwrite the existing hosts file. M
(OPTIONAL) 

Make sure to flush your DNS cache if you notice that your new mappings aren’t working properly.

OS X Lion and OS X Mountain Lion
sudo killall -HUP mDNSResponder

Mavericks
dscacheutil -flushcache; sudo killall -HUP mDNSResponder

##Windows

  - Go To  c:\windows\system32\drivers\etc\
  - Copy the hosts file to desktop and edit the file
  - Add this line to the end of host file -   127.0.0.1	dev.inkxe.com
  - Save the file.
  - Copy the edited file from your desktop and paste in inside c:\windows\system32\drivers\etc\
  - Click YES to overwrited and contue for overwrite confirmation.

###Help


    - http://git-scm.com/doc
    - http://gruntjs.com/getting-started
    - https://docs.angularjs.org/tutorial/step_00)

