/* DECLARATION DES VARIABLES */
var span = document.querySelectorAll('.topcontent span')
var movies = document.querySelector('.movies')
var details = document.querySelector('.movie-detail')
var topContent =  document.querySelectorAll('.topcontent')

/* GESTION DES EVENEMENTS */
var Eventlistener = {
    topmovie_toggled : (ev)=>{
        console.log(ev.target)
    },
}

populaire.forEach(movItem => {
    var movie = ` <div class="movie-item">
            <div class="movie-image"><img src=${movItem.image} alt=""></div>
            <div class="movie-title"><h4>${movItem.title}</h4></div>
            </div>  ` 
    movies.innerHTML += movie 
});


var movieItems = document.querySelectorAll('.movie-item');

for (let index = 0; index < movieItems.length; index++) {
    const item = movieItems[index];
    for (let i = 0; i < populaire.length; i++) {
        const displayDetail = populaire[index];
        item.onclick = () => {
            item.classList.toggle('active');
           if (item.className.includes('active')) {
               details.innerHTML = displayDetail.detail
               item.classList.remove('survol')
           }else{
            details.innerHTML = " "
           }
        }
    }
    item.ondblclick = (ev) => {
        if (!topContent[0].children[1] && !topContent[1].children[1]) {
            item.classList.remove('active')
            top_Content_add(index, 0)
            item.style.display = "none"
            const topC = topContent[0].children[1];
            topC.onclick = (e) => {
                item.style.display = "block";
                top_Content_remove(0)
            }
        }
        else if(!topContent[0].children[1] && topContent[1].children[1]){
            item.classList.remove('active')
            top_Content_add(index, 0)
            item.style.display = "none"
            const topC = topContent[0].children[1];
            topC.onclick = (e) => {
                item.style.display = "block"
                top_Content_remove(0)
            }
        }
        else if(topContent[0].children[1] && !topContent[1].children[1]){
            item.classList.remove('active')
            top_Content_add(index, 1)
            item.style.display = "none"
            const topC = topContent[1].children[1];
            topC.onclick = (e) => {
                item.style.display = "block"
                top_Content_remove(1)
            }
        }
       else {
         null
       }
        
    }
    
    item.addEventListener("mousemove", () => {item.classList.add('survol');})
    item.addEventListener("mouseout", () => {item.classList.remove('survol');})
    
    
}

function top_Content_add(index, childrenNum) {
    var span = document.createElement('span');
            var img = document.createElement('img');
            img.src = populaire[index].image
            span.appendChild(img); 
            topContent[childrenNum].children[0].classList.add("topmovie2")
            topContent[childrenNum].appendChild(span);
            span.before(topContent[childrenNum].children[0])
}

function top_Content_remove(childrenNum) {
    topContent[childrenNum].removeChild(topContent[childrenNum].children[1]);
    topContent[childrenNum].children[0].classList.remove("topmovie2");
}


/* var movlib = location.origin+'/assets/ressources/movlib.json'

var movlibrary = async()=>{
    var respond = await fetch(movlib)
    var result = await respond.json()
    var movBiblio = await result
    let populaire = movBiblio.populaire
    return populaire
}

var movieBiblio = async()=>{
    populaire = await (movlibrary())
    var movie
    movies.innerHTML = " "
    populaire.forEach(movItem => {
        var movieItem = document.createElement("div")
        movieItem.classList.add('movie-item')
        var movieImage = document.createElement("div")
        movieImage.classList.add('movie-image')
        var img = document.createElement("img")
        img.src = movItem.image
        movieImage.appendChild(img)
        var movieTitle = document.createElement("div")
        movieTitle.classList.add('movie-title')
        var h4 = document.createElement("h4")
        h4.innerText = movItem.title
        movieTitle.appendChild(h4)
        movieItem.appendChild(movieImage)
        movieItem.appendChild(movieTitle)
        movies.appendChild(movieItem) 
       /*  movie = ` <div class="movie-item">
            <div class="movie-image"><img src=${movItem.image} alt=""></div>
            <div class="movie-title"><h4>${movItem.title}</h4></div>
            </div>  ` */
            /* movies.innerHTML += movie *
        }
    );
    
}
*/
