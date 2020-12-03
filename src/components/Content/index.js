import React from 'react'
import headerBg from '../../images/header-bg.jpg'
import images1 from '../../images/images1.jpg'
import images2 from '../../images/images2.jpg'
import images3 from '../../images/images3.jpg'
import images4 from '../../images/images4.jpg'
import images5 from '../../images/images5.jpg'
import images6 from '../../images/images6.jpg'
import images7 from '../../images/images7.jpg'
import images8 from '../../images/images8.jpg'
import './index.less'

/*
 *
 *
 *
 *
 * 1、卓冠书法：https://jinshuju.net/f/nos6f5
 * 2、嘿丫咪轮滑运动馆：https://jinshuju.net/f/nmB5nl
 * 3、口才宝语商学院：https://jinshuju.net/f/msIhWB
 * 4、新亚艺术中心：https://jinshuju.net/f/R44h9K
 * 5、菁禾艺术培训：https://jinshuju.net/f/gFfsPJ
 * 6、立祥跆拳道：https://jinshuju.net/f/WNDs1B
 * 7、AI竞技编程：https://jinshuju.net/f/HELyKH
 * */
export default function Content() {
  return (
    <div className="content">
      <img className="images" src={headerBg} alt="" />
      <a href="https://jinshuju.net/f/nos6f5">
        <img className="images" src={images1} alt="" />
      </a>
      <a href="https://jinshuju.net/f/nmB5nl">
        <img className="images" src={images2} alt="" />
      </a>
      <a href="https://jinshuju.net/f/msIhWB">
        <img className="images" src={images3} alt="" />
      </a>
      <a href="https://jinshuju.net/f/R44h9K">
        <img className="images" src={images4} alt="" />
      </a>
      <a href="https://jinshuju.net/f/gFfsPJ">
        <img className="images" src={images5} alt="" />
      </a>
      <a href="https://jinshuju.net/f/WNDs1B">
        <img className="images" src={images6} alt="" />
      </a>
      <a href="https://jinshuju.net/f/HELyKH">
        <img className="images" src={images7} alt="" />
      </a>
      <img className="images" src={images8} alt="" />
    </div>
  )
}
