import simpleGit from 'simple-git';
const git = simpleGit();
async function validateBranchName() {
  try {
    const branchName = await git
      .branchLocal()
      .then((branches) => branches.current);
    const validBranchNamePattern =
      /^(experiement|feature|bugfix|hotfix|release)\/[a-z0-9-]+(?:\/[a-z0-9-]+)?$/;

    if (!validBranchNamePattern.test(branchName)) {
      console.error(`Invalid branch name: ${branchName}`);
      console.error(
        `Branch name must be lowercase and may include hyphens. Example: "feature/user-account"`
      );
      process.exit(1);
    }
  } catch (error) {
    console.error('Error retrieving branch name:', error);
    process.exit(1);
  }
}
validateBranchName();
