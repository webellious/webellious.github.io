let pages = []

pages.push({
    name: 'Welcome!',
    heading: true,
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
    name: 'Browser Dev tools',
    content: `
      <p>One of the most important tools to get used to using is your browser's dev tools. This is a collection of development tools that provide us with a lot of information about the web page we're looking at. Depending on the browser you're using, they may have different features and capabilities, but the ones we'll be relying on in this guide should be universal. I'll be using Chrome for these examples.</p>
      <p>In most browsers, you can open them by pressing ${code(`F12`)}.</p>
      <h3>The Inspector</h3>
      <p>Right click on this paragraph. In the context menu, you should see 'inspect' or 'or inspect element.' Click that and it will open the browser's dev tools. It should look something like this:</p>
      <img src='/images/inspector.png' alt='The inspector'>
      <p>The section that should pop out is the Elements display. This shows the actual HTML of the page you're looking at, and if you're inspecting an element, it will have that specific element focused. In this case, it should be showing you the <p> tag for the previous paragraph. You can hit the little arrow to open the tag up and see the text inside.</p>
      <p>Below the HTML, you should see another panel, which displays the CSS rules being applied to the element you have selected in the HTML section. We'll be learning more about that later when we get into writing CSS. </p>
      <h3>The Console</h3>
      <p>There are several tabs in the Inspector that are useful. The console is particularly useful once you're working with JavaScript, but it has uses when working only with HTML as well.</p>
      <p>If a file fails to load or can't be found, you'll see an error in this tab. If you're working with images, and they're not being displayed, it's worth looking here to see if there's an error, like this one:</p>
      <img src='/images/console.png' alt='The console'>
      <p>The amusing irony here is that there was conveniently an error in my console as I wrote this, because I'd already included an image tag in my code, but had yet to create the image itself that it would be referencing. How serendipitous! </p>
      ${callout(`<p>Right-click inspect a few elements on this page, like this callout. See what the code looks like!</p>`, 'Exercise')}
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
})
