const simpanTamu = () => {
    let email = document.getElementById("email").value;
    let nama = document.getElementById("nama").value;
    let pesan = document.getElementById("pesan").value;
    let arrayMhs = document.getElementById("simpanTamu")
    
    localStorage.setItem("email", email);
    localStorage.setItem("nama", nama);
    localStorage.setItem("pesan", pesan);   
    localStorage.setItem("daftar", JSON.stringify([email, nama, pesan]));
    let getLS =JSON.parse(localStorage.getItem("simpanTamu"));

}

const tampilTamu = () => {
    let daftar = document.getElementById("daftar");

    let email = localStorage.getItem("email");
    let nama = localStorage.getItem("nama");
    let pesan = localStorage.getItem("pesan");

    daftar.innerHTML = "Nama :" + nama + "<br/>"+
                        "Email :" + email  + "<br/>"+
                        "Pesan :" + pesan + "<br/>";
}
