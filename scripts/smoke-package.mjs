import { spawnSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const temporaryRoot = mkdtempSync(join(tmpdir(), "hvn-create-smoke-"));

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    env: { ...process.env, CI: "true" },
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed with exit code ${result.status}`);
  }
}

try {
  const archive = join(temporaryRoot, "hvn-create.tgz");
  const extractedRoot = join(temporaryRoot, "extracted");
  const scaffoldsRoot = join(temporaryRoot, "scaffolds");

  mkdirSync(extractedRoot);
  mkdirSync(scaffoldsRoot);
  run("pnpm", ["pack", "--out", archive], repositoryRoot);
  run("tar", ["-xzf", archive, "-C", extractedRoot], repositoryRoot);

  const packageRoot = join(extractedRoot, "package");
  const manifest = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));
  const templates = manifest.createConfig?.templates;

  if (!Array.isArray(templates) || templates.length === 0) {
    throw new Error("Packed package does not declare any templates");
  }

  for (const template of templates) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(template.name)) {
      throw new Error(`Invalid template name: ${template.name}`);
    }

    const source = resolve(packageRoot, template.template);
    const sourcePath = relative(packageRoot, source);

    if (sourcePath.startsWith("..") || isAbsolute(sourcePath) || !statSync(source).isDirectory()) {
      throw new Error(`Packed template is missing or outside the package: ${template.template}`);
    }

    const scaffold = join(scaffoldsRoot, template.name);
    cpSync(source, scaffold, { recursive: true });

    for (const [placeholder, dotfile] of [
      ["_gitignore", ".gitignore"],
      ["_npmrc", ".npmrc"],
      ["_yarnrc.yml", ".yarnrc.yml"],
    ]) {
      const placeholderPath = join(scaffold, placeholder);
      if (existsSync(placeholderPath)) {
        renameSync(placeholderPath, join(scaffold, dotfile));
      }
    }

    run("vp", ["install"], scaffold);
    const localVp = join(
      scaffold,
      "node_modules",
      ".bin",
      process.platform === "win32" ? "vp.cmd" : "vp",
    );
    run(localVp, ["run", "check"], scaffold);
    run(localVp, ["run", "test"], scaffold);
    run(localVp, ["run", "build"], scaffold);
  }
} finally {
  rmSync(temporaryRoot, { force: true, recursive: true });
}
