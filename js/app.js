document.getElementById("submit-prompt").addEventListener("click", async () => {
  console.log("SENT");

  const OPENAI_API_KEY = "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";

  const prompt = "((highest quality, masterpiece), High detail color illustration, (highest quality), (best illustration)), interesting background, anime style, Game character,game asset, portrait of ";
  const requestBody = {
    prompt: prompt + document.getElementById("text-input").value,
    n: 1,
    size: "256x256",
  };

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify(requestBody),
  });

  const imageResponse = await response.json();

  console.log(imageResponse);
  document.getElementById("image-placeholder").src = imageResponse.data[0].url;
});
