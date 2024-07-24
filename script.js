const myHeaders = new Headers();
myHeaders.append("accept", "*/*");
myHeaders.append("accept-language", "en-US,en;q=0.9");
myHeaders.append("origin", "https://edition.cnn.com");
myHeaders.append("priority", "u=1, i");
myHeaders.append("referer", "https://edition.cnn.com/");
myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "cross-site");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36");
myHeaders.append("x-apihub-key", "");
myHeaders.append("x-apihub-host", "Weather-API.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "175f72ec-0ec4-4986-bbc6-b098d29b8200");

const requestOptions = {
   method: "POST",
   headers: myHeaders,
   redirect: "follow"
};

fetch("https://Weather-API.proxy-production.allthingsdev.co/weather/citySearch?search_term=London", requestOptions)
   .then((response) => response.text())
   .then((result) => console.log(result))
   .catch((error) => console.error(error));

function weatherDetails(info) {
  if (info.cod == "404") {
    infoTxt.classList.replace("pending", "error");
    infoTxt.innerText = `${inputField.value} isn't a valid city name`;
  } else {
    const city = info.name;
    const country = info.sys.country;
    const { description, id } = info.weather[0];
    const { temp, feels_like, humidity } = info.main;

    if (id == 800) {
      wIcon.src =
        "https://drive.google.com/uc?export=view&id=13TlzPFrICsSEB3llo6PWuywWpoL6ywxb";
    } else if (id >= 200 && id <= 232) {
      wIcon.src =
        "https://drive.google.com/uc?export=view&id=13eqt-OgtVphxXYpIHd9Q7QOBNocK0Onq";
    } else if (id >= 600 && id <= 622) {
      wIcon.src =
        "https://drive.google.com/uc?export=view&id=13Z9FbAC1FJ-ptr55vUWUufLBCrhgjbF1";
    } else if (id >= 701 && id <= 781) {
      wIcon.src =
        "https://drive.google.com/uc?export=view&id=13YVPMlryJ3168jk-VR_zfTvVBL6Xeaqs";
    } else if (id >= 801 && id <= 804) {
      wIcon.src =
        "https://drive.google.com/uc?export=view&id=13TVP9iuZz8A9cf3OtJCgTmeS9AtJ-B3R";
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
      wIcon.src =
        "https://drive.google.com/uc?export=view&id=13YoLrgIqfw6UHTu0x4yqTRLIyCbT1O6e";
    }

    weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
    weatherPart.querySelector(".weather").innerText = description;
    weatherPart.querySelector(
      ".location span"
    ).innerText = `${city}, ${country}`;
    weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(
      feels_like
    );
    weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
    infoTxt.classList.remove("pending", "error");
    infoTxt.innerText = "";
    inputField.value = "";
    wrapper.classList.add("active");
  }
}

arrowBack.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
