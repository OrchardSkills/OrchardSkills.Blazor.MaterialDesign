setTimeout(() => {


  const sidenav = document.getElementById("sidenav-1");
  const instance = new mdb.Sidenav(sidenav)
  let innerWidth = null;

  function setMode() {
    // Check necessary for Android devices
    if (window.innerWidth === innerWidth) {
      return;
    }

    innerWidth = window.innerWidth;

    if (window.innerWidth < 1400) {
      instance.changeMode("over");
      instance.hide();
      console.log('test')
    } else {

      instance.changeMode("side");
      instance.show();
    }
  };
  setMode();
  // Event listeners
  window.addEventListener("resize", setMode);


  document.getElementById('slim-toggler').addEventListener('click', () => {
    instance.toggleSlim();
  })
}, 2000);







