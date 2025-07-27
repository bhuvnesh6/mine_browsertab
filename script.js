// Weather API (OpenWeatherMap)

let city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let cond = document.querySelector('.cond')

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  weatherWidget.innerHTML = "Geolocation is not supported";
}

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;



const weatherWidget = document.getElementById("weatherData");
fetch(`https://api.weatherapi.com/v1/current.json?key=c5a67a3f79f04649a4145439252607&q=${lat},${lon}`)
  .then(res => res.json())
  .then(data => {
    city.innerHTML = data.location.name;
    temp.innerHTML = data.current.temp_c;
    cond.innerHTML = data.current.condition.text;
   
  })
  .catch(() => {
    weatherWidget.innerHTML = "Error loading weather";
  });


}

function error(err) {
  alert('Location access denied. Please allow location.')

}

// Sci/Tech News (Example using NewsAPI)
const newsList = document.getElementById("newsList");

fetch("https://newsdata.io/api/1/news?apikey=pub_4ba57037943749b692b97164dbbcad69&category=science,technology&language=en")
  .then(res => res.json())
  .then(data => {
    newsList.innerHTML = "";
    data.results.forEach(article => {
      const div = document.createElement("div");
      div.className = "news-item";

      const img = document.createElement("img");
      img.src = article.image_url || "https://via.placeholder.com/80x60?text=No+Image";

      const a = document.createElement("a");
      a.className = "headline";
      a.href = article.link;
      a.target = "_blank";
      a.innerText = article.title;

      div.appendChild(img);
      div.appendChild(a);
      newsList.appendChild(div);
    });
  })
  .catch(() => {
    newsList.innerHTML = "<p>Could not load news 🛑</p>";
  });


/*searching*/

function handleSearch(e) {
  if (e.key === 'Enter') {
    const query = encodeURIComponent(e.target.value.trim());
    if (query !== "") {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  }
}

let searchbtn = document.querySelector('.searchbtn');

searchbtn.addEventListener('click', ()=>{
   let query = document.querySelector('#searchInput').value;
    if (query !== "") {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
})


document.getElementById("voiceBtn").addEventListener("click", () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    document.getElementById("searchInput").value = speechResult;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(speechResult)}`;
  };

  recognition.onerror = (event) => {
    alert("Voice search error: " + event.error);
  };
});


document.getElementById("imageInput").addEventListener("click", (e) => {
  
   
    window.open("https://images.google.com", "_blank");
 
});




/*time and date */

 
