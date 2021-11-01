document.addEventListener("DOMContentLoaded", () => {
  console.log("page chargée");

  //   Ouvrir le modal
  document.getElementById("display-modal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("display-modal");
  });

  //   Fermer le modal
  document.getElementById("remove-modal").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("display-modal");
  });

  // Envoyer le formulaire
  document
    .getElementById("contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
      console.log("ok");
      const response = await axios.post(
        "https://back-end-tripadvisor.herokuapp.com/",
        data
      );
    });
});
