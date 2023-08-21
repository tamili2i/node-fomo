class NodeFOMO extends HTMLElement { // (1)

  connectedCallback() {

    this.attachShadow({mode: 'open'});
    const offer = this.getAttribute("offer");
    const coupon = this.getAttribute("coupon");
    const expiry = this.getAttribute("expiry");
    this.shadowRoot.innerHTML = `<div>
      <div style="background: rgb(0, 0, 0); opacity: 0.5; position: absolute; inset: 0px;"></div>
      <div class="pop-parent" style="position: absolute; width: 40%; top: 20%; left: 50%; transform: translateX(-50%); background: rgb(255, 255, 255); border-radius: 25px; text-transform: uppercase; text-align: center; display: flex; flex-direction: column; align-items: center;">
        <section style="width: 100%; background: rgb(0, 110, 240); border-radius: 25px; color: rgb(255, 255, 255); font-size: 25px; padding: 40px 0px;">
          <div style="padding: 5px 0px;">Last-minute Deal!</div>
          <div style="padding: 5px 0px;">${offer} Off</div>
        </section>
        <section class="middle-sec" style="background: rgb(255, 255, 255); width: 70%; box-shadow: rgb(162, 159, 159) 0px 0px 4px; padding: 10px 0px; border-radius: 30px; position: relative; font-size: 20px; margin-top: -9%;">
          <div style="color: rgb(0, 0, 0);">limited time offer.</div>
          <div class="timer" style="color: rgb(0, 109, 239);">07 08 09 10</div>
        </section>
        <section class="bottom-sec" style="font-size: 20px;padding-top: 20px;padding-bottom: 40px;text-transform: uppercase;">
          <p>offer will be applied automatically to your card</p>
          <a style="font-weight: 700;background: rgb(0, 109, 239);border-radius: 20px;font-size: 16px;color: rgb(255, 255, 255);border: none;padding: 10px 22%;text-decoration: none;" href="https://google.com/${coupon}">get now</a>
        </section>
      </div>
    </div>`;
		// const wrapper = document.createElement("div");
    
    // wrapper.style.background = "#000000";
    // wrapper.style.opacity = .5;
    // wrapper.style.position = "absolute";
    // wrapper.style.top = 0;
    // wrapper.style.left = 0;
    // wrapper.style.right = 0;
    // wrapper.style.bottom = 0;
    
    // this.append(wrapper);

    // const popParent = document.createElement("div");
    // popParent.className = "pop-parent";

    // popParent.style.position = "absolute";
    // popParent.style.width = "40%";
    // popParent.style.top = "20%";
    // popParent.style.left = "50%";
    // popParent.style.transform = "translateX(-50%)";
    // popParent.style.background = "#fff";
    // popParent.style.borderRadius = "25px";
    // popParent.style.textTransform = "uppercase";
    // popParent.style.textAlign = "center";
    // popParent.style.display = "flex";
    // popParent.style.flexDirection = "column";
    // popParent.style.alignItems = "center";

    // const topSec = document.createElement("section");

    // topSec.style.width = "100%";
    // topSec.style.background = "#006EF0";
    // topSec.style.borderRadius = "25px";
    // topSec.style.color = "#fff"
    // topSec.style.fontSize = "25px";
    // topSec.style.padding = "40px 0";

    // const p1 = document.createElement("div");
    // p1.textContent = "Last-minute Deal!";
    // p1.style.padding = "5px 0";
    // topSec.append(p1);

    // const p2 = document.createElement("div");
    // p2.textContent = "20% Off";
    // p2.style.padding = "5px 0";
    // topSec.append(p2);

    // popParent.append(topSec);

    // const middleSec = document.createElement("section");
    // middleSec.className = "middle-sec";

    // middleSec.style.background = "#fff";
    // middleSec.style.width = "70%";
    // middleSec.style.boxShadow = "rgb(162 159 159) 0px 0px 4px";
    // middleSec.style.padding = "10px 0";
    // middleSec.style.borderRadius = "30px";
    // middleSec.style.position = "relative";
    // middleSec.style.fontSize = "20px";
    // middleSec.style.marginTop = "-9%";

    // const text = document.createElement("div");

    // text.style.color = "#000";
    // middleSec.append(text);

    // text.textContent = "limited time offer.";

    // const timer = document.createElement("div");
    // timer.classList.add("timer");
    // timer.style.color = "#006DEF";
    // timer.textContent = "07 08 09 10";
    // middleSec.append(timer);

    // popParent.append(middleSec);

    // const bottomSec = document.createElement("section");
    // bottomSec.className = "bottom-sec";
    // bottomSec.style.fontSize = "20px";
    // bottomSec.style.padding = "20px 0";
    // bottomSec.style.textTransform = "uppercase";

    // const bottomText = document.createElement("p");
    // bottomText.textContent = "offer will be applied automatically to your card";
    // bottomSec.append(bottomText);

    // const bottomBtn = document.createElement("button");
    // bottomBtn.textContent = "get now";

    // bottomBtn.style.fontWeight = "700";
    // bottomBtn.style.background = "#006DEF";
    // bottomBtn.style.borderRadius = "20px";
    // bottomBtn.style.width = "70%";
    // bottomBtn.style.fontSize = "20px";
    // bottomBtn.style.color = "#fff";
    // bottomBtn.style.border = "none";
    // bottomBtn.style.padding = "10px 0";
    // bottomSec.append(bottomBtn);

    // popParent.append(bottomSec);

    // this.append(popParent);
  }

}

customElements.define("node-fomo", NodeFOMO); // (2)