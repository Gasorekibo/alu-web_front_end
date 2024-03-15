function createElement(data) {
  const paragraph = document.body.appendChild(document.createElement("p"));
  paragraph.textContent = data;
}
function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );

  xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      callback(data.query.pages[21721040]["extract"]);
  };
  xhr.send();
}
queryWikipedia(createElement);
