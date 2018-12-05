require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

let imagesData = require('../data/imageDatas.json');

//根据图片文件名生成URL
imagesData = (function getImageURL(imagesDataArray) {
  for (let  i = 0, j = imagesDataArray.length; i < j; i++) {
    let  singleImageData = imagesDataArray[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imagesDataArray[i] = singleImageData;
  }
  return imagesDataArray;
})(imagesData);


class AppComponent extends React.Component {
  render() {
    let  controllerUnits = [],imgFigures = [];

    Array.prototype.forEach(function (value) {
      imgFigures.push(<ImgFigure data={value}/>)
    });

    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
