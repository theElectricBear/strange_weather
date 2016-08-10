***** Howdy Gents and/or Ladies *****

get started:

	clone repo from 
	https://github.com/theElectricBear/strange_weather

	run npm install from directory

	**this is a dev enviornment and does not run off a node server but rather browserfiy 
	**top level server files are included for reference only
	**also data is pulled from a mock json file rather then from the api
	**the live node version taps into the api as can be seen here:
	**  https://polar-gorge-65674.herokuapp.com/


	commands:

    npm run build - compile appp to /dist
    npm run serve - serve app on "http://localhost:3000/"
    npm run serve:dist - serve app from /dist on "http://localhost:3000/" 
    npm run test- single run Karma tests 


    **there are local gulp commands that can have a conflicts when run with the gulp cli
    **please use the npm commands

    **when running tests there are two failing tests. Im fairly fresh when it comes to Karma
    **and did not have time to sort out the testing code before this commit

