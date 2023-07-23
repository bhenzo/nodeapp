#!/bin/bash
\. "$HOME/.nvm/nvm.sh"
\. "$NVM_DIR/bash_completion"
cd /home/ec2-user/nodeapp
sudo chmod 777 -R .
npm install
npm run build
sudo chmod 777 -R dist

