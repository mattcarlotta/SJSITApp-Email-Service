export default (IMAGEAPI, message) => `<html>
    <body>
      <div style="overflow: hidden;">
        <div style="width: 100%; background-color: #FDFDFD; border-collapse: separate !important; border-spacing: 0">
          <div style="font-size: 16px; padding: 30px; vertical-align: top; display: block; max-width: 675px; margin: 0 auto;">
            <div style="margin-bottom: 30px; margin-top: 15px;">
              <p style="color: #2E323B;">
                <img style="margin-right:15px;" src="${IMAGEAPI}/sapLogo.jpg" height="30px" alt="sapLogo.jpg"></img>
                <img style="margin-right:15px;" src="${IMAGEAPI}/sharksLogo.jpg" height="40px" alt="sharksLogo.jpg"></img>
                <img src="${IMAGEAPI}/barracudaLogo.jpg" height="33px" alt="barracudaLogo.jpg"></img>
              </p>
            </div>
            <div style="background-color: #FFFFFF; border: 1px solid #f0f0f0;">
              <div style="font-size: 16px; padding: 30px; vertical-align: top; display: block;">
                ${message}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`;
