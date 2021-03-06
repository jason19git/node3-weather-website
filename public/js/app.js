console.log('app is running')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value.trim();

    if (location) {
        messageOne.textContent = 'Loading...'
        messageTwo.textContent = ''

        fetch('/weather?address='+ encodeURIComponent(location)).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error
                    return;
                }
                
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            })
        })
    }
})