window.onload = function () {
    const pageNumberInput = document.getElementById('myInput').value;
    const limitInput = document.getElementById('myInput2').value;
    const btn = document.getElementById('myButton');
    if (localStorage.getItem('lastRequest')) {
        const lastRequest = JSON.parse(localStorage.getItem('lastRequest'));
        function displayImages(images) {
            const resultContainer = document.getElementById('result');
            resultContainer.innerHTML = "";
        }
    }
    btn.addEventListener("click", function () {
        const pageNumberInput = document.getElementById('myInput').value;
        const limitInput = document.getElementById('myInput2').value;
        const btn = document.getElementById('myButton');
        if (((pageNumberInput < 1 || pageNumberInput > 10) || isNaN(pageNumberInput)) && ((limitInput < 1 || limitInput > 10) || isNaN(limitInput))) {
            document.getElementById('text').innerHTML = "Number of page and limit outside the range from 1 to 10";
        } else if ((limitInput < 1 || limitInput > 10) || isNaN(limitInput)) {
            document.getElementById('text').innerHTML = "Limit outside the range from 1 to 10";
        } else if ((pageNumberInput < 1 || pageNumberInput > 10) || isNaN(pageNumberInput)) {
            document.getElementById('text').innerHTML = "Number of page outside the range from 1 to 10";
        } else {
            const Url = 'https://picsum.photos/v2/list?page=${pageNumberInput}&limit=${limitInput}';
            fetch(Url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    localStorage.setItem('lastRequest', JSON.stringify(data));
                    displayImages(data);
                })
                .catch(function (error) {
                    document.getElementById('text').innerHTML = error;
                });
        }
    });

    function displayImages(images) {
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = "";

        images.forEach(function (image) {
            const imgElement = document.createElement("img");
            imgElement.src = image.download_url;
            resultContainer.appendChild(imgElement);
        });
    }
}
// ссылка работает очень плохо, поэтому с первого раза не запускается(