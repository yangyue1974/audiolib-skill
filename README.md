# Audiolib Skill

Add background audio to your product with one API call.

```
play('audio.focus', 'alp_your_api_key')
```

---

## When to use this

Use this skill when your product feels:

- Silent
- Static
- Lacking atmosphere

Common scenarios:

- AI chat interfaces
- Reading or content apps
- Websites and landing pages
- Productivity and focus tools

---

## What it does

Fetches a playable background audio URL from Audiolib.

You can use it to:

- Add focus music
- Add ambient background
- Add energy to interactions

---

## JavaScript Example

```js
const res = await fetch('https://audiolib.ai/api/v1/audio', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ library: 'audio.focus' }),
})

const data = await res.json()

const audio = new Audio(data.audio.url)
audio.play()
```

---

## Get API Key

You need an API key to use Audiolib:

https://audiolib.ai

---

## Notes

- Returns random audio from curated libraries
- Designed for continuous background playback
- No music expertise required

---

If your product feels silent, it probably needs audio.
