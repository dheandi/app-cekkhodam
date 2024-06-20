document
  .getElementById("khodamForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const khodams = [
      "Naga Sakti",
      "Harimau Putih",
      "Macan Kumbang",
      "Garuda Perkasa",
      "Banteng Sakti",
      "Cacing Tanah",
      "Ulat Bulu",
      "Cacing Alaska",
      "Paus Biru",
    ];
    const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];

    // Show modal with bold khodam name
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    modalText.innerHTML = `<b>${name}</b> khodam ci e <b>${randomKhodam}</b>`;
    modal.style.display = "block";

    // Close the modal on click of close button
    document.querySelector(".close-button").onclick = function () {
      modal.style.display = "none";
      window.location.reload();
    };

    // Close the modal when user clicks outside of the modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        window.location.reload();
      }
    };
  });
