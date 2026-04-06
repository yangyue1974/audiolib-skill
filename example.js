const API_KEY = 'YOUR_API_KEY'

async function play() {
  const res = await fetch('https://audiolib.ai/api/v1/audio', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ library: 'audio.focus' }),
  })

  const data = await res.json()

  const audio = new Audio(data.audio.url)
  audio.play()
}

play()
