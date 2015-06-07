# sprity-cli

[![NPM version](https://badge.fury.io/js/sprity-cli.svg)](http://badge.fury.io/js/sprity-cli) [![Dependencies](https://david-dm.org/sprity/sprity-cli.svg)](https://david-dm.org/sprity/sprity-cli)

> Command line interface for [sprity](https://npmjs.org/package/sprity)

## Install

```sh
npm install sprity-cli -g
```

## Usage

```
Usage: sprity <command>

command
  create      create sprites
  watch       watch for image changes and create sprites on change
  install     install image processing engine or style processors
```

### Create command

> create sprites

```
Usage: sprity create <out> <src>... [options]

out     path of directory to write sprite file to
src     glob strings to find source images to put into the sprite

Options:
   -b, --base64           create css with base64 encoded sprite (css file will be written to <out>)
   -c, --css-path        path or url of sprites on the web server used to reference the sprite in the styles (relative or absolute path or full url)  [../images]
   -d, --dimension        the used dimensions for the sprite. A combination of ratio and dpi. For example -d 2:192 would generate a sprite for device-pixel-ratio:2 and min-resolution: 192dpi. Multiple dimensions are allowed. Defaults to 1:72
   -e, --engine           image processing engine  [lwip]
   -f, --format           output format of the sprite Default: depends on image processor
   -n, --name             name of sprite file without file extension   [sprite]
   -p, --processor        style processing module  [css]
   -t, --template         output template file, overrides processor option
   -s, --style            file to write css to, if omitted no css is written (relative to out path)
   --background           background color of the sprite in hex  [#FFFFFF]
   --cachebuster          appends a "cache buster" to the background image in the form "?<...>"  [false]
   --margin               margin in px between tiles  [4]
   --opacity              background opacity (0 - 100) of the sprite. defaults to 0 when png or 100 when jpg  [0]
   --orientation          orientation of the sprite image (vertical|horizontal|binary-tree)  [vertical]
   --prefix               prefix for the class name used in css (without .)
   --no-sort              disable sorting of layout
   --split                create sprite images for every sub folder  [false]
   --style-indent-char    Character used for indentation of styles (space|tab)  [space]
   --style-indent-size    Number of characters used for indentation of styles  [2]
```

### Watch command

> watch for image changes and create sprites on change

```
Usage: sprity watch <out> <src>... [options]
```

Options: see Create command

### Install command

> install image processing engine

```
Usage: sprity install <name>

name     name of the image engine or style processor to install (e.g. canvas, sass)
```

## More

See [sprity](https://npmjs.org/package/sprity) documentation


---
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sprity/sprity?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
