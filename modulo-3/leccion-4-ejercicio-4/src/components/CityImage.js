import React from "react";

function CityImage(props) {
  const destinyPhoto = {
    Praga:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/larazon/BKQKEQFJDNDSZKQJGWHQYPLNQ4.jpg",
    "Buenos Aires":
      "https://enterate24backup.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/04/29184908/buenos-aires-1562985279289.jpg",
    Boston:
      "https://www.visittheusa.co/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2017-06/de6f732d8950b74b550d885beab53c37.jpeg?itok=AHJDbUok",
    Sidney:
      "https://mejorepocapara.net/wp-content/uploads/2019/10/cual-es-la-mejor-epoca-para-viajar-a-sidney.jpg",
    Tokyo:
      "https://media.istockphoto.com/photos/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan-picture-id1131743616?k=6&m=1131743616&s=612x612&w=0&h=9NMsEs972mKE1QS1eDkN7I_nMoYyfLk_N9gtmvB07kc=",
  };
  return (
    <div>
      <h2>Tu destino es viajar a {props.city}</h2>
      <img src={destinyPhoto[props.city]} alt={props.city} />
    </div>
  );
}

export default CityImage;
