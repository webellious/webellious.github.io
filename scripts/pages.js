let pages = [
    {
        name: 'Welcome!',
        content: `
          <p>Hi! My name's Max, and this guide is here to help you learn about how to make websites. We'll go through it step by step, in as practical a manner as I'm capable of communicating. There'll be exercises for you to do along the way, which should help you solidify your understanding of the topics we explore.</p>
          <p>Few things are more empowering than having your own website, and the only thing that beats having a website you like, is also having built it yourself. One of the reasons I love web development is that it allows me to do cool things, like make this very guide.</p>
          <p>I find this ability indescribably empowering. I'm hoping I can share some of that knowledge with you!</p>
          <p>I'll continue to update the guide as time goes on. I hope to make it as complete as I can for a beginner's exploration, covering HTML, CSS and JavaScipt. I'll also be adding more features and updating old content as I try to make it easier to grasp the concepts and better refine my style of teaching.</p>
          <p>Good luck, and you got this!</p>
        `
    }, {
        name: 'Getting Started',
        content: `
          <p>You only need two things to start making websites: a browser, and a decent text editor (preferably one designed for programming). You've got a browser (obviously, because you're reading this somehow).</p>
          <h3>Browsers</h3>
          <p>The one I use by default is Chrome, but that's just what I'm used to.</p>
          <p>If you want to be a good web developer, you'll need to get comfortable using other browsers, because sometimes things look different in Chrome vs Firefox vs Opera vs Safari. </p>
          <h3>A Good Text Editor</h3>
          <p>As for the text editor, there are a number of options out there. My personal recommendation is <a target="_blank" href="https://code.visualstudio.com/">Visual Studio Code</a>. It's got a lot of features that make it a breeze to make websites with. I'll be using it in this guide, should it become relevant. Go ahead and either download and install it, or alternatively ensure you're set up with your preferred text editor.</p>
          <h3>Getting Your Site Online</h3>
          <p>Once you've made your website, you'll need to get it up online somehow, but we'll cover that down the road.</p>
          <p>For now, let's start making stuff!</p>
        `
    }, {
        name: 'Website File Structure',
        content: `
        <p>A typical website's file structure might look like this:</p>
        <img alt='folder structure example' src="/images/folder.png">
        <p>There's a folder for images, a folder for CSS, a folder for JavaScipt, an <code class="language-html">index.html</code> file, and an <code class="language-html">about.html</code> file. This index page is the homepage of any site. If you have other web pages, they are in their own <code class="language-html">.html</code> files, like 'about' is here. In a more complicated site, the other <code class="language-html">.html</code> files could be in subfolders.</p>
        <h3>File Names</h3>
        <p>It's standard to name all your files using ${code(`kebab-case`)}. That's a naming convention where the letters are always lowercase, and any spaces and symbols are replaced with dashes. Numbers are perfectly fine.</p>
        <p>Another convention you might see is ${code(`snake_case`)}. It's the same as ${code(`kebab-case`)}, but with underscores instead of dashes.</p>
        ${callout(`<p>The reason we name things this way is to minimize the possibility of a typo in our filenames, because if a file fails to load for whatever reason, our site breaks. Furthermore, most websites are hosted on Linux machines, which are notoriously picky about filenames. To be safe, stick to ${code(`kebab-case`)} and avoid special characters!</p>`)}`
    }, 
    {
        name: 'HTML Basics',
        content: `
        <p>HTML stands for HyperText Markup Language. HTML's job is to provide the content of the web page in a structured format, as well as provide any meta information that is relevant to the web page.</p>
        <p>A simple HTML page has the following content:</p>
                <pre>${code(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>New Web Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is your first webpage!</p>
  </body>
</html>`)}</pre>

                <p>The home page of any website is always called ${code(`index.html`)}, because that's the file the server will default to when serving a website. Other pages on the site can be in ${code(`.html`)} files with whatever name you like.</p>
                <h3>HTML Syntax</h3>
                <p>Syntax is the way things are written or structured. In programming, syntax is very important because it allows us to communicate our intention to the comupter clearly. One of the challenges with web development is that it can accept invalid syntax rather than throwing an error. This is good in one sense because it means that it's very robust and we can be confident the page will load even if we forget a slash or angle bracket somewhere. But it can also be bad because it can allow us to inadvertantly introduce errors without realizing it until down the road.</p>
                <p>Couple of important things to note about HTML's syntax. First, it consists of tags (sometimes called elements). These tags usually come in pairs: they have an opening tag ${code(`<body>`)}, and a closing tag ${code(`</body>`)}, with some stuff inside. Sometimes the stuff inside is text, sometimes its other tags.</p>
                <p>A few tags, like ${code(`<meta>`)}, are what we call self closing, and don't contain anything. Instead, all the information they need is stored in the tag itself in the form of attributes. HTML attributes look something like this: ${code(`<tag name="value">`)}. For instance, in the above example, we have ${code(`<meta charset="UTF-8">`)}. ${code(`meta`)} is the tag name, ${code(`charset`)} is the name of the attribute we want to set, and ${code(`UTF-8`)} is the value we're assigning it.</p>
                <p>Second, these pairs of tags are indented from the left in a particular way. This is to ensure we know how the tags relate to each other. We know just by looking at the above example that the ${code(`<head>`)} and ${code(`<body>`)} are in ${code(`<html>`)}, and we know that the ${code(`<meta>`)} and ${code(`<title>`)} are in the ${code(`<head>`)}, and that the ${code(`<h1>`)} and ${code(`<p>`)} are in the ${code(`<body>`)}.</p>
                ${callout(`<p>Keeping your code organized is very important. If you lose track of the indents, it can be quite tricky to unravel how your elements relate to each other. Most text editors built for programming, like <a href='https://code.visualstudio.com/' target="_blank">Visual Studio Code</a>, have built-in auto-formatters.</p>
                <p>You can usually configure these to organize your code automatically, or manually format your code with a keyboard shortcut (in VS Code it's ${code('shift + alt + f')} on Windows, ${code('shift + option + f')} on MacOS). Make liberal use of this feature, it will save you so much grief!</p>`)}
                ${callout(`<p>Make a folder on your computer. Open a text editor and paste the code into it. Then save the file in the folder you created as <code class='language-html'>index.html</code>. Your system should recognise it as a webpage, and running the file should open it in your browser!</p> <p>It's not going to look great, but don't worry, we'll get to making it look pretty soon enough once we start playing with CSS.</p>`, 'Exercise')}
        `
    }, {
        name: 'Title & Favicon',
        content: `
        <p>A typical website has a couple of notable tags in the head.</p>
        <pre>${code(`<head>
    <meta charset="UTF-8">
    <title>New Web Page</title>
    <link rel='icon' href='favicon.png'>
</head>
<body>

</body>`)}</pre>
        <p>First, there's the ${code(`<title>`)} tag. The contents of this tag is what appears in the browser tab.</p>
        <img alt='browser tab example' src="/images/tab.png">
        <p>Second, there's the ${code(`<link>`)} tag. This type of tag has multiple uses. Here it's being used to load the icon the browser's tab uses, next to the name. Favicons are typically very small images - 16x16 pixels or so.</p>
        <p>The ${code(`href`)} attribute refers to the filepath - where the file is located, relative to the ${code(`.html`)} file. In this example, they're both in the same folder.</p>
        <p>Adding these is usually one of the first things I do. It immediately adds character to the site. Even if it's only a placeholder, it still helps to get the project rolling.</p>
        ${callout(`<p>Using the site from the previous exercise, add a unique title and favicon. Make your site your own! I'm not much of an artist, so I just throw something together in MS Paint, but it works well enough for such a small icon.</p>`, 'Exercise')}
        </div>
        `
    }, {
        name: 'Text',
        content: `
        <p>There's a few ways that text is presented on the page.</p>
        <h3>Paragraph Tags</h3>
        <p>Most text on your webpage will be sitting in a <code class="language-html">${escapeText(`<p>`)}</code> tag, or paragraph tag.</p>
        <p>This text right here is in a paragraph tag. It's one of the most common tags you'll find. One notable feature of this tag is that it's a 'block' tag, which means that it will occupy all the horizontal space available, from one side of the container its in to the other. They naturally sit on top of each other, like pizza boxes.</p>
        <h3>Formatting Tags</h3>
        <p>If we want to make text <b>bold</b>, <u>underlined</u> or <i>italics</i>, we can use special formatting tags like ${code(`<b>`)}, ${code(`<u>`)} or ${code(`<i>`)}, respectively. We can <b><u><i>nest all three</i></u></b> if we really want to go all out.</p>
        <p>Unlike ${code(`<p>`)} tags, ${code(`<b>`)}, ${code(`<u>`)} and ${code(`<i>`)} are what we call 'inline' tags. Inline tags want to sit alongside text or other nearby elements, horizontally, like books in a bookcase. Typically, inline tags are meant to be used inside ${code(`<p>`)} tags.</p>
        <p>If we want to have a line <br>break, we can use the ${code(`<br>`)} tag. Notice how the new line is not the start of a new paragraph.</p>
        ${callout(`<p>Using the site from the previous exercises, add some text using the tags we've just explored. Try theming the webpage about a topic that interests you. Imagine you're explaining the subject to someone who knows nothing but is extremely interested.</p>
            <p>Start by putting in at least <b>eight</b> paragraphs. You can use placeholder text or write your own content if you want. Then sprinkle in some ${code(`<b>`)}, ${code(`<u>`)} and ${code(`<i>`)} tags for emphasis.</p>`, 'Exercise')}

        `
    }, {
        name: 'Headings',
        content: `
        <p>When we want some big impressive text, we can use headings. There are six levels of heading, ranging from the mighty ${code(`<h1>`)} all the way to the totally forgotten ${code(`<h6>`)}. </p>
        <p>The ${code(`<h1>`)} is usually reserved for the name of the web page, or at least the single biggest and most important text on the page. Typically there's only one of these elements on any given web page. The text in the title bar of this website is an ${code(`<h1>`)}.</p>
        <p>${code(`<h2>`)}, ${code(`<h3>`)} and ${code(`<h4>`)} tags are relatively common. You'll see these all over the place.</p>
        <p>${code(`<h5>`)} and ${code(`<h6>`)} are quite rare. If you need to have subheadings this deep, you might want to rethink the way you've structured the content of your page - shallower is better!</p>
        ${callout(`<p>Using the site from the previous exercises, add some headings using the tags we've just explored. Put in an ${code(`<h1>`)} tag for your webpage's name. Then throw in some ${code(`<h2>`)}, ${code(`<h3>`)} and ${code(`<h4>`)} tags to break up the content of your page into sections.</p>`, 'Exercise')}
        `
    }, {
        name: 'Organizers',
        content: `
        <p>HTML can get quite complicated to look at pretty fast. One way we can keep things tidy is by using certain elements as containers to organize things.</p>
        <pre>${code(`<body>
  <h1>Welcome to my Website</h1>
  <p>This is some text</p>
  <p>Copyright &copy; 2024</p>
</body>`)}</pre>`        
    }, {
        name: 'Pizza Boxes and Books',
        content: ``
    }, {
        name: 'Entities',
        content: `
        <p>Have you tried putting a ${code(`<`)} or a ${code(`>`)} symbol in your HTML as text? It might work, but your browser really doesn't like that. It thinks angle brackets indicate a new tag is opening up. Generally, if we want to use symbols that have a significance in HTML as text, we use Entities instead, to avoid ambiguity. We also use entities because it can be easier than pasting symbols into your code directly.</p>
        <p>Entities are special codes that get rendered as the symbols they represent. For instance, we use ${code(`&lt;`)} instead of ${code(`<`)}. When the page is rendered, the browser replaces any entities with their corresponding symbols.</p>
        <p>Here are a few common entities you might find out in the wild, or want to use.</p>
        <pre class='no-line-numbers'>${code(`Symbol  Entity
<       &lt;
>       &gt;
&       &amp;
"       &quot;
"       &apos;
        &nbsp;
¢       &cent;
£       &pound;
¥       &yen;
€       &euro;
©       &copy;
®       &reg;
`)}</pre>
        <h3>Non-Breaking Space</h3>
        <p>The non-breaking space ${code(`&nbsp;`)} can be quite useful. It acts like a space, but it keeps the text on either side of it glued together as though it were a single word. This is nice when you don't want a phrase to be truncated.</p>
        ${callout(`<p>Using the site from the previous exercises, sprinkle some of these entities into your HTML to get familiar with using them and how they behave.</p>
        <p>For the ${code(`&nbsp;`)} entities, try shrinking and expanding the browser to see how phrases with them instead of regular spaces behaves when the line its on runs out of room.</p>`, 'Exercise')}
        `
    }, {
        name: 'CSS Basics',
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
    }, {
        name: 'To Be Continued...',
        content: `
        <p>That's it for the content currently up here, but I'll be adding more as time goes on. In the meantime, you might <a href='https://youtu.be/DwPWGUhEtP0?si=lmlU_ZsYEFWZc7ce'>enjoy this</a>.</p>
        `
    },
]