import content from '../../localization/content'
import novey from '../../assets/images/novey 1.png'
import setbook from '../../assets/images/setbook  1.png'
import naf_acadeny from '../../assets/images/naf academy-01 2.png'
import safar from '../../assets/images/safar sjnvfjdv 1.png'
import filologiya from '../../assets/images/Rectangle 39249.png'
import it_house from '../../assets/images/red orge.png'
import dengiz from '../../assets/images/dengiz brand-03.png'
import UMD from '../../assets/images/logo umdsoft-01.png'
import NAf_invest from '../../assets/images/naf logo vector 1.png'
import ANNajm from '../../assets/images/annaajm.png'
import click from '../../assets/images/article-original.png'

function Partners({ lang }) {
    return (
        <section className="partners" id='partners'>
            <div className="container">
                <div className="services__heading-box">
                    <p className="services__heading__title">{content[lang].partners.title}</p>
                    <h2 className="services__heading">{content[lang].partners.heading}</h2>
                </div>

                <ul className='partners__list'>
                    <li className='partners__item'>
                        <img src={novey} alt="novaey" width={150} height={150} />
                    </li>
                    <li className='partners__item'>
                        <img src={setbook} alt="setbook" width={150} height={150} />
                    </li>
                    <li className='partners__item'>
                        <img src={naf_acadeny} alt="Naf IT Academy" width={150} height={150} />
                    </li>
                    <li className='partners__item'>
                        <img src={safar} alt="Safar" width={150} height={150} />
                    </li>
                    <li className='partners__item'>
                        <img src={filologiya} alt="filologiya" width={150} height={150} />
                    </li>
                    <li className='partners__item'>
                        <img src={it_house} alt="IT HOUSE" width={150} height={150} />
                    </li>
                    <li className='partners__item'>
                        <img src={dengiz} alt="Dengiz" width={150} height={150} />
                    </li>
                    <li className='partners__item'>
                        <img src={UMD} alt="UMD Soft" width={150} height={150} />
                    </li>
                    <li className='partners__item'>
                        <img src={NAf_invest} alt="Naf Invest" width={150} height={150} />
                    </li>
                    <li className='partners__item'>
                        <img src={ANNajm} alt="AN NAJM" width={150} height={150} />
                    </li>
                    <li className='partners__item'>
                        <img src={click} alt="Click" width={150} height={150} />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Partners