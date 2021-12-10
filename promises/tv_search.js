const form = document.getElementById('search_form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm}};
    const queryResponse = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    const imgLinkList = generateImgLinkList(queryResponse.data)
    makeAndAppendImgElements(imgLinkList);
    clearInput();
})

function generateImgLinkList(showData){
    let imgLinkList = [];
    for (let show of showData){
        console.log(show);
        if(show.show.image){
            imgLinkList.push(show.show.image.medium);
            console.log(show.show.image.medium);
        }
    }
    return imgLinkList;
}

function makeAndAppendImgElements(imgLinks){
    for(let link of imgLinks){
        let imgElement = document.createElement('img');
        imgElement.src = link;
        document.body.appendChild(imgElement);
    }
}

function clearInput(){
    form.elements.query.value = '';
}
