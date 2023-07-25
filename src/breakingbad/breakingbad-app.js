/**
 * @returns {Object} quote information api
 */

const fetchQuote = async () => {
    const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/");
    const data = await res.json();

    return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async (element) => {
    document.querySelector("#app-title").innerHTML = "Breaking Bad App";
    element.innerHTML = "Loading...";

    // await fetchQuote();

    const quoteLeabel = document.createElement("blockquote");
    const authoLabel = document.createElement("h3");
    const nextQuoteBtn = document.createElement("button");
    nextQuoteBtn.innerText = "Next";

    const renderQuote = (data) => {
        authoLabel.innerHTML = data.author;
        quoteLeabel.innerHTML = data.quote;
        element.replaceChildren(quoteLeabel, authoLabel, nextQuoteBtn);
    };

    fetchQuote().then(renderQuote);
};
