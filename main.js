function box_size(){
  let max_width = `${screen.width}`;
  let max_height = `${screen.height}`;
  let d = document.querySelectorAll('.box')
  d.forEach (d => {
  d.style.width = max_width / 4.2655+'px';
  d.style.height = max_height / 1.8 +'px';
  // d.style.boxShadow = `0 0 0 ${max_width / 4.2655 / 15}px #070c23`
  });
  d = document.querySelector('body')
  d.style.gap = max_width / 6.4 + 'px';

  let body = document.querySelector('body')
  let div = document.createElement('div')
  div.classList.add('box_before')
  div.style.boxShadow = `0 0 0 ${max_width / 4.2655 / 15}px #070c23`
  div.style.content = '""'
  div.style.position = 'absolute'
  div.style.inset = '-3px'
  div.style.background = 'linear-gradient(45deg, #00ccff, #0e1538, #0e1538, #d400d4)'
  div.style.zIndex = "-1"
  

  body.append(div)

}


// .box::before{
//   content: '';
//   position: absolute;
//   inset: -8%;
//   background: linear-gradient(45deg, #00ccff, #0e1538, #0e1538, #d400d4);
//   z-index: -1;
// }


