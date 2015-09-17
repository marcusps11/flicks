(jQuery, window, document),
function() {
  var e = function() {
    function e(e, n) {
      this.node = t(n),
      this.interval = e.interval || 150,
      this.jitter = e.jitter || 30,
      this.wordDelay = e.wordDelay || 100,
      this.pauseDuration = e.pauseDuration || 100,
      this.longPauseDuration = e.longPauseDuration || 2e3,
      this.phrases = e.phrases || [],
      this.init()
    }

    return e.prototype.init = function() {
      this.node.addClass("typeset").show(),
      this.textNode = t('<span class="typset-text" />'),
      this.cursorNode = t('<span class="typeset-cursor" />').css({
        height: parseInt(this.node.css("line-height")),
        background: this.cursorColor
      }),
      this.node.html(""),
      this.node.append([this.textNode, this.cursorNode]),
      this.executePhrase(0)
    },

    e.prototype.executePhrase = function(e) {
      var t = this, 
      n = this.phrases[e], 
      r = n.split(""), 
      i = r.length, 
      o = 0, 
      a = function() {
        if (2 * i + 1 > o) {
          var n = t.interval + Math.floor(Math.random() * t.jitter);
          if (i > o) {
            var s = r[o];
            t.textNode.append(s),
            t.cursorNode.removeClass("blink"),
            " " === s && (n += t.wordDelay)
          } else
          o === i ? (t.cursorNode.addClass("blink"),
            n += t.longPauseDuration) : t.textNode.text(t.textNode.text ( ).slice(0, -1));
          return o++,
          setTimeout(function() {
            return a()
          }, n)
        }

        t.cursorNode.addClass("blink");
        var u = e < t.phrases.length - 1 ? e + 1 : 0;
        return setTimeout(function() {
          return t.executePhrase(u)
        }, t.pauseDuration)
      };
      a()
    }, e
  }(), t = jQuery;

  t.fn.typeset = function(t) {
    return new e(t || {},this)
  }
}.call(this);