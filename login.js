function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // ambil data berdasarkan email
  const storedUser = JSON.parse(localStorage.getItem(email));

  if (!storedUser) {
    alert("Akun belum terdaftar!");
    return;
  }

 if (password === storedUser.password) {
  alert("Login berhasil!");

  // CEK ROLE
  if (storedUser.role === "Penjual") {
    window.location.href = "DashboardSellerMode.html";
  } else if (storedUser.role === "Pembeli") {
    window.location.href = "DashboardCustomerMode.html";
  } else {
    alert("Role tidak dikenali!");
  }
}
}