(function init() {
    "use strict";

    const articles = Array.from(document.getElementsByTagName("article"));  // Das ist 1.
    // querySelectorALl() ist nicht Live, das führt zu Problemen bei wechselnder Anzahl
    //Intersection Observer
    // 1. target(s) zum Observieren, hier articles
    // 2. Observer Objekt erzeugen
    // 3. Callback - was soll gemacht werden, wenn die observierten targets gefunden werden



    // 2. const observer = new IntersectionObserver(callback, options-objekt);

    //3.

    console.log(articles);

    function loadArticles(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("loadVisible");
            } else {
                entry.target.classList.remove("loadVisible");
            }
        });
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
        // weitere Properties möglich: delyay, trackvisiblity
    };

    //2.
    const observer = new IntersectionObserver(loadArticles, options);

    articles.forEach(article => {
        observer.observe(article);
    });

    const madElement = document.getElementById('mad');

    madElement.addEventListener('click', () => {
        //madElement.remove();
    });
})();