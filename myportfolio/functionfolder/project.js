function showDetails(containerName) {
    const details = document.getElementById("details");

    if (containerName === 'Container 1') {
        details.innerHTML = `
                <div class="details" id="details">
                    <div class="up">
                        <img src="img/Screenshot (326).png" alt="">
                        <a href=""><i>Mysimplewebsite 1</i></a>
                    </div>
                    <div class="down">
                        <h2>Mysimplewebsite 1</h2>
                        <p> This is my project created During college. this simple website showcase simple introduction
                            about me and a motto of my choice</p>
                    </div>
                </div>
        `;
    } else if (containerName === 'Container 2') {
        details.innerHTML = `
                <div class="details" id="details">
                    <div class="up">
                        <img src="img/Screenshot (331).png" alt="">
                        <a href=""><i>Magic box</i></a>
                    </div>
                    <div class="down">
                        <h2>Mysimplewebsite 1</h2>
                        <p> I created this when i was practicing my javascript skills, Thid is compese of a boxes tha
                            will be devided in multiple boxes in equal size</p>
                    </div>
                </div>
        `;
    } else if (containerName === 'Container 3') {
        details.innerHTML = `
                <div class="details" id="details">
                    <div class="up">
                        <img src="img/pocirus.png" alt="">
                        <a href=""><i>Mysimplewebsite 1</i></a>
                    </div>
                    <div class="down">
                        <h2>Arknights operator list</h2>
                        <p> this project i currently ongoing</p>
                    </div>
                </div>
        `;
    }
}
