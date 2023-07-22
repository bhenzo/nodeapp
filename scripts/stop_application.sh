#!/bin/bash
if screen -list | grep -q "nodeapp"; then
    screen -S nodeapp -X quit
fi