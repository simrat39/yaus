const submit = document.getElementById("submit");

submit.addEventListener("click", async () => {
  const urlInput = document.getElementById("url");

  const res = await fetch("/shorten", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: urlInput.value }),
  });

  if (res.status !== 400) {
    const data = await res.json();

    const shortenedDom = document.getElementById("shortened");
    shortenedDom.innerHTML = data.shortened;
    shortenedDom.href = `/${data.shortened}`;
  } else {
    console.log("Error Occured");
  }
});
