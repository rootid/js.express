.PHONY: node_dep_install start_server 

node_dep_install :
	echo @"Installing dependency"
	npm install --save express

start_server :
	node server.js
