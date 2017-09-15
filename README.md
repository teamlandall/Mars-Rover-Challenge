# Mars-Rover-Challenge

  Instructions: 
  - Develop an api that moves a rover around on a grid.
  - You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
  - The rover receives a character array of commands.
  - Implement commands that move the rover forward/backward (f,b).
  - Implement commands that turn the rover left/right (l,r).
  - Implement wrapping from one edge of the grid to another. (planets are spheres after all)
  - Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover   moves up to the last possible point and reports the obstacle.

# Assumptions

  - Grid is 10x10.

# Solution

Provided a starting position on the grid and a valid input array, the rover will navigate the grid as expected. 

Unit testing with Mocha ensures that as features were added, like grid wrapping and obstacle detection, the previous basic navigation still works.

If the rover drives off the edge of the grid, it picks back up on the opposite side, heading in the same direction, pac man style. 

If the rover encounters an obstacle, it reports back that it can't move forward due to the obstacle.

If the rover completes it's instructions without encountering any obstacles, it returns its final position as an object including x,y coordinates and the direction it is facing. 