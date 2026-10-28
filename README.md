# Frontal CLI Action

![Frontal Banner](./banner.jpg)

## About

This action sets up the Frontal CLI, `frontal`, on GitHub's hosted Actions runners.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `frontal-cli` on the runner environment.

## Usage

Set up the Frontal CLI and use it:

```yaml
steps:
  - uses: frontal-labs/cli-action@v1
    with:
      api-key: ${{ secrets.FRONTAL_API_KEY }}

  - name: Run Frontal CLI
    run: frontal --help
```

A specific version of the Frontal CLI can be installed:

```yaml
steps:
  - uses: frontal-labs/cli-action@v1
    with:
      version: 1.0.0
      api-key: ${{ secrets.FRONTAL_API_KEY }}
      api-url: https://api.frontal.dev/v1
```

## Inputs

The action supports the following inputs:

- `version` (optional): Version of the Frontal CLI to install. Defaults to `"latest"`.
- `api-key` (optional): Frontal API key (frt_...). Exported as `FRONTAL_API_KEY`.
- `api-url` (optional): Frontal API base URL. Defaults to `https://api.frontal.dev/v1`.

## License
Apache 2.0
