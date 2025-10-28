import Script from "next/script";
// ...
<html lang="ru">
  <head>
    <Script
      src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
      strategy="beforeInteractive"
    />
  </head>
  <body> {children} </body>
</html>
