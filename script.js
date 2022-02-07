var insult = document.getElementById("tweet");

getTweet();

async function getTweet() {
  const response = await fetch("https://api.kanye.rest/");
  const data = await response.json();

  insult.innerHTML = ' " ' + data.quote + ' " ';
}
