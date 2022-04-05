const image = document.querySelector("#image");
      const range = document.querySelector("#range input");
      const glass = document.querySelector("#glass");
      const eventLayer = document.querySelector("#eventLayer");

      let imgBorder = (image.offsetWidth - image.clientWidth) / 2;
      let imgLeft = image.offsetLeft + imgBorder;
      let imgTop = image.offsetTop + imgBorder;
      let cond = false;

      window.addEventListener("resize", () => {
        imgLeft = image.offsetLeft + imgBorder;
        imgTop = image.offsetTop + imgBorder;
      });

      range.addEventListener("input", () => {
        glass.style.setProperty("--m", range.value);
      });

      eventLayer.addEventListener("click", () => {
        if (cond) cond = false;
        else cond = true;
      });
      eventLayer.addEventListener("mousemove", (ev) => {
        if (cond) {
          glass.style.setProperty("--x", `${ev.x - imgLeft}px`);
          glass.style.setProperty("--y", `${ev.y - imgTop}px`);
        }
      });