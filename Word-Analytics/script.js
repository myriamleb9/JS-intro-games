const textareaEl = document.querySelector('.textarea')
const StatNumCharsEl = document.querySelector('.Stat_Number_Characters')
const StatNumWordsEl = document.querySelector('.Stat_Number_Words')
const StatNumTwitterEl = document.querySelector('.Stat_Number_Twitter')
const StatNumFacebookEl = document.querySelector('.Stat_Number_Facebook')



textareaEl.addEventListener("input", () =>

    {
        const NumberOfChars = textareaEl.value.length;

        let NumberOfTwitter = 280 - NumberOfChars;
        let NumberOfFacebook = 2200 - NumberOfChars;


        StatNumCharsEl.textContent = NumberOfChars;
        StatNumTwitterEl.textContent = NumberOfTwitter;
        StatNumFacebookEl.textContent = NumberOfFacebook;

    }


)