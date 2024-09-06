document.addEventListener("DOMContentLoaded", function () {
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
    const sisaKarakterUpdate = (jumlahKarakterMaksimal = jumlahKarakterDiketik);
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
});
