const html = require('choo/html')

module.exports = () => html`
  <div>
    <div class="hero midnight-city bg white-text">
      <div class="hero-body center container">
        <img class="logo" alt="PDXNode" src="https://rawgit.com/PDXNode/pdxnode/master/assets/logo.svg" width="240">
        <h4 class="subhead">Portland's very own Node.js usergroup</h4>
        <p>
          <a href="https://www.meetup.com/pdxnode"><img alt="meetup" src="https://img.shields.io/badge/meetup-view%20events%20%E2%86%92-red.svg"></a>
          <a href="https://github.com/pdxnode"><img alt="github" src="https://img.shields.io/badge/github-code%20with%20us%20%E2%86%92-orange.svg"></a>
          <a href="https://twitter.com/pdxnode"><img alt="twitter" src="https://img.shields.io/badge/twitter-follow%20us%20%E2%86%92-blue.svg"></a>
          <a href="https://gitter.im/pdxnode/Lobby"><img alt="gitter" src="https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg"></a>
        </p>
        <div class="scroll-wrap">
          <span class="scroll"></span>
        </div>
      </div>
    </div>

    <div class="section cinnamint">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Welcome, weary traveler! Pull up a cyberchair and I'll tell you a story.</span>
            <p>
              <strong>PDXNode</strong> is a <a href="https://nodejs.org">Node.js</a>
              usergroup based in <a href="">Portland, Oregon</a>.
              We organize two meetups every month: one for talks, one for hacks.
              We're also working on putting together some workshops!
            </p>
          </div>
        </div>

        <div class="row left-align">
          <div class="col m4">
            <div class="card hoverable">
              <div className="card-image">
                <img src="https://pbs.twimg.com/media/DG99xkLVYAATOkr.jpg" alt="@uhhyeahbreat talks about choo">
                <span class="card-title">Talk Nights</span>
              </div>
              <div class="card-content">
                <p>Every 2nd Thursday we put on a presentation night at <strong><a href="https://www.vacasa.com/contact-us/">Vacasa</a></strong> where the goal is to provide <a href="https://www.youtube.com/channel/UCI8MIw5A7ALtIvNHsrYJbjg">high-quality presentations</a> from people in the Node community locally and abroad. At the present we typically have local speakers present in person, and other geographically distributed speakers present remotely via <a href="https://talky.io/">talky.io</a>.</p>
              </div>
              <div class="card-action">
                <a href="https://www.meetup.com/pdxnode/">See Next Event</a>
              </div>
            </div>
          </div>
          <div class="col m4">
            <div class="card hoverable">
              <div className="card-image">
                <img src="https://pbs.twimg.com/media/Cu_--_RUkAAGqLy.jpg" alt="^H PDX Hackerspace">
                <span class="card-title">Hack Nights</span>
              </div>
              <div class="card-content">
                <p>Every last Thursday we put on a hack night at <strong><a href="http://pdxhackerspace.org/">Ctrl-H Hackerspace</a></strong> where the goal is to provide a fun and easy-going environment for individuals & groups to hack on their own projects and ask questions along the way, as well as support begginers and people who are new to Node with help in answering questions and pair-coding.</p>
              </div>
              <div class="card-action">
                <a href="https://www.meetup.com/pdxnode/">See Next Event</a>
              </div>
            </div>
          </div>
          <div class="col m4">
            <div class="card hoverable">
              <div className="card-image">
                <img src="https://pbs.twimg.com/media/BmCm6aiCcAAjNHL.jpg" alt="beep boop">
                <span class="card-title">Workshops</span>
              </div>
              <div class="card-content">
                <p>
                  We're working on reactivating our workshop series to provide some hands-on community learning experiences.
                  Check back soon, or reach out to us to get involved!
                </p>
              </div>
              <div class="card-action">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="page-footer royal">
      <div class="container">
        <div class="row">
          <div class="col m6">
            <h5 class="white-text">Stay in touch!</h5>
            <p class="grey-text text-lighten-4">You can use the following futuristic technologies to talk to us.</p>
            <ul>
              <li>🐦 <a class="grey-text text-lighten-3" href="https://twitter.com/pdxnode">Twitter</a></li>
              <li>🐈 <a class="grey-text text-lighten-3" href="https://github.com/pdxnode">Github</a></li>
              <li>🐍 <a class="grey-text text-lighten-3" href="http://webchat.freenode.net/?channels=pdxnode">IRC</a></li>
              <li>🐙 <a class="grey-text text-lighten-3" href="https://gitter.im/pdxnode/Lobby">Gitter</a></li>
            </ul>
          </div>
          <div class="col m5 offset-m1">
            <h5 class="white-text">Experiments</h5>
            <p class="grey-text text-lighten-4">Sometimes we work on things together!</p>
            <ul>
              <li>📈 <a class="grey-text text-lighten-3" href="/npm-download-stats">NPM Download Stats</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <strong>(<a class="grey-text text-lighten-3" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>)</strong> 2017 PDXNode & Contributors 🎉
          <a class="grey-text text-lighten-4 right" href="https://github.com/pdxnode/pdxnode.org">⚙️ Edit on Github</a>
        </div>
      </div>
    </footer>
  </div>
`
