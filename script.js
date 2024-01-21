const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var Name = urlParams.get("name");
var n = urlParams.get("n");
const startbtn = document.getElementById('start-btn');
const blur = document.getElementById('blur-bg');

function renderName() {
    if (n == 1) {
        document.getElementById("btn").innerHTML = "Share";
        startbtn.style.display = 'none';
        blur.style.filter = 'blur(0px)';
    }
    if (Name == null) {
        document.getElementById("name").innerHTML = "आपका नाम यहां";
    } else {
        document.getElementById("name").innerHTML = Name;
    }
    console.log(Name);
}

function onCreate() {
    if (n == 1) {
        var url = window.location.href;
        url = url.substring(0, url.length - 4);
        console.log(url);
        window.open(
            "whatsapp://send?text=राम मंदिर बनने की खुशी में ये मैसेज 10 लोगो को शेयर कीजिये%0A" + encodeURIComponent(url), '_blank'
        );
    } else {
        const name = document.getElementById("input-name").value;
        if (name == null) {
            document.getElementById("name").innerHTML = "आपका नाम यहां";
        } else {
            document.getElementById("name").innerHTML = name;
        }
        console.log(name);
        window.open('https://vaibhav234k.github.io/Rammandir/index.html?name=' + name + "&n=1", '_self');
    }
}

function onStart() {
    document.getElementById('audio').play();
    startbtn.style.display = 'none';
    blur.style.filter = 'blur(0px)';
}
