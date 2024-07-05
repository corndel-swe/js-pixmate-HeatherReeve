let width = 1 
let height = 5

 for (let row = 0; row < height; row++) {
  let line = ''
 for (let col = 0; col < height ; col++) {
    if (row === col) {
     line += '*'
    }else { 
      line += ' '
    }
  
  } 
  console.log(line)
}
