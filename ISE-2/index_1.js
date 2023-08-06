var x = document.querySelector('.in')
var y = document.querySelector('.up')
var a = document.querySelector('.box')
var brand = document.querySelector('.brand')
var z = document.querySelector('.plaintext')
var c = document.querySelector('.cipher')
var btn = document.querySelector('.submit')
var plainTextInput = document.querySelector('.plaintext')
var keyInput = document.querySelector('.key')

document.body
  .querySelector('.in')
  .addEventListener('click', function backup(event) {
    y.style.backgroundColor = ' rgb(41, 41, 41)'
    this.style.backgroundColor = ' #171717'
    this.style.boxShadow = 'none'
    y.style.boxShadow = '-2px -3px 5px 0px #00FFAB inset'
    y.style.webkitBoxShadow = '2px -3px 5px 0px #00FFAB inset'
    y.style.mozBoxShadow = '-2px -3px 5px 0px #00FFAB inset'
    brand.innerHTML = 'Encrypt Your message'
    c.innerHTML = 'Cipher text'
    btn.textContent = 'Encrypt'
    z.placeholder = 'Plain text'
  })

document.querySelector('.up').addEventListener('click', function () {
  x.style.backgroundColor = ' rgb(41, 41, 41)'
  this.style.backgroundColor = ' #171717'
  this.style.boxShadow = 'none'
  x.style.boxShadow = '-2px -3px 5px 0px #00FFAB inset'
  x.style.webkitBoxShadow = '-2px -3px 5px 0px #00FFAB inset'
  x.style.mozBoxShadow = '-2px -3px 5px 0px #00FFAB inset'
  brand.innerHTML = 'Decrypt Your cipher'
  z.placeholder = 'Cipher text'
  c.innerHTML = 'Your message'
  btn.innerHTML = 'Decrypt'
})

// Function to encrypt a message using the given key (Caesar Cipher)
function encryptMessage(plainText, key) {
  let encryptedMessage = ''
  if (btn.textContent === 'Decrypt') key = -key
  for (let i = 0; i < plainText.length; i++) {
    const char = plainText[i]
    if (char.match(/[a-z]/i)) {
      const code = plainText.charCodeAt(i)
      let encryptedCharCode

      if (char === char.toLowerCase()) {
        encryptedCharCode = ((code - 97 + key) % 26) + 97 // Lowercase letters
      } else {
        encryptedCharCode = ((code - 65 + key) % 26) + 65 // Uppercase letters
      }

      encryptedMessage += String.fromCharCode(encryptedCharCode)
    } else {
      encryptedMessage += char // Preserve non-alphabetic characters
    }
  }

  return encryptedMessage
}

// Function to handle form submission and encrypt the message
function handleFormSubmit(event) {
  event.preventDefault()

  const cipherOutput = document.querySelector('.cipher')

  const plainText = plainTextInput.value
  const key = parseInt(keyInput.value, 10) // Convert the key to an integer

  if (isNaN(key)) {
    alert('Please enter a valid key (a number).')
    return
  }

  const encryptedMessage = encryptMessage(plainText, key)
  cipherOutput.textContent = encryptedMessage
}

// Function to decrypt a message using the given key (Caesar Cipher)
// function decryptMessage(cipherText, key) {
//   // To decrypt, we shift backward by the same key
//   return encryptMessage(cipherText, key)
// }

// Function to handle form submission and decrypt the message
function handleDecryption(event) {
  event.preventDefault()

  const cipherOutput = document.querySelector('.cipher')

  const cipherText = plainTextInput.value
  const key = parseInt(keyInput.value, 10) // Convert the key to an integer
  if (isNaN(key)) {
    alert('Please enter a valid key (a number).')
    return
  }

  const decryptedMessage = encryptMessage(cipherText, key)
  cipherOutput.textContent = decryptedMessage
}

// Attach the form submit event listeners for encryption and decryption
const encryptionForm = document.querySelector('.sign.in')
const encryptionMessage = document.querySelector('form')
const decryptionForm = document.querySelector('.sign.up') // Decryption form button

encryptionMessage.addEventListener('submit', handleFormSubmit)
encryptionForm.addEventListener('click', function () {
  plainTextInput.value = ''
})
decryptionForm.addEventListener('click', function () {
  plainTextInput.value = ''
})

//copy text on click button
function copyFunction() {
  // Get the text field
  var copyText = c

  // Select the text field

  // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.textContent)

  // Alert the copied text
  alert('Copied the text:' + copyText.textContent)
}
