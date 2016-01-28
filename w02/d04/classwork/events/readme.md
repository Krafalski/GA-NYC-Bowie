### Game 1

You are given a starter html file with four boxes. Implement the following game functionality using javascript.

1. When the mouse enters any of the boxes change its background color to `green`
2. When the mouse leaves a box change its background color back to `none`
3. When you click on a box it locks its color to green. HINT: You probably need to remove some event listeners ([mdn](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener))
4. When all boxes are checked green make them flash red 3 times and then clear the background color. HINT: Look at either [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval), or [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)


### Game 2
Modify your previous game so that the boxes need to be clicked in a particular order.

1. Generate an array with the numbers `[1, 2, 3, 4]` in a random order. This will determine the order in which you need to click the boxes.
2. The boxes start with no background color.
3. When you hover over a box it should turn green if it is the next one that needs to be clicked and turn red if it is not.
4. When a correct box is clicked it should flash once and then stay green
5. Clicking on an incorrect box should flash red once then stay red until the mouse leaves it.
6. When all boxes are green make them flash!
