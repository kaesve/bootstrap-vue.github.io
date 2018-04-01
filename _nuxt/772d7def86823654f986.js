(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{384:function(s,a){s.exports='<h1 id="tabs">Tabs</h1>\n<blockquote>\n<p>Create tabbable panes of local content.</p>\n</blockquote>\n<h2 id="basic-usage">Basic usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;first&quot;</span> <span class="hljs-attr">active</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>I&apos;m the first fading tab\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;second&quot;</span> &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>I&apos;m the second tab content\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>Disabled tab!\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- basic.vue --&gt;</span>\n</pre>\n<h2 id="cards-integration">Cards Integration</h2>\n<p>Tabs support integrating with bootstrap cards. Just add the <code>card</code> property to\n<code>&lt;b-tabs&gt;</code>. and place it inside a <code>&lt;b-card&gt;</code> component. Note that you should add\n<code>no-body</code> prop on <code>&lt;b-card&gt;</code> component in order to propertly decorate the card\nheader and remove the extra padding introduced by <code>card-body</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span> <span class="hljs-attr">card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span> <span class="hljs-attr">active</span>&gt;</span>\n      Tab Contents 1\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>\n      Tab Contents 2\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- with-card.vue --&gt;</span>\n</pre>\n<p>When <code>&lt;b-tabs&gt;</code> is in <code>card</code> mode, each <code>&lt;b-tab&gt;</code> sub-component will automatically\nhave the <code>card-body</code> class applied (this class provides the padding around the tab content).\nTo disable the <code>card-body</code> class, set the <code>no-body</code> prop on <code>&lt;b-tab&gt;</code> sub component.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span> <span class="hljs-attr">card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Picture 1&quot;</span> <span class="hljs-attr">active</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-img</span> <span class="hljs-attr">bottom</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/200/food/1/&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-footer</span>&gt;</span>Picture 1 footer<span class="hljs-tag">&lt;/<span class="hljs-name">b-card-footer</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Picture 2&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-img</span> <span class="hljs-attr">bottom</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/200/food/5/&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-footer</span>&gt;</span>Picture 2 footer<span class="hljs-tag">&lt;/<span class="hljs-name">b-card-footer</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Picture 3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-img</span> <span class="hljs-attr">bottom</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/200/food/6/&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-footer</span>&gt;</span>Picture 3 footer<span class="hljs-tag">&lt;/<span class="hljs-name">b-card-footer</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>This tab does not have the <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>no-body<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> prop set<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla\n      tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat\n      id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit\n      ipsum anim Lorem. Incididunt veniam velit elit elit veniam Lorem aliqua quis\n      ullamco deserunt sit enim elit aliqua esse irure.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- with-card-nobody.vue --&gt;</span>\n</pre>\n<p>Setting the <code>no-body</code> prop on <code>&lt;b-tab&gt;</code> will have no affect when <code>&lt;b-tabs&gt;</code> is\nnot in <code>card</code> mode (as the <code>card-body</code> class is only set when in <code>card</code> mode).</p>\n<h2 id="pills-variant">Pills variant</h2>\n<p>Tabs use the <code>tabs</code> styling by default. Just add <code>pills</code> property to <code>&lt;b-tabs&gt;</code> for\nthe pill style variant.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span> <span class="hljs-attr">pills</span> <span class="hljs-attr">card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span> <span class="hljs-attr">active</span>&gt;</span>\n      Tab Contents 1\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>\n      Tab Contents 2\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tabs-pills.vue --&gt;</span>\n</pre>\n<h2 id="bottom-placement-of-tab-controls">Bottom placement of tab controls</h2>\n<p>Visually move the tab controls to the bottom by setting the prop <code>end</code></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span> <span class="hljs-attr">pills</span> <span class="hljs-attr">card</span> <span class="hljs-attr">end</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span> <span class="hljs-attr">active</span>&gt;</span>\n      Tab Contents 1\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>\n      Tab Contents 2\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tabs-bottom.vue --&gt;</span>\n</pre>\n<p><strong>Caveats:</strong></p>\n<ul>\n<li>Bottom placement visually works best with the <code>pills</code> variant. When using the default \n<code>tabs</code> vairiant, you may want to provided your own custom styling classes, as Bootstrap\nV4 CSS assumes the tabs will always be placed on the top of the tabs content.</li>\n<li>To provide a better user experience with bottom palced controls, ensure that the\ncontent of each tab pane is the same height and fits completely within the visible\nviewport, otherwise the user will need to scroll up to read the start of the tabed content.</li>\n</ul>\n<p><strong>Note:</strong> <em>the <code>bottom</code> prop has been deprecated in favor of the <code>end</code> prop.</em></p>\n<h2 id="vertical-tabs">Vertical tabs</h2>\n<p>Have the tab controls placed on the lefthand side by setting the <code>vertical</code> prop to <code>true</code>.\nVertical tabs work with or without <code>card</code> mode enabled.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span> <span class="hljs-attr">pills</span> <span class="hljs-attr">card</span> <span class="hljs-attr">vertical</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span> <span class="hljs-attr">active</span>&gt;</span>\n      Tab Contents 1\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>\n      Tab Contents 2\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>\n      Tab Contents 3\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tabs-vertical.vue --&gt;</span>\n</pre>\n<p>Visually move the tab controls to the right hand side by setting the <code>end</code> prop:</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span> <span class="hljs-attr">pills</span> <span class="hljs-attr">card</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">end</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span> <span class="hljs-attr">active</span>&gt;</span>\n      Tab Contents 1\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>\n      Tab Contents 2\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>\n      Tab Contents 3\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tabs-vertical-end.vue --&gt;</span>\n</pre>\n<p>The width of the vertical tab controls will expand to fit the width of the tab title.\nTo control the width, set a <a href="/docs/reference/size-props#sizing-utility-classes">width utility class</a>\nvia the prop <code>nav-wrapper-class</code>. You can use values such as <code>w-25</code> (25% width), <code>w-50</code> (50% width), etc.,\nor column classes such as <code>col-2</code>, <code>col-3</code>, etc.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span> <span class="hljs-attr">pills</span> <span class="hljs-attr">card</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">nav-wrapper-class</span>=<span class="hljs-string">&quot;w-50&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span> <span class="hljs-attr">active</span>&gt;</span>\n      Tab Contents 1\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>\n      Tab Contents 2\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>\n      Tab Contents 3\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tabs-vertical-width.vue --&gt;</span>\n</pre>\n<p>Vertical placement visually works best with the <code>pills</code> variant. When using the default \n<code>tabs</code> vairiant, you may want to provided your own custom styling classes, as Bootstrap\nV4 CSS assumes the tab controls will always be placed on the top of the tabs content.</p>\n<p><strong>Note:</strong> <em>overflowing text may occur if your width is narrower than the tab title.\nYou may need additional custom styling.</em></p>\n<h2 id="fade-animation">Fade animation</h2>\n<p>Fade is enabled by default when changing tabs. It can disabled with <code>no-fade</code> property.\nNote you should use the <code>&lt;b-nav-item&gt;</code> component when adding contentless-tabs to maintain\ncorrect sizing and alignment. See the advanced usage examples below for an example.</p>\n<h2 id="add-tabs-without-content">Add Tabs without content</h2>\n<p>If you want to add extra tabs that do not have any content, you can put them in <code>tabs</code> slot:</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Add your b-tab components here--&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;tabs&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;()=&gt;{}&quot;</span>&gt;</span>Another tab<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tabs-item-slot.vue --&gt;</span>\n</pre>\n<h2 id="add-custom-content-to-tab-title">Add custom content to tab title</h2>\n<p>If you want to add custom content to tab title, like HTML code, icons, or another Vue component, this possible by using \n<code>title</code> slot</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span>&gt;</span>\n <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">active</span>&gt;</span>\n <span class="hljs-comment">&lt;!-- Add your custom title here--&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>\n     i&apos;m <span class="hljs-tag">&lt;<span class="hljs-name">i</span>&gt;</span>Custom<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n   <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      Tab Contents 1\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tabs-title-slot.vue --&gt;</span>\n</pre>\n<h2 id="apply-custom-classes-to-the-generated-nav-tabs-or-pills">Apply custom classes to the generated nav-tabs or pills</h2>\n<p>The tab selectors are based on Boostrap V4&apos;s <code>nav</code> markup ( i.e. <code>ul.nav &gt; li.nav-item &gt; a.nav-link</code>).\nIn some situations, you may want to add classes to the <code>&lt;li&gt;</code> (nav-item) and/or the\n<code>&lt;a&gt;</code> (nav-link) on a per tab basis.   To do so, simply supply the classname to\nthe <code>title-item-class</code> prop (for the <code>&lt;li&gt;</code> element) or <code>title-link-class</code> prop (for the\n<code>&lt;a&gt;</code> element).  Value&apos;s can be passed as a string or array of strings.</p>\n<p><strong>Note:</strong> <em>The <code>active</code> class is automatically applied to the active tabs <code>&lt;a&gt;</code> element.\nYou may need to accomodate your custom classes for this.</em></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span> <span class="hljs-attr">card</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;tabIndex&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span> <span class="hljs-attr">:title-link-class</span>=<span class="hljs-string">&quot;linkClass(0)&quot;</span>&gt;</span>\n        Tab Contents 1\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span> <span class="hljs-attr">:title-link-class</span>=<span class="hljs-string">&quot;linkClass(1)&quot;</span>&gt;</span>\n        Tab Contents 2\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span> <span class="hljs-attr">:title-link-class</span>=<span class="hljs-string">&quot;linkClass(2)&quot;</span>&gt;</span>\n        Tab Contents 3\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">tabIndex</span>: <span class="hljs-number">0</span>\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    linkClass (idx) {\n      <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.tabIndex === idx) {\n        <span class="hljs-keyword">return</span> [<span class="hljs-string">&apos;bg-primary&apos;</span>, <span class="hljs-string">&apos;text-light&apos;</span>]\n      } <span class="hljs-keyword">else</span> {\n        <span class="hljs-keyword">return</span> [<span class="hljs-string">&apos;bg-light&apos;</span>, <span class="hljs-string">&apos;text-info&apos;</span>]\n      }\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- with-classes.vue --&gt;</span>\n</pre>\n<h2 id="advanced-examples">Advanced Examples</h2>\n<h3 id="external-controls">External controls</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-comment">&lt;!-- Tabs with card integration --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span> <span class="hljs-attr">small</span> <span class="hljs-attr">card</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;tabIndex&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;General&quot;</span>&gt;</span>\n          I&apos;m the first fading tab\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Edit profile&quot;</span>&gt;</span>\n          I&apos;m the second tab\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>I&apos;m the card in tab<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Premium Plan&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\n          Sibzamini!\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Info&quot;</span>&gt;</span>\n          I&apos;m the last tab\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n    <span class="hljs-comment">&lt;!-- Control buttons--&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;tabIndex--&quot;</span>&gt;</span>Previous<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;tabIndex++&quot;</span>&gt;</span>Next<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-muted&quot;</span>&gt;</span>Current Tab: {{tabIndex}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">tabIndex</span>: <span class="hljs-number">0</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tabs-controls.vue --&gt;</span>\n</pre>\n<h3 id="dynamic-tabs">Dynamic Tabs</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-tabs</span> <span class="hljs-attr">card</span>&gt;</span>\n        <span class="hljs-comment">&lt;!-- Render Tabs --&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-tab</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;`Tab ${i}`&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in tabs&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>&gt;</span>\n          Tab Contents {{i}}\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;float-right&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;()=&gt;closeTab(i)&quot;</span>&gt;</span>\n            Close tab\n          <span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-tab</span>&gt;</span>\n\n        <span class="hljs-comment">&lt;!-- New Tab Button (Using tabs slot) --&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;tabs&quot;</span> @<span class="hljs-attr">click.prevent</span>=<span class="hljs-string">&quot;newTab&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>\n          +\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n\n        <span class="hljs-comment">&lt;!-- Render this if no tabs --&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;empty&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center text-muted&quot;</span>&gt;</span>\n          There are no open tabs\n          <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span> Open a new tab using + button.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-tabs</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">tabs</span>: [],\n      <span class="hljs-attr">tabCounter</span>: <span class="hljs-number">0</span>\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    closeTab (x) {\n      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-keyword">this</span>.tabs.length; i++) {\n        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.tabs[i] === x) {\n          <span class="hljs-keyword">this</span>.tabs.splice(i, <span class="hljs-number">1</span>)\n        }\n      }\n    },\n    newTab () {\n      <span class="hljs-keyword">this</span>.tabs.push(<span class="hljs-keyword">this</span>.tabCounter++)\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- dynamic-tabs.vue --&gt;</span>\n</pre>\n<h2 id="component-reference">Component Reference</h2>\n'}}]);