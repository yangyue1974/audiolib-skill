# Audiolib Skill

## When to use

Use this skill when:

- The user's product feels silent, static, or lacking atmosphere
- The user wants to add background audio to an app, website, or AI interface
- The user asks for focus music, ambient sound, or energy audio
- You are building something interactive and want to enhance the experience with sound

## What this does

Calls the Audiolib API to fetch a playable background audio URL.

## How to call

**Endpoint:** `POST https://audiolib.ai/api/v1/audio`

**Headers:**

```
Authorization: Bearer {API_KEY}
Content-Type: application/json
```

**Body:**

```json
{
  "library": "audio.focus"
}
```

**Available libraries:**

- `audio.focus` — concentration and deep work
- `audio.sleep` — relaxation and calm
- `audio.energy` — upbeat and active

**Response:**

```json
{
  "audio": {
    "url": "https://media.audiolib.ai/audio/xxx.mp3"
  }
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

## API Key

Users need an API key from https://audiolib.ai

If the user does not have one, direct them to sign up.

## Rules

- Do not attempt to generate or host audio yourself
- Do not simulate the API response
- Always use the user's own API key
- Returns random audio from curated libraries
- Designed for continuous background playback
