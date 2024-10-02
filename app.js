const loadQuote = async () => {

    try {
        const fetchQuote = await fetch('https://dummyjson.com/quotes/random', {
            headers: {
                Accept: "application/json"
            }
        });

        const QuoteData = await fetchQuote.json();
        console.log(QuoteData)
        document.getElementById('loadingQuote').innerHTML = QuoteData.quote
        const author = QuoteData.author
        document.getElementById('author').innerHTML = ` ~ ${author}`
    } catch (error) {
        console.log(error)
    }

}

document.getElementById('MotivateMe').addEventListener("click", loadQuote)


document.getElementById('downloadBtn').addEventListener('click', function() {

    htmlToImage.toPng(document.getElementById('QuotesContainer')).then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'Today-Quote.png';
        link.click();
    })
    .catch(function (error) {
        console.error('Oops, something went wrong!', error);
    });
    });