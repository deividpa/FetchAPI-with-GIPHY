const APIKey = "purMBIhqH6ky12aZCh1QFOKpfeOXufq2";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${APIKey}`
);

peticion
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
    const urlIMG = json.data.images.original.url;
    const HTMLContainer = document.querySelector("#container");
    HTMLContainer.innerHTML = `<img src=${urlIMG} />`;
  });
