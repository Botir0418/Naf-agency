import contactBg from '../../assets/images/Rectangle 39240.png'

function Contacts( ) {
    return (
        <section className="contact" id='contact'>
            <div className="container">
                <div className="contact-bg"><img src={contactBg} alt="contactBg" /></div>
                <div className="contact-bg"><img src={contactBg} alt="contactBg" /></div>
                <div className="contact-bg"><img src={contactBg} alt="contactBg" /></div>
                <div className="contact-bg"><img src={contactBg} alt="contactBg" /></div>
                <div className="contact-bg"><img src={contactBg} alt="contactBg" /></div>
                <div className="contact-bg"><img src={contactBg} alt="contactBg" /></div>
                {/* <div className="circleRotate"></div> */}
                <p className="contact__title">Sizda g’oya bormi?</p>
                <h2 className="contact__heading">BIZGA BOG'LANING G'OYALARNI AMALGA OSHIRING!</h2>
                <form>
                    <div className='contacts__input-box'>
                        <label >
                            <p className='contacts__input-name__label'>Ism</p>
                            <input className='contacts__input-name' type="text" name='name' placeholder='Ismingizni kiriting' required />
                        </label>
                        <label >
                            <p className='contacts__input-phone__label'>Telefon <span className=''>(Ko’rsatilishi shart)</span></p>
                            <input className='contacts__input-phone' type="phone" name='phone' placeholder='+998958883537' required />
                        </label>
                    </div>
                    <label className='contacts__input-message__label-box'>
                        <p className='contacts__input-message__label'>Xabaringizni qoldiring</p>
                        <textarea className='contacts__input-message' name="message" placeholder='Xabar yozish...'></textarea>
                    </label>

                    <button className='contacts__btn'>Yuborish</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts