#!/bin/bash
\. "$HOME/.nvm/nvm.sh"
\. "$NVM_DIR/bash_completion"
cd /home/ec2-user/nodeapp/dist
screen -dmS nodeapp node main.js