import React from 'react'
import QueueAnim from 'rc-queue-anim'
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
 * 8、AI竞技编程：https://jinshuju.net/f/ZqQ0FW
 * */
export default function Content() {
  return (
    <div className="content">
      <QueueAnim duration={600} delay={200}>
        <div key={11}>
          <img className="images" src={headerBg} alt="" />
        </div>
        <div key={1}>
          <a href="https://jinshuju.net/f/nos6f5">
            <img className="images" src={images1} alt="" />
          </a>
        </div>
        <div key={2}>
          <a href="https://jinshuju.net/f/nmB5nl">
            <img className="images" src={images2} alt="" />
          </a>
        </div>
        <div key={3}>
          <a href="https://jinshuju.net/f/msIhWB">
            <img className="images" src={images3} alt="" />
          </a>
        </div>
        <div key={4}>
          <a href="https://jinshuju.net/f/R44h9K">
            <img className="images" src={images4} alt="" />
          </a>
        </div>
        <div key={5}>
          <a href="https://jinshuju.net/f/gFfsPJ">
            <img className="images" src={images5} alt="" />
          </a>
        </div>
        <div key={6}>
          <a href="https://jinshuju.net/f/WNDs1B">
            <img className="images" src={images6} alt="" />
          </a>
        </div>
        <div key={7}>
          <a href="https://jinshuju.net/f/HELyKH">
            <img className="images" src={images7} alt="" />
          </a>
        </div>
        <div key={8}>
          <a href="https://jinshuju.net/f/ZqQ0FW">
            <img className="images" src={images8} alt="" />
          </a>
        </div>
      </QueueAnim>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Loading() {
  return <div className="loading">加载中...</div>
}
