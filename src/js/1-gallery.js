import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
const homePage = document.querySelector('.home-page');
homePage.style.display = 'block';
homePage.style.width = '50px';
homePage.style.margin = '30px 0 15px 30px';
homePage.style.padding = '10px 20px';
homePage.style.fontSize = '16px';
homePage.style.color = '#fff';
homePage.style.backgroundColor = '#007BFF';
homePage.style.border = 'none';
homePage.style.borderRadius = '5px';
homePage.style.cursor = 'pointer';

const gallery = document.querySelector('.gallery');
gallery.style.display = 'flex';
gallery.style.maxWidth = '1178px';
gallery.style.flexWrap = 'wrap';
gallery.style.margin = '0 auto';
gallery.style.padding = '0';
gallery.style.gap = '24px';
gallery.style.justifyContent = 'center';

function imageItem(image) {
  return `
  <li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>
  `;
}

function imagesItems(images) {
  const markup = images.map(imageItem).join('');
  return markup;
}
gallery.innerHTML = imagesItems(images);

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.style.listStyle = 'none';
  item.style.width = '360px';

  const galleryImage = item.querySelector('.gallery-image');
  galleryImage.style.display = 'block';
  galleryImage.style.width = '100%';
  galleryImage.style.height = '200px';
  galleryImage.style.boxShadow = '4px 4px 10px rgba(0, 0, 0, 0.2)';
  galleryImage.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  overlayOpacity: 0.8,
  showCounter: false,
});

lightbox.on('shown.simplelightbox', function () {
  document.querySelector('.sl-wrapper').style.background = '#2E2F42';
});
