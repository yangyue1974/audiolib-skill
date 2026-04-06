# Audiolib Skill

Add background audio to your product with one API call.

## What this is

This skill lets you fetch playable background audio from [Audiolib](https://audiolib.ai).

Use it in:

- AI applications
- Websites
- Interactive tools
- Productivity apps

## Quick Example

**Request:**

```json
{
  "library": "audio.focus"
}
```

**Response:**

```json
{
  "audio_url": "https://media.audiolib.ai/audio/xxx.mp3"
}
```

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

## Get API Key

You need an API key to use Audiolib:

https://audiolib.ai

## Notes

- Audiolib returns random audio from curated libraries
- Designed for continuous background playback
- No music expertise required
