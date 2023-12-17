var to = nameGirl;
var gift_url = giftUrl;
var gift_image_url = giftImage || giftImageBase64;

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var graphElem = document.querySelector(".present-box > .side.top .to");
  graphElem.setAttribute("data-before", eventName);
  document.querySelector("#card .title-card").innerHTML = `💘${titleCard}💘`;
  document.querySelector("#card .content-card").innerHTML = `${contentCard}`;
  document.querySelector("#card .honey").setAttribute("src", `${giftImage}`);

  var _giftLink, _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener(
    "click",
    function (e) {
      if (!present.classList.contains("open")) {
        present.classList.add("open");
        document.getElementById("card").classList.add("card-show");
      }
    },
    false
  );

  nametag.innerText = to;
}

init();
