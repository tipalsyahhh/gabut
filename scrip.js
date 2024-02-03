var backgroundMusic = document.getElementById('backgroundMusic');

document.addEventListener("DOMContentLoaded", function () {
    backgroundMusic.play();
});

backgroundMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
});

function playBackgroundMusic() {
    backgroundMusic.play();
}

function validateForm() {
    var namaInput = document.getElementById("nama").value;
    var errorMessage = document.getElementById("error-message");
    var animasiSection = document.getElementById("animasi");
    var loadingContainer = document.getElementById("loading-container");
    var hal1Section = document.getElementById("hal1");
    var hal2Section = document.getElementById("hal2");
    var hal3Section = document.getElementById("hal3");
    var hal4Section = document.getElementById("hal4");
    var hal5Section = document.getElementById("hal5");
    var hal6Section = document.getElementById("hal6");
    var namaTampil = document.getElementById("namaTampil");
    var namaTampil2 = document.getElementById("namaTampil2");
    var namaTampil3 = document.getElementById("namaTampil3");

    if (namaInput.trim() === "") {
        errorMessage.textContent = "Isi dulu formulir tersebut!";
        errorMessage.style.visibility = "visible";

        setTimeout(function () {
            errorMessage.style.visibility = "hidden";
        }, 10000);
    } else {
        errorMessage.textContent = "";
        animasiSection.style.display = "none";
        loadingContainer.style.display = "block";

        setTimeout(function () {
            loadingContainer.style.display = "none";
            playBackgroundMusic();
            hal1Section.style.display = "block";
            namaTampil.textContent = "Hai, " + namaInput;
            namaTampil2.textContent = "Aku punya pesan buat kamu, " + namaInput;
            namaTampil3.textContent = namaInput;

            setTimeout(function () {
                hal1Section.style.display = "none";
                hal2Section.style.display = "block";
                playBackgroundMusic();
                setTimeout(function () {
                    hal2Section.style.display = "none";
                    hal3Section.style.display = "block";
                    playBackgroundMusic();
                    setTimeout(function () {
                        hal3Section.style.display = "none";
                        hal4Section.style.display = "block";
                        playBackgroundMusic();
                        setTimeout(function () {
                            hal4Section.style.display = "none";
                            hal5Section.style.display = "block";
                            playBackgroundMusic();
                        }, 10000);
                    }, 10000);
                }, 10000);
            }, 10000);
        }, 3000);
    }
}

function showHal6() {
    var hal5Section = document.getElementById("hal5");
    var hal6Section = document.getElementById("hal6");

    hal5Section.style.display = "none";
    hal6Section.style.display = "block";
    playBackgroundMusic();
}
