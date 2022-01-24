// Récupération du fichier en local (attention, il faut un vhost / un live server)

// Fonction appelant le fichier JSON externe grâce à la fonction fetch

var ii = 0;

fetch("./assets/json/e-commerce.json")
  .then((response) => response.json())
  .then((json) => {
    json.articles.map((articleShop) => {
      // Récupération des valeurs importantes du fichier JSON

      var title1 = articleShop.name1;
      var stars = articleShop.stars;
      var price = articleShop.price;
      var url = articleShop.url;

      // Ajout des articles dans le DOM après la récupération des informations du fichier JSON

      var articleToAddlol = `
    <div id=${ii} class="shop-card">
        
        <img src=${url} class="img-fluid img-shop" alt="image produit">
        <div>
            <p class="article-title">${title1}</p>
        </div>

      <div>
        <div>${stars}</div>
        <p class="nb-vote"></p>
      </div>

      <div class="shop-price">
        <p class="price">${price} €</p>
        
      </div>
            
      <button id=${ii}-btn class="btn btn-shop btn-danger">Ajouter au panier</button>
            
    </div>
          `;
      document.getElementById("to-add").innerHTML +=  articleToAddlol;

      ii++;
    });
  });
