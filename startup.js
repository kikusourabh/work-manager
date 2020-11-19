const { exec } = require("child_process");
// let args = process.argv;

exec("set BROWSER=none&&npm start", (error, sdtout, sdtin) => {
  if (error) {
    console.log(error);
    return;
  }
});
exec("electron .", (error, sdtout, sdtin) => {
  if (error) {
    console.log(error);
    return;
  }
});
