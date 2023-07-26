window.addEventListener("DOMContentLoaded", () => {
  const runTestButton = document.getElementById("submit-btn");
  runTestButton.addEventListener("click", async (event) => {
    event.preventDefault();

    try {

      const url = "http://localhost:3000/run-test2";
 

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
});
