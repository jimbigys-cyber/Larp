// ---------- AUTH ----------
function requireLogin() {
  if (!state.loggedIn) {
    window.location.href = 'login.html';
  }
}

function doLogin() {
  const u = document.getElementById('loginUser').value.trim();
  if (!u) { alert('Enter a username.'); return; }
  state.name = u;
  state.user = '@' + u.toLowerCase().replace(/\s+/g, '');
  state.loggedIn = true;
  saveState(state);
  window.location.href = 'index.html';
}

// ---------- TOPBAR ----------
function renderTopbar() {
  const r = document.getElementById('robuxDisplay');
  const n = document.getElementById('navUsername');
  if (r) r.textContent = state.robux.toLocaleString();
  if (n) n.textContent = state.name;
}

// ---------- GAMES ----------
function renderGames(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = '';
  GAMES_DATA.forEach(g => {
    const el = document.createElement('div');
    el.className = 'game-card';
    el.innerHTML = `
      <div class="game-thumb">${g.icon}</div>
      <div class="game-name">${g.name}</div>
      <div class="game-players">${g.players.toLocaleString()} playing</div>
    `;
    el.onclick = () => alert('Games cannot be played in this LARP.');
    grid.appendChild(el);
  });
}

// ---------- PROFILE ----------
function renderProfile() {
  const badge = state.verified === 'blue'
    ? '<span class="verified-blue"></span>'
    : state.verified === 'gold'
    ? '<span class="verified-gold"></span>'
    : '';

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  set('profileName', state.name + ' ' + badge);
  setText('profileDisplay', state.user);
  setText('profileBio', state.bio);
  setText('profileAvatar', state.avatar);
  setText('friendsCount', state.friends.toLocaleString());
  setText('followersCount', state.followers.toLocaleString());
  setText('followingCount', state.following.toLocaleString());
  setText('robuxDisplay', state.robux.toLocaleString());
  setText('navUsername', state.name);
}

// ---------- CHEAT ----------
function openCheat() {
  const menu = document.getElementById('cheatMenu');
  menu.classList.add('open');
  document.getElementById('cheatName').value = state.name;
  document.getElementById('cheatUser').value = state.user;
  document.getElementById('cheatBio').value = state.bio;
  document.getElementById('cheatAvatar').value = state.avatar;
  document.getElementById('cheatRobux').value = state.robux;
  document.getElementById('cheatVerified').value = state.verified;
  document.getElementById('cheatFriends').value = state.friends;
  document.getElementById('cheatFollowers').value = state.followers;
  document.getElementById('cheatFollowing').value = state.following;
}

function closeCheat() {
  document.getElementById('cheatMenu').classList.remove('open');
}

function applyCheat() {
  state.name = document.getElementById('cheatName').value || 'Guest1337';
  state.user = document.getElementById('cheatUser').value || '@guest1337';
  state.bio = document.getElementById('cheatBio').value || 'No bio yet.';
  state.avatar = document.getElementById('cheatAvatar').value || '😎';
  state.robux = parseInt(document.getElementById('cheatRobux').value) || 0;
  state.verified = document.getElementById('cheatVerified').value;
  state.friends = parseInt(document.getElementById('cheatFriends').value) || 0;
  state.followers = parseInt(document.getElementById('cheatFollowers').value) || 0;
  state.following = parseInt(document.getElementById('cheatFollowing').value) || 0;
  saveState(state);
  renderProfile();
  renderTopbar();
  closeCheat();
}

// ---------- MARKETPLACE ----------
function renderMarket(tab) {
  const grid = document.getElementById('marketGrid');
  if (!grid) return;
  grid.innerHTML = '';
  MARKET_DATA[tab].forEach(item => {
    const el = document.createElement('div');
    el.className = 'market-item';
    el.innerHTML = `
      <div class="market-thumb ${tab}">${item.icon}</div>
      <div class="market-info">
        <div class="market-name">${item.name}</div>
        <div class="market-tag">${item.tag}</div>
        <div class="market-price">R$ ${item.price.toLocaleString()}</div>
      </div>
    `;
    el.onclick = () => {
      if (state.robux >= item.price) {
        state.robux -= item.price;
        saveState(state);
        renderTopbar();
        alert(`Purchased ${item.name}!`);
      } else {
        alert(`Not enough Robux for ${item.name}. You need R$ ${item.price.toLocaleString()}.`);
      }
    };
    grid.appendChild(el);
  });
}
