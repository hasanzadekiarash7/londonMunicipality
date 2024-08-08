import React from 'react'
import LmButton from './LmButton';
import '../assets/styles/form.scss';
const LmForm = () => {
    return (
        <div className='width-full my-form d-flex flex-center'>
            <form action="" className='max-width-1200 width-full'>
                <h1>Don’t miss out: get important updates about London</h1>
                <p>* Indicates required field</p>
                <div className="input-form">
                    <label htmlFor="username">username *</label>
                    <input type="text" id='username' />
                </div>
                <div className="input-form">
                    <label htmlFor="email">email *</label>
                    <input type="text" id='email' />
                </div>
                <div className="input-form">
                    <label htmlFor="">continent</label>
                    <select>
                        <option value=""></option>
                        <option value="">america</option>
                        <option value="">asia</option>
                        <option value="">europe</option>
                    </select>
                </div>
                <div className='check-box'>
                    <label htmlFor="c1">
                        <input type="checkbox" name="" id="c1" />
                        Get updates from the Mayor
                    </label>
                    <label htmlFor="c2">
                        <input type="checkbox" name="" id="c2" />
                        Get updates from the London Assembly
                    </label>
                    <p>
                        The information you are providing will be
                        used only for the purpose for which you
                        provide it. If you are selecting to receive
                        our newsletter(s), you are providing your
                        consent for us to process your personal data
                        in this manner for this purpose. We will not
                        add you to any other mailing lists unless you
                        ask us to and we will not pass your details on to
                        third parties. Your personal data will be
                        handled in accordance with our privacy policy.
                    </p>
                </div>
                <div className='check-btn'>
                <LmButton text='submit' widthFull></LmButton>
                </div>
            </form>
        </div>
    )
}

export default LmForm
