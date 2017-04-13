var logFormat = require('../logFormat.js')

describe('logger format', function() {

  it('logs 200 messages green', function() {
    var tokens;
    tokens = {
      status: function() {
        return 200;
      },
      method: function() {
        return 'GET';
      },
      url: function() {
        return 'https://artsy.net';
      },
      'response-time': function() {
        return 1000;
      },
      'remote-addr': function() {
        return '0.0.0.0';
      },
      'user-agent': function() {
        return 'Mozilla';
      }
    };
    logFormat(tokens, {}, {}).should.equal('\u001b[34mGET\u001b[39m \u001b[32mhttps://artsy.net 200\u001b[39m \u001b[36m1000ms\u001b[39m \u001b[37m0.0.0.0\u001b[39m "\u001b[37mMozilla\u001b[39m"');
  });

  it('logs 300 messages in cyan', function() {
    var tokens;
    tokens = {
      status: function() {
        return 300;
      },
      method: function() {
        return 'GET';
      },
      url: function() {
        return 'https://artsy.net';
      },
      'response-time': function() {
        return 1000;
      },
      'remote-addr': function() {
        return '0.0.0.0';
      },
      'user-agent': function() {
        return 'Mozilla';
      }
    };
    logFormat(tokens, {}, {}).should.equal('\u001b[34mGET\u001b[39m \u001b[36mhttps://artsy.net 300\u001b[39m \u001b[36m1000ms\u001b[39m \u001b[37m0.0.0.0\u001b[39m "\u001b[37mMozilla\u001b[39m"');
  });

  it('logs 400 messages in yellow', function() {
    var tokens;
    tokens = {
      status: function() {
        return 400;
      },
      method: function() {
        return 'GET';
      },
      url: function() {
        return 'https://artsy.net';
      },
      'response-time': function() {
        return 1000;
      },
      'remote-addr': function() {
        return '0.0.0.0';
      },
      'user-agent': function() {
        return 'Mozilla';
      }
    };
    logFormat(tokens, {}, {}).should.equal('\u001b[34mGET\u001b[39m \u001b[33mhttps://artsy.net 400\u001b[39m \u001b[36m1000ms\u001b[39m \u001b[37m0.0.0.0\u001b[39m "\u001b[37mMozilla\u001b[39m"');
  });

  it('logs 500 messages in red', function() {
    var tokens;
    tokens = {
      status: function() {
        return 500;
      },
      method: function() {
        return 'GET';
      },
      url: function() {
        return 'https://artsy.net';
      },
      'response-time': function() {
        return 1000;
      },
      'remote-addr': function() {
        return '0.0.0.0';
      },
      'user-agent': function() {
        return 'Mozilla';
      }
    };
    logFormat(tokens, {}, {}).should.equal('\u001b[34mGET\u001b[39m \u001b[31mhttps://artsy.net 500\u001b[39m \u001b[36m1000ms\u001b[39m \u001b[37m0.0.0.0\u001b[39m "\u001b[37mMozilla\u001b[39m"');
  });

  it('defaults no status in white', function() {
    var tokens;
    tokens = {
      status: function() {
        return null;
      },
      method: function() {
        return 'GET';
      },
      url: function() {
        return 'https://artsy.net';
      },
      'response-time': function() {
        return 1000;
      },
      'remote-addr': function() {
        return '0.0.0.0';
      },
      'user-agent': function() {
        return 'Mozilla';
      }
    };
    logFormat(tokens, {}, {}).should.equal('\u001b[34mGET\u001b[39m \u001b[37mhttps://artsy.net null\u001b[39m \u001b[36m1000ms\u001b[39m \u001b[37m0.0.0.0\u001b[39m "\u001b[37mMozilla\u001b[39m"');
  });
});
