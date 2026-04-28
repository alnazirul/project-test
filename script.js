function tambahTugas() {
  const input = document.getElementById("inputTugas");
  const teks = input.value;

  if (teks === "") {
    alert("Jangan kosong!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = teks;

  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  const tombolHapus = document.createElement("button");
  tombolHapus.textContent = "Hapus";

  tombolHapus.onclick = function () {
    li.remove();
  };

  li.appendChild(tombolHapus);

  document.getElementById("listTugas").appendChild(li);

  input.value = "";
}