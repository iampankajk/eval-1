function search(){
    let q =  document.getElementById("query").value;
    fetch(`https://newsapi.org/v2/everything?q=${q}&from=2021-10-18&sortBy=popularity&apiKey=e4d2b786bff1416c82a26cc95005f63d`)
.then((res)=>{
    return res.json();
}).then((res)=>{
    console.log(res);
    showNews(res.articles);
})

}


let topstories = document.getElementById("top-stories");


function showNews(articles){
 topstories.innerHTML = null;
 articles.forEach((article)=>{
     let div = document.createElement("div");

     div.style.display = "flex";
     div.style.width = "900px";
     div.style.margin = "auto";


     let title_div = document.createElement("div");
     title_div.style.width="250px"
     

     title_div.onclick= function(){
         detail(article);
     }
     title_div.style.cursor="pointer";

     let des_div = document.createElement("div");
     des_div.innerText = article.description;
     des_div.style.width="330px"
     des_div.style.paddingTop="20px"

     let img_div = document.createElement("div");

     let title_p = document.createElement("p");
     title_p.innerText = article.title;
     title_p.style.fontSize="20px";
     title_p.style.fontWeight="700"

     let author_p = document.createElement("p");
     author_p.innerText = article.author;

     let publish_p = document.createElement("p");
     publish_p.innerText = article.publishedAt;

     let img = document.createElement("img");
     img.src = article.urlToImage;
     img.style.width = "330px"
     img.style.padding="20px"

     img_div.append(img);


     title_div.append(title_p,author_p,publish_p);

     div.append(title_div,des_div,img_div);

     topstories.append(div);



 });
}


function detail(article){

    localStorage.setItem("articles",JSON.stringify(article));
     window.location.href = "news.html";
 }