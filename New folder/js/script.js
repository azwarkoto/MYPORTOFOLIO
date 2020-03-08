// event pada saaat link di klik


$('.page-scroll').on('click', function(){


// ambil isi hredf

var tujuan = $(this).attr('href');
// tangkap elemen yang bersangkutan

var elemenTujuan = $(tujuan);

console.log($('body').scrollTop();
});