import React from 'react';
import profilePic from '../img/logo.png';

const KisiselBilgiler = () => {
  return (
    <div className="personal-info">
      <img src={profilePic} alt="Beyzanur Dalgacı" className="profile-img" />
      <h1>Beyzanur DALGACI</h1>
      <p>Make Up - Specialist</p>
      <br/>
      <p><b>İletişim Bilgileri:</b></p>
      <p>Eposta: beyzanurdalgaci27@icloud.com</p>
      <br/>
      <p>
      "Makyaj sanatçılığına olan ilgimi eğitimler ve online kaynaklarla pekiştiriyor, çeşitli teknikleri öğrenerek pratik yapıyorum. 
      Farklı cilt tipleri, renk teorisi ve makyaj trendleri üzerine çalışarak yeteneklerimi geliştiriyorum. 
      Sosyal medya ve portföy projeleri ile kendimi daha da profesyonelleştirip, bu alanda kariyerimi ilerletmeyi hedefliyorum."
      </p>
    </div>
  );
};

export default KisiselBilgiler;
