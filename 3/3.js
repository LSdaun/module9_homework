window.onload = function () {
    document.getElementById("myButton").addEventListener("click", function () {
        const inputValue = document.getElementById("myInput").value;
        if (inputValue < 1 || inputValue > 10) {
            document.getElementById('text').innerHTML = `a number outside the range from 1 to 10`;
        } else {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `http://jsonplaceholder.typicode.com/photos?_limit=${inputValue}`);
            xhr.send();
            let Url;
            xhr.onload = function () {
                const json = JSON.parse(xhr.response);
                console.log(json);
                const Url = json[inputValue - 1].thumbnailUrl;
                console.log(Url);
                pic(Url);
            }
            function pic (Url) {
                document.getElementById('text').innerHTML = ``;
                const img = document.createElement("img");
                img.src = Url;
                img.alt = "picture from json";
                const textElement = document.getElementById("text");
                textElement.appendChild(img);
            }
        }
    });
}


