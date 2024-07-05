let width = 5 

 for (let row = 1; row <= width; row++) {
  let line = ''

  for (let col = 0; col < row; col++) {
    line += '*'
  
  } 
  console.log(line)
}




// make an outer loop for the rows
for (let row = width; row > 1; row--) {
  // make a new empty line for each row
  let line = ''

  // now make an inner loop to add things to the line
  for (let col = 1; col < row ; col++) {
    line += '*'
  }

  // each time the inner loop has finished, print the line
  console.log(line)
}