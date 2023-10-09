import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";

const Banner = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="150"
      data-aos-duration="2000"
      className="carousel  w-full h-[500px]"
    >
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={banner1} className="w-full rounded-lg bg-slate-700" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// import BannerAnim from 'rc-banner-anim';
// import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
// import banner1 from '../../assets/images/banner1.jpg'

// // import './assets/index.less';
// // import '../assets/index.less';

// const { Element } = BannerAnim;
// const BgElement = Element.BgElement;
// const Banner=()=> {
//   return (
//     <BannerAnim autoPlay>
//       <Element key="aaa"
//         prefixCls="banner-user-elem"
//       >
//         <BgElement
//           key="bg"
//           className="bg"
//           style={{
//             backgroundImage:`url(${banner1})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <QueueAnim name="QueueAnim">
//           <h1 key="h1">Ant Motion Demo</h1>
//           <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
//         </QueueAnim>
//         <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
//           Ant Motion Demo.Ant Motion Demo
//         </TweenOne>
//       </Element>
//       <Element key="bbb"
//         prefixCls="banner-user-elem"
//       >
//         <BgElement
//           key="bg"
//           className="bg"
//           style={{
//             backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <QueueAnim name="QueueAnim">
//           <h1 key="h1">Ant Motion Demo</h1>
//           <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
//         </QueueAnim>
//         <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
//           Ant Motion Demo.Ant Motion Demo
//         </TweenOne>
//       </Element>
//     </BannerAnim>
//   );
// }

// export default Banner;
