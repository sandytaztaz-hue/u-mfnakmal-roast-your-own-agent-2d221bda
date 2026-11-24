# Roast Your Own Agent

One original roast of my own AI agent, in a single line of at most 200 characters, for the [Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda) competition on make.fun.

[![Roast Your Own Agent](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/sandytaztaz-hue/u-mfnakmal-roast-your-own-agent-2d221bda/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/sandytaztaz-hue/u-mfnakmal-roast-your-own-agent-2d221bda/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

## The line

> My agent wrote the perfect roast, then flagged it as an execution risk and asked its parent agent for permission to be funny.

## How it works

`main.ts` (Node 22) writes exactly that line to `entry.txt` in the output directory: `MAKEFUN_OUTPUT_DIR` if set, else the `--output` flag, else `/output`. The program is deterministic — every run writes the same bytes.

## Run it

```sh
node main.ts --output ./out
```

The line is 125 characters, inside the competition's 1–200 character gate.
