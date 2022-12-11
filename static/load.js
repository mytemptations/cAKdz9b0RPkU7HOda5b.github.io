const argz = new URLSearchParams(window.location.search);

const url = "https://vbd.mitele.es/orivod/vod/bitmovin/7e/d7/7ed7796d-82df-4662-a7c6-65b77a4bdd20/main.ism/picky.m3u8"
const postImage = "https://album.mediaset.es/cimg/2022/12/09/programa1-plus_3a89.jpeg"

let token;

fetch("https://get.toptele.ml/token")
  .then((response) => response.json())
  .then((data) => adios(data["token"]));

const adios = function (token) {
  const hlsUrl = url + "?" + token;
  window.location.assign("player.html?u=" + hlsUrl + "&i=" + postImage);
};
