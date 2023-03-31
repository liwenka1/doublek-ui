<template><h1 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h1>
<p>本节介绍如何下载并根据需要引入组件库，并在项目中使用他们</p>
<!-- TODO 跳转更新目录 -->
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>组件库仍处于开发状态，无法否认会有 API 改动、参数改动、返回值改动、CSS 调整等问题的存在。「本文档始终以<strong>最新版本</strong>为准」</p>
</div>
<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2>
<br />
<p>进入到项目文件夹下，打开一个新的终端，输入以下命令：</p>
<CodeGroup>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> doublek-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="PNPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> doublek-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="YARN">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> doublek-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2>
<br />
<!-- TODO 按需引入 -->
<p>引入方式主要有三种：<RouterLink to="/zh-CN/guide/#CSS%E5%BC%95%E5%85%A5">CSS 引入</RouterLink>、<RouterLink to="/zh-CN/guide/#%E5%85%A8%E5%B1%80%E5%BC%95%E5%85%A5">全局引入</RouterLink>，<RouterLink to="/zh-CN/guide/#%E5%B1%80%E9%83%A8%E5%BC%95%E5%85%A5">局部引入</RouterLink>、<del>TODO 按需引入</del></p>
<h3 id="css-引入" tabindex="-1"><a class="header-anchor" href="#css-引入" aria-hidden="true">#</a> CSS 引入</h3>
<br />
<!-- TODO： addlink-->
<p>多数组件提供 <code v-pre>class</code> 样式及可供修改的 <code v-pre>css 变量</code>。你可以通过在标签中添加 <code v-pre>class</code> 来实现自己的组件。详细的 CSS 文档可以在组件详情中查看</p>
<br />
<p>在你的入口文件添加以下代码：</p>
<br />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js中</span>
<span class="token keyword">import</span> <span class="token string">"doublek-ui/dist/style.css"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br />
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<br/>
组件库多数组件及效果相互独立，且适用场景不同。如果使用组件不多，推荐只引入 CSS 文件，并在具体场景中自定义组件属性。
<br/>
<br/>
</div>
<h3 id="全局引入" tabindex="-1"><a class="header-anchor" href="#全局引入" aria-hidden="true">#</a> 全局引入</h3>
<br />
<p>与多数组件库类似，Atypical UI 也提供了全局引入方式。你需要在入口文件中引入 <code v-pre>doublek-ui</code>，并进行全局注册。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js中</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> creatUI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"doublek-ui"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"doublek-ui/dist/style.css"</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">creatUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部引入" tabindex="-1"><a class="header-anchor" href="#局部引入" aria-hidden="true">#</a> 局部引入</h3>
<br />
<p>如果你不希望在全局导入组件库，可以通过局部引入方式来实现相同的效果。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js中</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">"doublek-ui/dist/style.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DoubleKButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"doublek-ui"</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">"k-button"</span><span class="token punctuation">,</span> DoubleKButton<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- vue中 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>k-button</span><span class="token punctuation">></span></span>
    Hello
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tag</span><span class="token punctuation">></span></span>World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>k-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<br />
注意，不要忘记在你的入口文件引入 css 文件，这很重要！
<br />
<br />
</div>
<h2 id="享受它" tabindex="-1"><a class="header-anchor" href="#享受它" aria-hidden="true">#</a> 享受它</h2>
<br />
接下来，开始享受这个组件库吧！
</template>
