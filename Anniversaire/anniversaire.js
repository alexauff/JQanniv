// je cache mes éléments 
document.getElementById('message1').style.display='none';
document.getElementById('message2').style.display='none';
document.getElementById('message3').style.display='none';

// au clic je veux que le block apparaisse
$("button").click(function () {
  document.getElementById('message1').style.display='flex';
});

$("#message1").click(function () {
  document.getElementById('message2').style.display='flex';
});

$("#message2").click(function () {
  document.getElementById('message3').style.display='flex';
});

// au clic je veux que l'image de fond change
$("#message3").click(function () {
  $("body").css("background-image", "url(\"astuce.jpg\")");
});

// il y a une alert qui apparait au bout de 5 sec
setTimeout(function() {
alert('❤️ 🎉 🌟 🎂 ✨ 🌹 👍')
}, 5000);