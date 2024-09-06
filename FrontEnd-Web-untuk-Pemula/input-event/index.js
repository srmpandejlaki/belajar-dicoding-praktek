document.addEventListener("DOMContentLoaded", function () {
  //event onInput
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  document.getElementById("inputNama").addEventListener("input", function () {
    const jumlahKarakterDiketik =
      document.getElementById("inputNama").value.length;
    const jumlahKarakterMaksimal =
      document.getElementById("inputNama").maxLength;

    // menghitung sisa karakter yang bisa di input
    console.log("jumlahKarakterDiketik: ", jumlahKarakterDiketik);
    console.log("jumlahKarakterMaksimal: ", jumlahKarakterMaksimal);
    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById("sisaKarakter").innerText =
      sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      document.getElementById("sisaKarakter").innerText =
        "Batas maksimal tercapai!";
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById("notifikasiSisaKarakter").style.color = "red";
    } else {
      document.getElementById("notifikasiSisaKarakter").style.color = "black";
    }
  });

  // event onFocus - menampilkan sisa karakter pada halaman website
  document.getElementById("inputNama").addEventListener("focus", function () {
    console.log("inputNama: focus");
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "visible";
  });

  //event onBlur - menyembunyikan event handler untuk event onFocus
  document.getElementById("inputNama").addEventListener("blur", function () {
    console.log("inputNama: blur");
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "hidden";
  });

  // event onChange
  document
    .getElementById("inputCaptcha")
    .addEventListener("change", function () {
      console.log("inputCaptcha: change");

      const inputCaptcha = document.getElementById("inputCaptcha").value;
      const submitButtonStatus = document.getElementById("submitButton");

      if (inputCaptcha === "PRNU") {
        submitButtonStatus.removeAttribute("disabled");
      } else {
        submitButtonStatus.setAttribute("disabled", "");
      }
    });

  // validasi
  document
    .getElementById("formDataDiri")
    .addEventListener("submit", function (event) {
      const inputCaptcha = document.getElementById("inputCaptcha").value;

      if (inputCaptcha === "PRNU") {
        alert("Selamat! Captcha Anda Benar :D");
      } else {
        alert("Captcha Anda Belum Tepat :(");
        document.getElementById("submitButton").setAttribute("disabled", "");
      }
      event.preventDefault();
    });

  // event onCopy
  document.getElementById("inputCopy").addEventListener("copy", function () {
    alert("Anda telah men-copy sesuatu...");
  });

  // event onPaste
  document.getElementById("inputPaste").addEventListener("paste", function () {
    alert("Anda telah men-paste sebuah teks...");
  });
});
