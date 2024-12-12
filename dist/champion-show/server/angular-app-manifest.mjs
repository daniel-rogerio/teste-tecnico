
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/login"
  },
  {
    "renderMode": 0,
    "route": "/register"
  },
  {
    "renderMode": 0,
    "route": "/champions"
  },
  {
    "renderMode": 0,
    "route": "/details/*"
  },
  {
    "renderMode": 0,
    "redirectTo": "/champions",
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 14386, hash: '7d0d38303e1665bc482a62dbea21d176b4ad2c513ef8b129958cc72350599aad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7960, hash: '76619a86f251f042d145282fef2e639ba0c315fd08b7cc4840bbfd8aca2aba36', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
