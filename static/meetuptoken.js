var oauth = 'https://secure.meetup.com/oauth2/authorize';
var key = 'dojtmnqhqgk2cjo4v4kv9hc8u4';
var redirect = 'https://meetup-auth-key.vercel.app/redirect';

// fetch a meetup oauth2 temporary access token
$(function() {
    if (window.location.pathname == '/redirect.html') {
        var token = getURLParameter('access_token');
        if (token) {
            $('#header').text('Your one-hour Meetup API access token is:');
            $('#token').text(token);
        } else {
            var error = getURLParameter('error') || 'internal error';
            $('#error').text(error);
        }
    } else {
        window.location = oauth + '?client_id=' + key + '&response_type=token'
                                + '&redirect_uri=' + redirect;
    }
});

function getURLParameter(param, isBoolean) {
    var sPageURL = window.location.search.substring(1);
    if (!sPageURL) {
        var hashpos = window.location.href.indexOf('#');
        if (hashpos > 0) {
            sPageURL = window.location.href.substring(hashpos+1);
        }
    }
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var parts = sURLVariables[i].split('=');
        if (parts[0] == param) {
            if (parts[1] === undefined) {
                return true;
            } else {
                var val = decodeURIComponent(parts[1]);
                return isBoolean ? (val == 'true') : val;
            }
        }
    }
}
