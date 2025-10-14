---
title: 'How I Built a Local Image Converter Using Go and bimg'
description: '<p>There’s a special kind of satisfaction in building a tool that solves *your own* problem. This one started with a simple annoyance: [&hellip;]</p>'
pubDate: 'September 22, 2025'
heroImage: '/data/post-22.webp'
---

## From Scratch to Speed: How I Built a Local Image Converter Using Go and bimg

There’s a special kind of satisfaction in building a tool that solves *your own* problem. This one started with a simple annoyance:
I kept converting and compressing images for different projects — manually — over and over again. Different tools, different formats, different quirks. Some were online (slow and sketchy), some were local but bloated.

So I thought: *What if I just build my own converter? One command to launch, local, fast, and private.*


### Step 1: Why Go?

Go is a strange and wonderful language. It’s fast, statically compiled, and feels like someone designed C for people who enjoy sleeping.
I’ve used it for backend services before, but this time, I wanted to see how well it handled something a little different — **image processing**.

I didn’t want dependencies that drag half the internet with them (looking at you, ImageMagick).
Enter **bimg**, a Go wrapper around **libvips**, one of the fastest image processing libraries on earth.

The magic combo looked perfect:

* Go → easy concurrency, quick builds, no runtime.
* bimg → blazing image operations, small memory footprint.
* libvips → the quiet powerhouse behind many production image systems.


### Step 2: The Mission

I wanted my tool to handle everything I needed:

* Convert between formats (HEIC, JPG, PNG, WEBP)
* Compress large images
* Handle video compression (because why stop at images?)
* Run locally — one executable, one browser tab.

And I wanted the developer experience to be *stupidly simple*:
`./imgtool` opens a minimal web UI in Brave, ready to drag and drop.


### Step 3: The Go Backend

The backend was surprisingly short. Go’s standard library gives you a web server right out of the box.
Here’s the essence of it:

```go
http.HandleFunc("/", serveUI)
http.HandleFunc("/upload", handleUpload)
log.Fatal(http.ListenAndServe(":2003", nil))
```

The `/upload` route reads the file, runs it through `bimg`, and spits back a new image in the format I pick.
When you hit “Convert,” it’s not uploading anywhere — it just processes locally and sends you the file. Fast. Private. Simple.


### Step 4: The UI That Doesn’t Try Too Hard

I kept the frontend minimal — pure HTML.
No React, no Tailwind, no build step. Just a clean form:

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="file" required>
  <select name="format">
    <option value="png">PNG</option>
    <option value="jpg">JPG</option>
    <option value="webp">WEBP</option>
    <option value="compress">Compress</option>
  </select>
  <button type="submit">Convert</button>
</form>
```

That’s all it needs.
The point was to make the backend the star — a **tiny Go service** that feels instant.

### Step 5: Compression That Actually Works

Here’s where I hit a snag:
PNG didn’t want to compress. Turns out, PNG is *lossless*, so “quality” doesn’t mean what it does for JPEG or WebP.
Instead, I added a condition — PNGs get zlib compression, while others use a quality-based reduction via `bimg`.

```go
options := bimg.Options{
    Quality: 60,
    Type: bimg.WEBP,
}
```

The results were wild. A 12 MB JPG shrunk to under 3 MB with barely any visual loss.
That’s when I realized libvips wasn’t kidding around.

### Step 6: Adding Video (Because Why Not)

I slipped in `ffmpeg` for video compression.
Go can just `exec.Command("ffmpeg", …)` and handle the rest.
Suddenly, the tool could handle both *image* and *video* workloads from the same interface.

### Step 7: The Final Touch

When you run the app, it automatically opens a Brave browser tab:

```go
exec.Command("brave-browser", "--new-tab", "http://localhost:2003").Start()
```

No setup. No Docker run. Just:

```bash
./imgtool
```

and you’re live.

### What I Learned

* **Local tools still matter.** The cloud is great, but local tools are instant and private.
* **Go + bimg = fast, elegant utility dev.** You can write serious tools with surprisingly little code.
* **Building for yourself teaches better than any tutorial.** You hit real problems, and solving them builds muscle memory.

### The Future of ImgTool

I’m planning to add:

* Drag-and-drop multi-file support
* Adjustable compression levels
* Instant previews before download

But even now, it’s a one-binary tool that does the job faster than anything I’ve used before.

*If you’re a developer who wants to stop context-switching between bloated tools, build your own.
One tiny utility can save you hours — and teach you more than a dozen tutorials combined.*
