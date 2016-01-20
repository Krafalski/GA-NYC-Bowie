# Episode 7: A New Terminal

A long time ago in a unix environment far, far away, young Jedi padawans who
knew only of desktop software were seduced by the dark side of the Force to
enter… The Terminal.

Follow the instructions below using all the console commands introduced in
Fundamentals, class, or that you find on your own.

## Learning objective
Today we want you to be comfortable traversing your way through a file system using the terminal and keeping markdown notes.
![Terminal image](https://camo.githubusercontent.com/a5b3ba816df436e40d059312f25d388836d8890c/687474703a2f2f706978616261792e636f6d2f7374617469632f75706c6f6164732f70686f746f2f323031332f30372f31332f31332f34312f626173682d3136313338325f3634302e706e67)

## Setup
Work in any directory of your choosing. We will introduce the class repo and official homework submission process tomorrow.


## Completion
Finish all of the parts! In the future we may set reach goals and add bonuses onto the homework, however we decided to go with an easier assignment to help get you acclimated to the course. The main purpose of this assignment is to get you feeling comfortable typing and working inside the terminal.

## Set the Scene

1. Open the **Terminal app**
2. Create a **homework** directory in a sensible location and copy this markdown file in that directory.
3. Rename the file to **solution.md** and open it in your editor. As you work through the assignment you will be filling out this file with the commands you are running.
4. Create a new directory called "**galaxy_far_far_away**" and enter it.
    ```sh
    mkdir galaxy_far_far_away
    ```
5. Create a directory called "**death_star**", and make the following files inside of it: "**darth_vader.txt**", "**princess_leia.txt**", "**storm_trooper.txt**"

    ```sh
    mkdir death_star
    cd death_star
    touch darth_vader.txt
    touch princess_leia.txt
    touch storm_trooper.txt
    ```

6. In "**galaxy_far_far_away**", make a directory named "**tatooine**" and create the following files in it: "**luke.txt**", "**ben_kenobi.txt**"

    ```sh
    cd ..
    mkdir tatooine
    touch tatooine/luke.txt
    touch tatooine/ben_kenobi.txt

    ```

7. Inside of "**tatooine**" make a directory called "**millenium_falcon**", and in it create: "**han_solo.txt**", "**chewbaca.txt**"

    ```sh
    mkdir tatooine/millenium_falcon
    touch tatooine/millenium_falcon/han_solo.txt
    touch tatooine/millenium_falcon/chewbaca.txt
    ```

## Part I

1. Rename "**ben_kenobi.txt**" to "**obi_wan.txt**".

    ```sh
    mv ben_kenobi.txt obi_wan.txt
    ```

2. Copy "**storm_trooper.txt**" from "**death_star**" to "**tatooine**".

    ```sh
    cp death_star/storm_trooper.txt tatooine/
    ```

3. Move "**luke.txt**" and "**obi_wan.txt**" to the "**millenium_falcon**".

    ```sh
    mv luke.txt millenium_falcon/
    mv obi_wan.txt millenium_falcon/
    ```

4. Move "**millenium_falcon**" out of "**tatooine**" and into "**galaxy_far_far_away**".

    ```sh
    mv millenium_falcon/ ..
    ```

5. Move "**millenium_falcon**" into "**death_star**".

    ```sh
    mv millenium_falcon/ death_star/
    ```

6. Move "**princess_leia.txt**" into the "**millenium_falcon**".

    ```sh
    mv princess_leia.txt millenium_falcon/
    ```

7. Delete "**obi_wan.txt**".

    ```sh
    rm obi_wan.txt
    ```

8. In "**galaxy_far_far_away**", make a directory called "**yavin_4**".

    ```sh
    mkdir yavin_4
    ```

9. Move the "**millenium_falcon**" out of the "**death_star**" and into "**yavin_4**".

    ```sh
    mv millineium_falcon/ ..
    mv millineium_falcon yavin_4
    ```

10. Make a directory in "**yavin_4**" called "**x_wing**".

    ```sh
    mkdir x_wing
    ```

11. Move "**princess_leia.txt**" to "**yavin_4**" and "**luke.txt**" to "**x_wing**".

    ```sh
    mv millineium_falcon/princess_leia.txt .

    mv yavin_4/millineium_falcon/luke.txt yavin_4/x_wing/
    ```


## Part II

1. Move the "**millenium_falcon**" and "**x_wing**" out of "**yavin_4**" and into "**galaxy_far_far_away**".

    ```sh
    mv yavin_4/millineium_falcon/ .
    mv yavin_4/x_wing/ .
    ```

2. In "**death_star**", create directories for "**tie_fighter_1**", "**tie_fighter_2**" and "**tie_fighter_3**".

    ```sh
    mkdir death_star/tie_fighter_1 death_star/tie_fighter_2 death_star/tie_fighter_3
    ```

3. Move "**darth_vader.txt**" into "**tie_fighter_1**".

    ```sh
    mv death_star/darth_vader.txt death_star/tie_fighter_1
    ```

4. Make a copy of "**storm_trooper.txt**" in both "**tie_fighter_2**" and "**tie_fighter_3**".

    ```sh
    cp death_star/storm_trooper.txt death_star/tie_fighter_2

    cp death_star/storm_trooper.txt death_star/tie_fighter_3
    ```

5. Move all of the "**tie_fighters**" out of the "**death_star**" and into "**galaxy_far_far_away**".

    ```sh
    mv death_star/tie* .
    ```

6. Explode "**tie_fighters**" 2 and 3.

    ```sh
    rm -r tie_fighter_2
    rm -r tie_fighter_3
    ```

7. Touch a file in "**x_wing**" called "**the_force.txt**".

    ```sh
    touch x_wing/the_force.txt
    ```

8. Destroy the "**death_star**" and anyone inside of it.

    ```sh
    rm -r death_star/
    ```

9. Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".

    ```sh

    mv millineium_falcon/ yavin_4/
    mv x_wing/ yavin_4/

    ```

10. Celebrate.

Already feeling comfortable with these commands and want an extra challenge? Try
doing the following:

* Try applying one command to multiple files at once.
* Try applying one command to **all** files in a single directory (where necessery)
* Try applying one command to **all files that match a pattern**.
* Find and use command line shortcuts.
* Try using a mix of absolute and relative paths.
