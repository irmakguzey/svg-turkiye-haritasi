/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');
  const il_info = document.querySelector('.il-info');

  // html dosyasinda yeni acilan il'in path'ine <il-adi>-path diye bir id eklenmeli
  // TODO: daha iyi bir cozum
  const aktif_iller_id = ['istanbul-asya', 'istanbul-avrupa', 'ankara', 'diyarbakir'];
  const aktif_iller_adres = ['istanbul-asya-adres', 'istanbul-avrupa-adres', 'ankara-adressss', 'diyo-adressing']
  const aktif_iller_no = ['1','2','3','4']
  
  aktif_iller_id.forEach(id => {
    console.log(document.getElementById(id + '-path'))
    document.getElementById(id + '-path').style.fill = '#591E87';
  })

  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
        console.log(event.target.parentNode.getAttribute('id'))
        if (aktif_iller_id.includes(event.target.parentNode.id)) {
          info.innerHTML = [
            '<div>',
            event.target.parentNode.getAttribute('data-iladi'),
            '<p>İletişim Bilgileri:',
            '<ul>',
            '<li> Adres: ', aktif_iller_adres[aktif_iller_id.indexOf(event.target.parentNode.id)],
            '<li> No: ', aktif_iller_no[aktif_iller_id.indexOf(event.target.parentNode.id)],
            '</ul>',
            '</p>',
            '<p>Katılmak için tıkla!</p>',
            '</div>'
          ].join('');

        } else {
          info.innerHTML = [
            '<div>',
            event.target.parentNode.getAttribute('data-iladi'),
            '<p>Bu ilimizde henüz Kadın Savunma Ağı bulunmamaktadır.</p>',
            '<p>Kurmak için tıkla!</p>',
            '</div>'
          ].join('');
        }
      }
    }
  );

  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );

  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');
    
        if (aktif_iller_id.includes(id)) {
          window.location.href = "http://kadinsavunmasi.ozancrk.com/kadin-savunma-agina-katil/";
        } else {
          window.location.href = "http://kadinsavunmasi.ozancrk.com/kadin-savunma-agini-nasil-kurarim/";
        }
        

      }
    }
  );
}
