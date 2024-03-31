import React from 'react';
import Block from './Block';
import Images from '../img/image.avif'
import human from '../img/Max.avif'
import mexico from '../img/image (1).avif'
import perez from '../img/image (2).avif'
import british from '../img/british.avif'
import russel from '../img/russel.avif'
import lewis from '../img/lewis.avif'
import polsh from '../img/polsha.avif'
import charles from '../img/charles.avif'
import ispan from '../img/ispan.avif'
import carlos from '../img/carlos.avif'
import austr from '../img/aust.avif'
import oscar from '../img/oscar.avif'
import norris from '../img/norris.avif'
import canada from '../img/canada.avif'
import stroll from '../img/stroll.avif'
import alonso from '../img/alonso.avif'
import france from '../img/france.avif'
import ocon from '../img/franhuman.avif'
import gasly from '../img/casly.avif'
import thailand from '../img/thailand.avif'
import albon from '../img/albon.avif'
import usa from '../img/usa.avif'
import logan from '../img/logan.avif'
import daniel from '../img/daniel.avif'
import tokio from '../img/tokio.avif'
import yiki from '../img/yiky.avif'
 import grekimg from '../img/greksia.avif'
 import bootas  from '../img/bottas.avif'
 import china from '../img/china.avif'
 import zhou  from '../img/zhou.avif'
 import dania from '../img/dania.avif'
 import kevin from '../img/kevin.avif'
import german from '../img/german.avif'
import nico from '../img/nico.avif'



const Drivers = () => {
    return (
        <div className='container'>
        <div className="driv-line"></div>
        <div className='driv'>
        <h1>F1 Drivers 2024</h1>
        <p>  Check out this season's official F1 line-up. Full breakdown of drivers, points and current <br/> positions. Follow your favourite F1 drivers on and off the track.</p>
        </div> 
         <div className="drivers">
          <Block name={"MAX"} surname={"VERSTARPEN"} flag={Images} form={"Red Bull Racing"} human={human} id={1} color={"black"} />
          <Block name={"SERGIO"} surname={"PEREZ"} flag={mexico} form={"Red Bull Racing"} human={perez} id={11} color={"red"}/>
          <Block name={"GEORGE"} surname={"RUSSEL"} flag={british} form={"Mersedes"} human={russel} id={63} color={"green"}/>
          <Block name={"LEWIS"} surname={"HAMILTON"} flag={british} form={"Mersedes"} human={lewis} id={44} color={"yellow"}/>
          <Block name={"CHARLES"} surname={"LECLERG"} flag={polsh} form={"Ferrari"} human={charles} id={16} color={"orange"}/>
          <Block name={"CARLOS"} surname={"SAINS"} flag={ispan} form={"Ferrari"} human={carlos} id={55} color={"orange"}/>
          <Block name={"OSKAR"} surname={"PLASTRI"} flag={austr} form={"Mcleran"} human={oscar} id={81} color={"gray"}/>
          <Block name={"LANDO"} surname={"NORRIS"} flag={british} form={"Mcleran"} human={norris} id={4} color={"gray"}/>
          <Block name={"LANGE"} surname={"STRONG"} flag={canada} form={"Aston Martin"} human={stroll} id={18} color={"teal"}/>
          <Block name={"FERNARDO"} surname={"ALONSO"} flag={ispan} form={"Aston Martin"} human={alonso} id={14} color={"teal"}/>
          <Block name={"ESTEBAN"} surname={"OCON"} flag={france} form={"Alpine"} human={ocon} id={31} color={"violet"}/>
          <Block name={"PIERRE"} surname={"GASLY"} flag={france} form={"Alpine"} human={gasly} id={10} color={"violet"}/>
          <Block name={"ALEXANDER"} surname={"ALBON"} flag={thailand} form={"Williams"} human={albon} id={23} color={"pink"}/>
          <Block name={"LOGAN"} surname={"SARGEANT"} flag={usa} form={"Williams"} human={logan} id={2} color={"black"}/>
          <Block name={"DANIEL"} surname={"RICCIARDO"} flag={austr} form={"RB"} human={daniel} id={3} color={"black"}/>
          <Block name={"YIKI"} surname={"TSUNADO"} flag={tokio} form={"RB"} human={yiki} id={22} color={"black"}/>
          <Block name={"VALTTERI"} surname={"BOTTAS"} flag={grekimg} form={"Kick Sauder"} human={bootas} id={77} color={"black"}/>
          <Block name={"ZHOU"} surname={"GUANYE"} flag={china} form={"Kick Sauder"} human={zhou} id={24} color={"black"}/>
          <Block name={"KEVIN"} surname={"MACNUSSEN"} flag={dania} form={"Naas F1 Team"} human={kevin} id={20} color={"blue"}/>
          <Block name={"NICO"} surname={"HULKENBURG"} flag={german} form={"Naas F1 Team"} human={nico} id={27} color={"blue"}/>
          



        </div>
        </div>
    );
};

export default Drivers;