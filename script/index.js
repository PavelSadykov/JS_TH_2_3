function newImages(imagePaths) {
    const box = document.getElementById('box');
    let imagesHTML = '';
  
    for (const path of imagePaths) {
      imagesHTML += `<img src="${path.url}" alt="${path.alt}">`;
    }
  
    box.innerHTML = imagesHTML;
  }
  
  const images = [
    { url: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666389877_36-mykaleidoscope-ru-p-klassnaya-priroda-oboi-38.jpg', alt: 'Природа' },
    { url: 'https://avatars.mds.yandex.net/get-mpic/3732535/img_id185030336357311607.jpeg/9', alt: 'Природа2' },
    { url: 'https://o-pencil.ru/upload/iblock/486/4868992b39e9deee75b878cdcdb43702.jpg', alt: 'Рисунок' }
  ];

  newImages(images);