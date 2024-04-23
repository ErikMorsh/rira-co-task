export default {
  created(el, binding, vnode, prevVnode) {
    // addEventListener
    el.onclick = (event) => {
      // Create Ripple
      const ripple = document.createElement("span");
      let width = 0;
      let height = 0;
      let opacity = 0.2;

      // Styling Ripple
      ripple.style.position = "absolute";
      ripple.style.top = event.layerY + "px";
      ripple.style.left = event.layerX + "px";
      ripple.style.backgroundColor = "rgba(51, 51, 51, 0.2)";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.borderRadius = "50%";

      // Add Ripple to DOM
      el.appendChild(ripple);

      // Set Animation
      const interval = setInterval(() => {
        width += 5;
        height += 5;
        opacity -= 0.005;
        ripple.style.width = width + "px";
        ripple.style.height = height + "px";
        ripple.style.backgroundColor = `rgba(51, 51, 51, ${opacity})`;
      }, 5);

      // Clear Ripple From DOM
      setTimeout(() => {
        clearInterval(interval);
        ripple.remove();
      }, 400);
    };
  },
};
