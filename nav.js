
(function(){
  var A = window.__ACTIVE__ || '';
  var NAV = [
    {label:'How It Works', href:'how-it-works.html', slot:'how-it-works'},
    {label:'Source Cars', slot:'source-cars', panel:[
      {t:'link', label:'Source Cars Overview', href:'source-cars.html', head:true, sub:'see both lanes'},
      {t:'lane', label:'Run it yourself', tone:'l1'},
      {t:'link', label:'Software', href:'software.html'},
      {t:'link', label:'The Path to Purchasing™', href:'path-to-purchasing.html'},
      {t:'link', label:'Integrations', href:'integrations.html'},
      {t:'lane', label:'Let VAN run it', tone:'l2'},
      {t:'link', label:'Managed Buyer Program', href:'managed-buyer-program.html'},
      {t:'link', label:'Acquisition Coaches', href:'acquisition-coaches.html'},
      {t:'bridge', label:'Hiring vs. Outsourcing a Buyer', href:'hiring-vs-outsourcing.html', sub:'Which lane is right for your store?'},
      {t:'proof', label:'See a Dealer Win →', href:'customers.html'}
    ]},
    {label:'Pricing', href:'pricing.html', slot:'pricing'},
    {label:'Customers', href:'customers.html', slot:'customers'},
    {label:'Resources', slot:'resources', panel:[
      {t:'link', label:'Resource Center', href:'resources.html'},
      {t:'link', label:'Case Studies', href:'case-studies.html'},
      {t:'link', label:'Guides', href:'guides.html'},
      {t:'link', label:'How to Buy FSBO Cars', href:'how-to-buy-fsbo-cars.html'},
      {t:'link', label:'Blog', href:'blog.html'},
      {t:'link', label:'FAQs', href:'faqs.html'}
    ]}
  ];
  function row(r){
    if(r.t==='lane') return '<div class="lane '+r.tone+'"><span class="ld"></span>'+r.label+'</div>';
    if(r.t==='bridge') return '<a class="prow bridge" href="'+r.href+'"><b>'+r.label+'</b><small>'+r.sub+'</small></a>';
    if(r.t==='proof') return '<a class="prow proof" href="'+r.href+'">'+r.label+'</a>';
    return '<a class="prow'+(r.head?' head':'')+'" href="'+r.href+'">'+r.label+(r.sub?'<small>'+r.sub+'</small>':'')+'</a>';
  }
  var menu='';
  NAV.forEach(function(it){
    var on = it.slot===A ? ' active':'';
    if(it.panel){
      menu+='<div class="nav-item dropdown'+on+'"><button class="slot" type="button">'+it.label+' <span class="chev">▾</span></button>'+
            '<div class="panel panel-'+it.slot+'">'+it.panel.map(row).join('')+'</div></div>';
    } else {
      menu+='<a class="nav-item slot'+on+'" href="'+it.href+'">'+it.label+'</a>';
    }
  });
  var html='<div class="bar"><a class="logo" href="index.html">VA<span>N</span></a>'+
    '<button class="hamb" type="button" aria-label="Menu">☰</button>'+
    '<nav class="menu">'+menu+'</nav>'+
    '<div class="rail"><a class="rlink" href="login.html">Dealer Login</a>'+
    '<a class="cta" href="demo.html">Book Your Demo</a></div></div>';
  var host=document.getElementById('site-nav');
  host.className='site-header'; host.innerHTML=html;
  var dds=[].slice.call(host.querySelectorAll('.nav-item.dropdown'));
  dds.forEach(function(dd){
    dd.querySelector('.slot').addEventListener('click',function(e){
      e.preventDefault(); e.stopPropagation();
      var open=dd.classList.contains('open');
      dds.forEach(function(d){d.classList.remove('open');});
      if(!open) dd.classList.add('open');
    });
  });
  document.addEventListener('click',function(){dds.forEach(function(d){d.classList.remove('open');});});
  host.querySelector('.hamb').addEventListener('click',function(e){e.stopPropagation();host.classList.toggle('mobile-open');});
})();
