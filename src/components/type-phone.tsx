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

  return (
    <div>      
      <PhoneInput
          placeholder="Enter phone number"
          value={phoneNumber}
          // @ts-ignore
          onChange={setPhoneNumber}
        />
        <button onClick={pasteFromClipboard}>copy</button>
        <button onClick={openWhatsapp}>WaMe</button>
    </div>
  )
}