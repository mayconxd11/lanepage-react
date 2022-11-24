import React from 'react';
import './Main.css';

function Main(){
  return(
    <>
      <main>
        <div id='video'>
          <iframe width="760" height="515" src="https://www.youtube.com/embed/i5fcFIUwOPA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div>
          <div>
            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/81fd23f224f746c483aaae770013a861_9366/Camisa_1_CR_Flamengo_22-23_Vermelho_H18340_01_laydown.jpg" alt="Camisa Flamento 1" />
          </div>
          <div>
            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/37f6ecb428cc4f7086f4add00012d2a0_9366/Camisa_2_CR_Flamengo_22-23_Branco_H18341_01_laydown.jpg" alt="Camisa Flamento 2" />
          </div>
          <div>
            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0135dc5df4c14d2ea984aeec004f980d_9366/Camisa_3_CR_Flamengo_22-23_Vermelho_HD9358_01_laydown.jpg" alt="Camisa Flamento 3" />
          </div>
        </div>
      </main>
    </>
  );
}

export { Main };