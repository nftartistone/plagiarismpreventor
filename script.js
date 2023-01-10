const API_KEY = "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";
const API_ENDPOINT = "https://api.openai.com/v1/rewrite";

// Get the text from the input field
let originalScript = document.getElementById("Original Script").value;

// Send a request to the OpenAI API to rephrase the text
fetch(API_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  },
  body: JSON.stringify({
    "model": "text-davinci-002",
    "prompt": originalScript
  })
})
.then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Request failed: " + response.statusText);
  }
})
.then(data => {
  // Write the rephrased text to the output field
  document.getElementById("New Script").value = data.choices[0].text;
})
.catch(error => {
  console.error(error);
  alert("An error occurred while rephrasing the text. Please try again.");
});
