
    let data = JSON.parse(localStorage.getItem("articles"));

    let story = document.getElementById("story");

    function showNews(article){
        console.log(article);
   
         let div = document.createElement("div");

        //  div.style.display = "flex";
         div.style.width = "900px";
         div.style.margin = "auto";


         let title_div = document.createElement("div");
         title_div.style.width="250px"
         

         title_div.onclick= function(){
             detail(article);
         }
         title_div.style.cursor="pointer";

         let des_div = document.createElement("div");
         des_div.innerText = article.content;
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
         img.style.width = "500px"
         img.style.padding="20px"

         img_div.append(img);


         title_div.append(title_p,author_p,publish_p);

         div.append(title_div,img_div,des_div);

         story.append(div);




 }

showNews(data);