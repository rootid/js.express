.PHONY: node_dep_install start_server 

node_dep_install :
	echo @"Installing dependency"
	npm install --save express
	npm install --save express3-handlebars

start_server :
	node server.js
