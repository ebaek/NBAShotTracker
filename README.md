# NBAShotTracker

## Background and Overview
  ### Motivation: 
  * As an avid NBA fan, I wanted to create a tool to enable other fans to see the shot performance of their   
  favorite players. While the NBA stats website has a plethora of data that includes several variations of the short chart, 
  the goal of creating NBA Shot Tracker was to enable users to see the chronological shot performance of individual players 
  by game. 
  ### High Level Overview: 
  * The NBA Shot Tracker renders an animation of an individual player's shot performance. Users can 
  filter the data by game (game date), range, type of shot, and defending team.    

## Functionality and MVP Features
  ### Basketball Court: 
  * Render the basketball court that reflects the dimensions of an NBA court from the 
  division line (backboard, rim, 3- point arc, baseline) 
  ### Shots: 
  * Render all shots and delineate misses and made through hexagonal binning(d3-hexbin)
  ### Selectors:
  * Search bar includes all NBA players in the 2017-2018 season
  * Dropdown menu includes a list of all defending teams
  * Users can use a horizontal scroll bar to select my game in chronological order 
  * Animate shots: display shots in order that they were taken in the game with Red indicating miss and 
  Green indicating made 
   
## Architecture and Technologies
  * Vanilla Javascript for overall structure and create an interactive menu 
  * D3 library (d3-hex) to render basketball court and shots taken
  * Webpack to bundle scripts into a single source

## Implementation Timeline
    * Day 1: Render the chart using D3
    * Day 2: Plot the shots using D3-hex
    * Day 3: Add selectors for game, team played against
    * Day 4: Add selectors and animate the shots 
    * Day 5: Style
