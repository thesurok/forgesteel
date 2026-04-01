const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const repoRoot = path.resolve(__dirname, '..');
const distDir = path.join(repoRoot, 'dist');
const publishBranch = process.env.DEPLOY_BRANCH || 'gh-pages';

function fail(message) {
    console.error(message);
    process.exit(1);
}

function run(command, args, cwd, options = {}) {
    const { captureOutput = false, allowFailure = false } = options;
    const result = spawnSync(command, args, {
        cwd,
        stdio: captureOutput ? ['ignore', 'pipe', 'pipe'] : 'inherit',
        encoding: 'utf8'
    });

    if (result.error) {
        if (allowFailure) {
            return '';
        }
        fail(result.error.message);
    }

    if (result.status !== 0) {
        if (allowFailure) {
            return '';
        }
        if (captureOutput) {
            if (result.stdout) {
                process.stdout.write(result.stdout);
            }
            if (result.stderr) {
                process.stderr.write(result.stderr);
            }
        }
        process.exit(result.status || 1);
    }

    return captureOutput ? (result.stdout || '').trim() : '';
}

if (!fs.existsSync(distDir)) {
    fail('Build output not found at dist. Run "npm run build" first.');
}

const remoteUrl = process.env.DEPLOY_REMOTE_URL || run('git', ['config', '--get', 'remote.origin.url'], repoRoot, { captureOutput: true });

if (!remoteUrl) {
    fail('Could not resolve remote.origin.url for this repository.');
}

const shortSha = run('git', ['rev-parse', '--short', 'HEAD'], repoRoot, { captureOutput: true }) || 'unknown';
const userName = run('git', ['config', '--get', 'user.name'], repoRoot, { captureOutput: true, allowFailure: true });
const userEmail = run('git', ['config', '--get', 'user.email'], repoRoot, { captureOutput: true, allowFailure: true });
const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'forgesteel-gh-pages-'));

try {
    const publishDir = path.join(tempRoot, 'repo');
    fs.mkdirSync(publishDir, { recursive: true });

    for (const entry of fs.readdirSync(distDir)) {
        fs.cpSync(path.join(distDir, entry), path.join(publishDir, entry), { recursive: true });
    }

    fs.closeSync(fs.openSync(path.join(publishDir, '.nojekyll'), 'w'));

    console.log(`Publishing dist to ${publishBranch}...`);
    run('git', ['init'], publishDir);
    run('git', ['config', 'core.autocrlf', 'false'], publishDir);
    run('git', ['checkout', '--orphan', publishBranch], publishDir);

    if (userName) {
        run('git', ['config', 'user.name', userName], publishDir);
    }

    if (userEmail) {
        run('git', ['config', 'user.email', userEmail], publishDir);
    }

    run('git', ['add', '--all'], publishDir);
    run('git', ['commit', '-m', `Deploy ${shortSha}`], publishDir);
    run('git', ['push', '--force', remoteUrl, `HEAD:${publishBranch}`], publishDir);
    console.log(`Published dist to ${publishBranch}.`);
} finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
}