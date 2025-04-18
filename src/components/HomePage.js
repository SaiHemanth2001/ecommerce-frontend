import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import atc from './atc.jpg'
import ecom from './ecom.jpg'
import sm from './sm.webp'
import bags from './bags.avif'
import { useParams } from 'react-router-dom';
import Header from './Header';
const HomePage = () => {
  const { email } = useParams()

  return (
    <div>
      <Header email={email} />
      <br></br><br /><br /><br />
      <Carousel fade interval={1000}>
        <Carousel.Item>
          <img
            src={ecom}
            alt="First slide"
            width={900}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img

            src={atc}
            alt="Second slide"
            width={900}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img

            src={sm}
            alt="Third slide"
            width={900}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img

            src={bags}
            alt="Third slide"
            width={900}
            height={400}
          />
        </Carousel.Item>
      </Carousel>
      <br /><br />
      <h2 className="category-heading">Shop by Categories</h2>

      <div className="product-container1">
        <ul className="mystyle-products">
          <li className="product">
            <a href={`/category/clothing`}>
              <img alt="clothing" className="attachment-shop_catalog1" src="https://tinyurl.com/488my59y" />
              <h2 className="custom-font">Clothing</h2>
            </a>
            <a href={`/category/clothing`} className="btn btn-dark btn-circle btn-review" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion ion-ios-move"></i></a>
          </li>
        </ul>
        <ul className="mystyle-products">
          <li className="product">
            <a href={`/category/footwear`}>
              <img alt="footwear" className="attachment-shop_catalog1" src="https://tinyurl.com/2p9f7wv8" />
              <h2 className="custom-font">FootWear</h2>
            </a>
            <a href={`/category/footwear`} className="btn btn-dark btn-circle btn-review" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion ion-ios-move"></i></a>
          </li>
        </ul>
        <ul className="mystyle-products">
          <li className="product">
            <a href={`/category/miscellaneous`}>
              <img alt="miscellaneous" className="attachment-shop_catalog1" src="https://tinyurl.com/3t6mtsak" />
              <h2 className="custom-font">Miscellaneous</h2>
            </a>
            <a href={`/category/miscellaneous`} className="btn btn-dark btn-circle btn-review" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion ion-ios-move"></i></a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default HomePage