window.onload = function () {
    document.getElementById("myButton").addEventListener("click", function () {
        const inputValue = document.getElementById('myInput').value;
        const inputValue2 = document.getElementById('myInput2').value;
        if (((inputValue < 100 || inputValue > 300) && (inputValue2 < 100 || inputValue2 > 300)) || (isNaN(inputValue)) || (isNaN(inputValue2))) {
            document.getElementById('text').innerHTML = `one of the numbers outside the range from 100 to 300 or one of the numbers is NaN`;
        } else {
            const Url = 'https://picsum.photos/${inputValue}/${inputValue2}';
            fetch(Url)
                .then(function (response) {
                    document.getElementById('text').innerHTML = ``;
                    const photo = document.createElement('img');
                    photo.src = response.Url;
                    const textElement = document.getElementById("text");
                    textElement.appendChild(photo);
                })
                .catch(function (error){
                    document.getElementById('text').innerHTML = `error`;
                })
        }

    });
}
// ссылка не работает, аналагов не нашёл в "пачке", но всё работает