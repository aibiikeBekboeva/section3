import React from 'react';
import book from '../../asets/image 57.png';
import location from '../../asets/location_on.svg'
import'./Three.css'


const Three = () => {
    return (
        <div className='section3'>

            <div className='container3'>
                <div>
                <div className={'book'}>
                    <img src={book} alt=""/>
                </div>
                    <div className={'info'}>
                        <div className={'buy_text'}>
                        <p className={'title'}>Методическое пособие:</p>
                        <p className={'p1_3'}>Методическое пособие по правилам дорожного движения (пдд) с иллюстрациями и комментариями .
                            методическое пособие составлено с дополнениями и пояснениями к дорожным знакам и
                            разметкам.</p>
                        <p className={'p2_3'}>При покупке оптом возможны скидки. за более подробной информацией обращаться напрямую к
                            Руслану
                            Жакшылыковичу по телефону или WhatsApp</p>
                        <p className={'p3_3'}>Вы можете приобрести данное пособие по адресу либо по звонку:</p>
                        </div>
                        <div className={'buy_info'}>
                            <img className={'location'} src={location} alt=""/>
                            <a className={'a_sec3'}
                               href="https://www.google.com/maps/place/Codify+Academy/@42.8294237,74.6165373,18z/data=!4m14!1m7!3m6!1s0x389eb673471bc9c3:0x4a44084963e5b564!2z0JTQodCaINCh0L_QvtGA0YLQuNCy0L3Ri9C5INC60L7QvNC_0LvQtdC60YE!8m2!3d42.8298683!4d74.6175974!16s%2Fg%2F1vnth82m!3m5!1s0x389eb7000c5a29e3:0x61a5d35d76e6095d!8m2!3d42.8300734!4d74.6182652!16s%2Fg%2F11y318cn4y?entry=ttu">Сухе
                                Ботора 26/1</a>
                            <div className="input-group">
                                <input type="text" id="name" placeholder=" "/>
                                <label htmlFor="name">Номер телефона</label>
                            </div>
                            <button className='buy_btn'>КУПИТЬ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Three;