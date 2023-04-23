document.getElementById("submit-prompt").addEventListener("click", async () => {
  console.log("SENT");

  const OPENAI_API_KEY = "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";

  const prompt = "((highest quality, masterpiece), High detail color illustration, (highest quality), (best illustration)), interesting background, 8k graphics, unreal engine, 8k unity wallpaper,  extreme detail, (3d game asset), made by riot games, Game character, (RPG game cahracter), (stylized portrait), portrait of ";
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
