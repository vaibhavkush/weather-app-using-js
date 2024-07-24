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

fetch("https://Weather-API.proxy-production.allthingsdev.co/weather/citySearch?search_term=india", requestOptions)
   .then((response) => response.text())
   .then((result) => console.log(result))
   .catch((error) => console.error(error));

