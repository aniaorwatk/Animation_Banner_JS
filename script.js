 
  let activeElement = 0;
  const timeChange = 4000;

  const frontImgHtml = document.querySelector('.front');
  const backImgHtml = document.querySelector('.back');
  const h1Html = document.querySelector('.member h1');
  const h2Html = document.querySelector('.member h2');


  const frontImages = ['img/cows.jpg', 'img/green-lizard.jpg', 'img/sheep.jpg'];
  const backImages = ['img/cows1.jpg', 'img/green-lizard2.jpg', 'img/sheep3.jpg'];
  const names = ['Krowy', 'Jaszczurka', 'Owca'];
  const professions = ['Krowy codziennie spędzają około 8 godzin na jedzeniu.', 
  'Jaszczurki nie występują jedynie na Antarktydzie.',
   'Owce zostały udomowione 10 tysięcy lat temu w Azji Środkowej.'];

  function changeElement() {
   console.log("automatyczne wwywołanie")
   activeElement++;
   if (activeElement == frontImages.length) {
    activeElement = 0;
   }
   frontImgHtml.src = frontImages[activeElement];
   backImgHtml.src = backImages[activeElement];
   h1Html.textContent = names[activeElement];
   h2Html.textContent = professions[activeElement];

  }

  setInterval(changeElement, timeChange)
  