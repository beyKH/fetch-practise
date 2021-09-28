const elLoadDataBtn = document.querySelector('.js-load-data');
const elNewsTemplate = document.querySelector("#news-template").content;
const elNewsList = document.querySelector(".js-news-list");




fetch('https://newsapi.org/v2/everything?qInTitle=bitcoin&language=ru&apiKey=a2f4b2cdca2b4a92b14c43fc8f778303')
.then(response => response.json())
.then(data => {
  if (data.status === 'ok') {
    elNewsList.innerHTML = "";
    let elNewsFragment = document.createDocumentFragment();
    data.articles.forEach(article => {
      console.log(article);

      let elNewsItem = elNewsTemplate.cloneNode(true);

      elNewsItem.querySelector(".news-title").textContent = article.title;
      elNewsItem.querySelector(".news-img").src = article.urlToImage;
      elNewsItem.querySelector(".news-author").textContent = article.author;
      elNewsItem.querySelector(".news-link").href = article.url;
      elNewsFragment.appendChild(elNewsItem);
    });
    elNewsList.appendChild(elNewsFragment);
  }else{
    console.log("tamom");
  }
});
