const https = require('https');

export default function ({ $axios, redirect }) {

  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      this.$auth.logout();
      redirect('/login');
    }
  });
}
