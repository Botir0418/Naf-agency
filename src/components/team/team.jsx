import content from '../../localization/content'
import Mironshoh from '../../assets/images/Mironshoh.png'
import Botir from '../../assets/images/botir.png'
function Team({ lang }) {
    return (
        <section className="team">
            <div className="container">
                <h2 className="team__heading">{content[lang].team.heading}</h2>

                <ul className='team__list'>
                    <li className='team__item'>
                        <img className='team__image'
                            src={Mironshoh}
                            alt="person's avatar"
                            width={210}
                            height={190} />
                        <h3 className='team__item__title'>Мироншох Насимов</h3>
                        <p className='team__item__info'>IT-эксперт, Основатель компании Naf</p>
                    </li>
                    <li className='team__item'>
                        <img className='team__image'
                            src={Botir}
                            alt="person's avatar"
                            width={210}
                            height={190} />
                        <h3 className='team__item__title'>Ботир Каримов </h3>
                        <p className='team__item__info'>Разработчик, Front-end</p>
                    </li>
                    <li className='team__item'>
                        <img className='team__image'
                            src={Mironshoh}
                            alt="person's avatar"
                            width={210}
                            height={190} />
                        <h3 className='team__item__title'>Мироншох Насимов</h3>
                        <p className='team__item__info'>IT-эксперт, Основатель компании Naf</p>
                    </li>
                    <li className='team__item'>
                        <img className='team__image'
                            src={Mironshoh}
                            alt="person's avatar"
                            width={210}
                            height={190} />
                        <h3 className='team__item__title'>Мироншох Насимов</h3>
                        <p className='team__item__info'>IT-эксперт, Основатель компании Naf</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Team