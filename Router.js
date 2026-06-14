window.addEventListener(
  "hashchange",
  () => {

    console.log(
      "Route changed:",
      location.hash
    );

  }
);
