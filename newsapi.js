const quranSurah = () => {
    fetch('https://newsapi.org/v2/top-headlines?category=technology&apiKey=423bb3aafff14d1ea22b920cb90009b7').then(res => res.json()).then(data => displaySura(data.articles))
}
quranSurah();
const displaySura = data => {
    console.log(data);
    data.forEach(sura => {
        console.log(sura);
        const news = document.getElementById('news');
        const div = document.createElement('div');
        div.classList.add('row');
        div.classList.add('g-2');
        div.innerHTML = `
        <div class="col-12 col-lg-4"><img class="img-thumbnail" src="${sura.urlToImage}"/></div>
        <div class="col-12 col-lg-8"><h2>${sura.title}</h2>
        <h5>${sura.author}</h5>
        <p>${sura.description}</p></div>
        `;
        news.appendChild(div);
    })
}
const searchNews = () => {
    document.getElementById('news').textContent='';
    const searchText=document.getElementById('search-box').value;
    console.log(searchText);
    fetch(`https://newsapi.org/v2/top-headlines?q=${searchText}&category=technology&apiKey=423bb3aafff14d1ea22b920cb90009b7`).then(res => res.json()).then(data => displaySura(data.articles))
}
if (document.getElementById('search-box').value==='') {
    quranSurah();
}