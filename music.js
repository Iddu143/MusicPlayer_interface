const music= new Audio("vande.mp3");

//create array

const songs=[
    {
        id:'1',
        songName:'Lut Gaya <br> <div class="subtitle">Lute gaya</div> ',
        poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img1.jpg"
    },
    {
        id:'2',
        songName:'Bekhayali<br> <div class="subtitle">Kabir Singh</div> ',
        poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img3.jpg"
    },
    // {
    //     id:'3',
    //     songName:'vaste<br> <div class="subtitle">Vaste</div> ',
    //     poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img3.jpg"
    // },
    // {
    //     id:'4',
    //     songName:'Ashiq <br> <div class="subtitle">Vaste</div> ',
    //     poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img4.jpg"
    // },
    // {
    //     id:'5',
    //     songName:'Kesariya <br> <div class="subtitle">Brahmastra</div> ',
    //     poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img5.jpg"
    // },
    // {
    //     id:'6',
    //     songName:'Samaja varagamana <br> <div class="subtitle">Samaja Varagamana</div> ',
    //     poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img6.jpg"
    // },
    // {
    //     id:'7',
    //     songName:'Padipadi leche <br> <div class="subtitle">Padi apdi Leche manasu</div> ',
    //     poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img7.jpg"
    // },
    // {
    //     id:'8',
    //     songName:'Mira mira meesam<br> <div class="subtitle">Katama Rayudu</div> ',
    //     poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img8.jpg"
    // },
    // {
    //     id:'9',
    //     songName:'Bheemla Nayak<br> <div class="subtitle">Bheemla nayak</div> ',
    //     poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img9.jpg"
    // },
    // {
    //     id:'10',
    //     songName:'On my way <br> <div class="subtitle">Alan Walker</div> ',
    //     poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img9.jpg"
    // },
    // {
    //     id:'11',
    //     songName:'sun raha <br> <div class="subtitle">Vaste</div> ',
    //     poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img10.jpg"
    // },
    // {
    //     id:'12',
    //     songName:'sun raha <br> <div class="subtitle">Vaste</div> ',
    //     poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img11.jpg"
    // },
    // {
    //     id:'13',
    //     songName:'sun raha <br> <div class="subtitle">Vaste</div> ',
    //     poster:"C:/Users/md221/OneDrive/Desktop/New folder/js/images/img12.jpg"
    // },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].poster;
    element.getElementsByTagName('h5')[0].inneerHTML=songs[i].songName;
})