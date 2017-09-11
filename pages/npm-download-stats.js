var html = require('choo/html')
var gravatarUrl = require('gravatar-url')

function store (state, emitter) {
  state.stats = {}

  emitter.on('fetchStats', username => {
    state.stats.loading = true
    state.stats.list = null
    emitter.emit('render')

    window.fetch(`/api/npm-download-stats/${username}`).then(res => res.json()).then(stats => {
      state.stats = stats
      emitter.emit('render')
    })
  })
}

function view (state, emit) {
  const { username } = state.params
  const { stats } = state

  return html`
    <div class="hero green-and-blue">
      <div class="hero-body">
        <div class="content">
          <h1><a href="/npm-download-stats">npm download stats</a></h1>
          ${
            username == null
              ? html`<p>Enter your npm username to view some download stats for your modules.</p>`
              : null
          }
          <form class="module-search" onsubmit=${submit}>
            <div class="input-field">
              <input name="username" type="text" placeholder="npm username" value="${username || ''}">
              <input class="btn" type="submit" value="find modules">
            </div>
          </form>
          ${stats.loading
            ? html`<div>
              <p>Loading... this may take a little while.</p>
              <div class="progress">
                <div class="indeterminate"></div>
              </div>
            </div>`
            : username != null && stats.list
            ? renderPackages(username, stats)
            : null
          }
        </div>
        <a href="/" class="chip">
          <img src="https://pbs.twimg.com/profile_images/828842914360893440/ONaSV-WR_400x400.jpg" alt="PDXNode">
          ← Back to PDXNode
        </a>
        <div class="chip">
          <img src="${gravatarUrl('ungoldman@gmail.com', { size: 32 })}" alt="Contact Person">
          made with 💻❤️ by <a href="https://github.com/ungoldman">ungoldman</a>
        </div>
      </div>
    </div>
  `

  function submit (event) {
    event.preventDefault()
    const username = this.elements.username.value
    emit('fetchStats', username)
    emit('pushState', '/npm-download-stats/' + username)
  }
}

function renderPackages (username, stats) {
  return stats.list.length === 0
    ? username != null
      ? html`<p>No modules found for this user.</p>`
      : null
    : html`
      <table>
        <thead>
          <tr>
            <th>package</th>
            <th>version</th>
            <th>week</th>
            <th>month</th>
            <th>year</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          ${stats.list.map(pkg =>
            html`
              <tr>
                <td><a href="https://npm.im/${pkg}">${pkg}</a></td>
                <td><img src="https://img.shields.io/npm/v/${pkg}.svg" alt="npm version"></td>
                <td><img src="https://img.shields.io/npm/dw/${pkg}.svg" alt="downloads per week"></td>
                <td><img src="https://img.shields.io/npm/dm/${pkg}.svg" alt="downloads per month"></td>
                <td><img src="https://img.shields.io/npm/dy/${pkg}.svg" alt="downloads per year"></td>
                <td><img src="https://img.shields.io/npm/dt/${pkg}.svg" alt="total downloads"></td>
              </tr>
            `
          )}
        </tbody>
      </table>
    `
}

module.exports = { view, store }
