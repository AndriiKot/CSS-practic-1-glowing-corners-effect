function box_size(){
  let max_width = `${screen.width}`;
  let max_height = `${screen.height}`;
  let d = document.querySelectorAll('.box')
  d.forEach (d => {
  d.style.width = max_width / 4.2655+'px';
  d.style.height = max_height / 1.8 +'px';
  d.style.boxShadow = `0 0 0 ${max_width / 4.2655 / 15}px #070c23`
  });
  d = document.querySelector('body')
  d.style.gap = max_width / 6.4 + 'px';
}

