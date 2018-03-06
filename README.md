# movie-slicer

<center>
  <img src="./assets/img/icon.png" width="160" alt="MovieSlicer">
</center>

## Usage

![MovieSlicer](./assets/img/app.png)

- Drop your video
- Select ranges to slice with preview
- Slice it!

## Requirements

- `ffmpeg` and `ffprobe`
  - with `--enable-gpl --enable-libx264 --enable-libfdk-aac`

## Limitations
- Output codecs are limited
  - video: H.264
  - audio: AAC
