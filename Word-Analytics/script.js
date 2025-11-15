const textareaEl = document.querySelector('.textarea')
const StatNumCharsEl = document.querySelector('.Stat_Number_Characters')
const StatNumWordsEl = document.querySelector('.Stat_Number_Words')
const StatNumTwitterEl = document.querySelector('.Stat_Number_Twitter')
const StatNumFacebookEl = document.querySelector('.Stat_Number_Facebook')



textareaEl.addEventListener("input", () =>

    {   // define the counting

        let NumberOfWords = textareaEl.value
  .trim()
  .split(/\s+/)
  .filter(word => word.length > 0)
  .length;

        const NumberOfChars = textareaEl.value.length;
        let NumberOfTwitter = 280 - NumberOfChars;
        let NumberOfFacebook = 2200 - NumberOfChars;

        if (textareaEl.value.includes("<script>")) {
            alert("You do not have permission");
            textareaEl.value.replace('<script>', '');
        }

    

        // add a new limit 

         if (NumberOfTwitter < 0) {
             StatNumTwitterEl.classList.add('Limit-number');
            } else {
                StatNumTwitterEl.classList.remove('Limit-number');
            }

              if (NumberOfFacebook < 0) {
             StatNumFacebookEl.classList.add('Limit-number');
            } else {
                StatNumFacebookEl.classList.remove('Limit-number');
            }

        // Publish da fukkah

        StatNumCharsEl.textContent = NumberOfChars;
        StatNumWordsEl.textContent = NumberOfWords;
        StatNumTwitterEl.textContent = NumberOfTwitter;
        StatNumFacebookEl.textContent = NumberOfFacebook;

    }



)