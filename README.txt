PROJECT: Earthquake Visualizer
AUTHOR: Abby Tabas
DATE: 11/25/23

PROJECT DESCRIPTION:
--------------------------------------------------------------------------------------------------------------------------------------
-This project displays all earthquakes that have occurred in the past year in the United States
-It animates through the year, adding dots for each earthquake according to its date
-Uses CesiumJS and provided earthquake data in KML format

RUNNING THE PROJECT:
-------------------------------------------------------------------------------------------------------------------------------------
-This uses a Node.js server that uses axios and express, these dependencies are included in the package.json file
-The project can be run by simply opening the index.html file to run in a browser, or through Node
-Install Node if not already installed
-Navigate to the project folder, then install the neccesary packages by running the command: "nmp i"
-Start the server by navigating to the app folder and running the command: node server.js
-Navigate to the url http://localhost:3000 to view the project


USING THE PROJECT
-------------------------------------------------------------------------------------------------------------------------------------
-The animation will center the camera's view on the United States, and then begin running through the year, adding points to locations
where earthquakes have happened
-The user can click on a point to view information about the earthquake
-The project implemets a building layer and map label layer so that users can identify key locations and archetecture in relation 
to earthquake locations