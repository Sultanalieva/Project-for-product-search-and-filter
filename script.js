let products = {
  data: [
    {
      productName: "T-Shirt with print",
      category: "Topwear",
      price: "30",
      image: "t-shirt.png",
    },
    {
      productName: "Pink Long Skirt",
      category: "Bottomwear",
      price: "25",
      image: "pink.png",
    },
    {
      productName: "Lila Long Skirt",
      category: "Bottomwear",
      price: "25",
      image: "lila.png",
    },

    {
      productName: "Men's Trousers",
      category: "Bottomwear",
      price: "55",
      image: "stone.png",
    },

    {
      productName: "Lila T-Shirt",
      category: "Topwear",
      price: "33",
      image: "ltshirt.png",
    },
    {
      productName: "Snow jacket",
      category: "Jacket",
      price: "56",
      image: "jacket.png",
    },
    {
      productName: "Winter jacket",
      category: "Jacket",
      price: "67",
      image: "bjacket.png",
    },
    {
      productName: "Pink Rucksack",
      category: "Rucksack",
      price: "44",
      image: "pruck.png",
    },
    {
      productName: "Kanken Rucksack",
      category: "Rucksack",
      price: "47",
      image: "kanken.png",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  // Card shuld have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  // image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");

  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");

  //loop through all cards
  elements.forEach((element) => {
    //display all cards on "all" button click
    if (value == "All") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category
      if (element.classList.contains(value)) {
        //display element
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// Search button click

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

// Initially display all products
window.onload = () => {
  filterProduct("all");
};
