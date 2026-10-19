(function(){
  var sky=document.getElementById('sky');
  var colors=['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#f2c14e','#e76fd0','#4da3ff'];
  var n=Math.round(sky.offsetHeight/14)||120;
  var frag=document.createDocumentFragment();
  for(var i=0;i<n;i++){
    var s=document.createElement('span');
    var size=2+Math.random()*2;
    s.className='spark';
    s.style.width=s.style.height=size+'px';
    s.style.left=(Math.random()*100)+'%';
    s.style.top=(Math.random()*100)+'%';
    var c=colors[Math.floor(Math.random()*colors.length)];
    s.style.background=c;
    s.style.opacity=c==='#ffffff'?(.4+Math.random()*.4):.7;
    s.style.animationDelay=(-Math.random()*4)+'s,'+(-Math.random()*14)+'s';
    s.style.animationDuration=(3+Math.random()*3)+'s,'+(10+Math.random()*8)+'s';
    frag.appendChild(s);
  }
  sky.appendChild(frag);

  document.querySelectorAll('[data-more]').forEach(function(b){
    b.addEventListener('click',function(){
      var el=document.getElementById(b.dataset.more);
      el.hidden=!el.hidden;
      b.setAttribute('aria-expanded',String(!el.hidden));
    });
  });

  function copyText(btn,text,el){
    var label=btn.textContent;
    function done(m){btn.textContent=m;setTimeout(function(){btn.textContent=label},1600)}
    function sel(){if(!el){done('copy failed');return}var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);done('selected')}
    try{navigator.clipboard.writeText(text).then(function(){done('copied')},sel)}catch(e){sel()}
  }
  document.getElementById('copy-ca').addEventListener('click',function(){var t=document.getElementById('ca-text');copyText(this,t.textContent,t)});
  document.getElementById('copy-credit').addEventListener('click',function(){var t=document.getElementById('credit-text');copyText(this,t.textContent,t)});
  document.getElementById('share').addEventListener('click',function(){copyText(this,'https://linktr.ee/bbgm21e8',null)});
})();
