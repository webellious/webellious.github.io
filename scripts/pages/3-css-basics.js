pages.push({
  name: 'CSS Basics',
  heading: true,
  content: `
        <p>We've been dealing purely with stucture and content, but how do we change the look of things?</p>
        <p>That's what CSS is for. CSS stands for Cascading StyleSheets, and it's another language that exists to define a set of rules that govern how the browser should render HTML elements.</p>
        <h3>CSS Syntax</h3>
        <p>CSS typically looks like this:</p>
        <pre>${code(`body {
  background: black;
  color: white;
}`, 'css')}</pre>
        <p>Line 1 describes a 'selector', which references a particular type of html element, or a group of elements. Here, the selector is ${code('body')}, which refers to any ${code('<body>')} tag. There's only ever one ${code('<body>')} tag in an HTML page though, so in this case it's referring to that one.</p>
        <p>Inside the curly braces, we have the rules we want to apply. Like HTML attributes, they come in pairs: a name and a value. Here, we're setting the background colour to black, and the text colour to white.</p>
        <h3>Cascading Styles</h3>
        <p>The power of CSS is that, these rules can apply not only to the content directly in the elements that match this selector, but to <i>any elements inside them too</i>. Hence, setting the colour to white on the body changes the colour of all text on the page.</p>
        <p>Not all rules cascade; some only apply to the element that matches the selector. But anything to do with text does cascade.</p>`
}, {
    name: 'Adding CSS',
    content: `
        <p>There are three main ways we can add CSS to a page, which we'll explore here.</p>
        <h3>Inline CSS</h3>
        <p>The most direct way we can add styles to an HTML element is by putting the style in the tag. This is called inline CSS because it's put directly in the HTML. It looks like this:</p>
        <pre>${code(`<body>
  <p style="color: red;">This text will show as red.</p>
</body>`)}</pre>
        <p>Inline CSS is not the preferred way to add styling. It wouldn't be wrong to describe it as... pretty gross. It's powerful, but generally we want our styles to be all in one place, which leads us to the second way of adding styles...</p>
        <h3>Internal CSS</h3>
        <p>We can add styles to the page by putting them in a ${code(`<style>`)} tag in the ${code(`<head>`)}.</p>
        <pre>${code(`<head>
  <style>
    body {
      background: black;
      color: white;
    }
  </style>
</head>`)}</pre>
        <p>Internal CSS is better than inline CSS, because it's all grouped together in one place, which is nice. The problem is that styles can get out of hand and balloon pretty quickly. It would be best if we could put them in a seperate file altogether...</p>
        <h3>External CSS</h3>
        <p>The ideal way to add CSS to a page is to use external CSS. External means that it's not in the HTML file. Instead it's in a seperate ${code(`.css`)} file, usually located in a ${code(`/styles`)} folder. To link the file, we need to put a ${code(`<link>`)} tag in the ${code(`.<head>`)} of the HTML file, and we need to tell it how the link relates to the HTML (it's a stylesheet), and where the CSS file is relative to the HTML file (in the styles folder in a file called ${code(`styles.css`)}).</p>
        <pre>${code(`<head>
  <link rel='stylesheet' href='/styles/style.css'>
</head>`)}</pre>
        <p>Then in the .css file, we'll put our styles, like this:</p>
        <pre>${code(`body {
  background: black;
  color: white;
}`, 'css')}</pre>
        `
}, {
    name: 'Adding Fonts',
    content: `
        <p>One way we can really make our site feel unique is by adding unique fonts. A few services exist that make this process convenient. <a href='https://fonts.google.com/'>Google Fonts</a> is my preferred one.</p>
        `
})