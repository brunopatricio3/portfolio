import React from 'react';
import '../../../styles/main.scss';
import { useTranslation } from 'react-i18next';

function SectionAbout(props) {
  const { t, i18n } = useTranslation();

  return (
    <div id="aboutme" className="section-about">
      <div className=" container">
        <div className="row margin-bottom-md">
          <div className="col-sm">
            <h2 className="main-title">
              {t('aboutme.title')}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <p className="main-text"></p>
          </div>
          <div className="col-sm-8">
            <p className="main-text">
              {t('aboutme.summary_content_one')}            
            </p>
            <p className="main-text">
              {t('aboutme.summary_content_two')}            
            </p>
            <p className="main-text">
              {t('aboutme.summary_content_three')}            
            </p>
          </div>
        </div>
      </div>  
    </div>  
  );
}

export default SectionAbout;
