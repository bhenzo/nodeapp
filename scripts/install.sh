#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
cd /home/ec2-user/nodeapp
sudo chmod 777 -R .
/home/ec2-user/.nvm/versions/node/v16.20.1/bin/npm install
/home/ec2-user/.nvm/versions/node/v16.20.1/bin/npm run build
sudo chmod 777 -R dist

