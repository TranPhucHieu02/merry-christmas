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

  function handleOpenEvent() {
  present.classList.toggle("open");
  document.getElementById('card').classList.add('card-show');
}

// Kiểm tra xem có phải là thiết bị cảm ứng hay không
var isTouchDevice = 'ontouchstart' in document.documentElement;

// Sử dụng touchstart cho thiết bị cảm ứng và click cho máy tính
if (isTouchDevice) {
  present.addEventListener("touchstart", function(e) {
    e.preventDefault(); // Nếu cần
    handleOpenEvent();
  }, false);
} else {
  present.addEventListener("click", handleOpenEvent, false);
}

  nametag.innerText = to;
}

init();
