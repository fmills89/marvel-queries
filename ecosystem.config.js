module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      ssh: "marvel-Query.pem",
      user: "ubuntu",
      host: "18.189.145.157",
      ref: "origin/main",
      repo: "git@github.com:fmills89/marvel-queries.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        " source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
