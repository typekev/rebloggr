"use strict";
var _extends =
    Object.assign ||
    function(a) {
      for (var c, b = 1; b < arguments.length; b++)
        for (var d in ((c = arguments[b]), c))
          Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
      return a;
    },
  _createClass = (function() {
    function a(b, c) {
      for (var e, d = 0; d < c.length; d++)
        (e = c[d]),
          (e.enumerable = e.enumerable || !1),
          (e.configurable = !0),
          "value" in e && (e.writable = !0),
          Object.defineProperty(b, e.key, e);
    }
    return function(b, c, d) {
      return c && a(b.prototype, c), d && a(b, d), b;
    };
  })(),
  _react = require("react"),
  _react2 = _interopRequireDefault(_react);
Object.defineProperty(exports, "__esModule", { value: !0 });
require("whatwg-fetch");
function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}
function _objectWithoutProperties(a, b) {
  var d = {};
  for (var c in a)
    0 <= b.indexOf(c) ||
      (Object.prototype.hasOwnProperty.call(a, c) && (d[c] = a[c]));
  return d;
}
function _classCallCheck(a, b) {
  if (!(a instanceof b))
    throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(a, b) {
  if (!a)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}
function _inherits(a, b) {
  if ("function" != typeof b && null !== b)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof b
    );
  (a.prototype = Object.create(b && b.prototype, {
    constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
  })),
    b &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
}
var Rebloggr = (function(a) {
  function b(c) {
    _classCallCheck(this, b);
    var d = _possibleConstructorReturn(
      this,
      (b.__proto__ || Object.getPrototypeOf(b)).call(this, c)
    );
    return (d.state = { postList: [] }), d;
  }
  return (
    _inherits(b, a),
    _createClass(b, [
      {
        key: "componentWillMount",
        value: function componentWillMount() {
          var c = this.props.blogUrl,
            d = this.state.postList;
          0 === d.length && this.generatePostList(c);
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(c, d) {
          var _props$onComplete = this.props.onComplete,
            e =
              void 0 === _props$onComplete ? function() {} : _props$onComplete,
            f = this.state.postList;
          d.postList !== f && e(f);
        }
      },
      {
        key: "generatePostList",
        value: function generatePostList() {
          var f = this,
            c =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "https://blog.typekev.com",
            d = arguments[1];
          fetch(c + "/wp-json/wp/v2/posts")
            .then(function(g) {
              return g.json();
            })
            .then(function(g) {
              f.setState({ postList: g });
            });
        }
      },
      {
        key: "render",
        value: function render() {
          var _props = this.props,
            c = _props.titleIcon,
            d = _props.titleClassName,
            e = _props.linkClassName,
            f = _props.dateClassName,
            g = _props.excerptClassName,
            h = _props.includeDate,
            j = _props.includeExcerpt,
            k = _props.cta,
            _props$linkTarget = _props.linkTarget,
            n = void 0 === _props$linkTarget ? "_blank" : _props$linkTarget,
            l = _props.loadingComponent,
            m = _objectWithoutProperties(_props, [
              "titleIcon",
              "titleClassName",
              "linkClassName",
              "dateClassName",
              "excerptClassName",
              "includeDate",
              "includeExcerpt",
              "cta",
              "linkTarget",
              "loadingComponent"
            ]),
            o = this.state.postList;
          return _react2.default.createElement(
            "div",
            _extends({ id: "Rebloggr" }, m),
            1 > o.length && l,
            o.map(function(p) {
              var q = p.id,
                r = p.title,
                s = p.date,
                t = p.excerpt,
                u = p.link;
              return _react2.default.createElement(
                "div",
                { key: q },
                _react2.default.createElement(
                  "a",
                  { className: e, href: u, target: n },
                  _react2.default.createElement(
                    "span",
                    { className: d },
                    c,
                    r.rendered
                  ),
                  h &&
                    _react2.default.createElement("span", { className: f }, s),
                  j &&
                    _react2.default.createElement(
                      "span",
                      { className: g },
                      t.rendered
                    )
                ),
                k
              );
            })
          );
        }
      }
    ]),
    b
  );
})(_react2.default.Component);
exports.default = Rebloggr;
