const argz = new URLSearchParams(window.location.search);

const url = argz.get("u");
const postImage = argz.get("i");

let token;

fetch("https://get.toptele.ml/token")
  .then((response) => response.json())
  .then((data) => adios(data["token"]));

const adios = function (token) {
  const hlsUrl = url + "?" + token;
  window.location.assign("player.html?u=" + hlsUrl + "&i=" + postImage);
};
