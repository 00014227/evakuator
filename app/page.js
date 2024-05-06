'use client'
import Image from "next/image";
import Time from "./assets/24.png"
import Phone from "./assets/phone.png"
import Track from "./assets/Track.png"
import Bike from "./assets/bike.png"
import Car from "./assets/passengercar.webp"
import Jeep from "./assets/jeep.webp"
import SpecTeck from "./assets/spectech.png"
import Pr1 from "./assets/pr1.png"
import Pr2 from "./assets/pr2.png"
import Pr3 from "./assets/pr3.png"
import Pr4 from "./assets/pr4.png"
import Galochka from "./assets/galochka.png"
import Coins from "./assets/b1.png"
import MiniTrack from "./assets/b2.png"
import AllDay from "./assets/b3.png"
import Burger from "./components/Burger";
import { Link } from "react-scroll"

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between px-24 bg-[#404040]">
    <main className="flex min-h-screen flex-col bg-[#404040]">
      <section className=" lg:h-screen" id="hero">
        <Burger />
        <div className="lg:hidden w-screen h-[1rem] bg-[#F39F1F]"></div>
        <div className=" lg:flex items-center 2xl:py-8 py-5 lg:px-24 px-10 justify-between lg:border-b-0 border-b border-white space-y-4">
          <h1 className=" text-[#F39F1F] font-extrabold 2xl:text-5xl lg:text-4xl text-3xl uppercase">эвакуатор 725</h1>
          <div className="flex items-center lg:gap-4 gap-2 ml-4 ">

            <Image src={Time} className=" lg:w-[2.5rem] w-[1.8rem] h-[1.9rem] lg:h-[2.6rem]" />

            <p className=" lg:block hidden text-white 2xl:text-4xl lg:text-2xl">Круглосуточно <br /> без выходных</p>
            <p className="lg:hidden block text-white 2xl:text-4xl lg:text-2xl">Круглосуточно без выходных</p>

          </div>

          <div className="flex lg:gap-4 gap-2 items-center ml-10">
            <Image src={Phone} className=" lg:w-[2.5rem] w-[1.8rem] h-[1.9rem] lg:h-[2.6rem]" />
            <p className="text-[#F39F1F] font-extrabold 2xl:text-5xl lg:text-4xl uppercase">+998  (95 ) 055-55-55</p>
          </div>
        </div>

        <nav className=" lg:block hidden w-full bg-[#F39F1F] 2xl:py-8 lg:py-5 pl-[16rem]">
          <ul className="flex justify-between max-w-[35rem]">
            <li className="text-[#404040] 2xl:text-2xl lg:text-xl font-semibold uppercase cursor-pointer"><Link to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500} >главная</Link></li>
            <li className="text-[#404040] 2xl:text-2xl lg:text-xl  font-semibold uppercase cursor-pointer"><Link to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500} >о нас</Link></li>
            <li className="text-[#404040] 2xl:text-2xl lg:text-xl  font-semibold uppercase cursor-pointer"><Link to="price"
              spy={true}
              smooth={true}
              offset={50}
              duration={500} >цены</Link></li>
            <li className="text-[#404040] 2xl:text-2xl lg:text-xl  font-semibold uppercase cursor-pointer">
              <a href="tel:+998950555555">вызвать</a>
              
              </li>
          </ul>
        </nav>

        <dvi className="lg:flex justify-center items-center 2xl:gap-[9rem] lg:gap-[4rem]">
          <div className=" 2xl:mt-[6rem] lg:px-0 px-10">
            <Image src={Track} />
          </div>

          <form className=" flex flex-col lg:items-end items-center space-y-6 lg:mb-[10rem] mb-4 lg:px-0 px-10">
            <label className="2xl:text-5xl lg:text-4xl text-3xl text-white font-medium">Вызвать эвакуаторa</label>
            <input
              type="text"
              placeholder="Имя"
              className=" pl-4 max-w-[562px] max-h-[80px] w-full h-[3rem] rounded-xl bg-[#D9D9D9]" />
            <input
              type="text"
              placeholder="Введите номер"
              className=" pl-4 max-w-[562px] max-h-[80px] w-full h-[3rem] rounded-xl bg-[#D9D9D9]" />
            <div className=" flex justify-end items-end">
              <button className=" bg-[#F5900D] mr-auto text-white px-9 py-3 rounded-md">Вызвать</button>

            </div>
          </form>
        </dvi>
      </section>
      <div className=" bg-[#F39F1F] 2xl:py-8 py-5 flex justify-center px-10">
        <a href="tel:+998950555555" className=" text-[#404040] text-center border-2 border-[#404040] px-8 py-2 rounded-xl text-2xl font-extrabold hover:text-white hover:border-white">Вызвать эвакуатор от 100000 сум</a>
      </div>
      <section id="price" className="flex flex-col justify-center  pt-12 px-10 pb-8">
        <h2 className="text-[#F39F1F] text-center font-bold lg:text-6xl text-3xl">Цены на эвакуации</h2>

        <div className="lg:flex md:grid grid-cols-2 gap-5 mx-auto justify-between mt-12 lg:space-y-0 space-y-4">


          <div class=" max-w-[300px] bg-white flex flex-col justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <Image class="rounded-t-lg mt-10" src={Bike} alt="" />

            <div class="p-5 space-y-7">

              <h5 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Эвакуация мотоциклов</h5>

              <p className=" text-xl text-center">от <span className=" font-bold text-2xl">100.000</span> сум</p>
              <a href="tel:+998950555555" class="inline-flex items-center ml-[4rem]  px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Заказать

              </a>
            </div>
          </div>

          <div class=" max-w-[300px] flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <Image class="rounded-t-lg mt-10" src={Car} />

            <div class="p-5 space-y-7">

              <h5 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Эвакуация легковых автомобилей</h5>

              <p className=" text-xl text-center">от <span className=" font-bold text-2xl">200.000</span> сум</p>
              <a href="tel:+998950555555" class="inline-flex items-center ml-[5rem]    px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Заказать

              </a>
            </div>
          </div>

          <div class=" max-w-[300px] flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <Image class="rounded-t-lg mt-10" src={Jeep} />

            <div class="p-5 space-y-7">

              <h5 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Эвакуация внедорожников до 4т</h5>

              <p className=" text-xl text-center">от <span className=" font-bold text-2xl">300.000</span> сум</p>
              <a href="tel:+998950555555" class="inline-flex items-center ml-[5rem]    px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Заказать

              </a>
            </div>
          </div>

          <div class=" max-w-[300px] flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <Image class="rounded-t-lg mt-10" src={SpecTeck} />

            <div class="p-5 space-y-7">

              <h5 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Перевозка спецтехники до 4т</h5>

              <p className=" text-xl text-center">от <span className=" font-bold text-2xl">400.000</span> сум</p>
              <a href="tel:+998950555555" class="inline-flex items-center ml-[5rem]    px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Заказать

              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className=" bg-white  ">
        <div className="w-full h-[1.7rem] bg-[#F39F1F]"></div>
        <div className="flex flex-col justify-center items-center pt-10 pb-14 px-10">
          <h2 className=" lg:text-5xl text-3xl text-[#404040] font-bold">ЭВАКУАТОР 725 ДЕШЕВО</h2>
          <p className=" text-[#F39F1F] lg:text-3xl text-2xl font-bold mt-4">Эвакуация от 100 000 сум — это реально выгодно!</p>

          <p className="lg:w-[70rem] text-[#404040] lg:mt-16 mt-10 font-medium lg:text-2xl text-xl">
            Эвакутор 725 – ваш надежный партнер в сфере аварийной и технической помощи на дорогах Ташкента! Мы компания, предоставляющий услуги по эвакуации автомобилей в городе и его окрестностях. С помощью нашего профессионализма мы гарантируем качественное обслуживание по доступным ценам.<br />
          </p>
          <p className="lg:w-[70rem] text-[#404040] lg:mt-16 mt-8 font-medium lg:text-2xl text-xl">Мы - новая компания, успешно действующая на рынке транспортных услуг. Мы заботимся о безопасности автомобильных перемещений и предоставляем помощь водителям на территории Ташкента. Наша команда гордится высокой квалификацией наших водителей-специалистов, которые регулярно проходят обучение и аттестацию в соответствии с требованиями государственных органов.</p>
        </div>
        <div className="w-full h-[1.7rem] bg-[#F39F1F]"></div>

      </section>

      <section className=" py-20 px-16">
        <div className="lg:flex md:grid grid-cols-2 justify-between items-center ">
          <div className="flex flex-col justify-center items-center">
            <Image src={Pr1} />
            <p className=" uppercase text-white text-xl">недорого</p>
            <p className=" text-white w-[15rem] text-center">Гарантия низкой цены. Зачем переплачивать когда есть мы? Эвакуация авто от 100.000 сум;</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image src={Pr2} />
            <p className=" uppercase text-white text-xl">СРОЧНО 24/7</p>
            <p className=" text-white w-[15rem] text-center">Средняя подача эвакуатора 20-25 минут. Работаем во всех районах города Ташкент;</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-[3rem]">
            <Image src={Pr3} />
            <p className=" uppercase text-white text-xl">С НАМИ БЕЗОПАСНО</p>
            <p className=" text-white w-[15rem] text-center">Аккуратно погрузим и бережно транспортируем в любую точку города Ташкент.  Принимаем к оплате банковские переводы;</p>
          </div>

          <div className="flex flex-col justify-center items-center mt-[1.5rem]">
            <Image src={Pr4} />
            <p className=" uppercase text-white text-xl">ВСЕ ВИДЫ УСЛУГ</p>
            <p className=" text-white w-[15rem] text-center">Гарантия низкой цены. Зачем переплачивать когда есть мы? Эвакуация авто от 100.000 сум;</p>
          </div>
        </div>
      </section>

      <section className=" bg-white ">
        <div className="flex flex-col justify-center lg:px-20 px-4 items-center pt-10 pb-16">
          <h2 className=" lg:text-5xl text-3xl  text-[#404040] font-bold uppercase">почему у нас лучше?</h2>
          <p className=" text-[#F39F1F] mt-6 lg:text-3xl text-center text-2xl font-bold">Эвакуатор 725 дешево у нас чем у других компаний и «частников»</p>

          <div className="flex lg:gap-[3rem] gap-[1.5rem]  items-center justify-center">
            <Image src={Galochka} className=' w-[3.5rem] h-[3.5rem]' />
            <p className="lg:w-[70rem] text-[#404040] mt-16 font-medium lg:text-2xl text-xl"><b>Быстрое реагирование и оперативность:</b> Наша компания гарантирует оперативное реагирование на вызовы клиентов. Мы понимаем, что каждая минута важна, особенно в случае аварийных ситуаций на дороге. Наша служба эвакуации прибудет к вам в кратчайшие сроки, чтобы предоставить профессиональную помощь.</p>
          </div>

          <div className="flex lg:gap-[3rem] gap-[1.5rem]  items-center justify-center">
            <Image src={Galochka} className=' w-[3.5rem] h-[3.5rem]' />
            <p className="lg:w-[70rem] text-[#404040] mt-16 font-medium lg:text-2xl text-xl"><b>Опытные специалисты и современное оборудование:</b> Наша команда состоит из высококвалифицированных специалистов, которые обладают богатым опытом работы в области эвакуации транспорта. Мы также оснащены современным оборудованием, что позволяет нам выполнять задачи эффективно и безопасно.</p>
          </div>

          <div className="flex lg:gap-[3rem] gap-[1.5rem] items-center justify-center">
            <Image src={Galochka} className=' w-[3.5rem] h-[3.5rem]' />
            <p className="lg:w-[70rem] text-[#404040] mt-16 font-medium lg:text-2xl text-xl"><b>Прозрачная ценовая политика и высокий уровень обслуживания:</b> Мы ценим доверие наших клиентов, поэтому предлагаем прозрачную ценовую политику без скрытых дополнительных платежей. Наши клиенты всегда могут рассчитывать на профессиональное обслуживание и индивидуальный подход к каждой ситуации.</p>
          </div>
        </div>
        <div className="w-full h-[1.7rem] bg-[#F39F1F]"></div>

      </section>

      <footer className=" py-10 lg:px-20 px-10">
        <div className="lg:flex justify-between space-y-4">
          <div className="flex gap-5 items-center">
            <Image className=" w-[2.5rem] h-[3rem]" src={Coins} />
            <p className=" text-white 2xl:text-2xl lg:text-lg font-semibold uppercase">низкие<br /> цены</p>
          </div>

          <div className="flex gap-5 items-center">
            <Image className=" w-[2.5rem] h-[3rem]" src={MiniTrack} />
            <p className=" text-white 2xl:text-2xl lg:text-lg font-semibold uppercase">быстрая<br />подача</p>
          </div>

          <div className="flex gap-5 items-center">
            <Image className=" w-[2.5rem] h-[3rem]" src={AllDay} />
            <p className=" text-white 2xl:text-2xl lg:text-lg font-semibold uppercase">Круглосуточно<br />и без выходных</p>
          </div>

          <div className=" gap-4 lg:flex hidden">
            <Image src={Phone} className=" w-[2.5rem] h-[2.6rem]" />
            <p className="text-[#F39F1F]  font-extrabold 2xl:text-5xl lg:text-4xl text-2xl  uppercase">+998  (95 ) 055-55-55</p>
          </div>

        </div>
        <div className=" gap-4 lg:hidden flex items-center mt-4">
          <Image src={Phone} className=" w-[2.5rem] h-[2.6rem]" />
          <p className="text-[#F39F1F]  font-extrabold 2xl:text-5xl lg:text-4xl text-2xl  uppercase">+998  (95 ) 055-55-55</p>
        </div>
      </footer>
    </main>
  );
}
