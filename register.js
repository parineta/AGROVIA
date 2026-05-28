function register() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  // Validasi sederhana
  if (nama === "" || email === "" || password === "") {
    alert("Semua data harus diisi!");
    return;
  }

  // Cek apakah email sudah terdaftar
  if (localStorage.getItem(email)) {
    alert("Email sudah terdaftar!");
    return;
  }

  // Data user
  let user = {
    nama: nama,
    email: email,
    password: password,
    role: role
  };

  // Simpan ke localStorage
  localStorage.setItem(email, JSON.stringify(user));

  alert("Registrasi berhasil!");

  // Pindah ke halaman login
  window.location.href = "login.html";
}