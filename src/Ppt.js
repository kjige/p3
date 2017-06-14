var pptx = require('pptxgenjs');
var pptx = new PptxGenJS();
var slide = pptx.addNewSlide();

function testSlide(){
  slide.addText(
    'BONJOUR - CIAO - GUTEN TAG - HELLO - HOLA - NAMASTE - OLÀ - ZDRAS-TVUY-TE - こんにちは - 你好',
    { x:0.0, y:0.25, w:'100%', h:1.5, align:'c', font_size:24, color:'0088CC', fill:'F1F1F1' }
  );
  pptx.save('Demo-Simple');
}