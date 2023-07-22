#!/bin/bash
cd /home/ubuntu/nodeapp
sudo chmod 777 -R .
npm install
npm run build
sudo chmod 777 -R dist

