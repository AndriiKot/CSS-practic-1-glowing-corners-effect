function box_size(){
  let max_width = `${screen.width}`;
  let max_height = `${screen.height}`;
  let d = document.querySelectorAll('.box')
  d.forEach (d => {
  d.style.width = max_width / 4.2655+'px';
  d.style.height = max_height / 1.8 +'px';
  })
}

