const submitAction = document.getElementById("formDataDiri");

submitAction.addEventListener("submit", function (event) {
  const inputNama = document.getElementById("inputNama").value;
  const inputDomisili = document.getElementById("inputDomisili").value;
  const hiddenMessage = `Halo, ${inputNama}. Bagaimana cuacanya di ${inputDomisili}?`;
  document.querySelector(".form-content").computedStyleMap.display = none; //tambahan supaya codingnya berhasil

  document.getElementById("messageAfterSubmit").innerText = hiddenMessage;
  event.preventDefault(); // Prevent form from submitting normally
});
