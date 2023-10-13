
import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';


import pic from "../../../assets/images/popular.png";

export default function index() {
   
    const [images, setImages] = useState(null);
    useEffect(() => {
      setImages([
          {
              "itemImageSrc": pic, 
          },
          {
              "itemImageSrc": pic, 
          },
          {
              "itemImageSrc": pic, 
          }
      ])
    }, [])
   
    const itemTemplate = (item) => {
        console.log(item)
        return <img src={item.itemImageSrc} alt={item} className="w-full h-full" />;
    };

    return (
        <div className="card">
            <Galleria value={images}  className="w-full h-[500px]" showThumbnails={false} showIndicators 
                    showIndicatorsOnItem="inside" indicatorsPosition="right" item={itemTemplate} />
        </div>
    )
}
