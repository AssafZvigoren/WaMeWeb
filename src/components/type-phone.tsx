import React, {useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput, {parsePhoneNumber} from 'react-phone-number-input'

export function TypePhone() {
  const [phoneNumber, setPhoneNumber] = useState('')

  const pasteFromClipboard = async () => {
    const text = await navigator.clipboard.readText()
    if (parsePhoneNumber(text)) {
      setPhoneNumber(text)
    }
  }

  const openWhatsapp = () => {
    const number = parsePhoneNumber(phoneNumber)
    if (number) {
      const url = `http://wa.me/${number.countryCallingCode}${number.nationalNumber}`
      window.open(url, '_blank')
    }
  }

  const resetNumber = () => {
    setPhoneNumber('')
  }

  const digitTap = (digit: String) => {
    switch (digit) {
      case '+': {
        if (phoneNumber.length === 0) {
          setPhoneNumber('+')
        }

        break
      }

      case '-': {
        if (phoneNumber.length !== 0) {
          setPhoneNumber(phoneNumber.substring(0, phoneNumber.length - 1))
        }

        break
      }

      default: {
        setPhoneNumber(phoneNumber + digit)
      }
    }
  }

  return (
    <>
      <div>
        <PhoneInput
            className="PhoneInputWrapper"
            placeholder="Enter phone number"
            value={phoneNumber}
            // @ts-ignore
            onChange={setPhoneNumber}
          />
          <button onClick={resetNumber}>clear</button>
          <button onClick={pasteFromClipboard}>copy</button>
          <button onClick={openWhatsapp}>WaMe</button>
      </div>
      <div className="digits">
        <div className="digit-row">
          <div className="digit-col" onClick={() => digitTap('1')}><span className="digit">1</span></div>
          <div className="digit-col" onClick={() => digitTap('2')}><span className="digit">2</span></div>
          <div className="digit-col" onClick={() => digitTap('3')}><span className="digit">3</span></div>
        </div>
        <div className="digit-row">
          <div className="digit-col" onClick={() => digitTap('4')}><span className="digit">4</span></div>
          <div className="digit-col" onClick={() => digitTap('5')}><span className="digit">5</span></div>
          <div className="digit-col" onClick={() => digitTap('6')}><span className="digit">6</span></div>
        </div>
        <div className="digit-row">
          <div className="digit-col" onClick={() => digitTap('7')}><span className="digit">7</span></div>
          <div className="digit-col" onClick={() => digitTap('8')}><span className="digit">8</span></div>
          <div className="digit-col" onClick={() => digitTap('9')}><span className="digit">9</span></div>
        </div>
        <div className="digit-row">
          <div className="digit-col" onClick={() => digitTap('+')}><span className="digit">+</span></div>
          <div className="digit-col" onClick={() => digitTap('0')}><span className="digit">0</span></div>
          <div className="digit-col" onClick={() => digitTap('-')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-600 -50 2000 512"><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg></div>
        </div>
      </div>
    </>
  )
}