const email = 'creozen.ai@gmail.com';

async function test() {
    const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `New submission from Contact Form`,
            _captcha: 'false',
            test: 'test message'
        })
    });
    console.log('Status:', response.status);
    const text = await response.text();
    console.log('Body:', text);
}

test();
