document.addEventListener("DOMContentLoaded", () => {
  const eachEmail = `
    <div class="email">
                  <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                  <div><input type="checkbox"></div>
                  <div><i class="fa-regular fa-star"></i></div>
                  <div class="user-img">
                    CV
                  </div>
                  <div class="preview">
                    <div class="subject">Brooklyn Simmons</div>
                    <div class="message">Simple Transaction Report____</div>
                  </div>
                  <div class="timestamp">12:45 PM</div>
                </div>
    `;

  const unreadEmail = `
    <div class="email unread">
                  <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                  <div><input type="checkbox"></div>
                  <div><i class="fa-regular fa-star"></i></div>
                  <div class="user-img">
                    CV
                  </div>
                  <div class="preview">
                    <div class="subject">Brooklyn Simmons</div>
                    <div class="message">Simple Transaction Report____</div>
                  </div>
                  <div class="timestamp">12:45 PM</div>
                </div>
    `;

  const emailDiv = document.getElementById("emails");

  if (emailDiv) {
    for (let i = 0; i < 30; i++) {
      if (i == 3 || i == 5) emailDiv.innerHTML += unreadEmail;
      else emailDiv.innerHTML += eachEmail;
    }
  }
});
