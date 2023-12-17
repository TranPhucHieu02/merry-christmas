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

  var isTouchDevice = 'ontouchstart' in document.documentElement;

  function handleOpenEvent() {
    if (isTouchDevice) {
      // Thiết bị cảm ứng, xoay về đúng hướng trước khi mở
      present.classList.toggle("rotate");
      setTimeout(function () {
        present.classList.toggle("rotate-clockwise")
        present.classList.toggle("open");
        document.getElementById('card').classList.add('card-show');
      }, 500); // Thời gian xoay (500ms) có thể điều chỉnh
    } else {
      // Máy tính, mở trực tiếp
      present.classList.toggle("open");
      document.getElementById('card').classList.add('card-show');
    }
  }

  // Sử dụng touchstart cho thiết bị cảm ứng và click cho máy tính
  if (isTouchDevice) {
    present.addEventListener("touchstart", function (e) {
      e.preventDefault();
      handleOpenEvent();
    }, false);
  } else {
    present.addEventListener("click", handleOpenEvent, false);
  }

  nametag.innerText = to;
}

init();
