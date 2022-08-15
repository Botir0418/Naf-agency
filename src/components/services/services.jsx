import content from "../../localization/content"

import Website from "../../assets/images/web-site.png"

function Services({ lang }) {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="services__heading-box">
                    <p className="services__heading__title">{content[lang].services.title}</p>
                    <h2 className="services__heading">{content[lang].services.heading}</h2>
                </div>

                <ul className="services__list">
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Veb-saytlar</h3>
                        <p className="services__item__info">
                            Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqaramiz
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Ui/Ux dizayn</h3>
                        <p className="services__item__info">
                        Loyiha MindMapʼini ishlab chiqish va ushbu arxitektura asosida optimal yechimga ega dizaynlarni chizish
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">CRM tizimlar</h3>
                        <p className="services__item__info">
                        Biznesni va jarayonlarni avtomatlashtirish, kanselyariya ishlarini 100% gacha kamaytiruvchi boshqaruv elektron tizimlarini ishlab chiqish          
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Mobile ilovalar</h3>
                        <p className="services__item__info">
                        Istalgan qiyinchilikdagi mobil ilovalarni ishlab chiqish va ularni texnik qoʻllab-quvvatlash.
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Logo branding</h3>
                        <p className="services__item__info">
                        Loyihangiz uchun yagona va oʻziga xos boʻlgan logotipni ishlab chiqish va uni brending qoidalarini ham yaratib berish
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Marketing</h3>
                        <p className="services__item__info">
                        Biznesni rivojlantirish uni ommaga tanitish, mijozlar bilan aloqalarni yaxshilash va uni ko’paytirishga yordam beramiz        
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Telegram bot</h3>
                        <p className="services__item__info">
                        Loyihangiz uchun foydali va mijozlaringizga qulay bo’lgan botlarni taqdim etamiz
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Services