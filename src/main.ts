import * as core from '@actions/core';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const DEFAULT_API_URL = 'https://api.frontal.dev/v1';
const DEFAULT_VERSION = 'latest';

const execAsync = promisify(exec);

async function run() {
  const version = core.getInput('version') || DEFAULT_VERSION;
  const apiKey = core.getInput('api-key');
  const apiUrl = core.getInput('api-url') || DEFAULT_API_URL;

  core.info(`Installing frontal-cli@${version}`);
  await execAsync(`npm install -g frontal-cli@${version === DEFAULT_VERSION ? DEFAULT_VERSION : version}`);
  core.info('Installed frontal-cli');

  if (apiKey) {
    core.exportVariable('FRONTAL_API_KEY', apiKey);
    core.exportVariable('FRONTAL_API_URL', apiUrl);
    core.info('Exported FRONTAL_API_KEY and FRONTAL_API_URL');
  } else {
    core.info('No api-key provided; skipping credential export');
  }
}

run().catch((error: unknown) => {
  if (error instanceof Error) {
    core.setFailed(error.message);
  } else {
    core.setFailed(`${error}`);
  }
})
