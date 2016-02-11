# Node + npm = fun

    < Let's do some node >
     --------------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||


## Cowsay
`cowsay` is one of the most important applications in the toolbox of a code artisan.

1. Find the docs for `cowsay` on npm and read through them.

2. Install `cowsay` globally on your machine.
```javascript
npm install -g cowsay
```
This gives you access to a command line application `cowsay` which you can use from your terminal.

3. Make the cow say things. Try out `cowthink`, and make the cow wonder about the meaning of life, the universe and everything.

4. Make a new directory in classwork called `my-cow`. Navigate to it and install `cowsay` locally.
```javascript
npm install cowsay
```

5. This will create a directory in your current working directory called `node_modules` and inside of it you will have your `cowsay` module. Explore the code, and try to get an idea of how `cowsay` is actually built.

6. Create your own command-line application `mycow.js` inside the `my-cow` directory which takes one command line argument, which is a string.
- If the string ends with `...`, make the cow think the string.
- If not, make the cow say the string.

*HINT* You will need to require the `cowsay` module you installed locally.

7. Make `mycow` be able to use any number of command line arguments.

## Chalk

8. Now install `chalk` (another npm module). Use it to log to the console some very colorful description of your breakfast this morning. (If you didn't have any go get some oatmeal right now!)

9. Take this array
```javascript
                  ``          
    ```

Log to the console each name in a random color. **Bonus** Arrange the names alphabetically.

**BONUS**

Research how to make your own npm module.

Initialize your `package.json`, and include cowsay and chalk as dependencies. Dig through the `cowsay` module and use chalk to

1. make the eyes of the cow red.

2. add an extra option to cow to always say moo at the end.
