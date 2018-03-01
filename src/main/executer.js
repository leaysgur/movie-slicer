const { exec } = require('child_process');

module.exports = function(name, cmd, sender) {
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      sender.send(`${name}:err`, err);
      return;
    }
    if (stderr) {
      sender.send(`${name}:stderr`, stderr);
      return;
    }

    sender.send(`${name}:stdout`, stdout);
  });
};
