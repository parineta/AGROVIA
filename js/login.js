function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // ambil data user dari localStorage
  const storedUser = JSON.parse(localStorage.getItem(email));

  // cek akun ada atau tidak
  if (!storedUser) {
    alert("Akun belum terdaftar!");
    return;
  }

  // cek password
  if (password === storedUser.password) {

    // simpan status login
    localStorage.setItem("isLogin", "true");

    // simpan data user aktif
    localStorage.setItem("username", storedUser.username);
    localStorage.setItem("role", storedUser.role);
    localStorage.setItem("email", storedUser.email);

    alert("Login berhasil!");

    // redirect sesuai role
    if (storedUser.role === "Penjual") {

      window.location.href = "DashboardSellerMode.html";

    } else if (storedUser.role === "Pembeli") {

      window.location.href = "DashboardCustomerMode.html";

    } else {

      alert("Role tidak dikenali!");

    }

  } else {

    alert("Password salah!");

  }
}