const gallery = document.querySelector(".gallery");

export function createGallery(images){
   
    const galleryElement = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads})=>
    `<li class="gallery-element">
    <img class="gallery-element-img" src=${webformatURL} alt=${tags}>
    <div class="element-description">
    <ul class="description-list">
        <li>
        <p>Likes</p>${likes}
        </li>
        <li>
        <p>Views</p>${views}
        </li>
        <li>
        <p>Comments</p>${comments}
        </li>
        <li>
        <p>Downloads</p>${downloads}
        </li>
    </ul>
    
    </div>
    
    </li>`
    
    );
    gallery.insertAdjacentHTML("beforeend", galleryElement.join(''));

};

export function clearGallery(){
    gallery.innerHTML = '';
};

function showLoader(){

};

function hideLoader(){

}