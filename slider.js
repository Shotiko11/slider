
// slider

let data = [
    {
    id:1,
    imageUrl: 'https://cdn.vox-cdn.com/thumbor/uoyErWtvL5PJj4Nom2Kndj9VVe4=/0x0:3000x2000/1200x675/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/67747373/jbareham_201022_ply1040_ps5_lead_0002.0.jpg',
    title: 'slide picture 1'
},
{
    id:2,
    imageUrl:'https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Custom-PC-Builders.jpg',
    title: 'slide picture 2'
},
{
    id:3,
    imageUrl:'https://i.insider.com/565c55c1dd0895ac548b45d4?width=1000&format=jpeg&auto=webp',
    title: 'slide picture 3'
},
{
    id:4,
    imageUrl:'https://cdn.arstechnica.net/wp-content/uploads/2022/02/2-800x451.jpg',
    title: 'slide picture 4'
}
]
    


const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
let sliderContent = document.getElementById('slider-content')

let sliderIndex = 0;


//აქ ვქმნით "დივ" ტეგს
function createDivTag (item){
    const divTag = document.createElement('div');
    divTag.classList.add('slide');
    return divTag;
}


//აქ შევქმნით "იმიჯ" ტეგს
function createImgTag (item) {
    const imgTag = document.createElement('img');
    //exla surats gadavcet "data"-is "imageUrl"-s
    imgTag.setAttribute('src', item.imageUrl);
    //exla surats gadavcemt "data"-is "title"-s
    imgTag.setAttribute('alt', item.title);
    imgTag.classList.add('image-slider')
    return imgTag; 
}


//h3 tegi "satauristvis"
function createH3Tag(item) {
    const h3title = document.createElement('h3');
    h3title.innerText = item.title;

    return h3title;
}


//დალოგავს პირველ "ობჯექტს"
function setSlide() {
    sliderContent.innerText = " ";
    //es "const"-ebi gadaecema zemot "items"
    const slideItem = createDivTag(data[sliderIndex]);
    const imgTag = createImgTag(data[sliderIndex]);
    const titleSlider = createH3Tag(data[sliderIndex]);

    slideItem.appendChild(imgTag);
    slideItem.appendChild(titleSlider);
    sliderContent.appendChild(slideItem);
    console.log(slideItem)
}


//exla ukve arrowleft da arrow rights vaketebt
function arrowLeftClick() {
    if(sliderIndex == 0){
        sliderIndex = data.length -1;
        setSlide();
        return;
    }
    
    sliderIndex -= 1;
    setSlide();
}

function arrowRightClick() {
    if(sliderIndex == data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }

    sliderIndex += 1;
    setSlide();
}
arrowLeft.addEventListener('click', arrowLeftClick);

arrowRight.addEventListener('click', arrowRightClick);


//tviton ro gadavides shemdeg suratze, 3 wamshi ertxel gadava
setInterval( () => {
    arrowRightClick();

}, 3000)

setSlide();



