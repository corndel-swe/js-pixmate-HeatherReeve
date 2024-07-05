// chalk allows us to change output color :)
import chalk from 'chalk'

// start with an empty line
let line = ''
line += chalk.blue.italic.bgBlue('**p**')
// use a loop to add stuff to the line
for (let i = 1; i <26; i++) {
  // some conditionals to produce a pattern
  if (i % 2 == 0) {
    line += chalk.yellow.underline('x')
  } else {
    line += ' - '.repeat(1)
  } { 
    line += chalk.greenBright('*'.repeat(2))
  }
}

// one more 'green bead' on the end!
line += chalk.blue.bold.bgWhite('p**')





console.log(line)
