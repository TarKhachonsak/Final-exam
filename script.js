async function getData(){
    const url = "https://ghibliapi.vercel.app/films/"
    const res = await fetch(url)
    const json = await res.json()
    const tableData = document.getElementById("tableData")


    json.forEach(get => {
        const image = get.image
        const title = get.title
        const description = get.description
        const releasedate = get.release_date

        const row = document.createElement("tr")
        const nameImage = document.createElement("IMG")
        nameImage.setAttribute('src',image)
        const nameTitle = document.createElement("td")
        nameTitle.textContent = title
        const nameDescription = document.createElement("td")
        nameDescription.textContent = description
        const nameReleasedate = document.createElement("td")
        nameReleasedate.textContent = releasedate

        row.appendChild(nameImage);
        row.appendChild(nameTitle);
        row.appendChild(nameDescription);
        row.appendChild(nameReleasedate);

        tableData.appendChild(row)
    });
}

getData()

