pages.push({
    name: 'HTML Basics',
    heading: true,
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
  <h2>This is a first section.</h2>
  <p>This is some text.</p>
  <h2>This is a second section.</h2>
  <p>And here we have some more text.</p>
  <p>Copyright &copy; 2024</p>
</body>`)}</pre>
        <p>It's not immediately clear what's going on here. There are a few HTML tags that we can use to group the above elements into distinct areas, for ease of readability (and later, styling).</p>
        <p>The three I'd use here are ${code(`<header>`)}, ${code(`<section>`)} and ${code(`<footer>`)}.</p>
        <p>The ${code(`<header>`)} is the topmost part of a page and usually contains the site's branding and navigation. You'll only have one of these on a page.</p>
        <p>${code(`<section>`)} tags are just used to break the a page into distinct chunks of content. You can have as many of these as you like.</p>
        <p>Finally, the ${code(`<footer>`)} contains all the stuff that traditionally goes at the bottom of the page, like credits, liscencing information, terms and conditions, and the like.</p>
        <p>Here's what the previous example would look like with these organizing elements:</p>
        <pre>${code(`<body>
  <header>
    <h1>Welcome to my Website</h1>
  </header>

  <section>
    <h2>This is a first section.</h2>
    <p>This is some text.</p>
  </section>

  <section>
    <h2>This is a second section.</h2>
    <p>And here we have some more text.</p>
  <section>

  <footer>
    <p>Copyright &copy; 2024</p>
  <footer>
</body>`)}</pre>
        <p>As you can see, the page is now clearly divided into four chunks - the header, two sections, and a footer. Again, this won't have any effect on the presentation (unless you specifically style it otherwise), but it <i>does</i> make our HTML more readable and easier to navigate.</p>
        ${callout(`<p>There are a few others containers that we can use. The most common of these are ${code(`<div>`)} and ${code(`<span>`)}.</p>
        <p>${code(`<div>`)} is a generic container for content. If you want to group together any collection of tags, and you don't want to provide any kind of semantic meaning, like that comes with ${code(`<footer>`)} or ${code(`<section>`)}, we can use ${code(`<div>`)}.</p>
        <p>${code(`<span>`)} is also a generic container, but its use is specifically for text because it's an inline element. We usually use ${code(`<span>`)} to style text in paragraphs without relying on HTML formatting tags like ${code(`<b>`)} or ${code(`<i>`)}. Instead, we can style it using our own CSS, but more on that later.</p>
        <p>You might see some other organizers in the wild like ${code(`<main>`)} and ${code(`<article>`)}, but these are rare and we don't tend to use these anymore.</p>`)}
        ${callout(`<p>Using the site from the previous exercises, try adding in a ${code(`<header>`)}, a ${code(`<footer>`)} and some ${code(`<section>`)} tags to clarify the structure of your webpage.</p>`, 'Exercise')}
`
}, {
    //     name: 'Pizza Boxes and Books',
    //     content: ``
    // }, {
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
    name: 'Links',
    content: `
        <p>We can set up links to other web pages with the ${code(`<a>`)} tag, or anchor tag.</p> 
        <p>Here is an <a href="https://en.wikipedia.org/wiki/Axolotl" target="_blank">example</a>. And here's the code for that example:</p>
        <pre class='no-line-numbers'>${code(`<p>Here is an <a href="https://en.wikipedia.org/wiki/Axolotl" target="_blank">example</a>.</p>`)}</pre>
        <p>${code(`<a>`)} tags need an href to be used. The href is just the URL of the page or file you are linking. </p>
        <p>${code(`<a>`)} tags are inline elements, which means they are assumed to be used in text. However, it's common to use them to make entire chunks of content linkable. For instance, you might have a card with an image, heading and text on it that you want to use as button to take you to an article. In this case, we'd have the HTML for the image, button, and text all inside an ${code(`<a>`)} tag, making everything a link to the page.</p>
        <p>If you want a link to another page on your website, you can simply use the relative path to that .html file. For instance, if you have an ${code(`index.html`)} and an ${code(`about.html`)}, and you wanted a link in index to about, you'd only need to write ${code(`<a href="about.html">`)}. Naturally, if it's in a folder, you'd need to include that too.</p>
        <h3>Target</h3>
        <p>Another attribute you can add to ${code(`<a>`)} tags is target. Target is used to specify if the link should open a new tab or not. By default, links will just change the current tab you have open, but if you put ${code(`<a target="_blank">`)}, it will open in a new tab, as exhibited in the above example.</p> <p>It's very common to do this for links to external websites - that is, links that would take the user away from your website. </p>
        ${callout(`<p>Using the site from the previous exercises, try including some links to other websites.</p>
        <p>For extra practice, create another HTML file, and create links from one to the other and back again.</p>`, 'Exercise')}
        `
}, {
    name: 'Images',
    content: `
        <p>We can put images in our websites with ${code(`<img>`)}, or the image tag. It usually looks something like this:</p>
        <pre>${code(`<body>
    <img href="/images/cat.jpeg" alt="Cat eats a tiny burrito.">
    <p>Here is a picture of a cat enjoying her birthday dinner.</p>
</body>`)}</pre>
        <p>A few things to note about images. First, there's no closing tag - it's self closing. Images are not containers, in the way that most other elements are. They display the image, and that's it.</p>
        <p>Second, it's got two attributes. Href is the url to the image you want to display. Usually this is a relative filepath from the .html file to the image file. The alt attribute is used to provide fallback text should the image fail to be displayed, and as a description for the image for folks experiencing your site through a screen reader.</p>
        <p>As mentioned previously, images are usually stored in a folder, to keep things organized. So most of the the time, the href will be something to the effect of ${code(`/images/dog-playing-violin.png`)}.</p>

        ${callout(`<p>Add a couple of images to your website. Make a folder for the files, and find some nice pictures to put on your site.</p>`, 'Exercise')}
        `
})