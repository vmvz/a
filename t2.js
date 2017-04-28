function __getOwnPropertyDescriptor(n, t) {
    try {
        return Object.getOwnPropertyDescriptor(n, t)
    } catch (i) {
        return {configurable: !1, enumerable: !0, value: n[t], writable: !0}
    }
}
function __defineProperty(n, t, i) {
    try {
        Object.defineProperty(n, t, i)
    } catch (r) {
    }
}
function goToTop() {
    window.scrollTo(0, 0)
}
function override() {
}
function GetCompiledAsset(n) {
    if (DEBUG)throw"Asset - " + n + " - accessed, but the module has not declared definitions for 'GetCompiledAsset'"; else return ErrorReporter.Trace(null, "GetCompiledAsset call outside of module definition."), ""
}
function RegisterCompiledAsset(n) {
    if (DEBUG)throw"Asset - " + n + " - illegally registered.";
}
function Harness() {
    return DEBUG && console.assert(!1, "Harness decorator invoked outside of a module."), null
}
function JasmineSpec() {
    return DEBUG && console.assert(!1, "JasmineSpec decorator invoked outside of a module."), null
}
function lazyStaticInit(n) {
    return function (t) {
        var r = !0, i = function () {
            var i = t.apply(this, arguments);
            return r && (r = !1, n()), i
        }, u, f;
        return DEBUG && (u = t.name || /(?:function )([A-Za-z1-9_]{1,})/g.exec(t.toString())[1], u && (f = new Function("once", "target", "init", "return " + i.toString().replace("function", "function " + u)), i = f(r, t, n))), i.prototype = t.prototype, i
    }
}
function $timestamp(n) {
    "console"in window && "timeStamp"in console && typeof console.timeStamp != "object" && console.timeStamp.toString().indexOf("__BROWSERTOOLS_CONSOLE_SAFEFUNC") == -1 && console.timeStamp(n)
}
function $logFmt(n, t) {
    DEBUG && "console"in window && console.log("%c " + n, t || "color:#222; background-color: #4acfa5; line-height: 24px; font-weight:bold;")
}
function $warn(n) {
    DEBUG && "warn"in console && console.warn(n)
}
function $time(n) {
    DEBUG && "console"in window && "time"in console && console.time(n)
}
function $timeEnd(n) {
    DEBUG && "console"in window && "timeEnd"in console && console.timeEnd(n)
}
function $ots() {
    Locator.otsReport._generate();
    "console"in window && console.log(Locator.otsReport._message)
}
function $dir() {
    var t, n;
    if (DEBUG && "console"in window && console.dir)for (t = arguments.length, n = 0; n < t; n++)console.dir(arguments[n])
}
function $now() {
    return DEBUG ? window.performance && performance.now ? performance.now() : +new Date : null
}
function $stem(n) {
    var t = Locator.treeLookup.getReference(n);
    return "dir"in console && console.dir(t), t
}
function cycleid() {
    return "Locator"in window && Locator.validationManager ? Locator.validationManager.cyclecount : 0
}
function LongClick(n, t, i) {
    "use strict";
    var r = this;
    if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.touchBoundary = 10, this.time = t, this.handler = i, this.timer = null, this.layer = n, !n || !n.nodeType)throw new TypeError("Layer must be a document node");
    this.onTouchStart = function () {
        return LongClick.prototype.onTouchStart.apply(r, arguments)
    };
    this.onTouchMove = function () {
        return LongClick.prototype.onTouchMove.apply(r, arguments)
    };
    this.onTouchEnd = function () {
        return LongClick.prototype.onTouchEnd.apply(r, arguments)
    };
    this.onTouchCancel = function () {
        return LongClick.prototype.onTouchCancel.apply(r, arguments)
    };
    window.navigator.msPointerEnabled ? (this.startEventName = "MSPointerDown", this.moveEventName = "MSPointerMove", this.endEventName = "MSPointerUp", this.cancelEventName = "MSPointerCancel") : (this.startEventName = "touchstart", this.moveEventName = "touchmove", this.endEventName = "touchend", this.cancelEventName = "touchcancel");
    n.addEventListener(this.startEventName, this.onTouchStart, !1);
    n.addEventListener(this.moveEventName, this.onTouchMove, !1);
    n.addEventListener(this.endEventName, this.onTouchEnd, !1);
    n.addEventListener(this.cancelEventName, this.onTouchCancel, !1)
}
var DEBUG = !1, ErrorReporter, ANIMATION_END, TRANSITION_END, $break_on_assert, $assert, $setFooter, FastClick, ns_gen5_ml, ns_gen5_net, ns_gen5_validation, ns_gen5_language, ns_gen5_config, ns_gen5_events, ns_gen5_ui_managers, ns_gen5_ui, ns_gen5_ui_controls, ns_gen5_animation_easing, ns_gen5_animation, readit, ns_gen5_util, ns_gen5_data, Locator, ns_betslip, RegisterCompiledAsset, GetCompiledAsset;
(function (n) {
    var t = function () {
        function n() {
        }

        return n.encrypt = function (t) {
            for (var f = "", e = t.length, r, u = 0, i = 0, u = 0; u < e; u++) {
                for (r = t.substr(u, 1), i = 0; i < n.MAP_LEN; i++)if (r == n.charMap[i][0]) {
                    r = n.charMap[i][1];
                    break
                }
                f += r
            }
            return f
        }, n.decrypt = function (t) {
            for (var f = "", e = t.length, i, r = 0, u = 0, r = 0; r < e; r++) {
                for (i = t.substr(r, 1), u = 0; u < n.MAP_LEN; u++)if (i == ":" && t.substr(r, 3) == ":|~") {
                    i = "\n";
                    r += 2;
                    break
                } else if (i == n.charMap[u][1]) {
                    i = n.charMap[u][0];
                    break
                }
                f += i
            }
            return f
        }, n
    }();
    t.MAP_LEN = 64;
    t.charMap = [["A", "d"], ["B", "e"], ["C", "f"], ["D", "g"], ["E", "h"], ["F", "i"], ["G", "j"], ["H", "k"], ["I", "l"], ["J", "m"], ["K", "n"], ["L", "o"], ["M", "p"], ["N", "q"], ["O", "r"], ["P", "s"], ["Q", "t"], ["R", "u"], ["S", "v"], ["T", "w"], ["U", "x"], ["V", "y"], ["W", "z"], ["X", "a"], ["Y", "b"], ["Z", "c"], ["a", "Q"], ["b", "R"], ["c", "S"], ["d", "T"], ["e", "U"], ["f", "V"], ["g", "W"], ["h", "X"], ["i", "Y"], ["j", "Z"], ["k", "A"], ["l", "B"], ["m", "C"], ["n", "D"], ["o", "E"], ["p", "F"], ["q", "0"], ["r", "1"], ["s", "2"], ["t", "3"], ["u", "4"], ["v", "5"], ["w", "6"], ["x", "7"], ["y", "8"], ["z", "9"], ["0", "G"], ["1", "H"], ["2", "I"], ["3", "J"], ["4", "K"], ["5", "L"], ["6", "M"], ["7", "N"], ["8", "O"], ["9", "P"], ["\n", ":|~"], ["\r", ""]];
    n.B365SimpleEncrypt = t
})(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n.setDeferralPeriod = function (t) {
            $assert && $assert(n.defferalPeriod >= 4e3, "Log period cannot be less than 4 seconds");
            n.defferalPeriod = t
        }, n.prototype.log = function () {
        }, n.prototype.logError = function (t, i) {
            n.Trace(t, i)
        }, n.GetLogger = function () {
            return n.LOGGER || (n.LOGGER = new n)
        }, n.getRequest = function () {
            return n._xmlHttpAvailable == null && n.checkXmlHttpAvailable(), n._xmlHttpAvailable ? readit.XDomainXMLHttpRequest.TryCreate(new XMLHttpRequest) : new ActiveXObject(this._activeXVersion)
        }, n.checkXmlHttpAvailable = function () {
            try {
                new XMLHttpRequest;
                n._xmlHttpAvailable = !0
            } catch (t) {
                n._xmlHttpAvailable = !1
            }
        }, n
    }();
    t.NEW_LINE = "\t\r\n";
    t.defferalPeriod = 4e3;
    t._flushTimer = null;
    t._xmlHttpAvailable = null;
    t._errorLog = [];
    t._activeXVersion = null;
    t.LOGGER = null;
    t.maximumLogSize = 100;
    t.LINE = " -------------------- ";
    t.Trace = function (n, i) {
        var r;
        try {
            if (r = new Date, Locator && Locator.pushedConfig && Locator.pushedConfig.getIsErrorLoggingEnabled()) {
                t._errorLog.length == 0 && (t._flushTimer = setTimeout(function () {
                    t.LogError()
                }, t.defferalPeriod));
                var u = "clientDate=" + r + t.NEW_LINE, f = "clientObject=" + n + t.NEW_LINE, e = "clientErrorMessage=" + i + t.NEW_LINE, o = "clientBrowserURL=" + (window.location && window.location.href ? encodeURIComponent(window.location.href) : "not available") + t.NEW_LINE;
                t._errorLog.push(u + f + e + o)
            }
        } catch (i) {
        }
    };
    t.Flush = function () {
        try {
            t._flushTimer && clearTimeout(t._flushTimer);
            t.LogError()
        } catch (n) {
        }
    };
    t.LogError = function () {
        var i, f, e, u, r;
        try {
            if (t._flushTimer = null, Locator && Locator.pushedConfig && Locator.pushedConfig.getIsErrorLoggingEnabled()) {
                for (i = void 0, f = void 0, i = "*Error Reporter*" + t.NEW_LINE, i = i.concat("SessionId=" + n.CookieManager.GetSessionId() + t.NEW_LINE), t.errorLogCustomHeader && (i = i.concat("CustomHeader=" + t.errorLogCustomHeader() + t.NEW_LINE)), i = i.concat("Log:" + t.NEW_LINE), f = 0; f < t._errorLog.length; f++)i = i.concat(t._errorLog[f] + t.NEW_LINE);
                e = Locator && Locator.config && Locator.config.jsLogEndPoint ? Locator.config.jsLogEndPoint : null;
                e && (u = "lvl=1", u = u.concat("&msg=" + n.B365SimpleEncrypt.encrypt(i)), u = u.concat("&encr=true"), r = t.getRequest(), r.open("POST", e, !0), r.onreadystatechange = function () {
                    r.readyState === 4 && r.status === 200 && r.responseText === "OFF" && Locator.pushedConfig.setIsErrorLoggingEnabled(!1)
                }, r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), r.send(u))
            }
            t._errorLog = []
        } catch (o) {
        }
    };
    n.MobileServerLogger = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t, i;
    (function (n) {
        n[n.CONNECTION_ENTRY = 0] = "CONNECTION_ENTRY";
        n[n.PUSH_MESSAGE_CONNECTION_ENTRY = 1] = "PUSH_MESSAGE_CONNECTION_ENTRY";
        n[n.PULL_DATA_ENTRY = 2] = "PULL_DATA_ENTRY";
        n[n.MODULE_LOAD_ENTRY = 3] = "MODULE_LOAD_ENTRY";
        n[n.NAVIGATION_ENTRY = 4] = "NAVIGATION_ENTRY";
        n[n.VIDEO_ENTRY = 5] = "VIDEO_ENTRY";
        n[n.COUPON_STREAMING_ENTRY = 6] = "COUPON_STREAMING_ENTRY";
        n[n.BET_SLIP_ENTRY = 7] = "BET_SLIP_ENTRY";
        n[n.GLOBAL_CONFIG_ENTRY = 8] = "GLOBAL_CONFIG_ENTRY";
        n[n.PLAYTECH_INSTANT_GAMES_ENTRY = 9] = "PLAYTECH_INSTANT_GAMES_ENTRY";
        n[n.FLASH_MODULE_ENTRY = 10] = "FLASH_MODULE_ENTRY";
        n[n.EMPTY_TOPIC_ENTRY = 11] = "EMPTY_TOPIC_ENTRY";
        n[n.FINANCIALS_TOPIC_ENTRY = 12] = "FINANCIALS_TOPIC_ENTRY";
        n[n.FILTERING_ENTRY = 13] = "FILTERING_ENTRY";
        n[n.BLOB_ENTRY = 14] = "BLOB_ENTRY";
        n[n.EDIT_BETS = 15] = "EDIT_BETS"
    })(t = n.InfoReporterGroups || (n.InfoReporterGroups = {}));
    i = function () {
        function n() {
        }

        return n.getLog = function () {
            return n.InfoLog
        }, n.SetServerLogger = function (t) {
            n.ServerLogger = t
        }, n.Trace = function (i, r) {
            n.InfoLog[t[i]] || (n.InfoLog[t[i]] = []);
            n.InfoLog[t[i]].push(r);
            DEBUG && !("UNIT_TEST"in window) && "console"in window && console.log("%c Info Reporter - " + t[i] + ": " + r, "color:#222; background-color: #c4c240;");
            n.ServerLogger.log(i, r)
        }, n
    }();
    i.CONNECTION_ENTRY = t.CONNECTION_ENTRY;
    i.PUSH_MESSAGE_CONNECTION_ENTRY = t.PUSH_MESSAGE_CONNECTION_ENTRY;
    i.PULL_DATA_ENTRY = t.PULL_DATA_ENTRY;
    i.MODULE_LOAD_ENTRY = t.MODULE_LOAD_ENTRY;
    i.NAVIGATION_ENTRY = t.NAVIGATION_ENTRY;
    i.VIDEO_ENTRY = t.VIDEO_ENTRY;
    i.COUPON_STREAMING_ENTRY = t.COUPON_STREAMING_ENTRY;
    i.BET_SLIP_ENTRY = t.BET_SLIP_ENTRY;
    i.GLOBAL_CONFIG_ENTRY = t.GLOBAL_CONFIG_ENTRY;
    i.PLAYTECH_INSTANT_GAMES_ENTRY = t.PLAYTECH_INSTANT_GAMES_ENTRY;
    i.FLASH_MODULE_ENTRY = t.FLASH_MODULE_ENTRY;
    i.EMPTY_TOPIC_ENTRY = t.EMPTY_TOPIC_ENTRY;
    i.FINANCIALS_TOPIC_ENTRY = t.FINANCIALS_TOPIC_ENTRY;
    i.FILTERING_ENTRY = t.FILTERING_ENTRY;
    i.BLOB_ENTRY = t.BLOB_ENTRY;
    i.EDIT_BETS_ENTRY = t.EDIT_BETS;
    i.ServerLogger = n.MobileServerLogger.GetLogger();
    i.InfoLog = {};
    n.InfoReporter = i
}(ns_gen5_util || (ns_gen5_util = {}));
ErrorReporter = function () {
    function n() {
    }

    return n.SetServerLogger = function (t) {
        n.serverLogger = t
    }, n
}();
ErrorReporter.MAXIMUM_LOG_SIZE = 100;
ErrorReporter.errorLog = [];
ErrorReporter.serverLogger = ns_gen5_util.MobileServerLogger.GetLogger();
ErrorReporter.getLog = function () {
    return ErrorReporter.errorLog
};
ErrorReporter.Trace = function (n, t) {
    var r, i, u;
    try {
        r = t.stack || t && t.message || t;
        i = "" + n;
        $log(i, r);
        this.errorLog.length >= ErrorReporter.MAXIMUM_LOG_SIZE && (u = this.errorLog.length - ErrorReporter.MAXIMUM_LOG_SIZE + 1, ErrorReporter.errorLog.splice(0, u));
        this.errorLog.push(new Date + " " + i + " " + t);
        ErrorReporter.serverLogger.logError(i, r)
    } catch (t) {
        $log("Problem happened during logging error")
    }
};
var __decorate = this && this.__decorate || function (n, t, i, r) {
        var f = arguments.length, u = f < 3 ? t : r === null ? r = __getOwnPropertyDescriptor(t, i) : r, e, o;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")u = Reflect.decorate(n, t, i, r); else for (o = n.length - 1; o >= 0; o--)(e = n[o]) && (u = (f < 3 ? e(u) : f > 3 ? e(t, i, u) : e(t, i)) || u);
        return f > 3 && u && __defineProperty(t, i, u), u
    }, __param = this.__param || function (n, t) {
        return function (i, r) {
            t(i, r, n)
        }
    }, __extends = this && this.__extends || function (n, t) {
        var i, r;
        for (i in t)t.hasOwnProperty(i) && (n[i] = t[i]);
        r = function () {
            this.constructor = n
        };
        n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
    }, extend = function (n, t) {
    return __extends(t, n), n
};
(function () {
    var f = document.createElement("div"), n = f.style, t;
    n.animation === "" ? ANIMATION_END = "animationend" : n.webkitAnimation === "" ? ANIMATION_END = "webkitAnimationEnd" : n.mozAnimation === "" ? ANIMATION_END = "mozAnimationEnd" : n.msAnimation === "" && (ANIMATION_END = "msAnimationEnd");
    n.transition === "" ? TRANSITION_END = "transitionend" : n.webkitTransition === "" && (TRANSITION_END = "webkitTransitionEnd");
    var u = 0, r = ["webkit", "moz"], i = window;
    for (t = 0; t < r.length && !window.requestAnimationFrame; ++t)i.requestAnimationFrame = i[r[t] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[r[t] + "CancelAnimationFrame"] || i[r[t] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (n) {
        var t = (new Date).getTime(), i = Math.max(0, 16 - (t - u)), r = window.setTimeout(function () {
            n(t + i)
        }, i);
        return u = t + i, r
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function (n) {
        clearTimeout(n)
    })
})(), function () {
    Array.prototype.indexOf || (Array.prototype.indexOf = function (n, t) {
        var r, i;
        for (t || (t = 0), r = this.length, i = t; i < r; i++)if (this[i] === n)return i;
        return -1
    })
}();
var $log_log = "", $log = function () {
    if (DEBUG) {
        var n = arguments;
        "console"in window && (Array.prototype.splice.call(n, 0, 0, (new Date).getTime() + "  "), requestAnimationFrame(function () {
            try {
                console.log.apply(console, n)
            } catch (t) {
                console.log(Array.prototype.join.call(n, ", "))
            }
        }))
    }
}, $logTest = function () {
    var n, t;
    TEST && (window.console && console.log((new Date).getTime() + " (TEST) : " + Array.prototype.join.call(arguments, ", ")), n = document.getElementById("hr-TestHarness_Console"), n && (t = (new Date).getTime() + " : " + Array.prototype.join.call(arguments, ", ") + "\n", Locator.validationManager.callPostValidation(function () {
        n.innerHTML += t
    })))
};
DEBUG && ($break_on_assert = !0);
DEBUG && ($assert = function (n, t) {
    if (!n && ("console"in window && "assert"in console && console.assert(n, t), !$break_on_assert))throw new Error(t || "Assertion failed.");
});
$setFooter = "setFooter"in window ? window.setFooter : function () {
}, function () {
    window.makeSafeForCSS || (window.makeSafeForCSS = function (n) {
        return n && n.replace ? n.replace(/[^a-z0-9]/g, function (n) {
            var t = n.charCodeAt(0);
            return t == 32 ? "-" : t >= 65 && t <= 90 ? "_" + n.toLowerCase() : "__" + ("000" + t.toString(16)).slice(-4)
        }) : ""
    })
}(), function () {
    window.safeSessionStorage || (window.safeSessionStorage = function () {
        function n() {
        }

        function t() {
            this._store = {}
        }

        var i = "test-string", r = function () {
            try {
                if (window.sessionStorage)return window.sessionStorage.setItem(i, i), window.sessionStorage.removeItem(i), !0
            } catch (n) {
                ErrorReporter.Trace(null, n)
            }
            return !1
        }();
        return n.prototype.setItem = function (n, t) {
            try {
                window.sessionStorage && window.sessionStorage.setItem(n, t)
            } catch (i) {
            }
        }, n.prototype.getItem = function (n) {
            try {
                if (window.sessionStorage)return window.sessionStorage.getItem(n)
            } catch (t) {
            }
            return null
        }, n.prototype.removeItem = function (n) {
            try {
                window.sessionStorage && window.sessionStorage.removeItem(n)
            } catch (t) {
            }
        }, t.prototype.setItem = function (n, t) {
            this._store[n] = t
        }, t.prototype.getItem = function (n) {
            return this._store[n]
        }, t.prototype.removeItem = function (n) {
            delete this._store[n]
        }, r ? new n : new t
    }())
}(), function (n, t, i) {
    var r, u, o;
    if ((!n.addEventListener || !n.removeEventListener) && n.attachEvent && n.detachEvent) {
        var s = function (n) {
            return typeof n == "function"
        }, h = function (n, t) {
            var u = t[i], r, f;
            if (u)for (r = void 0, f = u.length; f--;)if (r = u[f], r[0] === n)return r[1]
        }, c = function (n, t, r) {
            var u = t[i] || (t[i] = []);
            return h(n, t) || (u[u.length] = [n, r], r)
        };

        function e(n) {
            var i = t[n];
            t[n] = function (n) {
                return f(i(n))
            }
        }

        r = function (i, r) {
            if (s(r)) {
                var u = this;
                u.attachEvent("on" + i, c(u, r, function (i) {
                    i = i || n.event;
                    i.preventDefault = i.preventDefault || function () {
                            i.returnValue = !1
                        };
                    i.stopPropagation = i.stopPropagation || function () {
                            i.cancelBubble = !0
                        };
                    i.target = i.target || i.srcElement || t.documentElement;
                    i.currentTarget = i.currentTarget || u;
                    i.timeStamp = i.timeStamp || (new Date).getTime();
                    r.call(u, i)
                }))
            }
        };
        u = function (n, t) {
            if (s(t)) {
                var i = this, r = h(i, t);
                r && i.detachEvent("on" + n, r)
            }
        };
        function f(n) {
            var t = n.length;
            if (t)while (t--)n[t].addEventListener = r, n[t].removeEventListener = u; else n.addEventListener = r, n.removeEventListener = u;
            return n
        }

        f([t, n]);
        "Element"in n ? (o = n.Element, o.prototype.addEventListener = r, o.prototype.removeEventListener = u) : (t.attachEvent("onreadystatechange", function () {
            f(t.all)
        }), e("getElementsByTagName"), e("getElementById"), e("createElement"), f(t.all))
    }
}(window, document, "x-ms-event-listeners"), function () {
    if (!Array.prototype.reduceRight) {
        function n(n) {
            var u = this, r = u, f = r.length >>> 0, i, t;
            if (typeof n != "function")throw new TypeError("Array.prototype.reduceRight callback must be a function");
            if (f === 0 && arguments.length === 1)throw new TypeError("reduceRight of empty array with no initial value");
            if (t = f - 1, arguments.length >= 2)i = arguments[1]; else do {
                if (t in r) {
                    i = r[t--];
                    break
                }
                if (--t < 0)throw new TypeError("reduceRight of empty array with no initial value");
            } while (1);
            if (t < 0)return i;
            do t in r && (i = n(i, r[t], t, u)); while (t--);
            return i
        }

        Array.prototype.reduceRight = n
    }
}(), function (n) {
    if (!n.getComputedStyle) {
        function t(n, i, r) {
            var e = n.document && n.currentStyle[i].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/) || [0, 0, ""], u = e[1], f = e[2], o;
            return r = r ? /%|em/.test(f) && n.parentElement ? t(n.parentElement, "fontSize", null) : 16 : r, o = i == "fontSize" ? r : /width/i.test(i) ? n.clientWidth : n.clientHeight, f == "%" ? u / 100 * o : f == "cm" ? u * .3937 * 96 : f == "em" ? u * r : f == "in" ? u * 96 : f == "mm" ? u * .3937 * 96 / 10 : f == "pc" ? u * 16 : f == "pt" ? u * 96 / 72 : u
        }

        function i(n, t) {
            var u = t == "border" ? "Width" : "", i = t + "Top" + u, r = t + "Right" + u, f = t + "Bottom" + u, e = t + "Left" + u;
            n[t] = (n[i] == n[r] && n[i] == n[f] && n[i] == n[e] ? [n[i]] : n[i] == n[f] && n[e] == n[r] ? [n[i], n[r]] : n[e] == n[r] ? [n[i], n[r], n[f]] : [n[i], n[r], n[f], n[e]]).join(" ")
        }

        function r(n) {
            var r = this, f = n.currentStyle, e = t(n, "fontSize"), o = function (n) {
                return "-" + n.toLowerCase()
            };
            for (var u in f)if (Array.prototype.push.call(r, u == "styleFloat" ? "float" : u.replace(/[A-Z]/, o)), u == "width")r[u] = n.offsetWidth + "px"; else if (u == "height")r[u] = n.offsetHeight + "px"; else if (u == "styleFloat")r.float = f[u]; else if (/margin.|padding.|border.+W/.test(u) && r[u] != "auto")r[u] = Math.round(t(n, u, e)) + "px"; else if (/^outline/.test(u))try {
                r[u] = f[u]
            } catch (s) {
                r.outlineColor = f.color;
                r.outlineStyle = r.outlineStyle || "none";
                r.outlineWidth = r.outlineWidth || "0px";
                r.outline = [r.outlineColor, r.outlineWidth, r.outlineStyle].join(" ")
            } else r[u] = f[u];
            i(r, "margin");
            i(r, "padding");
            i(r, "border");
            r.fontSize = Math.round(e) + "px"
        }

        r.prototype = {
            constructor: r, getPropertyPriority: function () {
                $assert && $assert(!1, "NotSupportedError: DOM Exception 9")
            }, getPropertyValue: function (n) {
                return this[n.replace(/-\w/g, function (n) {
                    return n[1].toUpperCase()
                })]
            }, item: function (n) {
                return this[n]
            }, removeProperty: function () {
                $assert && $assert(!1, "NoModificationAllowedError: DOM Exception 7")
            }, setProperty: function () {
                $assert && $assert(!1, "NoModificationAllowedError: DOM Exception 7")
            }, getPropertyCSSValue: function () {
                $assert && $assert(!1, "NotSupportedError: DOM Exception 9")
            }
        };
        n.getComputedStyle = function (n) {
            return new r(n)
        }
    }
}(this);
FastClick = function () {
    "use strict";
    /**
     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */
    function n(t, i) {
        function h(n, t) {
            return function () {
                return n.apply(t, arguments)
            }
        }

        var o, u, s, r;
        if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = t, this.tapDelay = i.tapDelay || 20, this.tapTimeout = i.tapTimeout || 700, u = this.deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0, s = this.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0 && !u, this.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !u, this.deviceIsIOS4 = this.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), this.deviceIsIOSWithBadTarget = this.deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent), this.deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0, !n.notNeeded(t)) {
            var f = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], e = this, c = f.length;
            for (r = 0; r < c; r++)e[f[r]] = h(e[f[r]], e);
            s && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0));
            t.addEventListener("click", this.onClick, !0);
            t.addEventListener("touchstart", this.onTouchStart, !1);
            t.addEventListener("touchmove", this.onTouchMove, !1);
            t.addEventListener("touchend", this.onTouchEnd, !1);
            t.addEventListener("touchcancel", this.onTouchCancel, !1);
            Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (n, i, r) {
                var u = Node.prototype.removeEventListener;
                n === "click" ? u.call(t, n, i.hijacked || i, r) : u.call(t, n, i, r)
            }, t.addEventListener = function (n, i, r) {
                var u = Node.prototype.addEventListener;
                n === "click" ? u.call(t, n, i.hijacked || (i.hijacked = function (n) {
                        n.propagationStopped || i(n)
                    }), r) : u.call(t, n, i, r)
            });
            typeof t.onclick == "function" && (o = t.onclick, t.addEventListener("click", function (n) {
                o(n)
            }, !1), t.onclick = null)
        }
    }

    return n.prototype.needsClick = function (n) {
        switch (n.nodeName.toLowerCase()) {
            case"button":
            case"select":
            case"textarea":
                if (n.disabled)return !0;
                break;
            case"input":
                if (this.deviceIsIOS && n.type === "file" || n.disabled)return !0;
                break;
            case"label":
            case"iframe":
            case"video":
                return !0
        }
        for (var i = !1, t = n; t && t !== document && !i;)i = /\bneedsclick\b/.test(t.className), t = t.parentNode;
        return i
    }, n.prototype.needsFocus = function (n) {
        if (/\bforcenofocus\b/.test(n.className))return !1;
        switch (n.nodeName.toLowerCase()) {
            case"textarea":
                return !0;
            case"select":
                return !this.deviceIsAndroid;
            case"input":
                switch (n.type) {
                    case"button":
                    case"checkbox":
                    case"file":
                    case"image":
                    case"radio":
                    case"submit":
                        return !1
                }
                return !n.disabled && !n.readOnly;
            default:
                return /\bneedsfocus\b/.test(n.className)
        }
    }, n.prototype.sendClick = function (n, t) {
        var r, i;
        document.activeElement && document.activeElement !== n && document.activeElement.blur();
        i = t.changedTouches[0];
        r = document.createEvent("MouseEvents");
        r.initMouseEvent(this.determineEventType(n), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null);
        r.forwardedTouchEvent = !0;
        n.dispatchEvent(r)
    }, n.prototype.determineEventType = function (n) {
        return this.deviceIsAndroid && n.tagName.toLowerCase() === "select" ? "mousedown" : "click"
    }, n.prototype.focus = function (n) {
        var t;
        this.deviceIsIOS && n.setSelectionRange && n.type.indexOf("date") !== 0 && n.type !== "time" && n.type !== "month" ? (t = n.value.length, n.setSelectionRange(t, t)) : n.focus()
    }, n.prototype.updateScrollParent = function (n) {
        var t, i;
        if (t = n.fastClickScrollParent, !t || !t.contains(n)) {
            i = n;
            do {
                if (i.scrollHeight > i.offsetHeight) {
                    t = i;
                    n.fastClickScrollParent = i;
                    break
                }
                i = i.parentElement
            } while (i)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop, t.fastClickLastScrollLeft = t.scrollLeft)
    }, n.prototype.getTargetElementFromEventTarget = function (n) {
        return n.nodeType === Node.TEXT_NODE ? n.parentNode : n
    }, n.prototype.onTouchStart = function (n) {
        var i, t, r;
        if (n.targetTouches.length > 1)return !0;
        if (i = this.getTargetElementFromEventTarget(n.target), t = n.targetTouches[0], this.deviceIsIOS) {
            if (r = window.getSelection(), r.rangeCount && !r.isCollapsed)return !0;
            if (!this.deviceIsIOS4) {
                if (t.identifier && t.identifier === this.lastTouchIdentifier)return n.preventDefault(), !1;
                this.lastTouchIdentifier = t.identifier;
                this.updateScrollParent(i)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = n.timeStamp, this.targetElement = i, this.touchStartX = t.pageX, this.touchStartY = t.pageY, n.timeStamp - this.lastClickTime < this.tapDelay && n.preventDefault(), !0
    }, n.prototype.touchHasMoved = function (n) {
        var t = n.changedTouches[0], i = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i ? !0 : !1
    }, n.prototype.onTouchMove = function (n) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(n.target) || this.touchHasMoved(n)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, n.prototype.findControl = function (n) {
        return n.control !== undefined ? n.control : n.htmlFor ? document.getElementById(n.htmlFor) : n.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, n.prototype.onTouchEnd = function (n) {
        var u, e, r, i, f, t = this.targetElement;
        if (!this.trackingClick)return !0;
        if (n.timeStamp - this.lastClickTime < this.tapDelay)return this.cancelNextClick = !0, !0;
        if (n.timeStamp - this.trackingClickStart > this.tapTimeout)return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = n.timeStamp, e = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (f = n.changedTouches[0], t = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || t, t.fastClickScrollParent = this.targetElement.fastClickScrollParent), r = t.tagName.toLowerCase(), r === "label") {
            if (u = this.findControl(t), u) {
                if (this.focus(t), this.deviceIsAndroid)return !1;
                t = u
            }
        } else if (this.needsFocus(t))return n.timeStamp - e > 100 || this.deviceIsIOS && window.top !== window && r === "input" ? (this.targetElement = null, !1) : (this.focus(t), this.sendClick(t, n), this.deviceIsIOS && r === "select" || (this.targetElement = null, n.preventDefault()), !1);
        return this.deviceIsIOS && !this.deviceIsIOS4 && (i = t.fastClickScrollParent, i && (i.fastClickLastScrollTop !== i.scrollTop || i.fastClickLastScrollLeft !== i.scrollLeft)) ? !0 : (this.needsClick(t) || (n.preventDefault(), this.sendClick(t, n)), !1)
    }, n.prototype.onTouchCancel = function () {
        this.trackingClick = !1;
        this.targetElement = null
    }, n.prototype.onMouse = function (n) {
        return this.targetElement ? n.forwardedTouchEvent ? !0 : n.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (n.stopImmediatePropagation ? n.stopImmediatePropagation() : n.propagationStopped = !0, n.stopPropagation(), n.preventDefault(), !1) : !0 : !0 : !0
    }, n.prototype.onClick = function (n) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : n.target.type === "submit" && n.detail === 0 ? !0 : (t = this.onMouse(n), t || (this.targetElement = null), t)
    }, n.prototype.destroy = function () {
        var n = this.layer;
        this.deviceIsAndroid && (n.removeEventListener("mouseover", this.onMouse, !0), n.removeEventListener("mousedown", this.onMouse, !0), n.removeEventListener("mouseup", this.onMouse, !0));
        n.removeEventListener("click", this.onClick, !0);
        n.removeEventListener("touchstart", this.onTouchStart, !1);
        n.removeEventListener("touchmove", this.onTouchMove, !1);
        n.removeEventListener("touchend", this.onTouchEnd, !1);
        n.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, n.notNeeded = function (n) {
        var t, i, r, u;
        if (typeof ontouchstart == "undefined")return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], i)if (this.deviceIsAndroid) {
            if (t = document.querySelector("meta[name=viewport]"), t && (t.content.indexOf("user-scalable=no") !== -1 || i > 31 && document.documentElement.scrollWidth <= window.outerWidth))return !0
        } else return !0;
        return this.deviceIsBlackBerry10 && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (t = document.querySelector("meta[name=viewport]"), t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) ? !0 : n.style.msTouchAction === "none" || n.style.touchAction === "manipulation" ? !0 : (u = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], u >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) ? !0 : n.style.touchAction === "none" || n.style.touchAction === "manipulation" ? !0 : !1
    }, n.attach = function (t, i) {
        return new n(t, i)
    }, n
}();
window.FastClick = FastClick;
LongClick.prototype.onTouchStart = function (n) {
    "use strict";
    var i, t;
    if (n.targetTouches && n.targetTouches.length === 1)t = n.targetTouches[0]; else if (n.clientX && n.clientY)t = n; else return !0;
    return i = n.target, this.trackingClick = !0, this.trackingClickStart = n.timeStamp, this.targetElement = i, this.touchStartX = t.clientX, this.touchStartY = t.clientY, this.timer = window.setTimeout(this.handler, this.time), !0
};
LongClick.prototype.touchHasMoved = function (n) {
    "use strict";
    var t, i = this.touchBoundary;
    return t = n.changedTouches ? n.changedTouches[0] : n, Math.abs(t.clientX - this.touchStartX) > i || Math.abs(t.clientY - this.touchStartY) > i
};
LongClick.prototype.onTouchMove = function (n) {
    "use strict";
    return this.trackingClick ? ((this.targetElement !== n.target || this.touchHasMoved(n)) && this.reset(), !0) : !0
};
LongClick.prototype.onTouchEnd = function (n) {
    "use strict";
    return this.trackingClick ? n.timeStamp - this.trackingClickStart < this.time ? (this.reset(), !0) : !1 : !0
};
LongClick.prototype.reset = function () {
    "use strict";
    this.timer && window.clearTimeout(this.timer);
    this.trackingClick = !1;
    this.trackingClickStart = null;
    this.targetElement = null
};
LongClick.prototype.onTouchCancel = function () {
    "use strict";
    this.reset()
};
LongClick.prototype.destroy = function () {
    "use strict";
    var n = this.layer;
    n.removeEventListener(this.startEventName, this.onTouchStart, !1);
    n.removeEventListener(this.moveEventName, this.onTouchMove, !1);
    n.removeEventListener(this.endEventName, this.onTouchEnd, !1);
    n.removeEventListener(this.cancelEventName, this.onTouchCancel, !1)
};
LongClick.attach = function (n, t, i) {
    "use strict";
    return new LongClick(n, t, i)
}, function () {
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var t = function () {
        function n(n, t, i, r, u, f, e) {
            this.languageId = n;
            this.cultureCode = t;
            this.cultureCode2 = i;
            this.languageCode = r;
            this.supportsEmbeddedFonts = u;
            this.isAsianRegion = f;
            this.allowCapitalisation = e
        }

        return n
    }();
    n.LanguageProfile = t
}(ns_gen5_ml || (ns_gen5_ml = {})), function (n) {
    var t = n.LanguageProfile, i = function () {
        function n() {
        }

        return n.SelectLanguageProfile = function (t) {
            t == 0 && (t = 1);
            n.SelectedProfile = n.LanguageProfiles[t]
        }, n.getRegionIsAsian = function () {
            return n.SelectedProfile.isAsianRegion
        }, n.getLanguageId = function () {
            return n.SelectedProfile.languageId
        }, n.allowCapitalisation = function () {
            return n.SelectedProfile.allowCapitalisation
        }, n.getLanguageCode = function () {
            return this.SelectedProfile.languageCode
        }, n.getCultureCode = function () {
            return this.SelectedProfile.cultureCode
        }, n.getCultureCode2 = function () {
            return this.SelectedProfile.cultureCode2
        }, n.init = function () {
            n.LanguageProfiles = {
                1: new t(1, "en", "en", "en-GB", !0, !1, !0),
                2: new t(2, "zht", "zh-cht", "ch", !1, !0, !1),
                3: new t(3, "es", "es", "es", !0, !1, !0),
                4: new t(4, "fr", "fr", "fr", !0, !1, !0),
                5: new t(5, "de", "de", "de", !0, !1, !0),
                6: new t(6, "it", "it", "it", !0, !1, !0),
                7: new t(7, "da", "da", "da", !0, !1, !0),
                8: new t(8, "sv", "sv", "sv", !0, !1, !0),
                9: new t(9, "nn", "nn", "no", !0, !1, !0),
                10: new t(10, "zh", "zh-chs", "zh-cn", !1, !0, !1),
                19: new t(19, "bg", "bg", "bg", !0, !1, !0),
                20: new t(20, "el", "el", "el", !0, !1, !1),
                21: new t(21, "pl", "pl", "pl", !0, !1, !0),
                22: new t(22, "pt", "pt", "pt", !0, !1, !0),
                23: new t(23, "ro", "ro", "ro", !0, !1, !0),
                24: new t(24, "cs", "cs", "cs", !0, !1, !0),
                25: new t(25, "hu", "hu", "hu", !0, !1, !0),
                26: new t(26, "sk", "sk", "sk", !0, !1, !0),
                28: new t(28, "nl", "nl", "nl-nl", !0, !1, !0)
            }
        }, n
    }();
    n.LanguageSettings = i;
    i.init()
}(ns_gen5_ml || (ns_gen5_ml = {})), function (n) {
    var i = n.LanguageSettings, t = function () {
        function n() {
        }

        return n.GetMonthName = function (t) {
            return (n._mylanguage || (n._mylanguage = n.ALL_MONTHS[i.getLanguageId()]), i.getRegionIsAsian()) ? (t + 1 + n.CMC).toString() : n._mylanguage[t].toString()
        }, n
    }();
    t.CMC = "月";
    t.CDC = "日";
    t.ALL_MONTHS = {
        1: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        2: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        3: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        5: ["Januar ", "Februar ", "März", "April ", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        6: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        7: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober ", "November", "December"],
        8: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        9: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        10: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        19: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
        20: ["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαϊου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"],
        21: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"],
        22: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        23: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        24: ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"],
        25: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
        26: ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"],
        28: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
    };
    n.LongMonthNames = t
}(ns_gen5_ml || (ns_gen5_ml = {})), function (n) {
    var i = n.LanguageSettings, t = function () {
        function n() {
        }

        return n.GetDay = function (t) {
            return n._mylanguage || (n._mylanguage = n.ALL_DAYS[i.getLanguageId()]), n._mylanguage[t].toString()
        }, n
    }();
    t.ALL_DAYS = {
        1: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        2: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        3: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        5: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        6: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        7: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        8: ["Söndag", "Mandag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
        9: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        10: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        19: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
        20: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
        21: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        22: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
        23: ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"],
        24: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
        25: ["Vasárnap", "Hétfő", "Kedd", "Szerda", " Csütörtök", "Péntek", "Szombat"],
        26: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
        28: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
    };
    n.LongDayNames = t
}(ns_gen5_ml || (ns_gen5_ml = {})), function (n) {
    var i = n.LanguageSettings, t = function () {
        function n() {
        }

        return n.GetMonthName = function (t) {
            return (n._mylanguage || (n._mylanguage = n.ALL_MONTHS[i.getLanguageId()]), i.getRegionIsAsian()) ? String(t + 1) + this.CMC : n._mylanguage[t]
        }, n
    }();
    t.CYC = "年";
    t.CMC = "月";
    t.CDC = "日";
    t.ALL_MONTHS = {
        1: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        2: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        3: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        4: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        5: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        6: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        7: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        8: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        9: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        10: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        14: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        19: ["яну", "фев", "мар", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"],
        20: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαΐου", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
        21: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
        22: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Sep", "Out", "Nov", "Dez"],
        23: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        24: ["led", "úno", "bře", "dub", "kvě", "čer", "čvc", "srp", "zář", "říj", "lis", "pro"],
        25: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
        26: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"],
        28: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
    };
    n.ShortMonthNames = t
}(ns_gen5_ml || (ns_gen5_ml = {})), function (n) {
    var i = n.LanguageSettings, t = function () {
        function n() {
        }

        return n.GetDay = function (t) {
            return n._mylanguage || (n._mylanguage = n.ALL_DAYS[i.getLanguageId()]), n._mylanguage[t]
        }, n
    }();
    t.ALL_DAYS = {
        1: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        2: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        3: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        5: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        6: ["Dom", "Lun", "Mar", "Mer", "Giov", "Ven", "Sab"],
        7: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", " Lør"],
        8: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
        9: ["Søn", "Man", "Tirs", "Ons", "Tors", "Fre", "Lør"],
        10: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        19: ["Нед", "Пон", "Вт", "Ср", "Чет", "Пет", "Съб"],
        20: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
        21: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
        22: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        23: ["D", "L", "Ma", "Mi", "J", "V", "S"],
        24: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
        25: ["Vas", "Hét", "Kedd", "Sze", " Csüt", "Pén", "Szo"],
        26: ["Ned", "Pon", "Ut", "Str", "Štv", "Pia", "Sob"],
        28: ["zo", "ma", "di", "wo", "do", "vr", "za"]
    };
    n.ShortDayNames = t
}(ns_gen5_ml || (ns_gen5_ml = {})), function (n) {
    var i = n.LanguageSettings, r = n.ShortMonthNames, u = n.LongMonthNames, f = n.ShortDayNames, e = n.LongDayNames, t = function () {
        function n() {
        }

        return n.FormatDate = function (n, t, i, r) {
            var u, f;
            r != 0 && (f = t.getMinutes(), f += r, t.setMinutes(f));
            switch (n) {
                case this.BOOK_CLOSE:
                    u = this.bookClose(t, i);
                    break;
                case this.DAY_DATE_LONGMONTH:
                    u = this.dayDateLongMonth(t, i);
                    break;
                case this.DAY_DATE_MONTH_YEAR_TIME:
                    u = this.dayDateMonthYearTime(t, i);
                    break;
                case this.HH_MM_SS:
                    u = this.hhmmss(t);
                    break;
                case this.HH_MM:
                    u = this.hhmm(t);
                    break;
                case this.DAY_DATE:
                    u = this.dayDate(t, i);
                    break;
                case this.DAY_DATE_LONG:
                    u = this.dayDateLong(t, i);
                    break;
                case this.DAY_ONLY:
                    u = this.day(t);
                    break;
                case this.DATE_MONTH_YEAR:
                    u = this.dateMonthYear(t);
                    break;
                case this.DAY_DATE_MONTH_YEAR_TIME_SECONDS:
                    u = this.dayDateMonthYearTimeSeconds(t, i)
            }
            return u
        }, n.FormatStringToDate = function (n) {
            var u = n.split(" "), f = u[0], i = f.split("/"), e = u[1], r = e.split(":"), t = new Date;
            return t.setDate(parseInt(i[0])), t.setMonth(parseInt(i[1]) - 1), t.setFullYear(parseInt(i[2])), t.setHours(parseInt(r[0])), t.setMinutes(parseInt(r[1])), t.setSeconds(parseInt(r[2])), t
        }, n.bookClose = function (n, t) {
            var o, u = n.getDate().toString(), f = r.GetMonthName(n.getMonth()), s = n.getMinutes().toString(), h = n.getHours().toString(), e = (h.length > 1 ? h : "0" + h) + this.TIME_SEPERATOR + (s.length > 1 ? s : "0" + s);
            return i.getRegionIsAsian() ? (u += r.CDC, o = f + u + " " + e) : o = this.requiresAmericanFormatting(t, i.getLanguageId()) ? f + " " + u + " " + e : i.getLanguageId() == 25 ? f + " " + u + " " + e : u + " " + f + " " + e, o
        }, n.dayDateLong = function (n, t) {
            var i = n.getDay();
            return f.GetDay(i) + " " + this.dayDate(n, t)
        }, n.dayDate = function (n, t) {
            var e, o = n.getDate(), u = o < 10 ? "0" + o.toString() : o.toString(), f = r.GetMonthName(n.getMonth());
            return i.getRegionIsAsian() ? (u += r.CDC, e = f + u) : e = this.requiresAmericanFormatting(t, i.getLanguageId()) ? f + " " + u : i.getLanguageId() == 25 ? f + " " + u : u + " " + f, e
        }, n.day = function (n) {
            var t = n.getDay();
            return e.GetDay(t)
        }, n.requiresAmericanFormatting = function (n, t) {
            return n == "11" && t == 1
        }, n.hhmmss = function (n) {
            var t = n.getHours().toString(), i = n.getMinutes().toString(), r = n.getSeconds().toString();
            return t.length < 2 && (t = "0" + t), i.length < 2 && (i = "0" + i), r.length < 2 && (r = "0" + r), t + ":" + i + ":" + r
        }, n.hhmm = function (n) {
            var t = n.getHours().toString(), i = n.getMinutes().toString();
            return t.length < 2 && (t = "0" + t), i.length < 2 && (i = "0" + i), t + ":" + i
        }, n.dayDateLongMonth = function (n, t) {
            var f, r = n.toString(), e = u.GetMonthName(n.getMonth()).toString(), o = this.GetSuffix(n.getDay()), s = i.getLanguageId();
            switch (s) {
                case 1:
                case 6:
                case 9:
                case 19:
                case 20:
                case 21:
                case 24:
                case 26:
                case 28:
                    f = this.requiresAmericanFormatting(t, s) ? e + " " + r + o : r + o + " " + e;
                    break;
                case 2:
                case 10:
                    r += u.CDC;
                    f = e + " " + r;
                    break;
                case 3:
                    f = r + o + " de " + e;
                    break;
                case 5:
                    f = ", den " + r + o + " " + e;
                    break;
                case 7:
                case 8:
                    f = "den " + r + o + " " + e;
                    break;
                case 23:
                    f = ", " + r + o + " " + e;
                    break;
                case 25:
                    f = e + " " + r + o;
                    break;
                default:
                    f = r + " " + e
            }
            return f
        }, n.dayDateMonthYearTime = function (n, t) {
            var o, s = r.GetMonthName(n.getMonth()), h = f.GetDay(n.getDay()), u, e = n.getMinutes().toString(), c = i.getLanguageId();
            u = n.getHours() == 0 ? "00" : n.getHours() < 10 ? "0" + n.getHours().toString() : n.getHours().toString();
            e = n.getMinutes() == 0 ? "00" : n.getMinutes() < 10 ? "0" + n.getMinutes().toString() : n.getMinutes().toString();
            switch (c) {
                case 2:
                case 10:
                    o = h + " " + n.getFullYear() + r.CYC + s + n.getDate() + r.CDC + ", " + u + ":" + e;
                    break;
                case 23:
                    o = h + ", " + n.getDate() + " " + s + " " + n.getFullYear() + ", " + u + ":" + e;
                    break;
                case 25:
                    o = h + " " + n.getFullYear() + " " + s + " " + n.getDate() + " " + u + ":" + e;
                    break;
                default:
                    o = this.requiresAmericanFormatting(t, i.getLanguageId()) ? h + " " + s + " " + n.getDate() + " " + n.getFullYear() + ", " + u + ":" + e : h + " " + n.getDate() + " " + s + " " + n.getFullYear() + ", " + u + ":" + e
            }
            return o
        }, n.dayDateMonthYearTimeSeconds = function (n, t) {
            var r = this.dayDateMonthYearTime(n, t), i = n.getSeconds().toString();
            return i.length < 2 && (i = "0" + i), r + (":" + i)
        }, n.dateMonthYear = function (n) {
            var t = (n.getDay() < 10 ? "0" + n.getDay() : n.getDay()).toString(), i = ((n.getMonth() < 9 ? "0" : "") + (n.getMonth() + 1)).toString(), r = n.getFullYear().toString();
            return t + "." + i + "." + r
        }, n.GetSuffix = function (n) {
            var f = i.getLanguageId(), r = [], t, u;
            n = n % 100;
            n > 19 && (u = n.toString(), n = parseInt(this.charAt(u, u.length - 1)));
            switch (f) {
                case 1:
                    r = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th"];
                    break;
                case 6:
                    t = n == 1 ? "°" : "";
                    break;
                case 3:
                    t = "°";
                    break;
                case 5:
                case 7:
                case 9:
                case 21:
                case 24:
                case 25:
                case 26:
                    t = ".";
                    break;
                case 19:
                case 20:
                case 22:
                case 23:
                    t = "";
                    break;
                case 8:
                    r = ["e:", ":a", ":a", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e"];
                    break;
                case 28:
                    r = ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e"];
                    break;
                default:
                    t = ""
            }
            return t != null ? t : r[n]
        }, n.charAt = function (n, t) {
            return n.charAt(t)
        }, n
    }();
    t.BOOK_CLOSE = "bookClose";
    t.HH_MM_SS = "hhmmss";
    t.HH_MM = "hhmm";
    t.DAY_DATE_MONTH_YEAR_TIME = "dayDateMonthYearTime";
    t.DAY_DATE_LONGMONTH = "dayDateLongMonth";
    t.DAY_ONLY = "day";
    t.DAY_DATE = "dayDate";
    t.DAY_DATE_LONG = "dayDateLong";
    t.DATE_MONTH_YEAR = "dateMonthYear";
    t.DAY_DATE_MONTH_YEAR_TIME_SECONDS = "dayDateMonthYearTimeSeconds";
    t.TIME_SEPERATOR = ":";
    n.MLDateFormatter = t
}(ns_gen5_ml || (ns_gen5_ml = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n.HexStringToNumber = function (n) {
            return Number("0x" + n.slice(1))
        }, n.NumberToHexString = function (n) {
            var t = (n & 16777215).toString(16);
            return "#" + "00000".substring(0, 6 - t.length) + t
        }, n.AdjustColourBrightness = function (n, t) {
            return n = ((n & 16711680) >> 16) * t << 16 | ((n & 65280) >> 8) * t << 8 | (n & 255) * t, n > 16777215 ? 16777215 : n
        }, n.AdjustHexBrightness = function (n, t) {
            return this.NumberToHexString(this.AdjustColourBrightness(this.HexStringToNumber(n), t))
        }, n.Blend = function (n, t, i) {
            return (((n & 16711680) >> 16) * (1 - i) << 16 | ((n & 65280) >> 8) * (1 - i) << 8 | (n & 255) * (1 - i)) + (((t & 16711680) >> 16) * i << 16 | ((t & 65280) >> 8) * i << 8 | (t & 255) * i)
        }, n
    }();
    n.ColourUtil = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t;
    (function (n) {
        function t(n) {
            return +n
        }

        function i(n) {
            return ~~n
        }

        n.StringToNumber = t;
        n.StringToInteger = i
    })(t = n.MathUtil || (n.MathUtil = {}))
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n.prototype.setConfigJSON = function (n) {
            this.rawJSON = n;
            this.configJSON = this.rawJSON.config
        }, n.prototype.getItem = function (n) {
            return this.configJSON[n]
        }, n.prototype.getRawJson = function () {
            return this.rawJSON
        }, n
    }();
    n.Config = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function () {
        function n(n) {
            this.message = n;
            this.timestamp = new Date
        }

        return n.prototype.toString = function () {
            return "[" + this.timestamp + "] - " + this.message
        }, n
    }();
    n.LogEntry = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    n.AjaxLoader = function () {
        "use strict";
        function r(n, i) {
            var u = [], o, s, f, r, e, h;
            if (u.splice(0, 0, document.getElementsByTagName("script")), h = !1, n.src)for (r = 0, e = u.length; r < e; r++)if (u[r].src && u[r].src.split("?")[0] == n.src.split("?")[0]) {
                h = !0;
                break
            }
            if (h)i && i(); else {
                if (s = document.head || document.getElementsByTagName("head")[0], f = document.createElement("script"), f.type = "text/javascript", n.src)f.src = n.src, f.onerror = f.onload = i; else {
                    for (o = t(n), r = 0, e = u.length; r < e; r++)t(u[r]) == o && u[r].parentNode.removeChild(u[r]);
                    f.appendChild(document.createTextNode(o));
                    i && i()
                }
                s.appendChild(f, s.firstChild);
                n.parentNode && n.parentNode.removeChild(n)
            }
        }

        function t(n) {
            return n.text || n.textContent || n.innerHTML || ""
        }

        function i(n, t, u) {
            t < n.length ? r(n[t], function () {
                i(n, ++t, u)
            }) : u && u()
        }

        return {
            load: function (n, t, i) {
                var r = new XMLHttpRequest;
                r.onreadystatechange = function () {
                    r.readyState == 4 && (r.status == 200 ? (t.innerHTML = r.responseText, i && i()) : $log("MatchLive markup request failed, status: " + r.status), r.onreadystatechange = null)
                };
                r.open("GET", n, !0);
                r.send("")
            }, loadAndExecute: function (t, i, r) {
                n.AjaxLoader.load(t, i, function () {
                    n.AjaxLoader.processScripts(i, r)
                })
            }, processScripts: function (n, t) {
                for (var u = [], r = n.getElementsByTagName("script"), f = r.length; f--;)r[0].type && r[0].type.toLowerCase() !== "text/javascript" || u.push(r[0].parentNode ? r[0].parentNode.removeChild(r[0]) : r[0]);
                i(u, 0, t)
            }
        }
    }()
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    n.EventTrigger = function () {
        "use strict";
        return {
            triggerEventOnElement: function (n, t, i) {
                var r;
                n;
                document.createEvent ? (r = document.createEvent("HTMLEvents"), r.initEvent(t, !0, !0)) : (r = document.createEventObject(), r.eventType = t);
                r.eventName = t;
                r.data = i || {};
                document.createEvent ? document.dispatchEvent(r) : document.fireEvent("on" + r.eventType, r)
            }
        }
    }()
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function () {
        function n(n, t) {
            this.scope = n;
            this.method = t
        }

        return n.prototype.toString = function () {
            return "[Delegate scope=" + this.scope + "]"
        }, n
    }();
    n.Delegate = t;
    n.EventListener = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t;
    (function (n) {
        n[n.DEFAULT = 1] = "DEFAULT";
        n[n.FRACTIONAL = 1] = "FRACTIONAL";
        n[n.DECIMAL = 2] = "DECIMAL";
        n[n.AMERICAN = 3] = "AMERICAN"
    })(t = n.OddsType || (n.OddsType = {}))
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n
    }();
    t.NOT_SUSPENDED = "0";
    t.SUSPEND_AND_SHOW = "1";
    t.OFF_THE_BOARD = "2";
    t.IPPG_SUSPEND_AND_HIDE = "3";
    n.SuspendType = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var f = ns_gen5_data.Attribute, r = {}, u = {}, t, i;
    (function (n) {
        n[n.AVAILABLE = 0] = "AVAILABLE";
        n[n.BELOW_MINIMUM = 1] = "BELOW_MINIMUM";
        n[n.NOT_OFFERED = 2] = "NOT_OFFERED"
    })(t = n.OddsAvailable || (n.OddsAvailable = {}));
    i = function () {
        function n() {
        }

        return n.ConvertOddsDecimal = function (t, i, u) {
            var s, c, h, f, e, o, l, a;
            if (i || i == 0 || (i = 2), u || u == !1 || (u = !0), s = t + i, u && (r[s] || !t))return r[s];
            if (h = t.indexOf("/", 1), h > -1)if (c = [t.slice(0, h), t.slice(++h)], f = Number((Number(c[0]) >> 0) / (Number(c[1]) >> 0) + (u ? 1 : 0)).toFixed(4), Number(f) < 1.1 && f.split(".")[1].length > 2 && n.MinOdds == 0 && (i = 3), e = 0, o = f.indexOf(".", 1), i == 0)f = f.slice(0, o > -1 ? o : 2147483647); else if (o > -1)if (e = i - (f.length - ++o), e > 0)for (l = 0; l < e; l++)f += "0"; else e < 0 && (f = f.slice(0, f.length + e)); else for (f += ".", a = 0; a < i; a++)f += "0";
            return u && (r[s] = f), f
        }, n.ConvertOddsUS = function (n) {
            if (u[n] || !n)return u[n];
            var t, i, r = n.indexOf("/", 1), f, e, o;
            return r > -1 && (i = [n.slice(0, r), n.slice(++r)], f = Number(i[0]), e = Number(i[1]), o = f / e, t = o > .999999 ? "+" + String(o * 100 + 1e-6 | 0) : "-" + String(e / f * 100 + .999999 | 0)), u[n] = t, t
        }, n.AreOddsBelowMinimum = function (t) {
            if (n.MinOdds <= 1)return !1;
            var i = n.ConvertOddsDecimal(t, 4);
            return isNaN(i) ? !1 : +i < n.MinOdds
        }, n.AreOddsRestricted = function (n) {
            var i = n.data.PX, r = !1, t, u;
            if (i) {
                t = -1;
                u = Locator.user.countryCode64;
                do t = i.indexOf(u, ++t); while (t != -1 && t % 2);
                r = t > -1
            }
            return r
        }, n.ConvertDecimalOddsToFractional = function (t) {
            var r, i, f, e, o = String(t), u;
            return i = Math.pow(o.length, 10), r = (t - 1) * i, u = n.FactorOdds(r, i), u ? (f = r / u, e = i / u) : (f = r, e = i), String(f) + "/" + String(e)
        }, n.FactorOdds = function (t, i) {
            var r;
            return r = n.HCF(t, i), Math.floor(r)
        }, n.HCF = function (t, i) {
            var r;
            return r = t == 0 ? i : i == 0 ? t : n.HCF(i, t % i), Math.floor(r)
        }, n.AreOddsAvailable = function (n) {
            return this.AreOddsBelowMinimum(n.data.OD) ? t.BELOW_MINIMUM : this.AreOddsRestricted(n) ? t.NOT_OFFERED : t.AVAILABLE
        }, n
    }();
    i.MinOdds = 0;
    i.NOT_OFFERED = "N / O";
    n.OddsConverter = i
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function () {
        function n(n, t) {
            this.min = n;
            this.max = t
        }

        return n.prototype.getLength = function () {
            return this.max - this.min
        }, n
    }();
    n.Range = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function () {
        function n(n) {
            this.type = n;
            $assert && $assert(n, '"type" has not been defined on ' + this)
        }

        return n.prototype.toString = function () {
            return "[Event365 type=" + this.type + "]"
        }, n
    }();
    t.SInit = function () {
        t.prototype.stopPropagation = !1;
        t.prototype.target = null;
        t.prototype.currentTarget = null
    }();
    n.Event365 = t
}(ns_gen5_events || (ns_gen5_events = {})), function (n) {
    var t = function (n) {
        function t(t, i) {
            var r = n.call(this, t) || this;
            return r.type = t, r.data = i, r
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[Event365 type=" + this.type + ", data = " + this.data + "]"
        }, t
    }(n.Event365);
    t.DATA = "data";
    __decorate([override], t.prototype, "toString");
    n.DataEvent = t
}(ns_gen5_events || (ns_gen5_events = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n.prototype.toString = function () {
            return "[EventDispatcher]"
        }, n.prototype.addEventListener = function (n, t) {
            $assert && $assert(t, "handlerDelegate must be defined.");
            this._eRegister || (this._eRegister = {}, this._touchlist = {});
            var i = this._eRegister[n];
            i ? i[i.length] = t : this._eRegister[n] = [t]
        }, n.prototype.dispatchEvent = function (n) {
            var i, r, t, u;
            if ((n.target ? n.currentTarget = this : n.target = n.currentTarget = this, this._eRegister) && (i = n.type, r = this._eRegister[i], r))for (DEBUG && ("$_verbose_event_logging"in window) && $_verbose_event_logging && $dir(n), this._touchlist[i] && this.cleanRegister(i), u = 0; u < r.length; u++)if (t = r[u], DEBUG)t && t.method.call(t.scope, n); else try {
                t && t.method.call(t.scope, n)
            } catch (f) {
                ErrorReporter.Trace(this, f)
            }
        }, n.prototype.bubbleEvent = function (n) {
            if (this.dispatchEvent(n), !n.stopPropagation)for (var t = this.parent; t;) {
                if (t.bubbleEvent) {
                    t.bubbleEvent(n);
                    break
                }
                t = t.parent
            }
        }, n.prototype.removeEventListener = function (n, t) {
            if (!this._eRegister) {
                $assert && $assert(!1, "removeEventListener call failed because the eRegister doesn't exist.");
                return
            }
            var i = this._eRegister[n], r;
            i && (r = i.indexOf(t)) > -1 ? (i[r] = undefined, this._touchlist[n] = !0) : $assert && $assert(!1, "removeEventListener call failed because the delegate didn't exist.")
        }, n.prototype.hasEventListener = function (n) {
            if (!this._eRegister)return !1;
            this._touchlist[n] && this.cleanRegister(n);
            var t = this._eRegister[n];
            return t && t.length > 0
        }, n.prototype.hasEventListenerWithDelegate = function (n, t) {
            if (!this._eRegister)return !1;
            this._touchlist[n] && this.cleanRegister(n);
            var i = this._eRegister[n];
            return i && i.indexOf(t) > -1 ? !0 : !1
        }, n.prototype.cleanRegister = function (n) {
            var f, t, i, r, u;
            for (this._touchlist[n] = !1, f = this._eRegister[n], t = [], i = 0, r = f; i < r.length; i++)u = r[i], u && (t[t.length] = u);
            this._eRegister[n] = t
        }, n
    }();
    t.SInit = function () {
        t.prototype._eRegister = null;
        t.prototype._touchlist = null
    }();
    n.EventDispatcher = t
}(ns_gen5_events || (ns_gen5_events = {})), function (n) {
    var t = function (n) {
        function t(t, i) {
            i === void 0 && (i = NaN);
            var r = n.call(this, t) || this;
            return r.width = i, r
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[ApplicationEvent]"
        }, t
    }(n.Event365);
    t.LOADING = "loading";
    t.LOADING_COMPLETE = "loadingComplete";
    t.LOADING_TIMEOUT = "loadingTimeout";
    t.UNLOADING = "unloading";
    t.WIDTH_STATE_CHANGED = "widthStateChanged";
    t.VIEW_STATE_CHANGED = "viewStateChanged";
    t.HEIGHT_CHANGED = "heightChanged";
    t.WIDTH_CHANGED = "widthChanged";
    t.FOCUS_IN = "focusIn";
    t.FOCUS_OUT = "focusOut";
    __decorate([override], t.prototype, "toString");
    n.ApplicationEvent = t
}(ns_gen5_events || (ns_gen5_events = {})), function (n) {
    var t = function (n) {
        function t() {
            return n !== null && n.apply(this, arguments) || this
        }

        return __extends(t, n), t
    }(n.Event365);
    t.ODDS_TYPE_CHANGED = "oddsChanged";
    t.LANGUAGE_CHANGED = "languageChanged";
    n.UserEvent = t
}(ns_gen5_events || (ns_gen5_events = {})), function (n) {
    var t = function (n) {
        function t() {
            return n !== null && n.apply(this, arguments) || this
        }

        return __extends(t, n), t
    }(n.Event365);
    t.MODULE_READY = "moduleReady";
    n.ModuleEvent = t
}(ns_gen5_events || (ns_gen5_events = {})), function (n) {
    var i = n.Event365, t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t
    }(i);
    t.BALANCEMODEL_UPDATE_EVENT = "balanceModelUpdated";
    n.BalanceModelEvent = t
}(ns_gen5_events || (ns_gen5_events = {})), function (n) {
    var t = function (n) {
        function t(t, i) {
            var r = n.call(this, t) || this;
            return r.modal = i, r
        }

        return __extends(t, n), t
    }(n.Event365);
    t.MODAL_CHANGE = "modalChange";
    n.ModalEvent = t
}(ns_gen5_events || (ns_gen5_events = {})), function (n) {
    var t = ns_gen5_events.EventDispatcher, i = function (n) {
        function t(t) {
            var i = n.call(this) || this;
            return i.preformattedXML = t, i
        }

        return __extends(t, n), t.prototype.setPreformattedXML = function (n) {
            this.preformattedXML !== n && (this.preformattedXML = n)
        }, t.prototype.parse = function (n) {
            var i, t, r;
            if (n && this.setPreformattedXML(n), window.DOMParser && DOMParser.prototype.parseFromString)t = new DOMParser, i = t.parseFromString(this.preformattedXML, "text/xml"); else if (t = new ActiveXObject("Microsoft.XMLDOM"), t.aSync && (t.aSync = !1), r = t.loadXML(this.preformattedXML), r)i = t; else return ErrorReporter.Trace(this, "Unable to parse XML"), null;
            return i
        }, t
    }(t);
    n.XMLParser = i
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function () {
        function n(n) {
            this._manifest = n
        }

        return n.prototype.toString = function () {
            return "[ManifestManager]"
        }, n.prototype.getManifest = function () {
            return this._manifest
        }, n.prototype.resolveCSSPath = function (n, t) {
            for (var r, u, f = this._manifest.manifest.items.add.length, i = 0; i < f; i++)if (String(this._manifest.manifest.items.add[i]["@key"] || "").toLowerCase() == t.toLowerCase())return r = this._manifest.manifest.items.add[i].style["@path"], u = this._manifest.manifest["@version"], r.replace("{filepath}", "min/" + u + "/" + n.path);
            return ""
        }, n.prototype.resolveScriptPath = function (n, t) {
            for (var r, u, f = this._manifest.manifest.items.add.length, i = 0; i < f; i++)if (String(this._manifest.manifest.items.add[i]["@key"] || "").toLowerCase() == t.toLowerCase())return r = this._manifest.manifest.items.add[i].script["@path"], u = this._manifest.manifest["@version"], r.replace("{filepath}", "min/" + u + "/" + n.path);
            return ""
        }, n.prototype.resolveResourcePath = function (n, t) {
            for (var r, u, f = this._manifest.manifest.items.add.length, i = 0; i < f; i++)if (String(this._manifest.manifest.items.add[i]["@key"] || "").toLowerCase() == t.toLowerCase())return r = this._manifest.manifest.items.add[i].language["@path"], u = this._manifest.manifest["@version"], r.replace("{filepath}", "min/" + u + "/" + n + ".json");
            return DEBUG ? "languages/" + n + ".json" : ""
        }, n.prototype.getBuildVersion = function () {
            return this._manifest.manifest["@version"]
        }, n.prototype.getDefaultTopic = function (n) {
            return n, undefined
        }, n
    }();
    n.ManifestManager = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t
    }(ns_gen5_events.Event365);
    t.COMPLETE = "complete";
    t.TICK = "tick";
    n.TimerEvent = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = n.TimerEvent, i = function (n) {
        function i(t, i) {
            var r = n.call(this) || this;
            return r.time = t, r._timeStarted = null, r._timerid = -1, r._timeRemaining = 0, r.repeats = i || 0, r.ticks = 0, r._callback_tickHandler = function () {
                return r._tickHandler()
            }, r
        }

        return __extends(i, n), i.prototype.toString = function () {
            return "[Timer]"
        }, i.prototype.start = function () {
            var n = this._timeRemaining || this.time;
            this._timeRemaining = 0;
            this._timeStarted = new Date;
            this._timerid = setTimeout(this._callback_tickHandler, n);
            this.active = !0
        }, i.prototype.reset = function () {
            this._timerid > -1 && (clearTimeout(this._timerid), this._timerid = -1, this.ticks = 0, this._timeRemaining = 0, this.active = !1)
        }, i.prototype.stop = function () {
            this._timerid > -1 && (this._timeRemaining = this.time - ((new Date).getTime() - this._timeStarted.getTime()), clearTimeout(this._timerid), this._timerid = -1, this.active = !1)
        }, i.prototype._tickHandler = function () {
            this.repeats > -1 && ++this.ticks >= this.repeats ? (this.dispatchEvent(new t(t.COMPLETE)), this.active = !1) : (this.dispatchEvent(new t(t.TICK)), this.start())
        }, i
    }(ns_gen5_events.EventDispatcher);
    __decorate([override], i.prototype, "toString");
    n.Timer = i
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function (n) {
        function t(t, i, r) {
            var u = n.call(this, t) || this;
            return u.date = i, u.dateZoneAdjusted = r, u
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[TimeManagerEvent type=" + this.type + "]"
        }, t
    }(ns_gen5_events.Event365);
    t.TICK = "tick";
    __decorate([override], t.prototype, "toString");
    n.TimeManagerEvent = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var i = n.TimeManagerEvent, t = function (n) {
        function t() {
            var t = n.call(this) || this;
            return t._tickid = -1, t._callback_serverTime_tick = function () {
                t._serverTime_tick()
            }, t
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[TimeManager]"
        }, t.prototype.getTime = function () {
            return this._serverDate
        }, t.prototype.getTimeInDateFormat = function () {
            return t.ParseDate(this._serverTime)
        }, t.prototype.getTimeZoneAdjustedDate = function () {
            return this._serverDateZoneAdjusted ? this._serverDateZoneAdjusted : this._serverDate
        }, t.ParseDate = function (n) {
            return new Date(Number(n.slice(0, 4)), Number(n.slice(4, 6)) - 1, Number(n.slice(6, 8)), Number(n.slice(8, 10)), Number(n.slice(10, 12)), Number(n.slice(12, 14)))
        }, t.ParseZoneDate = function (n) {
            var i = t.ParseDate(n);
            return i.setTime(i.getTime() + Locator.user.timeZoneAdjustment * 6e4), i
        }, t.ParseEpochDate = function (n, t) {
            t && (n += "000");
            return new Date(Number(n) * 1e3)
        }, t.ParseEpochZoneDate = function (n, i) {
            var r = t.ParseEpochDate(n, i);
            return r.setTime(r.getTime() + Locator.user.timeZoneAdjustment * 6e4), r
        }, t.StripNonNumericChars = function (n) {
            return n.replace(/[^0-9]/g, "")
        }, t.getTimeString = function (n, t) {
            t === void 0 && (t = !0);
            var i = n.toTimeString();
            return i = i.substr(0, i.indexOf(" ")), t ? i : i.substr(0, i.lastIndexOf(this.TIME_SEPERATOR))
        }, t.prototype.setServerTime = function (n) {
            var i, r;
            this._serverTime || (Locator.validationManager.callLater(this._callback_serverTime_tick), this._lastUpdatedMS = (new Date).getTime());
            this._serverTime = n;
            this._serverDate = t.ParseDate(n);
            this._lastUpdatedMS = (new Date).getTime();
            i = Locator.user.timeZoneAdjustment;
            i != 0 && (this._serverDateZoneAdjusted = t.ParseDate(n), r = this._serverDate.getMinutes() + i, this._serverDateZoneAdjusted.setMinutes(r))
        }, t.prototype._serverTime_tick = function () {
            var t, r, u, n;
            this._serverDate && (r = (new Date).getTime(), u = r - this._lastUpdatedMS, this._lastUpdatedMS = r, n = this._serverDate.getTime() + u, this._serverDate.setTime(n), this._serverDateZoneAdjusted ? (n = this._serverDateZoneAdjusted.getTime() + u, this._serverDateZoneAdjusted.setTime(n), t = this._serverDateZoneAdjusted) : t = this._serverDate, this.dispatchEvent(new i(i.TICK, this._serverDate, t)), this._tickid = setTimeout(this._callback_serverTime_tick, 1e3))
        }, t
    }(ns_gen5_events.EventDispatcher);
    t.DATE_SEPERATOR = "/";
    t.TIME_SEPERATOR = ":";
    __decorate([override], t.prototype, "toString");
    n.TimeManager = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    n.PrintDump = function () {
        "use strict";
        function n(i, r) {
            var o;
            r || (r = 0);
            for (var h = t(i), u = "", f, e = "", s = 0; s < r; s++)e += "  ";
            switch (h) {
                case"string":
                    return '"' + i + '"';
                case"number":
                    return i.toString();
                case"boolean":
                    return i ? "true" : "false";
                case"date":
                    return "Date: " + i.toLocaleString();
                case"array":
                    for (u += "List ( \n", f = 0; f < i.length; f++)u += e + "  " + f + " => " + n(i[f], r + 1) + "\n";
                    u += e + ")";
                    break;
                case"object":
                    u += "\n";
                    for (o in i)i.hasOwnProperty(o) && (u += e + "  " + o + ": " + n(i[o], r + 1) + "\n");
                    break;
                default:
                    u += "N/A: " + h
            }
            return u
        }

        function t(n) {
            var t = typeof n;
            if (t !== "object")return t;
            switch (n) {
                case null:
                    return "null"
            }
            switch (n.constructor) {
                case Array:
                    return "array";
                case Boolean:
                    return "boolean";
                case Date:
                    return "date";
                case Number:
                    return "number";
                case Object:
                    return "object"
            }
            return "Unknown"
        }

        function i(t) {
            return n(t)
        }

        return i
    }()
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    function i(n) {
        return "*" + r + n + r + "*" + t
    }

    var t = "\t\r\n", r = " -------------------- ", u = function () {
        function u() {
            this._message = ""
        }

        return u.prototype._generate = function () {
            this._message = this._appendSummary();
            this._message = this._message.concat(this._appendNavigationHistory());
            this._message = this._message.concat(this._appendManifest());
            this._message = this._message.concat(this._appendSiteProps());
            this._message = this._message.concat(this._appendSettings());
            this._message = this._message.concat(this._pushedConfig());
            this._message = this._message.concat(this._appendNavigator());
            this._message = this._message.concat(this._appendModernizer());
            this._message = this._message.concat(this._appendReadIt());
            this._message = this._message.concat(this._appendSportSubscriptions());
            this._message = this._message.concat(this._appendPrivateSubscriptions());
            this._message = this._message.concat(this._appendErrorLog());
            this._message = this._message.concat(this._appendTraceLog());
            this._message = this._message.concat(this._appendOpenBetsLog());
            this._message = this._message.concat(this._appendAAATCookie());
            this._message = this._message.concat(this._appendSiteDataLocal())
        }, u.prototype.send = function () {
            this._generate();
            var n = new XMLHttpRequest;
            n.open("POST", "LogHandler.ashx?lvl=2", !0);
            n.onreadystatechange = function () {
                n.readyState === 4 && n.status === 200
            };
            n.send(this._message);
            this._message = ""
        }, u.prototype._appendSiteProps = function () {
            return "sProps"in window ? i("Site Properties") + n.PrintDump(sProps) : ""
        }, u.prototype._appendAAATCookie = function () {
            var t = n.CookieManager.GetCookieValue("aaat");
            return t ? i("Alternative Auth Token Cookie") + t : ""
        }, u.prototype._appendSiteDataLocal = function () {
            if ("siteDataLocal"in window) {
                var t = window.siteDataLocal.siteData;
                return t.constructor = Object, i("Site Data Local") + n.PrintDump(t)
            }
            return ""
        }, u.prototype._appendManifest = function () {
            var n, r = Locator.manifestManager.getManifest(), u, f;
            n = i("Manifest");
            n = n.concat("MasterVersion:" + r.version + t);
            for (u in r)if (r.hasOwnProperty(u)) {
                n = n.concat(u + ":" + t);
                for (f in r[u])r[u].hasOwnProperty(f) && (n = n.concat("  " + f + ":" + r[u][f].version + t));
                n = n.concat(t)
            }
            return n
        }, u.prototype._appendSettings = function () {
            var n, u = Locator.user, r;
            n = i("User");
            for (r in u)u.hasOwnProperty(r) && (n = n.concat(r + ":" + u[r] + t));
            return n
        }, u.prototype._pushedConfig = function () {
            var r, n, u;
            n = "";
            u = Locator.pushedConfig;
            r = i("pushedConfig");
            for (n in u)u.hasOwnProperty(n) && (r = r.concat(n + ":" + u[n] + t));
            return r
        }, u.prototype._appendModernizer = function () {
            var u, n, r;
            if ("Modernizr"in window) {
                n = Modernizr;
                u = i("Modernizer");
                for (r in n)n.hasOwnProperty(r) && typeof n[r] != "function" && typeof n[r] != "object" && (u = u.concat(r + ":" + n[r] + t))
            }
            return u
        }, u.prototype._appendSummary = function () {
            var n = "";
            return n = n.concat("Current Url:" + window.location.href + t), n.concat("Current time:" + new Date + t)
        }, u.prototype._appendNavigator = function () {
            var r = window.navigator, n;
            return n = i("Navigator"), n = n.concat("UserAgent:" + r.userAgent + t), n = n.concat("Language:" + (r.language || r.userLanguage) + t), n = n.concat("Vendor:" + r.vendor + t), n.concat("Platform:" + r.platform + t)
        }, u.prototype._appendNavigationHistory = function () {
            var r, u, n;
            if ("hashHistory"in window && (u = hashHistory, n = void 0, r = i("Navigation History"), u))for (n = 0; n < u.length; n++)r = r.concat(u[n] + t);
            return r
        }, u.prototype._appendReadIt = function () {
            for (var u = readit.ReadItLog.getLog(), n = i("ReadIt"), r = 0; r < u.length; r++)n = n.concat(u[r].toString() + t);
            return n
        }, u.prototype._appendSportSubscriptions = function () {
            return i("SubscriptionManager - Sports") + Locator.subscriptionManager._OtsReport()
        }, u.prototype._appendPrivateSubscriptions = function () {
            return i("PrivateSubscriptionManager") + Locator.privateSubscriptionManager._OtsReport()
        }, u.prototype._appendErrorLog = function () {
            for (var u = ErrorReporter.getLog(), n = i("Error Reporter"), r = 0; r < u.length; r++)n = n.concat(u[r] + t);
            return n
        }, u.prototype._appendTraceLog = function () {
            var s = n.InfoReporter.getLog(), u, e, f, o, h;
            u = i("Trace Log");
            for (e in s)for (u = u.concat(r + e + r + t), f = 0, o = s[e]; f < o.length; f++)h = o[f], u = u.concat(h + t);
            return u.concat(r + t)
        }, u.prototype._appendOpenBetsLog = function () {
            var n = "", r, u;
            try {
                if (u = Locator.treeLookup.getReference("OPENBETS"), u)for (n = i("Open Bets"), r = 0; r < u.getChildren().length; r++)n = n.concat(u.getChildren()[r].data.IT + t)
            } catch (f) {
                n = ""
            }
            return n
        }, u.prototype._appendLoadedScripts = function () {
            for (var f = document.getElementsByTagName("script"), u, n = i("Loaded Scripts"), r = 0; r < f.length; r++)u = f[r], u.src && u.type && (n = n.concat(u.src + t));
            return n
        }, u
    }();
    n.OTSReport = u
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = ns_gen5_ml.LanguageSettings, i = function () {
        function n() {
        }

        return n.Format = function (n) {
            for (var u, t, r = [], i = 1; i < arguments.length; i++)r[i - 1] = arguments[i];
            if (!n)return null;
            for (u = r.length, t = 0; t < u; t++)n = n.split("{" + t + "}").join(r[t]);
            return n
        }, n.Uppercase = function (n) {
            return n ? t.allowCapitalisation() ? n.toUpperCase() : n : ""
        }, n.Trim = function (n) {
            return n.replace(/^\s+|\s+$/g, "")
        }, n
    }();
    n.StringUtil = i
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n.getUnloadedDependencies = function (n) {
            var t, i, r, u;
            if (!this.Lookup)return null;
            for (t = [], i = 0, r = this.Lookup[n].deps; i < r.length; i++)u = r[i], this.LoadedDependenciesLookup[u] || t.push(u);
            return t.length ? t : null
        }, n.setLookup = function (n) {
            this.Lookup = n
        }, n.setLoaded = function (n) {
            this.LoadedDependenciesLookup[n] = !0
        }, n.IsLoaded = function (n) {
            return n in this.LoadedDependenciesLookup
        }, n
    }();
    t.LoadedDependenciesLookup = {};
    n.DependencyManager = t
}(ns_gen5_net || (ns_gen5_net = {})), function (n) {
    var r = function () {
        function n(n) {
            this.keys = [];
            n && this.deSerialize(n)
        }

        return n.prototype.addPair = function (n, t) {
            this.keys[this.keys.length] = [n, t]
        }, n.prototype.getPairWithKey = function (n) {
            for (var r, t = 0, i = this.keys; t < i.length; t++)if (r = i[t], r[0] == n)return r[1];
            return null
        }, n.prototype.getKeys = function () {
            return this.keys
        }, n.prototype.serialize = function () {
            for (var i, n = "", t = 0, r = this.keys; t < r.length; t++)i = r[t], n += i[0] + "=" + encodeURIComponent(i[1]) + "&";
            return n.length ? n.slice(0, n.length - 1) : n
        }, n.prototype.deSerialize = function (n) {
            for (var t, i, f = n.split("&"), r = 0, u = f; r < u.length; r++)t = u[r], i = t.indexOf("="), i > -1 && this.addPair(t.substring(0, i), t.substring(i + 1))
        }, n
    }(), t, i;
    n.URLVariables = r;
    t = function (n) {
        function t() {
            return n !== null && n.apply(this, arguments) || this
        }

        return __extends(t, n), t
    }(ns_gen5_events.Event365);
    t.COMPLETE = "complete";
    t.ERROR = "error";
    n.LoaderEvent = t;
    i = function (n) {
        function i() {
            return n !== null && n.apply(this, arguments) || this
        }

        return __extends(i, n), i.prototype.load = function (n, r) {
            var f = this, o = this.isExternalDomain(n), u, e;
            this.url = n;
            u = this.xhr = o ? readit.XDomainXMLHttpRequest.TryCreate(new XMLHttpRequest) : new XMLHttpRequest;
            e = !1;
            u.onreadystatechange = function () {
                var n, i;
                u.readyState != 4 || e || (e = !0, u.onreadystatechange = null, f.xhr = null, u.status == 200 ? (f.completeHandler && Locator.validationManager.callNewContext(function () {
                    return f.completeHandler(u.responseText, u.status)
                }), f.hasEventListener(t.COMPLETE) && (n = new t(t.COMPLETE), n.status = 200, n.data = u.responseText, Locator.validationManager.callNewContext(function () {
                    return f.dispatchEvent(n)
                }))) : (f.errorHandler && Locator.validationManager.callNewContext(function () {
                    return f.errorHandler(u.status)
                }), f.hasEventListener(t.ERROR) && (i = new t(t.ERROR), i.status = u.status, Locator.validationManager.callNewContext(function () {
                    return f.dispatchEvent(i)
                }))))
            };
            u.open(r && r.method || "GET", n + (r && r.method != i.POST && r.urlVariables && "?" + r.urlVariables.serialize() || ""), !0);
            r && r.contentType && u.setRequestHeader("Content-type", r.contentType);
            u.withCredentials = r && r.withCredentials || !1;
            u.send((r && r.method == i.POST ? r.urlVariables && r.urlVariables.serialize() : null) || r && r.data || "")
        }, i.prototype.abort = function () {
            try {
                this.xhr && (this.xhr.abort(), this.xhr.onreadystatechange = null, this.xhr = null)
            } catch (n) {
            }
        }, i.prototype.getURL = function () {
            return this.url
        }, i.prototype.isExternalDomain = function (n) {
            var t = function (n) {
                return n.indexOf("//") === 0 && (n = location.protocol + n), n.toLowerCase().replace(/([a-z])?:\/\//, "$1").split("/")[0]
            };
            return (n.indexOf(":") > -1 || n.indexOf("//") > -1) && t(location.href) !== t(n)
        }, i
    }(ns_gen5_events.EventDispatcher);
    i.GET = "GET";
    i.POST = "POST";
    n.Loader = i
}(ns_gen5_net || (ns_gen5_net = {})), function (n) {
    var t = ns_gen5_util.StringUtil, i = "/SportsUI/{0}/min/{1}/{0}", r;
    window.LazyLoad || (window.LazyLoad = {
        css: function (n, t, i) {
            var e, u, o, f, r;
            for (!0 && (n = [n]), e = document.head || document.getElementsByTagName("head")[0], o = n.length, f = 0; f < o; f++)u = n[f], DEBUG && (u += "?" + Math.random()), r = document.createElement("link"), r.href = u, r.rel = "stylesheet", r.onload = function () {
                t(i)
            }, r.onerror = function () {
                ErrorReporter.Trace("LazyLoader", "Module CSS Failed to Load: " + u)
            }, e.appendChild(r)
        }, js: function (n, t, i) {
            var u, r;
            for (!0 && (n = [n]), u = n.length, r = 0; r < u; r++)(function (n) {
                var r, u, f;
                DEBUG && (n += "?" + Math.random());
                r = document.createElement("script");
                r.setAttribute("charset", "UTF-8");
                u = document.head || document.getElementsByTagName("head")[0];
                r.onload = r.onreadystatechange = function () {
                    f || r.readyState && r.readyState !== "loaded" && r.readyState !== "complete" || (f = !0, t(i), r.onload = r.onreadystatechange = null, u && r.parentNode && u.removeChild(r))
                };
                r.onerror = function () {
                    ErrorReporter.Trace("LazyLoader", " Failed to Load: " + n)
                };
                r.src = n;
                u.appendChild(r)
            })(n[r])
        }
    });
    r = function () {
        function r() {
        }

        return r.SetModulePath = function (n) {
            $assert && $assert(n.indexOf("{0}") > -1 && n.indexOf("{1}") > -1, "Path must contain {0} AND {1} tokens for module name and version respectively.");
            i = n
        }, r.prototype.loadModule = function (u, f, e, o) {
            var v = this, a = Locator.manifestManager.getBuildVersion(u), s = i, h, c, l;
            DEBUG && (a = "debug");
            s = t.Format(s, u, a);
            o = o || function () {
                    f.resourcesLoaded++;
                    e()
                };
            h = function () {
                var n = r.ModuleResourceLookup[u], i = window.LazyLoad;
                if (n && (n.loadCSS && f.resourcesNeeded++, n.loadLanguage && f.resourcesNeeded++, n.loadConfig && f.resourcesNeeded++, n.loadCSS && i.css(s + ".css", o), n.loadLanguage && i.js(s.slice(0, s.lastIndexOf("/") + 1) + Locator.user.languageId + ".js", e), n.loadConfig)) {
                    var l = window.location.host.indexOf(":3000") > -1 ? "http://www414.b365dev.com" : "http://" + window.location.host, c = l + "/sports/" + u + "/config.asp?lang={0}&cid={1}&zid={2}&cg={3}", h = Locator.user;
                    c = t.Format(c, h.languageId, h.countryId, h.zoneId, h.countryGroupId);
                    i.js(c, o)
                }
                i.js(s + ".min.js", e)
            };
            (c = n.DependencyManager.getUnloadedDependencies(u)) != null ? (l = function () {
                var i, t, r;
                c.length ? (i = c.shift(), n.DependencyManager.setLoaded(i), t = new ns_gen5_ui.ModuleResourcePackage, r = function () {
                    t.resourcesLoaded++;
                    t.isFullyLoaded() && l()
                }, v.loadModule(i, t, r, r)) : h()
            }, l()) : h()
        }, r
    }();
    n.ModuleLoaderDefault = r
}(ns_gen5_net || (ns_gen5_net = {})), function (n) {
    var t = function () {
        function t() {
        }

        return t.prototype.loadModule = function (t, i, r) {
            function h() {
                i.resourcesLoaded = i.resourcesNeeded;
                r()
            }

            var f, u, e, s, o;
            if (!n.DependencyManager.IsLoaded(t)) {
                if (f = n.DependencyManager.getUnloadedDependencies(t), f)for (u = 0, e = f; u < e.length; u++)s = e[u], this.loadModule(s, new ns_gen5_ui.ModuleResourcePackage, function () {
                });
                o = boot.loadModule(t, h);
                n.DependencyManager.setLoaded(t);
                o & boot.LoadingFlags.CSS && i.resourcesNeeded++;
                o & boot.LoadingFlags.LANGUAGE && i.resourcesNeeded++
            }
        }, t
    }();
    n.ModuleLoaderBlob = t
}(ns_gen5_net || (ns_gen5_net = {})), function (n) {
    var u = ns_gen5_net.Loader, i = ns_gen5_net.LoaderEvent, f = ns_gen5_net.URLVariables, r = function () {
        function n() {
            this.data = {}
        }

        return n
    }(), t;
    r.UserPreferencesGUID = "ns_gen5_util.UserPreferenceData";
    n.UserPreferenceData = r;
    t = function () {
        function t(t) {
            this._userPreferenceServiceUrl = t;
            this._preferences = new r;
            this._preferencesInitialised = !1;
            this._pendingRequest = null;
            this._saveToServerCompleteHandlerDelegate = new n.Delegate(this, this._saveToServerCompleteHandler);
            this._saveToServerErrorHandlerDelegate = new n.Delegate(this, this._saveToServerErrorHandler)
        }

        return t.prototype.loadInitialPreferenceData = function (n) {
            $assert && $assert(!this._preferencesInitialised, "UserPreferencesAPI already initialised!");
            this._preferencesInitialised || (this._preferencesInitialised = !0, n && (this._preferences.data[t.TEAM_PREFERENCE] = n.teamPreference, this._preferences.data[t.MARKET_GROUP_PREFERENCE] = n.marketGroupPreference, this._preferences.data[t.LEAGUE_TABLE_PREFERENCE] = n.leagueTablePreference, this._preferences.data[t.OVERVIEW_DEFAULT_MARKET] = n.overviewDefaultMarketPreference))
        }, t.prototype.getSerializationData = function () {
            return this._preferences
        }, t.prototype.setSerializationData = function (n) {
            this._preferences = n
        }, t.prototype.addValues = function (n, t) {
            var r, i, u, f;
            for (this._preferences.data[n] || (this._preferences.data[n] = []), r = this._preferences.data[n], i = 0, u = t; i < u.length; i++)f = u[i], r.indexOf(f) === -1 && r.push(f);
            this.save(n)
        }, t.prototype.removeValues = function (n, t) {
            for (var u, i = this._preferences.data[n], r = 0; r < i.length; ++r)for (u = 0; u < t.length; ++u)i[r] === t[u] && i.splice(r--, 1);
            this._preferences.data[n] = i;
            this.save(n)
        }, t.prototype.setValues = function (n, t) {
            this._preferences.data[n] = t;
            this.save(n)
        }, t.prototype.getValues = function (n) {
            return this._preferences.data[n]
        }, t.prototype.save = function (n) {
            this.saveToServer(n)
        }, t.prototype.saveToServer = function (n) {
            var t, e, r;
            if (Locator.user.isLoggedIn) {
                if (this._clearPendingRequest(), t = new f, n)t.addPair(n, this._preferences.data[n].join(",")); else for (e in this._preferences.data)t.addPair(e, this._preferences.data[e].join(","));
                r = this._pendingRequest = new u;
                r.addEventListener(i.COMPLETE, this._saveToServerCompleteHandlerDelegate);
                r.addEventListener(i.ERROR, this._saveToServerErrorHandlerDelegate);
                r.load(this._userPreferenceServiceUrl, {
                    method: u.POST,
                    urlVariables: t,
                    contentType: "application/x-www-form-urlencoded"
                })
            }
        }, t.prototype._saveToServerCompleteHandler = function () {
            $log(this, "Save To Server OK");
            this._clearPendingRequest()
        }, t.prototype._saveToServerErrorHandler = function (n) {
            ErrorReporter.Trace(this, "Save To Server : " + n.data);
            this._clearPendingRequest()
        }, t.prototype._clearPendingRequest = function () {
            this._pendingRequest && (this._pendingRequest.removeEventListener(i.COMPLETE, this._saveToServerCompleteHandlerDelegate), this._pendingRequest.removeEventListener(i.ERROR, this._saveToServerErrorHandlerDelegate), this._pendingRequest.abort(), this._pendingRequest = null)
        }, t
    }();
    t.TEAM_PREFERENCE = "te";
    t.MARKET_GROUP_PREFERENCE = "lg";
    t.LEAGUE_TABLE_PREFERENCE = "lt";
    t.OVERVIEW_DEFAULT_MARKET = "odm";
    n.UserPreferenceAPI = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function () {
        function n() {
            this._interface = null
        }

        return n.prototype.toString = function () {
            return "[ServerPreferenceManager]"
        }, n.prototype.setUserPreferenceInterface = function (n) {
            this._interface = n
        }, n.prototype.get3wayPreference = function (n) {
            $log(this + " get3wayPreference", n);
            try {
                if (this._interface && this._interface.get3wayPreference)return this._interface.get3wayPreference(n)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }, n.prototype.set3wayPreference = function (n, t) {
            $log(this + " set3wayPreference", n, t);
            try {
                this._interface && this._interface.set3wayPreference && this._interface.set3wayPreference(n, t)
            } catch (i) {
                ErrorReporter.Trace(this, i)
            }
        }, n.prototype.setTeamPreference = function (n, t) {
            $log(this + " setTeamPreference", n.teamID, t);
            try {
                if (this._interface && this._interface.setTeamPreference)return this._interface.setTeamPreference(n, t)
            } catch (i) {
                ErrorReporter.Trace(this, i)
            }
            return !1
        }, n.prototype.getTeamPreference = function (n) {
            $log(this + " getTeamPreference", n.teamID);
            try {
                if (this._interface && this._interface.getTeamPreference)return this._interface.getTeamPreference(n)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }, n.prototype.getPreferredTeams = function () {
            $log(this + " getPreferredTeams");
            try {
                if (this._interface && this._interface.getPreferredTeams)return this._interface.getPreferredTeams()
            } catch (n) {
                ErrorReporter.Trace(this, n)
            }
            return []
        }, n.prototype.getPreferredTeamIds = function () {
            $log(this + " getPreferredTeamIds");
            try {
                if (this._interface && this._interface.getPreferredTeamIds)return this._interface.getPreferredTeamIds()
            } catch (n) {
                ErrorReporter.Trace(this, n)
            }
            return []
        }, n.prototype.setLeagueTableLiveUpdates = function (n) {
            try {
                if (this._interface && this._interface.setLeagueTableLiveUpdates)return this._interface.setLeagueTableLiveUpdates(n)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }, n.prototype.getLeagueTableLiveUpdates = function () {
            try {
                if (this._interface && this._interface.getLeagueTableLiveUpdates)return this._interface.getLeagueTableLiveUpdates()
            } catch (n) {
                ErrorReporter.Trace(this, n)
            }
            return ""
        }, n
    }();
    n.ServerPreferenceManager = t
}(ns_gen5_util || (ns_gen5_util = {})), function () {
}(ns_gen5_validation || (ns_gen5_validation = {})), function (n) {
    var t = function (n) {
        function t() {
            var t = n !== null && n.apply(this, arguments) || this;
            return t.callLaterQueue = [], t.priorityQueue = [], t.postValidationQueue = [], t.canCreateNewContext = !0, t.nextCallLaterQueue = [], t.cycleID = -1, t.cyclecount = 0, t.callback_cycleHandler = function () {
                return t.cycleHandler()
            }, t
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[ValidationManager]"
        }, t.prototype.callLater = function (n) {
            $assert && $assert(n, "Callback isn't defined.");
            this.callLaterQueue[this.callLaterQueue.length] = n;
            this.cycleID == -1 && this._cycle()
        }, t.prototype.callNewContext = function (n) {
            var t = this;
            $assert && $assert(n, "Callback isn't defined.");
            this.nextCallLaterQueue[this.nextCallLaterQueue.length] = n;
            this.canCreateNewContext && (this.canCreateNewContext = !1, setTimeout(function () {
                t.canCreateNewContext = !0;
                t.callLaterQueue = t.nextCallLaterQueue.concat(t.callLaterQueue);
                t.nextCallLaterQueue.length = 0;
                t.processValidationCycleNow()
            }, 0))
        }, t.prototype.queueForValidation = function (n) {
            if (n.validationState != 1) {
                n.validationState = 1;
                var i = n.nestLevel || 0, t = this.priorityQueue[i];
                t || (t = this.priorityQueue[i] = []);
                t[t.length] = n;
                this.cycleID == -1 && this._cycle()
            }
        }, t.prototype.callPostValidation = function (n) {
            $assert && $assert(n, "Callback isnt defined.");
            this.postValidationQueue[this.postValidationQueue.length] = n;
            this.cycleID == -1 && this._cycle()
        }, t.prototype.processValidationCycleNow = function () {
            this.cycleID != -1 && clearTimeout(this.cycleID);
            this.cycleHandler()
        }, t.prototype._processCallLaterQueue = function () {
            var t = this.callLaterQueue, i, n;
            for (this.callLaterQueue = [], i = t.length, n = 0; n < i; n++)try {
                t[n]()
            } catch (r) {
                ErrorReporter.Trace(this, r)
            }
        }, t.prototype._processValidationQueue = function () {
            var u = this.priorityQueue, t, f, i, n, e, r;
            for (this.priorityQueue = [], e = u.length, r = 0; r < e; r++)if (i = u[r], i)for (t = 0, f = i.length; t < f; t++)if ((n = i[t]) && n.validationState == 1)if (DEBUG)n.validationState = 2, n.validateNow(!1), n.validationState = 0; else try {
                n.validationState = 2;
                n.validateNow(!1);
                n.validationState = 0
            } catch (o) {
                ErrorReporter.Trace(this, o)
            }
        }, t.prototype._processPostValidationQueue = function () {
            var t = this.postValidationQueue, i, n;
            for (this.postValidationQueue = [], i = t.length, n = 0; n < i; n++)try {
                t[n]()
            } catch (r) {
                ErrorReporter.Trace(this, r)
            }
        }, t.prototype._cycle = function (n) {
            this.cycleID = setTimeout(this.callback_cycleHandler, n || 50)
        }, t.prototype.cycleHandler = function () {
            for (this.cyclecount++, $timestamp("Start Frame"), this.callLaterQueue.length > 0 && this._processCallLaterQueue(); this.priorityQueue.length > 0;)this._processValidationQueue();
            this.postValidationQueue.length > 0 && this._processPostValidationQueue();
            this.callLaterQueue.length > 0 || this.priorityQueue.length > 0 || this.postValidationQueue.length > 0 ? ($timestamp("Recursive Start Frame"), this.cycleHandler()) : this.cycleID = -1
        }, t
    }(ns_gen5_events.EventDispatcher);
    __decorate([override], t.prototype, "toString");
    n.ValidationManager = t
}(ns_gen5_validation || (ns_gen5_validation = {})), function (n) {
    var t = function () {
        function n() {
            this.mlJson = {}
        }

        return n.prototype.toString = function () {
            return "[Resource]"
        }, n.prototype.loadResource = function (n, t) {
            var r = Locator.manifestManager.resolveResourcePath(n, t), i = new XMLHttpRequest;
            i.open("GET", r, !1);
            i.setRequestHeader("Content-Type", "application/json");
            i.send();
            i.readyState === 4 && i.status === 200 && (this.mlJson = JSON.parse(i.responseText));
            i = null
        }, n.prototype.getValue = function (n, t) {
            return this.mlJson[n] || t
        }, n
    }();
    n.Resource = t
}(ns_gen5_language || (ns_gen5_language = {})), function (n) {
    var i = function () {
        function n(n, t, i, r, u) {
            this.topic = n;
            this.type = t;
            this.item = i;
            this.nodeType = r;
            this.info = u
        }

        return n.prototype.toString = function () {
            return "[DataMessage type=" + this.type + " item=" + this.item + " nodeType=" + this.nodeType + " info=" + this.info + "]"
        }, n
    }(), t;
    n.DataMessage = i;
    t = function () {
        function n() {
        }

        return n
    }();
    t.SNAPSHOT = "F";
    t.UPDATE = "U";
    t.INSERT = "I";
    t.DELETE = "D";
    n.DataMessageType = t
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var t = function (n) {
        function t(t, i) {
            var r = n.call(this, t) || this;
            return r.data = i, r
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[StemEvent type=" + this.type + "]"
        }, t
    }(ns_gen5_events.Event365);
    t.UPDATE = "update";
    t.INSERT = "insert";
    t.DELETE = "delete";
    t.CHILD_DELETE = "childDelete";
    __decorate([override], t.prototype, "toString");
    n.StemEvent = t
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var t = n.StemEvent, u = n.Attribute, r = n.DataMessage, i = function (n) {
        function i() {
            var t = n.call(this) || this;
            return t._delegateList = [], t._actualChildren = [], t
        }

        return __extends(i, n), i.prototype.toString = function () {
            return "[Stem]"
        }, i.prototype.update = function (n) {
            var r, f, u, s, h, l, o;
            if (n) {
                for (s in n)this.data[s] = n[s];
                if (this.parent)if (h = "OR"in n, h && (l = Number(n.OR), o = this.parent._actualChildren, o.splice(o.indexOf(this), 1), o.splice(l, 0, this)), "FF"in n) {
                    var c = !1, v = n.FF, a = null;
                    for (i.FilterToken.lastIndex = 0; !c && (a = i.FilterToken.exec(v)) !== null;)c = !(a.index & 1);
                    if (this.filtered != (this.filtered = c)) {
                        if (this.parent._filterInvalidated = !0, this.filtered) {
                            if (this.readonly_length--, this._hasDelegates)for (r = 0, f = this._delegateList.length; r < f; r++)if (u = this._delegateList[r], u)try {
                                u.stemDeleteHandler(this)
                            } catch (e) {
                                if (ErrorReporter.Trace(this, e), DEBUG)throw e;
                            }
                            this._hasListeners && this.dispatchEvent(new t(t.DELETE))
                        } else {
                            if (this.parent.getChildren(), this.parent._hasDelegates)for (r = 0, f = this.parent._delegateList.length; r < f; r++)if (u = this.parent._delegateList[r], u)try {
                                u.stemInsertHandler(this.parent, this)
                            } catch (e) {
                                if (ErrorReporter.Trace(this, e), DEBUG)throw e;
                            }
                            this.parent._hasListeners && this.parent.dispatchEvent(new t(t.INSERT, this));
                            this._filterInvalidated = !0
                        }
                        return
                    }
                } else h && !this.filtered && this.parent._children && (this.parent._filterInvalidated = !0);
                if (!this.filtered) {
                    if (this._hasDelegates)for (r = 0, f = this._delegateList.length; r < f; r++)if (u = this._delegateList[r], u)try {
                        u.stemUpdateHandler(this, n)
                    } catch (e) {
                        if (ErrorReporter.Trace(this, e), DEBUG)throw e;
                    }
                    this._hasListeners && this.dispatchEvent(new t(t.UPDATE, n))
                }
            }
        }, i.prototype.insert = function (n, u) {
            var f, s, h, e, c, o;
            if (u = u || i, n instanceof r ? (s = n, f = new u, f.set_data(s.item), f.nodeName = s.nodeType) : n instanceof i ? f = n : (f = new u, f.set_data(n)), f.parent = this, h = f.data.OR, h ? this._actualChildren.splice(Number(h), 0, f) : this._actualChildren[this._actualChildren.length] = f, f.filtered)this._filterInvalidated = !0; else {
                if (this._children ? (this._filterInvalidated = !0, this.getChildren()) : this.readonly_length++, this._hasDelegates)for (e = void 0, c = this._delegateList.length, o = 0; o < c; o++)if (e = this._delegateList[o], e)try {
                    e.stemInsertHandler(this, f)
                } catch (l) {
                    if (ErrorReporter.Trace(this, l), DEBUG)throw l;
                }
                this._hasListeners && this.dispatchEvent(new t(t.INSERT, f))
            }
        }, i.prototype.remove = function () {
            var r, e, u, s, i, f, h, n;
            if (this._hasDelegates)for (r = void 0, e = this._delegateList.length, n = 0; n < e; n++)if (r = this._delegateList[n], r)try {
                r.stemDeleteHandler(this)
            } catch (o) {
                if (ErrorReporter.Trace(this, o), DEBUG)throw o;
            }
            for (this._hasListeners && this.dispatchEvent(new t(t.DELETE)), s = this._actualChildren.length, i = 0; i < s; i++)u = this._actualChildren[i], u && (u.parent = null, u.remove(), delete this._actualChildren[i]);
            if (this.hasLookupReference && Locator.treeLookup.removeReference(this.data.IT), this.parent != null) {
                for (this.filtered || this.parent.readonly_length--, f = this.parent._actualChildren, h = f.length, this.parent._children && (this.parent._filterInvalidated = !0), n = 0; n < h; n++)if (f[n] == this) {
                    f.splice(n, 1);
                    break
                }
                this.parent._hasListeners && this.parent.hasEventListener(t.CHILD_DELETE) && this.parent.dispatchEvent(new t(t.CHILD_DELETE, this));
                this.parent = null
            }
        }, i.prototype.removeChildStem = function (n) {
            if (n.parent == this) {
                n.filtered || this.readonly_length--;
                this._children && (this._filterInvalidated = !0);
                var t = this._actualChildren.indexOf(n);
                t > -1 && this._actualChildren.splice(t, 1);
                n.parent = null
            }
        }, i.prototype.adoptStem = function (n, t) {
            var i;
            if (n.parent != null) {
                var r = n.parent, u = r._actualChildren, f = u.length;
                for (n.filtered || (r.readonly_length--, this.readonly_length++), r._children && (r._filterInvalidated = !0), i = 0; i < f; i++)if (u[i] == n) {
                    u.splice(i, 1);
                    break
                }
                n.parent = this;
                (t == undefined || t > this._actualChildren.length) && (t = this._actualChildren.length);
                this._actualChildren[t] = n;
                this._children && (this._filterInvalidated = !0)
            }
        }, i.prototype.set_data = function (n) {
            var r, o, u;
            if (this.data = n, this.hasLookupReference || Locator.treeLookup.addReference(this), n.FF) {
                var f = !1, h = n.FF, e = null;
                for (i.FilterToken.lastIndex = 0; !f && (e = i.FilterToken.exec(h)) !== null;)f = !(e.index & 1);
                f ? (this.filtered = !0, this.parent && (this.parent._filterInvalidated = !0)) : this.parent && this.parent.readonly_length++
            } else this.parent && this.parent.readonly_length++;
            if (this._hasDelegates)for (r = void 0, o = this._delegateList.length, u = 0; u < o; u++)if (r = this._delegateList[u], r)try {
                r.stemUpdateHandler(this, n)
            } catch (s) {
                if (ErrorReporter.Trace(this, s), DEBUG)throw s;
            }
            this._hasListeners && this.dispatchEvent(new t(t.UPDATE, n))
        }, i.prototype.getChildren = function () {
            var t;
            if (this._filterInvalidated) {
                this._filterInvalidated = !1;
                this._children ? this._children.length = 0 : this._children = [];
                var n = void 0, r = this._actualChildren, i = void 0, u = r.length;
                for (t = 0; t < u; t++)n = r[t], n && !n.filtered && (i = this._children.length, n.data.OR = String(i), this._children[i] = n);
                this.readonly_length = this._children.length
            }
            return this._children || this._actualChildren
        }, i.prototype.shed = function () {
            var e = this, n, i, r, u;
            if (this._hasDelegates)for (r = void 0, n = 0, i = this._delegateList.length; n < i; n++)if (r = this._delegateList[n], r)try {
                r.stemDeleteHandler(this)
            } catch (f) {
                if (ErrorReporter.Trace(this, f), DEBUG)throw f;
            }
            for (this._hasListeners && this.dispatchEvent(new t(t.DELETE)), $assert && (this.hasClearedDown() || Locator.validationManager.callPostValidation(function () {
                return $assert && $assert(e.hasClearedDown(), "`shed` has been called on this stem, but delegates/listeners still exist.")
            })), u = this._actualChildren, n = 0, i = u.length; n < i; n++)u[n].shed()
        }, i.prototype.hasClearedDown = function () {
            for (var i, n = 0, t = this._delegateList; n < t.length; n++)if (i = t[n], i)return !1;
            return !this._hasListeners
        }, i.prototype.addDelegate = function (n) {
            this._delegateList[this._delegateList.length] = n;
            this._hasDelegates = !0
        }, i.prototype.removeDelegate = function (n) {
            var t = this._delegateList.indexOf(n);
            t > -1 && (this._delegateList[t] = undefined)
        }, i.prototype.addEventListener = function (t, i) {
            this._numListeners++;
            this._hasListeners = !0;
            n.prototype.addEventListener.call(this, t, i)
        }, i.prototype.removeEventListener = function (t, i) {
            this._numListeners--;
            this._hasListeners = this._numListeners > 0;
            n.prototype.removeEventListener.call(this, t, i)
        }, i
    }(ns_gen5_events.EventDispatcher);
    i.SInit = function () {
        i.prototype._actualChildren = null;
        i.prototype._children = null;
        i.prototype._numListeners = 0;
        i.prototype._hasListeners = !1;
        i.prototype._filterInvalidated = !1;
        i.prototype.data = null;
        i.prototype.parent = null;
        i.prototype.filtered = !1;
        i.prototype.readonly_length = 0;
        i.prototype.nodeName = null;
        i.prototype.hasLookupReference = !1
    }();
    i.FilterToken = /\^\^\^/;
    __decorate([override], i.prototype, "toString");
    __decorate([override], i.prototype, "addEventListener");
    __decorate([override], i.prototype, "removeEventListener");
    n.Stem = i
}(ns_gen5_data || (ns_gen5_data = {})), function () {
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var i = n.Stem, r = n.StemEvent, f = n.Attribute, u = n.DataMessage, t = function (n) {
        function t() {
            var t = n.call(this) || this;
            return t.statGroups = [], t.teamGroups = [], t.additionalScores = [], t
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[FixtureStem]"
        }, t.prototype.insert = function (n, t) {
            var f, o, s, h, c, e;
            if (t = t || i, n instanceof u ? (o = n, f = new t, f.set_data(o.item), f.nodeName = o.nodeType) : n instanceof i ? f = n : (f = new t, f.set_data(n)), f.parent = this, f.nodeName == "ES" ? this.additionalScores[this.additionalScores.length] = f : f.nodeName == "TG" ? this.teamGroups[this.teamGroups.length] = f : f.nodeName == "SG" ? this.statGroups[this.statGroups.length] = f : (s = f.data.OR, s ? this._actualChildren.splice(Number(s), 0, f) : this._actualChildren[this._actualChildren.length] = f, f.filtered || (this._children ? (this._filterInvalidated = !0, this.getChildren()) : this.readonly_length++)), f.filtered)this._filterInvalidated = !0; else {
                if (this._hasDelegates)for (h = void 0, c = this._delegateList.length, e = 0; e < c; e++)(h = this._delegateList[e]) && h.stemInsertHandler(this, f);
                this._hasListeners && this.dispatchEvent(new r(r.INSERT, f))
            }
        }, t.prototype.remove = function () {
            var i, r, t;
            for (n.prototype.remove.call(this), r = this.statGroups.length, t = 0; t < r; t++)i = this.statGroups[t], i && (i.parent = null, i.remove(), delete this.statGroups[t]);
            for (r = this.teamGroups.length, t = 0; t < r; t++)i = this.teamGroups[t], i && (i.parent = null, i.remove(), delete this.teamGroups[t]);
            for (r = this.additionalScores.length, t = 0; t < r; t++)i = this.additionalScores[t], i && (i.parent = null, i.remove(), delete this.additionalScores[t])
        }, t.prototype.shed = function () {
            var i, f, r, e, u, o, t;
            for (n.prototype.shed.call(this), i = 0, f = this.additionalScores; i < f.length; i++)t = f[i], t.shed();
            for (r = 0, e = this.teamGroups; r < e.length; r++)t = e[r], t.shed();
            for (u = 0, o = this.statGroups; u < o.length; u++)t = o[u], t.shed()
        }, t.prototype.getLegacyID = function () {
            return this.data.C1 + this.data.T1 + this.data.C2 + this.data.T2 + "-" + ((this.parent && this.parent.data ? this.parent.data.ID : null) || this.data.CL)
        }, t.prototype.getLegacyIDraw = function () {
            return this.data.C1 + this.data.T1 + this.data.C2 + this.data.T2 + ((this.parent && this.parent.data ? this.parent.data.ID : null) || this.data.CL)
        }, t
    }(n.Stem);
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "insert");
    __decorate([override], t.prototype, "remove");
    __decorate([override], t.prototype, "shed");
    n.FixtureStem = t
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var i = n.Attribute, t = function () {
        function n() {
            this._table = {}
        }

        return n.prototype.toString = function () {
            return "[TreeLookup]"
        }, n.prototype.addReference = function (n, t) {
            var i = n.data[t || "IT"];
            i && (this._table[i] = n, n.hasLookupReference = !0)
        }, n.prototype.getReference = function (n) {
            return this._table[n]
        }, n.prototype.removeReference = function (n) {
            var t = this._table[n];
            t && (delete this._table[n], t.hasLookupReference = !1)
        }, n
    }();
    n.TreeLookup = t
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var t = function (n) {
        function t(t, i) {
            var r = n.call(this, t) || this;
            return r.data = i, r
        }

        return __extends(t, n), t
    }(ns_gen5_events.Event365);
    t.INFO_UPDATED = "infoUpdated";
    t.SNAPSHOT_EMPTY = "snapshotEmpty";
    t.SERVER_RECONNECT = "serverReconnect";
    t.CONNECTION_FAILED = "connectionFailed";
    t.RECONNECT_FAILED = "reconnectFailed";
    t.CONNECTED = "connected";
    t.PULL_DATA_RECEIVED = "pullDataReceived";
    t.PULL_REQUEST_FAILED = "pullRequestFailed";
    t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession";
    n.StreamDataProcessorEvent = t
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var t = function (n) {
        function t(t, i) {
            var r = n.call(this, t) || this;
            return r.message = i, r
        }

        return __extends(t, n), t
    }(ns_gen5_events.Event365);
    t.BALANCE_RECEIVED = "balanceReceived";
    t.PUSH_MESSAGE_RECEIVED = "pushMessageReceived";
    n.PrivateStreamDataProcessorEvent = t
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    n.SubscriptionManagerFlags = {
        SUPPRESS_SERVER_MESSAGE: 1,
        BATCH: 2,
        SUPPRESS_FULL_HIERARCHY: 4,
        SUPPRESS_POP_FALLBACK: 8,
        NO_GRACE_PERIOD: 16,
        DONT_BATCH: 32,
        USE_CUSTOM_PARAMS: 64
    }
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var t = function (n) {
        function t(t, i) {
            var r = n.call(this, t) || this;
            return r.data = i, r
        }

        return __extends(t, n), t
    }(ns_gen5_events.Event365);
    t.RENEW_SUBSCRIPTION = "renewSubscription";
    t.CONNECTION_FAILED = "connectionFailed";
    t.CONNECTED = "connected";
    t.ERROR = "error";
    n.SubscriptionManagerEvent = t
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var t = function (n) {
        function t(t, i, r) {
            var u = n.call(this, t) || this;
            return u.topic = i, u.message = r, u
        }

        return __extends(t, n), t
    }(ns_gen5_events.Event365);
    t.BALANCE_RECEIVED = "balanceReceived";
    t.PUSH_MESSAGE_RECEIVED = "pushMessageReceived";
    n.PrivateSubscriptionManagerEvent = t
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    function r(n) {
        n.VI = "0";
        n.VS = "0";
        n.MS = "0"
    }

    var c = n.Attribute, t = n.Stem, u = n.DataMessage, i = n.DataMessageType, o = n.FixtureStem, f = i.SNAPSHOT, e = "PH", s = 0, h = function () {
        function h() {
            this.toString = function () {
                return "[DataUtil]"
            }
        }

        return h.ParseMessage = function (n, h) {
            for (var oi = Locator.treeLookup, g = n.charAt(0), si = g == i.SNAPSHOT || g == i.INSERT, it, ni, v = new t, kt, ti, rt, l, c, ut, k, p, d, ii, ri, b, a, ui, dt, nt, ft, hi, et, ot, st, ht, ct, lt, at, vt, tt, fi, yt, w, pt = n.indexOf("|", 1), wt = pt, bt, y, ci = (ni = g != f) ? 0 : 1, gt = Locator.user.countryCode, li = Locator.user.countryCode64, ai = Locator.user.phoneOnlyEnabled, ei; wt != -1;) {
                for (pt = n.indexOf("|", ++wt), rt = n.slice(wt, pt).split(";"), ti = rt.length - 1, wt = pt, l = {}, k = rt[0], it = ci; it < ti; it++)ut = rt[it], l[ut.charAt(0) + ut.charAt(1)] = ut.substr(3);
                if (si && !l.IT && (l.IT = "_i" + s++), gt && "CB"in l) {
                    bt = l.CB || "";
                    y = -1;
                    do y = bt.indexOf(gt, ++y); while (y != -1 && (y & 1) == 1);
                    y != -1 && r(l)
                } else!gt && "CB"in l && l.CB != "" && r(l);
                if (Modernizr.embeddedstreaming || l.ES != "1" || (l._V = l.VI, r(l)), ai && "TO"in l) {
                    bt = l.TO;
                    y = -1;
                    do y = bt.indexOf(li, ++y); while (y != -1 && (y & 1) == 1);
                    y != -1 && (l[e] = "1")
                }
                if (ni && k != "IN")return [new u(h, g, l, k, kt)];
                switch (k) {
                    case"PA":
                        c = new t;
                        yt = ft || nt || fi || v;
                        c.parent = yt;
                        yt._actualChildren[yt._actualChildren.length] = c;
                        break;
                    case"CO":
                        c = new t;
                        c.parent = nt;
                        ft = nt._actualChildren[nt._actualChildren.length] = c;
                        break;
                    case"MA":
                        ft = null;
                        nt = c = new t;
                        w = ui || a || v;
                        c.parent = w;
                        w._actualChildren[w._actualChildren.length] = c;
                        break;
                    case"MG":
                        ft = null;
                        ui = c = new t;
                        c.parent = a;
                        a._actualChildren[a._actualChildren.length] = c;
                        break;
                    case"CT":
                        dt = c = new t;
                        c.parent = b;
                        b._actualChildren[b._actualChildren.length] = c;
                        break;
                    case"EV":
                        c = new o;
                        b == null && (b = ii || v);
                        w = dt || b;
                        c.parent = w;
                        a = c;
                        w._actualChildren[w._actualChildren.length] = c;
                        break;
                    case"CL":
                        b = c = new t;
                        dt = null;
                        c.parent = ri || v;
                        c.parent._actualChildren[c.parent._actualChildren.length] = c;
                        break;
                    case"CS":
                        ri = c = new t;
                        c.parent = v;
                        v._actualChildren[v._actualChildren.length] = c;
                        break;
                    case"TG":
                        et = c = new t;
                        c.parent = a;
                        a.teamGroups[a.teamGroups.length] = c;
                        break;
                    case"TE":
                        c = new t;
                        c.parent = et;
                        et._actualChildren[et._actualChildren.length] = c;
                        break;
                    case"SG":
                        ot = c = new t;
                        c.parent = a;
                        a.statGroups[a.statGroups.length] = c;
                        break;
                    case"ST":
                        c = new t;
                        c.parent = ot;
                        ot._actualChildren[ot._actualChildren.length] = c;
                        break;
                    case"ES":
                        st = c = new t;
                        c.parent = a;
                        a.additionalScores[a.additionalScores.length] = c;
                        break;
                    case"SC":
                        ht = c = new t;
                        c.parent = st;
                        st._actualChildren[st._actualChildren.length] = c;
                        break;
                    case"SL":
                        c = new t;
                        c.parent = ht;
                        ht._actualChildren[ht._actualChildren.length] = c;
                        break;
                    case"AS":
                        ct = c = new t;
                        c.parent = a;
                        a._actualChildren[a._actualChildren.length] = c;
                        break;
                    case"AP":
                        lt = c = new t;
                        c.parent = ct;
                        ct._actualChildren[ct._actualChildren.length] = c;
                        break;
                    case"AT":
                        at = c = new t;
                        c.parent = lt;
                        lt._actualChildren[lt._actualChildren.length] = c;
                        break;
                    case"AC":
                        vt = c = new t;
                        c.parent = at;
                        at._actualChildren[at._actualChildren.length] = c;
                        break;
                    case"AE":
                        c = new t;
                        c.parent = vt;
                        vt._actualChildren[vt._actualChildren.length] = c;
                        break;
                    case"IN":
                        kt = l;
                        break;
                    case"PD":
                        ii = c = new t;
                        d == null && (d = p || v);
                        c.parent = d;
                        d._actualChildren[d._actualChildren.length] = c;
                        break;
                    case"PS":
                        d = c = new t;
                        p == null && (p = v);
                        c.parent = p;
                        p._actualChildren[p._actualChildren.length] = c;
                        break;
                    case"XL":
                        p = c = new t;
                        v._actualChildren[v._actualChildren.length] = p;
                        break;
                    case"LG":
                        hi = c = new t;
                        c.parent = a;
                        a._actualChildren[a._actualChildren.length] = c;
                        break;
                    case"XI":
                        v = c = new t;
                        break;
                    case"CG":
                        v = c = new t;
                        break;
                    case"OP":
                        tt = c = new t;
                        break;
                    case"CF":
                        tt = c = new t;
                        break;
                    case"BE":
                        fi = c = new t;
                        c.parent = tt;
                        tt._actualChildren[tt._actualChildren.length] = c;
                        break;
                    default:
                        c = null
                }
                c && (c.nodeName = k, c.set_data(l))
            }
            return v._actualChildren.length == 1 && v._actualChildren[0].nodeName == "PA" ? v = v._actualChildren[0] : oi.getReference(h) || v.set_data({IT: h}), ei = new u(h, g, v, k, kt), [ei]
        }, h.ParseMergeMessage = function (t, o) {
            var ri = Locator.treeLookup, tt, ur, w, yt, it, s, a, c, pt, rt, b, ut, ui, fi, k, v, ei, wt, bt, ft, fr, oi, si, hi, ci, li, ai, vi, yi, et, pi, wi, ot, st = t.indexOf("|", 1), d = st, ht, l, bi, er = Locator.user.phoneOnlyEnabled, or = t.charAt(0), sr = Locator.user.countryCode64, kt = Locator.user.countryCode, hr = (ur = or != f) ? 0 : 1, ct = {}, ki = [], dt = [], gt = [], di = [ki, dt, gt], gi = [], p, g, ti, ii, nt, tr, lt, at, ir, vt, y, rr;
            for (ct[o] = !0, o.lastIndexOf("/") >= 0 && (bi = o.substring(o.lastIndexOf("/") + 1, o.length), ct[bi] = !0); d != -1;)try {
                if (st = t.indexOf("|", ++d), it = t.slice(d, st).split(";"), yt = it.length - 1, d = st, d === -1 && yt === 0)break;
                for (s = {}, rt = it[0], tt = hr; tt < yt; tt++)pt = it[tt], s[pt.substr(0, 2)] = pt.substr(3);
                if (kt && "CB"in s) {
                    ht = s.CB || "";
                    l = -1;
                    do l = ht.indexOf(kt, ++l); while (l != -1 && (l & 1) == 1);
                    l != -1 && r(s)
                } else!kt && "CB"in s && s.CB != "" && r(s);
                if (Modernizr.embeddedstreaming || s.ES != "1" || r(s), er && "TO"in s) {
                    ht = s.TO;
                    l = -1;
                    do l = ht.indexOf(sr, ++l); while (l != -1 && (l & 1) == 1);
                    l != -1 && (s[e] = "1")
                }
                switch (rt) {
                    case"PA":
                        wi = ft || bt || pi || o;
                        c = wi;
                        break;
                    case"CO":
                        ft = s.IT;
                        c = bt;
                        break;
                    case"MA":
                        ft = null;
                        bt = s.IT;
                        ot = ei || v || o;
                        c = ot;
                        break;
                    case"MG":
                        ft = null;
                        ei = s.IT;
                        c = v;
                        break;
                    case"CT":
                        wt = s.IT;
                        c = k;
                        break;
                    case"EV":
                        k == null && (k = ui || o);
                        ot = wt || k;
                        c = ot;
                        v = s.IT;
                        break;
                    case"CL":
                        k = s.IT;
                        wt = null;
                        c = fi || s.IT;
                        break;
                    case"CS":
                        fi = s.IT;
                        c = s.IT;
                        break;
                    case"TG":
                        oi = s.IT;
                        c = v;
                        break;
                    case"TE":
                        c = oi;
                        break;
                    case"SG":
                        si = s.IT;
                        c = v;
                        break;
                    case"ST":
                        c = si;
                        break;
                    case"ES":
                        hi = s.IT;
                        c = v;
                        break;
                    case"SC":
                        ci = s.IT;
                        c = hi;
                        break;
                    case"SL":
                        c = ci;
                        break;
                    case"AS":
                        li = s.IT;
                        c = v;
                        break;
                    case"AP":
                        ai = s.IT;
                        c = li;
                        break;
                    case"AT":
                        vi = s.IT;
                        c = ai;
                        break;
                    case"AC":
                        yi = s.IT;
                        c = vi;
                        break;
                    case"AE":
                        c = yi;
                        break;
                    case"IN":
                        w = s;
                        break;
                    case"PD":
                        ui = s.IT;
                        ut == null && (ut = b || o);
                        c = ut;
                        break;
                    case"PS":
                        ut = s.IT;
                        b == null && (b = o);
                        c = b;
                        break;
                    case"XL":
                        b = s.IT;
                        break;
                    case"LG":
                        fr = s.IT;
                        c = v;
                        break;
                    case"OP":
                        et = s.IT;
                        break;
                    case"CF":
                        et = s.IT;
                        c = et;
                        break;
                    case"BE":
                        pi = s.IT;
                        c = et;
                        break;
                    case"CG":
                        c = s.IT
                }
                if (a = s.IT, ct[a] = !0, p = ri.getReference(a), p && (a === c || p.parent && p.parent.data && p.parent.data.IT === c)) {
                    var cr = p.data, ni = {}, nr = !1;
                    for (g in s)cr[g] != s[g] && (nr = !0, ni[g] = s[g]);
                    nr && (ni.IT = a, gt[gt.length] = {topic: a, msgType: i.UPDATE, data: ni, nodeType: rt, info: w})
                } else a !== c ? dt.push({
                    topic: c + "/" + a,
                    msgType: i.INSERT,
                    data: s,
                    nodeType: rt,
                    info: w
                }) : o === "EMPTY" && typeof w != "undefined" && dt.push({
                    topic: o,
                    msgType: i.SNAPSHOT,
                    data: s,
                    nodeType: "",
                    info: w
                })
            } catch (lr) {
                ErrorReporter.Trace(h, lr)
            }
            for (ti = ri.getReference(o), ti && (nt = function (n) {
                for (var i = n.length, t = 0; t < i; t++)ii(n[t], n)
            }, ii = function (t, r) {
                var f, u;
                if (t) {
                    if (!ct[t.data.IT] && (ki.push({
                            topic: t.data.IT,
                            msgType: i.DELETE,
                            data: t.data,
                            nodeType: t.nodeName
                        }), r && t.parent instanceof n.FixtureStem && (r === t.parent.statGroups || r === t.parent.teamGroups || r === t.parent.additionalScores)))for (f = r.length, u = 0; u < f; u++)r[u] === t && r.splice(u, 1);
                    nt(t.getChildren());
                    t instanceof n.FixtureStem && (nt(t.statGroups), nt(t.teamGroups), nt(t.additionalScores))
                }
            }, ii(ti)), tr = di.length, lt = 0; lt < tr; lt++)if (at = di[lt], at)for (ir = at.length, vt = 0; vt < ir; vt++)y = at[vt], y && (rr = new u(y.topic, y.msgType, y.data, y.nodeType, y.info), gi.push(rr));
            return gi
        }, h
    }();
    n.DataUtil = h
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var r = n.Stem, i = ns_gen5_events.UserEvent, u = "GD,GG,GI,GJ", t = function (n) {
        function t() {
            var t = n !== null && n.apply(this, arguments) || this;
            return t.username = null, t.migratedSession = !1, t.oddsTypeId = null, t.languageId = null, t.zoneId = null, t.timeZoneId = null, t.timeZoneAdjustment = null, t.timeZoneInitials = null, t.currencyCode = null, t.userName = null, t.wizeGuy = !1, t.countryId = null, t.countryStateId = null, t.countryGroupId = null, t.countryCode = null, t.countryCode64 = null, t.countryState64 = null, t.countryGroup64 = null, t.filterMode = null, t.phoneOnlyEnabled = !1, t.isLoggedIn = !1, t.lastLoginTime = null, t.telephoneAccountNumber = null, t.codiceFiscale = null, t.impersonatedUsername = null, t.currencyGroupSeparator = null, t.currencyDecimalSeparator = null, t._balance = null, t
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[User]"
        }, t.prototype.getBalance = function () {
            return this._balance || (this._balance = ns_gen5_util.Singleton.getInstance(ns_gen5_util.BalanceModel))
        }, t.prototype.setSiteConfig = function (n, t, i, r) {
            this.countryId = t;
            this.countryStateId = i;
            this.countryGroupId = r;
            this.filterMode = n;
            this._setStemFilterMode()
        }, t.prototype.setOddsTypeId = function (n) {
            this.oddsTypeId != n && (this.oddsTypeId = n, this.dispatchEvent(new i(i.ODDS_TYPE_CHANGED)))
        }, t.prototype.setLanguageId = function (n) {
            this.languageId != n && (this.languageId = n, this.dispatchEvent(new i(i.LANGUAGE_CHANGED)))
        }, t.prototype._setStemFilterMode = function () {
            for (var f = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "+", "/"], n = [], e, o = 0, i = 0, t = 0; t < 4096;)e = f[o] + f[i], (t + 1) % 64 == 0 && (o++, i = -1), n[t] = e, i++, t++;
            var s = this.countryCode64 = n[1024 + Number(this.countryId)], h = this.countryState64 = n[2048 + Number(this.countryStateId)], c = this.countryGroup64 = n[Number(this.countryGroupId)];
            this.phoneOnlyEnabled = u.split(",").indexOf(s) > -1;
            r.FilterToken = new RegExp("(" + s.replace("+", "\\+") + "|" + h.replace("+", "\\+") + "|" + c.replace("+", "\\+") + ")", "g")
        }, t
    }(ns_gen5_events.EventDispatcher);
    t.FILTER_MODE_COUNTRY_GROUP = "1";
    t.FILTER_MODE_COUNTRY = "2";
    t.FILTER_MODE_COUNTRY_STATE = "3";
    __decorate([override], t.prototype, "toString");
    n.User = t
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var o = ns_gen5_events.Event365, s = n.DataUtil, i = n.SubscriptionManagerEvent, t = n.User, h = ns_gen5_net.Loader, r = ns_gen5_net.LoaderEvent, u = ns_gen5_util.Delegate, f = ns_gen5_util.InfoReporter, c = function (n) {
        function t() {
            return n !== null && n.apply(this, arguments) || this
        }

        return __extends(t, n), t
    }(h), e = function (n) {
        function e() {
            var t = n.call(this) || this;
            return t._dataInclusionExclusionLevel = "", t._customDataInclusionExclusionLevel = "", t._topicRequestLookup = null, t._initialised = !1, t.canDebouncePVCN = !0, t._topicRequestLookup = {}, t
        }

        return __extends(e, n), e.prototype.toString = function () {
            return "[PullDataProcessor]"
        }, e.prototype.loadPageData = function (n, t, i, f) {
            var h, o;
            this._initialised || this._initialise();
            var a = Locator.config, s = Locator.user, e = a.apiLocation, l = this._dataInclusionExclusionLevel;
            if (i && (e = i, f && (l = this._customDataInclusionExclusionLevel)), e.indexOf("?") == -1 && (e += "?"), n.indexOf("#AA") == 0 && (e += "res=au&"), e += "lid=" + s.languageId + "&zid=" + s.zoneId + "&pd=" + escape(n) + "&cid=" + s.countryId, e += l, t != null)for (h in t)e += "&" + h + "=" + t[h];
            o = new c;
            o.pageTopic = n;
            o.addEventListener(r.COMPLETE, new u(this, this._pageDataCompleteHandler));
            o.addEventListener(r.ERROR, new u(this, this._pageDataErrorHandler));
            o.load(e);
            this._topicRequestLookup[n] = o
        }, e.prototype.cancelPageDataLoad = function (n) {
            var t = this._topicRequestLookup[n];
            if (t)try {
                t.abort();
                delete this._topicRequestLookup[n]
            } catch (i) {
                ErrorReporter.Trace(this, i)
            }
        }, e.prototype._initialise = function () {
            var n = Locator.user;
            if (this._initialised = !0, n.countryGroupId && (this._dataInclusionExclusionLevel = "&cg=" + n.countryGroupId), n.filterMode) {
                if (n.filterMode != "-1")switch (n.filterMode) {
                    case t.FILTER_MODE_COUNTRY_GROUP:
                        this._dataInclusionExclusionLevel = "&cgid=" + n.countryGroupId;
                        break;
                    case t.FILTER_MODE_COUNTRY:
                        this._dataInclusionExclusionLevel = "&ctid=" + n.countryId;
                        break;
                    case t.FILTER_MODE_COUNTRY_STATE:
                        this._dataInclusionExclusionLevel = "&csid=" + n.countryStateId
                }
                this._customDataInclusionExclusionLevel = "&csid=" + n.countryStateId + "&ctid=" + n.countryId + "&cgid=" + n.countryGroupId
            }
        }, e.prototype._pageDataCompleteHandler = function (n) {
            var h = this, l = n.target, r = l.pageTopic, a = n.data, u, t, c, f, e, i;
            for (delete this._topicRequestLookup[r], u = a.split("\b"), e = u.length, i = 0; i < e; i++)t = u[i], f = t.indexOf("IT="), c = e == 1 ? r : t.slice(f + 3, t.indexOf(";", f)), s.ParseMessage(t, c);
            Locator.validationManager.callLater(function () {
                h.dispatchEvent(new o(r))
            });
            this.canDebouncePVCN && (this.canDebouncePVCN = !1, setTimeout(function () {
                h.canDebouncePVCN = !0;
                Locator.validationManager.processValidationCycleNow()
            }, 0))
        }, e.prototype._pageDataErrorHandler = function (n) {
            var u = n.target, t = u.pageTopic, e = n.status, r = Locator.subscriptionManager;
            t && (r.dispatchEvent(new i(i.ERROR + t)), f.Trace(f.PULL_DATA_ENTRY, "Pull API IO Error on pageData: " + t + " - " + e), r.unsubscribe(t), delete this._topicRequestLookup[t])
        }, e
    }(ns_gen5_events.EventDispatcher);
    __decorate([override], e.prototype, "toString");
    n.PullDataProcessor = e
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var t = n.SubscriptionManagerEvent, i = ns_gen5_util.Delegate, u = {}, f = 15e3, r = function (r) {
        function e() {
            var n = r.call(this) || this;
            return n.unsubscribeGraceLookup = {}, n._pushConnected = !1, n.unsubscribeDeferralPeriodMS = f, n._subscribedTopics = {}, n._batchSubscribe = "", n._batchUnsubscribe = "", n._streamDataProcessor = null, n._pullDataProcessor = null, n.delegate_snapshotRecievedHandler = new i(n, n._snapshotRecievedHandler), n.delegate_pushReconnectHandler = new i(n, n._pushReconnectHandler), n.delegate_pushConnectedHandler = new i(n, n._pushConnectedHandler), n.delegate_pushConnectFailedHandler = new i(n, n._pushConnectFailedHandler), n.callback_submitBatch = function () {
                return n.submitBatch()
            }, n
        }

        return __extends(e, r), e.prototype.toString = function () {
            return "[SubscriptionManager]"
        }, e.prototype.connect = function () {
            this._streamDataProcessor.connect()
        }, e.prototype.subscribe = function (i, r, f, e) {
            var o, s;
            if (typeof f == "boolean") {
                var c = arguments[2], l = arguments[3], h = arguments[4], a = arguments[5];
                f = 0;
                c || (f |= n.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE);
                l || (f |= n.SubscriptionManagerFlags.SUPPRESS_FULL_HIERARCHY);
                h && (e = h);
                a && (f |= n.SubscriptionManagerFlags.BATCH)
            }
            return i ? (o = this.unsubscribeGraceLookup[i], o && (clearTimeout(o), delete this.unsubscribeGraceLookup[i]), s = !1, f & n.SubscriptionManagerFlags.SUPPRESS_POP_FALLBACK && (f |= n.SubscriptionManagerFlags.DONT_BATCH, s = u[i] = !0), Locator.treeLookup.getReference(i) ? Locator.validationManager.callLater(function () {
                return r.method.call(r.scope, new t(i))
            }) : (this.addEventListener(i, r), this._subscribedTopics[i] ? this._subscribedTopics[i].push(r) : (this._subscribedTopics[i] = [r], i.charAt(0) == "#" ? (f & n.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || this._pullDataProcessor.loadPageData(i, null, e, !!(f & n.SubscriptionManagerFlags.USE_CUSTOM_PARAMS)), this._pullDataProcessor.addEventListener(i, this.delegate_snapshotRecievedHandler)) : (f & n.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || (f & n.SubscriptionManagerFlags.DONT_BATCH ? this._streamDataProcessor.subscribe(i, s) : this._addToSubscribeBuffer(i)), this._streamDataProcessor.addEventListener(i, this.delegate_snapshotRecievedHandler)))), i) : null
        }, e.prototype.unsubscribe = function (t, i) {
            var r = this, u, f, e;
            t && (u = Locator.treeLookup.getReference(t), u && u.shed(), t.charAt(0) != "#" ? i & n.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || (u || this._streamDataProcessor.hasEventListener(t) && this._streamDataProcessor.removeEventListener(t, this.delegate_snapshotRecievedHandler), (!this.unsubscribeGraceLookup[t] || i & n.SubscriptionManagerFlags.NO_GRACE_PERIOD) && (f = function () {
                i & n.SubscriptionManagerFlags.DONT_BATCH ? r._streamDataProcessor.unsubscribe(t) : r._addToUnsubscribeBuffer(t);
                r.clearDownTopic(t, u);
                var f = r.unsubscribeGraceLookup[t];
                f && (clearTimeout(f), delete r.unsubscribeGraceLookup[t])
            }, i & n.SubscriptionManagerFlags.NO_GRACE_PERIOD || this.unsubscribeDeferralPeriodMS <= 0 ? f() : (e = setTimeout(f, this.unsubscribeDeferralPeriodMS), this.unsubscribeGraceLookup[t] = e))) : (!this.unsubscribeGraceLookup[t] || i & n.SubscriptionManagerFlags.NO_GRACE_PERIOD) && (f = function () {
                r._pullDataProcessor.cancelPageDataLoad(t);
                r.clearDownTopic(t, u);
                var n = r.unsubscribeGraceLookup[t];
                n && (clearTimeout(n), delete r.unsubscribeGraceLookup[t])
            }, i & n.SubscriptionManagerFlags.NO_GRACE_PERIOD || !u ? f() : (e = setTimeout(f, this.unsubscribeDeferralPeriodMS), this.unsubscribeGraceLookup[t] = e)))
        }, e.prototype.clearDownTopic = function (n, t) {
            this._removeListenersForTopic(n);
            delete this._subscribedTopics[n];
            t && t.remove()
        }, e.prototype.send = function (n, t) {
            this._streamDataProcessor.send(n, t)
        }, e.prototype.resubscribePush = function () {
            for (var n in this._subscribedTopics)n.charAt(0) != "#" && (u[n] ? this._streamDataProcessor.subscribe(n, !0) : this._addToSubscribeBuffer(n))
        }, e.prototype.setStreamDataProcessor = function (t) {
            this._streamDataProcessor && (this._streamDataProcessor.removeEventListener(n.StreamDataProcessorEvent.SERVER_RECONNECT, this.delegate_pushReconnectHandler), this._streamDataProcessor.removeEventListener(n.StreamDataProcessorEvent.CONNECTED, this.delegate_pushConnectedHandler), this._streamDataProcessor.removeEventListener(n.StreamDataProcessorEvent.CONNECTION_FAILED, this.delegate_pushConnectFailedHandler), this._streamDataProcessor.removeEventListener(n.StreamDataProcessorEvent.RECONNECT_FAILED, this.delegate_pushConnectFailedHandler));
            this._streamDataProcessor = t;
            this._streamDataProcessor.addEventListener(n.StreamDataProcessorEvent.SERVER_RECONNECT, this.delegate_pushReconnectHandler);
            this._streamDataProcessor.addEventListener(n.StreamDataProcessorEvent.CONNECTED, this.delegate_pushConnectedHandler);
            this._streamDataProcessor.addEventListener(n.StreamDataProcessorEvent.CONNECTION_FAILED, this.delegate_pushConnectFailedHandler);
            this._streamDataProcessor.addEventListener(n.StreamDataProcessorEvent.RECONNECT_FAILED, this.delegate_pushConnectFailedHandler)
        }, e.prototype.setPullDataProcessor = function (n) {
            this._pullDataProcessor = n
        }, e.prototype.close = function () {
            this._streamDataProcessor.close(readit.ReaditFlags.SEND_CLOSE)
        }, e.prototype._addToSubscribeBuffer = function (n) {
            this._batchSubscribe.length == 0 && this._batchUnsubscribe.length == 0 ? Locator.validationManager.callLater(this.callback_submitBatch) : this._batchSubscribe && (this._batchSubscribe += ",");
            this._batchSubscribe += n
        }, e.prototype._addToUnsubscribeBuffer = function (n) {
            this._batchSubscribe.length == 0 && this._batchUnsubscribe.length == 0 ? Locator.validationManager.callLater(this.callback_submitBatch) : this._batchUnsubscribe && (this._batchUnsubscribe += ",");
            this._batchUnsubscribe += n
        }, e.prototype.submitBatch = function () {
            this._batchSubscribe && this._batchUnsubscribe ? this._streamDataProcessor.swapSubscriptions(this._batchSubscribe, this._batchUnsubscribe) : (this._batchSubscribe && this._streamDataProcessor.subscribe(this._batchSubscribe), this._batchUnsubscribe && this._streamDataProcessor.unsubscribe(this._batchUnsubscribe));
            this._batchSubscribe = "";
            this._batchUnsubscribe = ""
        }, e.prototype._removeListenersForTopic = function (n) {
            var t = this._subscribedTopics[n], r, i;
            if (t) {
                for (r = t.length, i = 0; i < r; i++)this.removeEventListener(n, t[i]);
                t.length = 0
            }
        }, e.prototype._OtsReport = function () {
            var n = "";
            for (var t in this._subscribedTopics)n += t + "\t\r\n";
            return n
        }, e.prototype._snapshotRecievedHandler = function (n) {
            n.target.removeEventListener(n.type, this.delegate_snapshotRecievedHandler);
            try {
                this.dispatchEvent(new t(n.type));
                this._removeListenersForTopic(n.type)
            } catch (i) {
                ErrorReporter.Trace(this, i)
            }
        }, e.prototype._pushReconnectHandler = function () {
            this.resubscribePush()
        }, e.prototype._pushConnectedHandler = function () {
            this._pushConnected || this.dispatchEvent(new t(t.CONNECTED));
            this._pushConnected = !0;
            this.unsubscribeDeferralPeriodMS = f
        }, e.prototype._pushConnectFailedHandler = function () {
            this._pushConnected && this.dispatchEvent(new t(t.CONNECTION_FAILED));
            this._pushConnected = !1;
            this.unsubscribeDeferralPeriodMS = 0
        }, e
    }(ns_gen5_events.EventDispatcher);
    r.TOPIC_FALLBACK_INDICATOR = "*";
    __decorate([override], r.prototype, "toString");
    n.SubscriptionManager = r
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var t = ns_gen5_util.Delegate, i = function (i) {
        function r() {
            return i !== null && i.apply(this, arguments) || this
        }

        return __extends(r, i), r.prototype.setStreamDataProcessor = function (r) {
            this._streamDataProcessor ? (this._streamDataProcessor.removeEventListener(n.PrivateStreamDataProcessorEvent.BALANCE_RECEIVED, this.delegate_balanceReceivedHandler), this._streamDataProcessor.removeEventListener(n.PrivateStreamDataProcessorEvent.PUSH_MESSAGE_RECEIVED, this.delegate_pushMessageReceivedHandler)) : (this.delegate_balanceReceivedHandler = new t(this, this.balanceReceivedHandler), this.delegate_pushMessageReceivedHandler = new t(this, this.pushMessageReceivedHandler));
            i.prototype.setStreamDataProcessor.call(this, r);
            this._streamDataProcessor.addEventListener(n.PrivateStreamDataProcessorEvent.BALANCE_RECEIVED, this.delegate_balanceReceivedHandler);
            this._streamDataProcessor.addEventListener(n.PrivateStreamDataProcessorEvent.PUSH_MESSAGE_RECEIVED, this.delegate_pushMessageReceivedHandler)
        }, r.prototype.balanceReceivedHandler = function (t) {
            this.dispatchEvent(new n.PrivateSubscriptionManagerEvent(n.PrivateSubscriptionManagerEvent.BALANCE_RECEIVED, t.message.topic, t.message.message))
        }, r.prototype.pushMessageReceivedHandler = function (t) {
            this.dispatchEvent(new n.PrivateSubscriptionManagerEvent(n.PrivateSubscriptionManagerEvent.PUSH_MESSAGE_RECEIVED, t.message.topic, t.message.message))
        }, r
    }(n.SubscriptionManager);
    __decorate([override], i.prototype, "setStreamDataProcessor");
    n.PrivateSubscriptionManager = i
}(ns_gen5_data || (ns_gen5_data = {})), function (n) {
    var t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[PushedConfigPropertyChangeEvent type=" + this.type + "]"
        }, t
    }(ns_gen5_events.Event365);
    t.PROPERTIES_INITIALISED = "PUSH_CONFIG_PROPERTIES_INITIALISED";
    t.IS_INPLAY_AVAILABLE = "IS_INPLAY_AVAILABLE";
    t.INPLAY_LAUNCHER_DISPLAY_MODE = "INPLAY_LAUNCHER_CONTENT_TYPE";
    t.IS_MYBETS_SYSTEM_ENABLED = "IS_MYBETS_SYSTEM_ENABLED";
    t.IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE = "IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE";
    t.IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE = "IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE";
    t.IS_MYBETS_SITE_FEATURE_AVAILABLE = "IS_MYBETS_SITE_FEATURE_AVAILABLE";
    t.IS_CLICK_TO_CALL_SITE_FEATURE_AVAILABLE = "IS_CLICK_TO_CALL_SITE_FEATURE_AVAILABLE";
    t.IS_BET_CALL_AVAILABLE = "IS_BET_CALL_AVAILABLE";
    t.IS_BET_CALL_TWILIO_AVAILABLE = "IS_BET_CALL_TWILIO_AVAILABLE";
    t.IS_CUSTOMER_TO_CUSTOMER_CALLING_FEATURE_AVAILABLE = "IS_CUSTOMER_TO_CUSTOMER_CALLING_FEATURE_AVAILABLE";
    t.IS_CUSTOMER_TO_REPRESENTATIVE_CALLING_FEATURE_AVAILABLE = "IS_CUSTOMER_TO_REPRESENTATIVE_CALLING_FEATURE_AVAILABLE";
    t.PUSH_BALANCE_ENABLED_AVAILABLE = "PUSH_BALANCE_ENABLED_AVAIBLE";
    t.IS_SETTLED_BETS_FEATURE_AVAILABLE = "IS_SETTLED_BETS_FEATURE_AVAILABLE";
    t.IS_EDIT_BETS_FEATURE_AVAILABLE = "IS_EDIT_BETS_FEATURE_AVAILABLE";
    t.IS_EDIT_BETS_COMPLEX_MULTIPLES_FEATURE_AVAILABLE = "IS_EDIT_BETS_COMPLEX_MULTIPLE_FEATURE_AVAILABLE";
    __decorate([override], t.prototype, "toString");
    n.PushedConfigPropertyChangeEvent = t
}(ns_gen5_config || (ns_gen5_config = {})), function (n) {
    var e = ns_gen5_events.EventDispatcher, i = ns_gen5_data.SubscriptionManagerEvent, r = ns_gen5_data.StemEvent, t = ns_gen5_util.Delegate, o = ns_gen5_data.Attribute, u, f;
    (function (n) {
        n[n.fixture = 0] = "fixture";
        n[n.classification = 1] = "classification"
    })(u = n.InplayLauncherDisplayModeEnum || (n.InplayLauncherDisplayModeEnum = {}));
    f = function (f) {
        function e() {
            var n = f.call(this) || this;
            return n._subscriptionTopic = null, n._subscriptionManager = null, n._configStem = null, n._configStemUpdateHandlerDelegate = null, n._configStemDeleteHandlerDelegate = null, n._pushConnectedHandlerDelegate = null, n._pushDisconnectedHandlerDelegate = null, n._isSubscriptionInitialised = !1, n._isDisposed = !1, n._pushConnected = !1, n._inplayLauncherDisplayMode = u.fixture, n._arePropertiesInitialised = !1, n._isInPlayDataAvailable = !1, n._isMyBetsSystemEnabled = !1, n._isOpenBetsPullDeliveryAvailable = !1, n._isMyBetsSiteFeatureAvailable = !1, n._isBetCallAvailable = !1, n._isBetCallTwilioAvailable = !1, n._isErrorLoggingEnabled = !1, n._isPushBalanceEnabled = !1, n._settledBetsEnabled = !1, n._isCloseBetPullPresentationEnabled = !1, n._isEditBetsEnabled = !1, n.isWebErrorLoggingEnabled = !1, n.webInfoLoggingCodes = [], n.editBetsComplexMultiplesEnabled = !1, n.betCallDisabledAttribute = "MB", n.betCallTwilioDisabledAttribute = "MT", n.settledBetsDisabledAttribute = "SB", n.pushBalanceEnabledAttribute = "PB", n.complexMultiplesEnabledAttribute = "EM", window.sProps && window.sProps.JavascriptLogging && (n._isErrorLoggingEnabled = !0), n
        }

        return __extends(e, f), e.prototype.initialiseSubscription = function (n, r) {
            this._isSubscriptionInitialised || this._isDisposed || (this._pushConnectedHandlerDelegate = new t(this, this.pushConnectedHandler), this._pushDisconnectedHandlerDelegate = new t(this, this.pushDisconnectedHandler), Locator.privateSubscriptionManager.addEventListener(i.CONNECTED, this._pushConnectedHandlerDelegate), Locator.privateSubscriptionManager.addEventListener(i.CONNECTION_FAILED, this._pushDisconnectedHandlerDelegate), this._isSubscriptionInitialised = !0, this._subscriptionTopic = ns_gen5_util.StringUtil.Format(e.USER_CONFIG_SUBSCRIPTION_TOPIC, r.languageId, r.zoneId), this._subscriptionManager = n, n.subscribe(this._subscriptionTopic, new t(this, this.configTopicSubscriptionHandler)))
        }, e.prototype.getArePropertiesInitialised = function () {
            return this._arePropertiesInitialised
        }, e.prototype.getIsInPlayAvailable = function () {
            return this._isInPlayDataAvailable
        }, e.prototype.getInplayLauncherDisplayMode = function () {
            return this._inplayLauncherDisplayMode
        }, e.prototype.getIsMyBetsSystemEnabled = function () {
            return this._isMyBetsSystemEnabled
        }, e.prototype.getIsOpenBetsPullDeliveryAvailable = function () {
            return this._isOpenBetsPullDeliveryAvailable
        }, e.prototype.getIsCloseBetPullPresentationEnabled = function () {
            return this._isCloseBetPullPresentationEnabled
        }, e.prototype.getIsMyBetsSiteFeatureAvailable = function () {
            return this._isMyBetsSiteFeatureAvailable
        }, e.prototype.getIsBetCallAvailable = function () {
            return this._isBetCallAvailable
        }, e.prototype.getIsBetCallTwilioAvailable = function () {
            return this._isBetCallTwilioAvailable
        }, e.prototype.getIsErrorLoggingEnabled = function () {
            return this._isErrorLoggingEnabled
        }, e.prototype.getIsWebErrorLoggingEnabled = function () {
            return this.isWebErrorLoggingEnabled
        }, e.prototype.getWebInfoReportingCodes = function () {
            return this.webInfoLoggingCodes
        }, e.prototype.getIsPushBalanceEnabled = function () {
            return this._isPushBalanceEnabled
        }, e.prototype.getIsEditBetsEnabled = function () {
            return this._isEditBetsEnabled
        }, e.prototype.getIsSettledBetsEnabled = function () {
            return this._settledBetsEnabled
        }, e.prototype.getIsEditBetsComplexEnabled = function () {
            return this.editBetsComplexMultiplesEnabled
        }, e.prototype.setIsErrorLoggingEnabled = function (n) {
            this._isErrorLoggingEnabled = n
        }, e.prototype.dispose = function () {
            this._isDisposed || (this._isDisposed = !0, this._subscriptionTopic && (Locator.privateSubscriptionManager.removeEventListener(i.CONNECTED, this._pushConnectedHandlerDelegate), Locator.privateSubscriptionManager.removeEventListener(i.CONNECTION_FAILED, this._pushDisconnectedHandlerDelegate), this._subscriptionManager.unsubscribe(this._subscriptionTopic), this._subscriptionTopic = null, this._subscriptionManager = null), this.configStemDeleteHandler())
        }, e.prototype.getIsDisposed = function () {
            return this._isDisposed
        }, e.prototype.configTopicSubscriptionHandler = function (i) {
            var u = Locator.treeLookup;
            !this._configStem && u && (this._configStem = u.getReference(i.type), this._configStemUpdateHandlerDelegate = new t(this, this.configStemUpdateHandler), this._configStemDeleteHandlerDelegate = new t(this, this.configStemDeleteHandler), this._configStem.addEventListener(r.UPDATE, this._configStemUpdateHandlerDelegate), this._configStem.addEventListener(r.DELETE, this._configStemDeleteHandlerDelegate), this.updateProperties(this._configStem.data, !1), this._arePropertiesInitialised = !0, this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.PROPERTIES_INITIALISED)))
        }, e.ConvertInplayLauncherStemAttrValueToDisplayMode = function (n) {
            var t = u.fixture, i;
            return typeof n == "undefined" || n === null || n.length === 0 ? t : (i = Number(n), isNaN(i) || (t = i), t)
        }, e.prototype.updateProperties = function (t, i) {
            var u, f, o, s, h, c, l, a, v, y, d, r, p, g, w, b, k;
            if ("IF"in t && (u = this._configStem.data.IF === "1", this._isInPlayDataAvailable !== u && (this._isInPlayDataAvailable = u, i && this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.IS_INPLAY_AVAILABLE)))), "CB"in t && (f = this._configStem.data.CB === "0", this._isMyBetsSystemEnabled !== f && (this._isMyBetsSystemEnabled = f, i && this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.IS_MYBETS_SYSTEM_ENABLED)))), "CP"in t && (o = this._configStem.data.CP === "0", this._isCloseBetPullPresentationEnabled !== o && (this._isCloseBetPullPresentationEnabled = o, this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE)))), "OP"in t && (s = this._configStem.data.OP === "0", this._isOpenBetsPullDeliveryAvailable !== s && (this._isOpenBetsPullDeliveryAvailable = s, i && this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE)))), h = this._isMyBetsSystemEnabled && this._isOpenBetsPullDeliveryAvailable, this._isMyBetsSiteFeatureAvailable !== h && (this._isMyBetsSiteFeatureAvailable = h, i && this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.IS_MYBETS_SITE_FEATURE_AVAILABLE))), c = e.ConvertInplayLauncherStemAttrValueToDisplayMode(this._configStem.data.DM), this._inplayLauncherDisplayMode !== c && (this._inplayLauncherDisplayMode = c, i && this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.INPLAY_LAUNCHER_DISPLAY_MODE))), this.betCallTwilioDisabledAttribute in t && (l = this._configStem.data[this.betCallTwilioDisabledAttribute] != "1", this._isBetCallTwilioAvailable !== l && (this._isBetCallTwilioAvailable = l, this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.IS_BET_CALL_TWILIO_AVAILABLE)))), this.betCallDisabledAttribute in t && (a = this._configStem.data[this.betCallDisabledAttribute] != "1", this._isBetCallAvailable !== a && (this._isBetCallAvailable = a, this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.IS_BET_CALL_AVAILABLE)))), this.settledBetsDisabledAttribute in t && (v = this._configStem.data[this.settledBetsDisabledAttribute] != "1", this._settledBetsEnabled !== v && (this._settledBetsEnabled = v, this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.IS_SETTLED_BETS_FEATURE_AVAILABLE)))), "ER"in t && (y = this._configStem.data.ER != "1", this._isErrorLoggingEnabled !== y && (this._isErrorLoggingEnabled = y)), "WL"in t && (this.isWebErrorLoggingEnabled = t.WL === "1"), "WI"in t)for (d = t.WI.split(","), r = 0, p = d; r < p.length; r++)g = p[r], this.webInfoLoggingCodes.push(parseInt(g, 10));
            this.pushBalanceEnabledAttribute in t && (w = this._configStem.data[this.pushBalanceEnabledAttribute] == "1" && this._pushConnected, this._isPushBalanceEnabled !== w && (this._isPushBalanceEnabled = w, i && this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.PUSH_BALANCE_ENABLED_AVAILABLE))));
            "EE"in t && (b = this._configStem.data.EE !== "1", this._isEditBetsEnabled !== b && (this._isEditBetsEnabled = b, this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.IS_EDIT_BETS_FEATURE_AVAILABLE))));
            this.complexMultiplesEnabledAttribute in t && (k = t[this.complexMultiplesEnabledAttribute] && t[this.complexMultiplesEnabledAttribute] !== "1", this.editBetsComplexMultiplesEnabled !== k && (this.editBetsComplexMultiplesEnabled = k, this.dispatchEvent(new n.PushedConfigPropertyChangeEvent(n.PushedConfigPropertyChangeEvent.IS_EDIT_BETS_COMPLEX_MULTIPLES_FEATURE_AVAILABLE))))
        }, e.prototype.configStemUpdateHandler = function (n) {
            this.updateProperties(n.data, !0)
        }, e.prototype.configStemDeleteHandler = function () {
            this._configStem && (this._configStem.removeEventListener(r.UPDATE, this._configStemUpdateHandlerDelegate), this._configStem.removeEventListener(r.DELETE, this._configStemDeleteHandlerDelegate), this._configStem = null)
        }, e.prototype.pushDisconnectedHandler = function () {
            if (this._pushConnected && (this._pushConnected = !1, this._configStem)) {
                var n = {};
                n[this.pushBalanceEnabledAttribute] = "0";
                this.updateProperties(n, !0)
            }
        }, e.prototype.pushConnectedHandler = function () {
            if (!this._pushConnected && (this._pushConnected = !0, this._configStem)) {
                var n = {};
                n[this.pushBalanceEnabledAttribute] = "1";
                this.updateProperties(n, !0)
            }
        }, e
    }(e);
    f.USER_CONFIG_SUBSCRIPTION_TOPIC = "CONFIG_{0}_{1}";
    n.PushedConfigManager = f
}(ns_gen5_config || (ns_gen5_config = {})), function () {
}(ns_gen5_events || (ns_gen5_events = {})), function () {
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    function r() {
        return i.length ? i.pop() : document.createComment("")
    }

    function u(n) {
        i[i.length] = n
    }

    var i = [], t = function (n) {
        function t(t) {
            var i = n.call(this) || this;
            return i._element = i._active_element = i.createElement ? i.createElement(t || "div") : document.createElement(t || "div"), i._element.wrapper = i, i
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[DomElement]"
        }, t.prototype.initialize = function () {
            this.initialized = !0
        }, t.prototype.appendChild = function (n) {
            var t = n;
            return n.parent = this, !t.initialized && t.initialize && (t.nestLevel = this.nestLevel + 1, t.initialize()), $assert && $assert("initialized"in n && t.initialized || !("initialized"in n), "Child - " + n + " - is not initialized."), this._element.appendChild(t._active_element), n
        }, t.prototype.insertBefore = function (n, t) {
            $assert && $assert(t, "before is null or undefined!!!");
            var i = n;
            return n.parent = this, !i.initialized && i.initialize && (i.nestLevel = this.nestLevel + 1, i.initialize()), this._element.insertBefore(i._active_element, t._active_element ? t._active_element : t), n
        }, t.prototype.insertAfter = function (n, t) {
            var i, r;
            return $assert && $assert(t, "after is null or undefined!!!"), i = n, n.parent = this, !i.initialized && i.initialize && (i.nestLevel = this.nestLevel + 1, i.initialize()), r = t._active_element ? t._active_element : t, r.nextSibling ? this._element.insertBefore(i._active_element, r.nextSibling) : this._element.appendChild(i._active_element), n
        }, t.prototype.appendChildAt = function (n, t) {
            var i = n, r;
            return n.parent = this, !i.initialized && i.initialize && (i.nestLevel = this.nestLevel + 1, i.initialize()), r = this._element.children.length > t ? this._element.children[t] : null, this._element.insertBefore(i._active_element, r), n
        }, t.prototype.removeChild = function (n) {
            var t = n;
            if (n.parent == this) {
                n.parent = null;
                try {
                    this._element.removeChild(t._active_element)
                } catch (i) {
                    ErrorReporter.Trace(this, i)
                }
            }
            return n
        }, t.prototype.replaceChild = function (n, t) {
            if (t.parent == this) {
                t.parent = null;
                var i = n;
                n.parent = this;
                !i.initialized && i.initialize && (i.nestLevel = this.nestLevel + 1, i.initialize());
                this._element.replaceChild(i._active_element, t._active_element)
            }
            return n
        }, t.prototype.removeAllChildren = function () {
            for (var n = this._element.firstChild, t; n;)t = n.wrapper, n = n.nextSibling, t && this.removeChild(t);
            return this
        }, t.prototype.suspendElementFromDom = function () {
            var n, t;
            this._suspended_markerNode || (n = this._active_element = this._suspended_markerNode = r(), n.wrapper = this, this.parent && this._element.parentNode && (t = this.parent._element, t.replaceChild(n, this._element)))
        }, t.prototype.unsuspendElementFromDom = function () {
            var n, t;
            this._suspended_markerNode && (n = this._suspended_markerNode, n.wrapper = null, this._suspended_markerNode = null, this._active_element = this._element, u(n), this.parent && n.parentNode && (t = this.parent._element, t.replaceChild(this._element, n)))
        }, t.prototype.setAttribute = function (n, t) {
            return this._element.setAttribute(n, t), this
        }, t.prototype.removeAttribute = function (n) {
            return this._element.removeAttribute(n), this
        }, t.prototype.getAttribute = function (n) {
            return this._element.getAttribute(n)
        }, t.prototype.getElement = function () {
            return this._element
        }, t.prototype.getElementChildren = function () {
            return this._element.children
        }, t.prototype.getFirstChild = function () {
            return this._element.firstChild
        }, t.prototype.getLastChild = function () {
            return this._element.lastChild
        }, t.prototype.getPreviousSibling = function () {
            return this._active_element.previousSibling
        }, t.prototype.getNextSibling = function () {
            return this._active_element.nextSibling
        }, t.prototype.getInlineStyle = function () {
            return this._element.style
        }, t.prototype.getTooltip = function () {
            return this.tooltip
        }, t
    }(ns_gen5_events.EventDispatcher);
    t.SInit = function () {
        t.prototype._element = null;
        t.prototype._active_element = null;
        t.prototype.parent = null;
        t.prototype.initialized = !1;
        t.prototype.nestLevel = 0;
        t.prototype._suspended_markerNode = null;
        t.prototype.tooltip = null;
        t.prototype.alwaysShowTooltip = !1
    }();
    __decorate([override], t.prototype, "toString");
    n.DomElement = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var t = function () {
        function n(n) {
            this._element = this._active_element = document.createTextNode(n || "");
            this._text = n || null
        }

        return n.prototype.toString = function () {
            return "[TextNode text=" + this._text + "]"
        }, n.prototype.setText = function (n) {
            return this._text = this._element.data = n
        }, n.prototype.getText = function () {
            return this._text
        }, n.prototype.getElement = function () {
            return this._element
        }, n
    }();
    t.Wrapper = function (n) {
        this._element = n;
        this._text = this._element.data || null
    };
    t.SInit = function () {
        t.prototype.parent = null;
        t.prototype._element = null;
        t.prototype._active_element = null;
        t.prototype._text = null;
        t.Wrapper.prototype = new t
    }();
    n.TextNode = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var t = function () {
        function n(n, t) {
            var i = this;
            this.element = n;
            this.enableFastClick = t;
            this._callback_clickHandler = function (n) {
                return i._clickHandler(n)
            };
            this._callback_touchStartHandler = function (n) {
                return i._touchStartHandler(n)
            }
        }

        return n.prototype.activate = function () {
            var t = this.element.getElement();
            t.addEventListener("click", this._callback_clickHandler);
            n.IS_CHROME && t.addEventListener("touchstart", this._callback_touchStartHandler);
            this.enableFastClick && (this._fastClick = FastClick.attach(t))
        }, n.prototype.release = function () {
            this._fastClick && (this._fastClick.destroy(), this._fastClick = null);
            var t = this.element.getElement();
            t.removeEventListener("click", this._callback_clickHandler);
            n.IS_CHROME && t.removeEventListener("touchstart", this._callback_touchStartHandler)
        }, n.prototype._touchStartHandler = function (n) {
            this._touchElement = n ? n.target : null
        }, n.prototype._clickHandler = function (t) {
            var r = t || window.event, i;
            if (r.target) {
                for (i = r.target, this._touchElement && n.IS_CHROME && (i = this._touchElement, this._touchElement = null); i && i.wrapper;)if (i.wrapper.clickHandler) {
                    if (DEBUG)i.wrapper.clickHandler(r); else try {
                        i.wrapper.clickHandler(r)
                    } catch (u) {
                        ErrorReporter.Trace(this, u)
                    }
                    break
                } else i = i.parentNode;
                Locator.validationManager.processValidationCycleNow()
            }
        }, n
    }();
    t.IS_CHROME = !!/chrome/.exec(navigator.userAgent.toLowerCase());
    n.PointerProcessor = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var t = function (n) {
        function t(t) {
            var i = n.call(this, t) || this;
            return i._styleList = {}, i
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[Component]"
        }, t.prototype.initialize = function () {
            this._stopInitInvalidation != !0 && (Locator.validationManager.queueForValidation(this), this._propertiesInvalidated = !0);
            this.createChildren();
            this.initialized = !0
        }, t.prototype.setAttribute = function (t, i) {
            return $assert && $assert(t != "class", "It's not safe to use 'setAttribute(\"class\",' with a Component instance. Use 'addStyle' instead."), n.prototype.setAttribute.call(this, t, i)
        }, t.prototype.createChildren = function () {
        }, t.prototype.commitProperties = function () {
        }, t.prototype.commitStyles = function () {
            var n = "";
            for (var t in this._styleList)n += t + " ";
            this._element.className = n
        }, t.prototype.hasStyle = function (n) {
            return !!this._styleList[n]
        }, t.prototype.addStyle = function (n) {
            return this._styleList[n] = !0, this._stylesInvalidated || this.invalidateStyles(), this
        }, t.prototype.removeStyle = function (n) {
            return delete this._styleList[n], this._stylesInvalidated || this.invalidateStyles(), this
        }, t.prototype.overwriteStyle = function (n, t) {
            return delete this._styleList[n], this._styleList[t] = !0, this.invalidateStyles(), this
        }, t.prototype.setVisible = function (n) {
            return n != this._visible && (this._visible = n, n ? this.removeStyle("Hidden") : this.addStyle("Hidden")), this
        }, t.prototype.getVisible = function () {
            return this._visible
        }, t.prototype.invalidateProperties = function () {
            return this._propertiesInvalidated = !0, this.validationState != 1 && this.parent && Locator.validationManager.queueForValidation(this), this
        }, t.prototype.invalidateStyles = function () {
            return this._stylesInvalidated = !0, this.validationState == 0 && this.parent && Locator.validationManager.queueForValidation(this), this
        }, t.prototype.validateNow = function (n) {
            this._propertiesInvalidated && (this._propertiesInvalidated = !1, this.commitProperties());
            this._stylesInvalidated && (this._stylesInvalidated = !1, this.commitStyles());
            n != !1 && (this.validationState = 0)
        }, t
    }(n.DomElement);
    t.Wrapper = function (n) {
        var t;
        ns_gen5_events.EventDispatcher.call(this);
        this.parent = !0;
        this._element = n;
        n.wrapper = this;
        var i = this._element.getAttribute("class"), r = {}, u = i ? i.split(" ") : [], f = u.length;
        for (t = 0; t < f; t++)r[u[t]] = !0;
        this._styleList = r
    };
    t.SInit = function () {
        t.prototype._styleList = null;
        t.prototype._propertiesInvalidated = !1;
        t.prototype._stylesInvalidated = !1;
        t.prototype._visible = !0;
        t.prototype._stopInitInvalidation = !1;
        t.prototype.validationState = 0;
        t.Wrapper.prototype = new t
    }();
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "initialize");
    __decorate([override], t.prototype, "setAttribute");
    n.Component = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var t = function (n) {
        function t() {
            return n !== null && n.apply(this, arguments) || this
        }

        return __extends(t, n), t.prototype.setSVGData = function (n) {
            this._element.innerHTML = n
        }, t
    }(n.Component);
    n.SVGWrapperComponent = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t.prototype.commitStyles = function () {
            var n = "";
            for (var t in this._styleList)n += t + " ";
            this._element.setAttribute("class", n)
        }, t.prototype.createElement = function (n) {
            return document.createElementNS("http://www.w3.org/2000/svg", n)
        }, t
    }(n.Component);
    __decorate([override], t.prototype, "commitStyles");
    n.SVG = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var i = n.PointerProcessor, r = n.DomElement, u = 0, t = function (t) {
        function f(n) {
            var i = t.call(this, n) || this;
            return i.root = new r, i.uid = ++u, i
        }

        return __extends(f, t), f.prototype.toString = function () {
            return "[Module]"
        }, f.getRoot = function (n) {
            while (n) {
                if (n instanceof f)return n;
                n = n.parent
            }
            return null
        }, f.prototype.initialize = function () {
            t.prototype.initialize.call(this);
            ns_gen5_util.Singleton.RegisterModule(this);
            this.parent && this.parent.parent || (this.setupPointerProcessor(), this.parent instanceof n.ModuleContainer || (this.parent = this.root, this.moduleReady()))
        }, f.prototype.setupPointerProcessor = function (t) {
            this.pointerProcessor = new i(this, t);
            this.parent instanceof n.Application || this.pointerProcessor.activate()
        }, f.prototype.moduleReady = function () {
            this.ready = !0
        }, f.prototype.dispose = function () {
            this.disposed = !0;
            this.pointerProcessor && this.pointerProcessor.release();
            ns_gen5_util.Singleton.RemoveScope(this)
        }, f
    }(n.Component);
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "initialize");
    n.Module = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    function f(n) {
        return function (t) {
            return n + "  " + (t.moduleName || "") + ":" + (t.elementName || "")
        }
    }

    function o(n) {
        var t = "Module Load Error " + n;
        ErrorReporter.Trace("ModuleContainer:::", t);
        $logFmt(t, "font-weight:bold; color:#FF0000;")
    }

    var e = f("0x01"), s = ns_gen5_util.Delegate, h = ns_gen5_util.Config, i = ns_gen5_events.ModuleEvent, r = ns_gen5_util.InfoReporter, u = function () {
        function n() {
            this.resourcesNeeded = 1;
            this.resourcesLoaded = 0
        }

        return n.prototype.isFullyLoaded = function () {
            return this.resourcesLoaded >= this.resourcesNeeded
        }, n
    }(), t;
    n.ModuleResourcePackage = u;
    t = function (t) {
        function f() {
            return t.call(this) || this
        }

        return __extends(f, t), f.LoadModule = function (n, t) {
            var i = f.ModuleCache[n], e, r, o;
            i && i.definition ? (e = i.isFullyLoaded(), Locator.validationManager.callLater(function () {
                t.moduleAvailableHandler(i);
                e && t.moduleReadyHandler(i)
            })) : i ? (r = f.PendingList[n], r[r.length] = t) : (i = f.ModuleCache[n] = new u, o = function () {
                var t, u, r;
                if (i.isFullyLoaded() && (t = f.PendingList[n], t)) {
                    for (u = t.length, r = 0; r < u; r++)t[r].moduleReadyHandler(i);
                    delete f.PendingList[n]
                }
            }, f.PendingList[n] = [t], f.ModuleLoader.loadModule(n, i, o))
        }, f.RegisterModule = function (n, t) {
            var i = f.ModuleCache[n], r, o, e;
            if (i || (i = f.ModuleCache[n] = new u), i.resourcesLoaded++, $assert && $assert(!i.definition, "Duplicate module definition loaded - " + n), i.definition = t, r = f.PendingList[n], r)for (o = r.length, e = 0; e < o; e++)r[e].moduleAvailableHandler(i)
        }, f.RegisterLanguage = function (n, t) {
            var i = f.ModuleCache[n];
            i.resourcesLoaded++;
            i.languageDefinition = t
        }, f.RegisterConfig = function (n, t) {
            var i = f.ModuleCache[n];
            i.config = t
        }, f.prototype.load = function (n) {
            var t, i;
            (this.moduleName = n, f.LoadModule(n, this), t = Locator.manifestManager.getDefaultTopic(n), t !== null) && (t && (i = Locator.user, t = t.replace("{L}", i.languageId), t = t.replace("{Z}", i.zoneId), t = t.replace("{C}", "" + i.customerType), this.defaultTopic = t), this.defaultTopic && Locator.subscriptionManager.subscribe(this.defaultTopic, new s(this, this.defaultTopicSubscriptionHandler)))
        }, f.prototype.defaultTopicSubscriptionHandler = function (n) {
            var t = Locator.treeLookup.getReference(n.type);
            this.defaultStem = t;
            this.storedResourcePackage && this.moduleReadyHandler(this.storedResourcePackage)
        }, f.prototype.dispose = function () {
            if (this._module) {
                if (DEBUG)this._module.dispose(); else try {
                    this._module.dispose()
                } catch (n) {
                    ErrorReporter.Trace(this, n)
                }
                $assert && $assert(this._module.disposed, "dispose() has been called but module isn't reporting as being disposed - " + this._module);
                this._module.disposed || r.Trace(r.MODULE_LOAD_ENTRY, this._module + " did not dispose correctly");
                this._module = null
            }
            this.disposed = !0
        }, f.prototype.getModule = function () {
            return this._module
        }, f.prototype.moduleAvailableHandler = function (t) {
            var i = this._module = new t.definition;
            i.initObject = this.initObject;
            n.MediaTypeIdLookup && (i.mediaTypeId = n.MediaTypeIdLookup[this.moduleName], $assert && $assert(i.mediaTypeId !== undefined, "moduleAvailableHandler() is looking for the media type of module '" + this.moduleName + "' which is not defined in MediaTypeIdLookup"));
            try {
                this.appendChild(i)
            } catch (r) {
                if (ErrorReporter.Trace(this, r), DEBUG)throw r;
            }
        }, f.prototype.moduleReadyHandler = function (n) {
            if (!this.disposed) {
                if (this.defaultTopic && !this.defaultStem) {
                    this.storedResourcePackage = n;
                    return
                }
                if (this.defaultTopic && !this._module) {
                    o(e(this));
                    return
                }
                this.storedResourcePackage = null;
                var t = this._module.languageDefinition = ns_gen5_util.Singleton.getInstance(ns_gen5_language.Resource, this._module);
                if (t.mlJson = n.languageDefinition, n.config && (this._module.config = new h, this._module.config.setConfigJSON(n.config)), this.defaultStem && (this._module.defaultStem = this.defaultStem), DEBUG)this._module.moduleReady(), this._module.bubbleEvent(new i(i.MODULE_READY)); else try {
                    this._module.moduleReady();
                    this._module.bubbleEvent(new i(i.MODULE_READY))
                } catch (u) {
                    ErrorReporter.Trace(this, u)
                }
                $assert && $assert(this._module.ready, "moduleReady() has been called but module isn't reporting as ready - " + this._module);
                this._module.ready || r.Trace(r.MODULE_LOAD_ENTRY, this._module + " did not ready-up correctly")
            }
        }, f
    }(n.Component);
    t.ModuleCache = {};
    t.PendingList = {};
    t.ModuleLoader = new ns_gen5_net.ModuleLoaderDefault;
    t.SInit = function () {
        t.prototype._module = null;
        t.prototype.defaultStem = null;
        t.prototype.moduleReady = null;
        t.prototype.storedResourcePackage = null;
        t.prototype.disposed = !1;
        t.prototype.initObject = null;
        t.prototype.defaultTopic = null;
        t.prototype.elementName = null;
        t.prototype.moduleName = null
    }();
    n.ModuleContainer = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var i = n.DomElement, t = function (n) {
        function t() {
            var t = n.call(this) || this;
            return t._element.setAttribute("class", "g5-Spinner g5-Spinner_FadeIn"), t
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[Spinner]"
        }, t.prototype.createChildren = function () {
            var n = new i;
            n.setAttribute("class", "g5-Spinner_Image");
            this.appendChild(n)
        }, t.prototype.remove = function () {
            function t() {
                n.parentElement.removeChild(n);
                n.removeEventListener(ANIMATION_END, t)
            }

            var n = this._element;
            this._element.setAttribute("class", "g5-Spinner g5-Spinner_FadeOut");
            this._element.addEventListener && this._element.addEventListener(ANIMATION_END, t, !1)
        }, t
    }(n.Component);
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "createChildren");
    n.Spinner = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    function i(n, t) {
        if (!t)return !1;
        while (t.parent) {
            if (t.parent == n || t == n)return !0;
            t = t.parent
        }
        return !1
    }

    var r = ns_gen5_ui.Component, t = function () {
        function n() {
        }

        return n.Register = function (t) {
            n.Root = t
        }, n.AddPopup = function (t, i, r, u) {
            i === void 0 && (i = !0);
            r === void 0 && (r = n.Root);
            u === void 0 && (u = !0);
            $assert && $assert(n.Root, "Root is not specified");
            i ? (n.PopupHasOverlay = !0, n.ShowOverlay(!0, n.Root)) : n.PopupHasOverlay && (n.PopupHasOverlay = !1, n.ShowOverlay(!1, n.Root));
            n.PopupList.push(t);
            r.appendChildAt(t, 0);
            u && (n.SupressClickTarget = t)
        }, n.RemovePopup = function (t) {
            $assert && $assert(n.PopupList.indexOf(t) > -1, "Popup does not exist in the manager");
            var i = n.PopupList.indexOf(t);
            i > -1 && (t.parent.removeChild(t), t.dispose(), n.PopupList.splice(i, 1), n.PopupHasOverlay && (n.PopupHasOverlay = !1, n.ShowOverlay(!1, n.Root)))
        }, n.HasPopup = function () {
            return this.PopupList.length > 0
        }, n.ContainsPopup = function (t) {
            return i(n.Root, t)
        }, n.HandleHover = function (t) {
            for (var i = 0; i < n.RegisteredDelegates.length; i++)n.RegisteredDelegates[i].overlayHoverHandler(t)
        }, n.HandleClick = function (t) {
            var r, u;
            if (t = t || window.event, t.target) {
                for (u = 0; u < n.RegisteredDelegates.length; u++)r = n.RegisteredDelegates[u], i(r, t.target.wrapper) || r == n.SupressClickTarget || r.clickOutsideHandler(t);
                n.SupressClickTarget = null
            }
        }, n.AddDelegate = function (t) {
            var i = n.RegisteredDelegates.indexOf(t);
            $assert && $assert(i === -1, "The delegate has already been added.");
            i === -1 && n.RegisteredDelegates.push(t)
        }, n.RemoveDelegate = function (t) {
            var i = n.RegisteredDelegates.indexOf(t);
            $assert && $assert(i > -1, "The delegate is not added.");
            i > -1 && n.RegisteredDelegates.splice(i, 1)
        }, n.ShowOverlay = function (t, i) {
            var r, u;
            i === void 0 && (i = null);
            r = n.OverlayComponent;
            r.initialized || r.initialize();
            t ? (n.OverlayCount > 0 && (n.RemoveOverlay(r), n.OverlayCount--), i != null ? (i.appendChild(r), n.BehindComponent = i) : (u = document.getElementsByTagName("body"), u && u[0].appendChild(r.getElement())), n.OverlayCount++) : (n.RemoveOverlay(r), n.OverlayCount--);
            r.setVisible(n.OverlayCount > 0);
            Locator.validationManager.queueForValidation(r)
        }, n.RemoveOverlay = function (n) {
            n.parent ? n.parent.removeChild(n) : n.getElement().parentElement.removeChild(n.getElement())
        }, n
    }();
    t.RegisteredDelegates = [];
    t.OverlayCount = 0;
    t.PopupList = [];
    t.CreateOverlay = function () {
        var n = new r, i, u;
        n.addStyle("g5-PopupManager_ClickMask");
        n.setVisible(!1);
        i = document.getElementsByTagName("body")[0];
        i && (i.appendChild(n.getElement()), i.addEventListener("click", t.HandleClick));
        u = n.getElement();
        u.addEventListener("mouseover", t.HandleHover);
        u.addEventListener("mousemove", t.HandleHover);
        t.OverlayComponent = n
    }();
    n.PopupManager = t
}(ns_gen5_ui_managers || (ns_gen5_ui_managers = {})), function (n) {
    function y() {
        var n, e;
        typeof t.currentApplication != "undefined" && (u = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth, f = document.documentElement.clientHeight || window.innerHeight || document.body.clientHeight, t.currentApplication.width = u, n = u < t.widthThreshold ? 0 : 1, n != t.currentApplication.widthState && (t.currentApplication.removeStyle(a + t.currentApplication.widthState), t.currentApplication.widthState = n, r.dispatchEvent(new i(i.WIDTH_STATE_CHANGED, u)), Locator.validationManager.processValidationCycleNow(), t.currentApplication.overwriteStyle(a + t.currentApplication.widthState, a + n)), n = u < t.viewWidthThreshold ? 0 : 1, n != t.currentApplication.viewState && (t.currentApplication.removeStyle(v + t.currentApplication.viewState), t.currentApplication.viewState = n, r.dispatchEvent(new i(i.VIEW_STATE_CHANGED)), Locator.validationManager.processValidationCycleNow(), t.currentApplication.overwriteStyle(v + t.currentApplication.viewState, v + n)), t.currentApplication.height !== f && (t.currentApplication.height = f, r.dispatchEvent(new i(i.HEIGHT_CHANGED))), t.currentApplication.dispatchEvent(new i(i.WIDTH_CHANGED, u)), e = f, e && (e -= t.heightOffset, t.currentApplication.getElement().style.minHeight = e + "px"))
    }

    function h(n) {
        window.removeEventListener("orientationchanged", h);
        window.removeEventListener("resize", h);
        window.addEventListener(n.type, y);
        y()
    }

    function nt() {
        r && !r.preventUnloading && (r.preventUnloading = !1, r.dispatchEvent(new i(i.UNLOADING)))
    }

    function l(n) {
        r && (n = n || window.event, r.suspended = n.type == "focus" || n.type == "focusin" ? !1 : n.type == "blur" || n.type == "focusout" ? !0 : this[s] ? !0 : !1, r.suspended ? r.dispatchEvent(new i(i.FOCUS_OUT)) : r.dispatchEvent(new i(i.FOCUS_IN)))
    }

    var i = ns_gen5_events.ApplicationEvent, e = ns_gen5_util.Delegate, d = n.Spinner, w = ns_gen5_data.StreamDataProcessorEvent, g = n.PointerProcessor, o = !1, a = "widthState", v = "viewState", r, u = 0, f = 0, b = 0, k = 0, c, s, p, t;
    window.addEventListener("orientationchanged", h);
    window.addEventListener("resize", h);
    window.addEventListener("beforeunload", nt);
    s = "";
    p = {
        hidden: "visibilitychange",
        mozHidden: "mozvisibilitychange",
        webkitHidden: "webkitvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (s in p)if (s in document) {
        c = p[s];
        break
    }
    c ? (document.removeEventListener(c, l), document.addEventListener(c, l)) : "onfocusin"in document ? document.onfocusin = document.onfocusout = l : window.onfocus = window.onblur = l;
    t = function (t) {
        function s(i) {
            var o = t.call(this) || this;
            return o._loadingTimer = null, o._spinner = null, o.height = 0, o.width = 0, o.widthState = -1, o.viewState = -1, o.suspended = !1, o.preventUnloading = !1, o.connected = !1, n.Component.Wrapper.call(o, i), o.addStyle("g5-Application"), o._delegate_loadingHandler = new e(o, o.loadingHandler), o._delegate_loadingCompleteHandler = new e(o, o.loadingCompleteHandler), o._delegate_showStreamingHandler = new e(o, o._showStreamingHandler), o._delegate_connectedHandler = new e(o, o._connectedHandler), o._delegate_connectionFailureHandler = new e(o, o._connectionFailedHandler), o._addSpinnerCallback = function () {
                return o.addSpinner()
            }, Locator.subscriptionManager._streamDataProcessor.addEventListener(w.CONNECTED, o._delegate_connectedHandler), Locator.subscriptionManager._streamDataProcessor.addEventListener(w.CONNECTION_FAILED, o._delegate_connectionFailureHandler), r = s.currentApplication = o, u = window.innerWidth || document.body.clientWidth, f = window.innerHeight || document.body.clientHeight, "screen"in window && (b = window.screen.width, k = window.screen.height), o.width = u, y(), o
        }

        return __extends(s, t), s.prototype.toString = function () {
            return "[Application]"
        }, s.prototype.enableUI = function () {
            o || (o = !0, this.pointerProcessor = new g(this), this.pointerProcessor.activate(), this.addEventListener(i.LOADING, this._delegate_loadingHandler), this.addEventListener(i.LOADING_COMPLETE, this._delegate_loadingCompleteHandler), this.addEventListener("showStreaming", this._delegate_showStreamingHandler))
        }, s.prototype.disableUI = function () {
            o && (o = !1, this._spinner && (this._spinner.remove(), this._spinner = null), this.removeEventListener(i.LOADING, this._delegate_loadingHandler), this.removeEventListener(i.LOADING_COMPLETE, this._delegate_loadingCompleteHandler), this.removeEventListener("showStreaming", this._delegate_showStreamingHandler), this.pointerProcessor.release(), this.pointerProcessor = null)
        }, s.prototype.loadingHandler = function () {
            o && !this._loadingTimer && (this._loadingTimer = setTimeout(this._addSpinnerCallback, s.loadingTimeout))
        }, s.prototype.addSpinner = function () {
            this._spinner = new d;
            var n = this.getElement();
            n.appendChild(this._spinner.getElement());
            this._spinner.initialize()
        }, s.prototype.loadingCompleteHandler = function () {
            this._loadingTimer && (clearTimeout(this._loadingTimer), this._loadingTimer = null);
            this._spinner && (this._spinner.remove(), this._spinner = null)
        }, s.prototype._showStreamingHandler = function () {
            this.preventUnloading = !0
        }, s.prototype._connectedHandler = function () {
            this.connected = !0
        }, s.prototype._connectionFailedHandler = function () {
            this.connected = !1
        }, s.prototype.getDeviceWidth = function () {
            return u
        }, s.prototype.getDeviceHeight = function () {
            return f
        }, s.prototype.getScreenWidth = function () {
            return b
        }, s.prototype.getScreenHeight = function () {
            return k
        }, s
    }(n.Component);
    t.loadingTimeout = 200;
    t.overflowLayout = !1;
    t.widthThreshold = 550;
    t.viewWidthThreshold = 950;
    t.heightOffset = 89;
    __decorate([override], t.prototype, "toString");
    n.Application = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var i = n.Component, t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[ClosableContainer]"
        }, t.prototype.createChildren = function () {
            this._button = new this._buttonClass(this._buttonTag);
            this._initAppendChildButton && this.appendChild(this._button);
            this._open && this.initializeContainer()
        }, t.prototype.initializeContainer = function () {
            this._container || (this._container = new this._containerClass(this._containerTag), this._initAppendChildContainer && this.appendChild(this._container))
        }, t.prototype.setOpen = function (n) {
            n != this._open && (this._open = n, this._container ? this._container.setVisible(this._open) : this.initializeContainer())
        }, t.prototype.getOpen = function () {
            return this._open
        }, t.prototype.clickHandler = function () {
            this.setOpen(!this._open)
        }, t
    }(n.Component);
    t.SInit = function () {
        t.prototype._button = null;
        t.prototype._buttonClass = i;
        t.prototype._container = null;
        t.prototype._containerClass = i;
        t.prototype._open = !1;
        t.prototype._initAppendChildButton = !0;
        t.prototype._initAppendChildContainer = !0;
        t.prototype._buttonTag = null;
        t.prototype._containerTag = null
    }();
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "createChildren");
    n.ClosableContainer = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    n.StemBaseMixin = function () {
        function t() {
            this.stem && this.stem.addDelegate(this);
            this.___initialize && this.___initialize()
        }

        function n(t) {
            var u = t || this, r, i;
            if (u.getFirstChild)for (r = u.getFirstChild(), i = void 0; r;)i = r.wrapper, r = r.nextSibling, i && (i.recursiveDetatchStem ? i.recursiveDetatchStem() : n(i));
            u.detatchStem && u.detatchStem()
        }

        function i() {
            this.stem && (this.stem.removeDelegate(this), this.stem = null, this.validationState = 0, this.parent && this.parent.removeChild(this))
        }

        function r() {
        }

        function u() {
        }

        function f() {
            this.detatchStem()
        }

        return function () {
            this.stem = null;
            this.___initialize = this.initialize;
            this.initialize = t;
            this.stemUpdateHandler = r;
            this.stemDeleteHandler = f;
            this.stemInsertHandler = u;
            this.detatchStem = i;
            this.recursiveDetatchStem = n
        }
    }()
}(ns_gen5_ui || (ns_gen5_ui = {})), function () {
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[ComponentStemBase]"
        }, t.prototype.stemUpdateHandler = function () {
        }, t.prototype.stemDeleteHandler = function () {
        }, t.prototype.stemInsertHandler = function () {
        }, t.prototype.detatchStem = function () {
        }, t.prototype.recursiveDetatchStem = function () {
        }, t
    }(n.Component);
    __decorate([override], t.prototype, "toString");
    n.ComponentStemBase = t;
    n.StemBaseMixin.call(t.prototype)
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[ClosableContainerStemBase]"
        }, t.prototype.createChildren = function () {
            this._button = new this._buttonClass(this._buttonTag);
            this.buttonAcceptsStem && (this._button.stem = this.stem);
            this._initAppendChildButton && this.appendChild(this._button);
            this._open && this.initializeContainer()
        }, t.prototype.initializeContainer = function () {
            this._container = new this._containerClass;
            this._container.stem = this.stem;
            this._initAppendChildContainer && this.appendChild(this._container)
        }, t.prototype.stemUpdateHandler = function () {
        }, t.prototype.stemDeleteHandler = function () {
        }, t.prototype.stemInsertHandler = function () {
        }, t.prototype.detatchStem = function () {
        }, t.prototype.recursiveDetatchStem = function () {
        }, t
    }(n.ClosableContainer);
    t.SInit = function () {
        t.prototype.buttonAcceptsStem = !1
    }();
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "createChildren");
    __decorate([override], t.prototype, "initializeContainer");
    n.ClosableContainerStemBase = t;
    n.StemBaseMixin.call(t.prototype)
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    function i(n) {
        return !!n.createChildInstance
    }

    var u = ns_gen5_data.Attribute, r = n.ComponentStemBase, t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[GenericStemRenderer]"
        }, t.prototype.createChildren = function () {
            var r, f, u, e, t, n;
            if (this.stem) {
                var o = this, s = this.stem.getChildren(), h = this.childType;
                if (i(o))for (r = 0, f = s; r < f.length; r++)t = f[r], n = o.createChildInstance(t), n.stem = t, this.appendChild(n); else for (u = 0, e = s; u < e.length; u++)t = e[u], n = new h, n.stem = t, this.appendChild(n)
            }
        }, t.prototype.appendChildAt = function (t, i) {
            return n.prototype.appendChildAt.call(this, t, i + this.baseIndex)
        }, t.prototype.stemInsertHandler = function (n, t) {
            var f = t.data.OR, e = this, r = i(e) ? e.createChildInstance(t) : new this.childType, u;
            if (r.stem = t, f)try {
                u = this._element.children[Number(f) + this.baseIndex];
                u ? this.insertBefore(r, u) : this.appendChild(r)
            } catch (o) {
                ErrorReporter.Trace(this, o);
                this.appendChild(r)
            } else this.appendChild(r)
        }, t.prototype.setStem = function (n) {
            var t = this;
            this.stem && this.recursiveDetatchStem();
            this.stem = n;
            this.parent && this.stem && (this.stem.addDelegate(this), Locator.validationManager.callLater(function () {
                t.suspendElementFromDom();
                t.createChildren();
                Locator.validationManager.callPostValidation(function () {
                    return t.unsuspendElementFromDom()
                })
            }))
        }, t
    }(n.ComponentStemBase);
    t.SInit = function () {
        t.prototype.childType = r;
        t.prototype.baseIndex = 0
    }();
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "createChildren");
    __decorate([override], t.prototype, "appendChildAt");
    __decorate([override], t.prototype, "stemInsertHandler");
    n.GenericStemRenderer = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var t = function (n) {
        function t() {
            var t = n.call(this, "input") || this;
            return t.passwordDisplay = !1, t._rendered = !1, t
        }

        return __extends(t, n), t.prototype.createChildren = function () {
            if (this.maxLength > 0 && this.setAttribute("maxlength", this.maxLength + ""), this.passwordDisplay)this.setAttribute("type", "password"); else if (this.setAttribute("type", "text"), this._initialValue && this._initialValue != "") {
                var n = this.getElement();
                n.value = this._initialValue
            }
            this._rendered = !0
        }, t.prototype.setValue = function (n) {
            return this._rendered ? this.getElement().value = n : this._initialValue = n, n
        }, t.prototype.getValue = function () {
            return this._rendered ? this.getElement().value : this._initialValue
        }, t
    }(n.Component);
    __decorate([override], t.prototype, "createChildren");
    n.TextInput = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var r = ns_gen5_ui.DomElement, t = ns_gen5_ui.Module, i = function () {
        function n() {
        }

        return n.getInstance = function (i, u) {
            n.ClassMap || (n.ClassMap = new Map, n.ModuleBank = new Map);
            var f, e, o;
            if (u) {
                if (o = u instanceof r ? t.getRoot(u) : n.ModuleIDLookup[u], !o)return null;
                f = n.ModuleBank.get(o);
                f || (f = new Map, n.ModuleBank.set(o, f))
            } else f = n.ClassMap;
            return e = f.get(i), e || (e = new i, f.set(i, e)), e
        }, n.RemoveInstance = function (t) {
            n.ClassMap["delete"](t)
        }, n.RemoveScope = function (i) {
            i instanceof t && delete n.ModuleIDLookup[i.uid];
            n.ModuleBank["delete"](i)
        }, n.RegisterModule = function (t) {
            n.ModuleIDLookup[t.uid] || (n.ModuleIDLookup[t.uid] = t)
        }, n
    }();
    i.ModuleIDLookup = [];
    n.Singleton = i
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[WidthStateWatcherEvent]"
        }, t
    }(ns_gen5_events.Event365);
    t.WIDTH_STATE_CHANGED = "widthStateChanged";
    __decorate([override], t.prototype, "toString");
    n.WidthStateWatcherEvent = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var r = ns_gen5_ui.Application, i = ns_gen5_events.ApplicationEvent, f = n.Delegate, u = n.WidthStateWatcherEvent, t = function (n) {
        function t() {
            return n.call(this) || this
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[WidthStateWatcher]"
        }, t.prototype.initialize = function () {
            var n, t;
            if (this._delegate_applicationWidthChangedHandler = new f(this, this._applicationWidthChangedHandler), this._applicationWidthChangedHandler(new i(i.WIDTH_CHANGED, r.currentApplication.width)), r.currentApplication.addEventListener(i.WIDTH_CHANGED, this._delegate_applicationWidthChangedHandler), $assert) {
                $assert(this.thresholds, "Thresholds have not been set on this instance of " + this);
                var u = this.thresholds, e = -1, o = u.length;
                for (n = 0; n < o; n++)t = u[n], $assert(e < t, "The thresholds list provided to this instance of " + this + " is not sequential."), e = t
            }
            this.initialized = !0
        }, t.prototype.dispose = function () {
            this._registeredDisplayElements = null;
            r.currentApplication.removeEventListener(i.WIDTH_CHANGED, this._delegate_applicationWidthChangedHandler)
        }, t.prototype.registerElement = function (n) {
            this._registeredDisplayElements || (this._registeredDisplayElements = []);
            this._registeredDisplayElements[this._registeredDisplayElements.length] = n;
            this.initialized && n.addStyle(this.classPrefix + this.state)
        }, t.prototype.unregisterElement = function (n) {
            this._registeredDisplayElements.splice(this._registeredDisplayElements.indexOf(n), 1)
        }, t.prototype._applicationWidthChangedHandler = function (n) {
            for (var o, r, e = this.thresholds, h = n.width, s, i = -1, f = e.length, t = 0; t < f; t++)if (s = e[t], h < s) {
                i = t;
                break
            }
            if (i == -1 && (i = e.length), this.state != i && (o = this.state, this.state = i, this.hasEventListener(u.WIDTH_STATE_CHANGED) && this.dispatchEvent(new u(u.WIDTH_STATE_CHANGED)), r = this._registeredDisplayElements, r && (f = r.length)))if (o == -1)for (t = 0; t < f; t++)r[t].addStyle(this.classPrefix + i); else for (t = 0; t < f; t++)r[t].overwriteStyle(this.classPrefix + o, this.classPrefix + i)
        }, t
    }(ns_gen5_events.EventDispatcher);
    t.SInit = function () {
        t.prototype._delegate_applicationWidthChangedHandler = null;
        t.prototype._registeredDisplayElements = null;
        t.prototype.initialized = !1;
        t.prototype.state = -1;
        t.prototype.thresholds = null;
        t.prototype.classPrefix = "g5-WidthStateWatcher_CurrentSize-"
    }();
    __decorate([override], t.prototype, "toString");
    n.WidthStateWatcher = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var r = ns_gen5_data.Attribute, i = function (n) {
        function t() {
            return n.call(this) || this
        }

        return __extends(t, n), t.prototype.initialize = function () {
        }, t.prototype.stemUpdateHandler = function () {
        }, t.prototype.stemInsertHandler = function () {
        }, t.prototype.stemDeleteHandler = function () {
        }, t.prototype.detatchStem = function () {
        }, t.prototype.recursiveDetatchStem = function () {
        }, t
    }(ns_gen5_events.EventDispatcher), t;
    i.SInit = function () {
        ns_gen5_ui.StemBaseMixin.call(i.prototype)
    }();
    n.StemMergeProcessor_PrivateBase = i;
    t = function (n) {
        function t(t, i) {
            var r = n.call(this) || this;
            return r.toStem = null, r._excludeMap = null, r.stem = t, r.toStem = i, r._excludeMap = {}, r._excludeMap.IT = 1, r
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[StemMergeProcessor]"
        }, t.prototype.excludeAttributes = function () {
            for (var i, t, r = [], n = 0; n < arguments.length; n++)r[n] = arguments[n];
            for (i = arguments.length, t = 0; t < i; t++)this._excludeMap[arguments[t]] = 1
        }, t.prototype.initialize = function () {
            n.prototype.initialize.call(this);
            this.takeAll()
        }, t.prototype.takeAll = function () {
            var t = this.stem.data, i = this.toStem.data;
            for (var n in t)n in this._excludeMap || (i[n] = t[n]);
            return i
        }, t.prototype.detatchStem = function () {
            this.toStem = null;
            n.prototype.detatchStem.call(this)
        }, t.prototype.stemUpdateHandler = function (n, t) {
            var r = {};
            for (var i in t)i in this._excludeMap || (r[i] = t[i]);
            this.toStem.update(r)
        }, t
    }(i);
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "initialize");
    __decorate([override], t.prototype, "detatchStem");
    __decorate([override], t.prototype, "stemUpdateHandler");
    n.StemMergeProcessor = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n.GetCookieValue = function (n) {
            return this.GetCookieAttributeValue(n)
        }, n.GetCookieAttributeValue = function (n, t) {
            for (var e, r, h = document.cookie.split(";"), u, i = null, o, f, c = h.length, s = 0; s < c; s++)if (f = h[s], o = f.indexOf("="), u = f.substr(0, o), u = u.replace(/^\s+|\s+$/g, ""), u == n) {
                if (i = f.substr(o + 1), t)for (e = i.split("&"), i = null, r = 0; r < e.length; r++)if (t == e[r].split("=")[0]) {
                    i = e[r].split("=")[1];
                    break
                }
                break
            }
            return i ? unescape(i) : i
        }, n.SetCookieValue = function (n, t, i, r) {
            var e = document.cookie.split(";"), f = [], h = !1, c = "", s, u, l, o;
            if (t && t.length != 0) {
                for (u = 0; u < e.length; u++)if (e[u] = e[u].replace(/^\s+|\s+$/g, ""), n == e[u].split("=")[0])for (l = e[u].substring(e[u].indexOf("=") + 1, e[u].length), f = l.split("&"), o = 0; o < f.length; o++)t == f[o].split("=")[0] && (f[o] = t + "=" + escape(i).replace(/\+/g, "%2b"), h = !0);
                h || (f.length++, f[f.length - 1] = t + "=" + escape(i).replace(/\+/g, "%2b"));
                document.cookie = n + "=; expires=Thu, 01-Jan-70 00:00:01 GMT;path=/";
                document.cookie = n + "=" + f.join("&") + ";path=/"
            } else s = new Date, s.setDate(s.getDate() + 90), r && (c = ";domain=" + r), document.cookie = n + "=" + i + c + ";path=/"
        }, n.GetSessionId = function () {
            var t;
            try {
                t = n.GetCookieValue("pstk");
                /[A-F0-9]{38}/i.test(t) || (t = null)
            } catch (i) {
                t = null;
                ErrorReporter.Trace(this, i)
            }
            return t
        }, n.SetSessionId = function (t, i) {
            n.SetCookieValue("pstk", "", t, i)
        }, n.SetLoginSuccess = function (t) {
            var i = t == !0 ? "1" : "0";
            n.SetCookieValue("session", "lgs", i)
        }, n.SetKYCPage = function (t) {
            n.SetCookieValue("session", "kpd", t)
        }, n
    }();
    n.CookieManager = t
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var i = n.TextNode, t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[Label]"
        }, t.prototype.createChildren = function () {
            this._textNode = new i(this._text);
            this.appendChild(this._textNode)
        }, t.prototype.commitProperties = function () {
            this._textChanged && (this._textChanged = !1, this._textNode.setText(this._text))
        }, t.prototype.setText = function (n) {
            n != this._text && (this._text = n, this._textChanged = !0, this.invalidateProperties())
        }, t.prototype.getText = function () {
            return this._text
        }, t.prototype.getTooltip = function () {
            return this._text
        }, t.prototype.commitText = function (n) {
            this._textNode.setText(n)
        }, t
    }(n.Component);
    t.SInit = function () {
        t.prototype._text = null;
        t.prototype._textChanged = !1;
        t.prototype._textNode = null
    }();
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "createChildren");
    __decorate([override], t.prototype, "commitProperties");
    __decorate([override], t.prototype, "getTooltip");
    n.Label = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var r = ns_gen5_data.Attribute, i = function (n) {
        function t() {
            return n !== null && n.apply(this, arguments) || this
        }

        return __extends(t, n), t.prototype.stemUpdateHandler = function () {
        }, t.prototype.stemDeleteHandler = function () {
        }, t.prototype.stemInsertHandler = function () {
        }, t.prototype.detatchStem = function () {
        }, t.prototype.recursiveDetatchStem = function () {
        }, t
    }(n.Label), t;
    n.LabelStemBase_Mixin = i;
    n.StemBaseMixin.call(i.prototype);
    t = function (n) {
        function t(t) {
            var i = n.call(this, t) || this;
            return i._textChanged = !0, i
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[LabelStemBase]"
        }, t.prototype.commitProperties = function () {
            this._textChanged && (this._text = this.stem.data[this.stemAttributeName] || "", n.prototype.commitProperties.call(this))
        }, t.prototype.stemUpdateHandler = function (n, t) {
            this.stemAttributeName in t && (this._textChanged = !0, this.invalidateProperties())
        }, t
    }(i);
    t.SInit = function () {
        t.prototype.stemAttributeName = "NA"
    }();
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "commitProperties");
    __decorate([override], t.prototype, "stemUpdateHandler");
    n.LabelStemBase = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var t = function (n) {
        function t() {
            var t = n.call(this, "iframe") || this;
            return t.scrolling = !1, t.isIE8 = function () {
                var n = navigator.userAgent.toLowerCase(), t = -1, i;
                return n.indexOf("msie") != -1 && (i = new RegExp("msie ([0-9]{1,}[.0-9]{0,})"), i.exec(n) && (t = parseFloat(RegExp.$1))), t == 8
            }(), t.onloadHandler = function () {
                return t.onLoad()
            }, t
        }

        return __extends(t, n), t.prototype.createChildren = function () {
            var t = this, n = this.getElement();
            n.src = this.src;
            n.name = this.name;
            n.scrolling = this.scrolling ? "yes" : "no";
            this.isIE8 && (n.frameBorder = "0");
            n.setAttribute("allowtransparency", this.allowTransparency ? "true" : "false");
            this.setVisible(!1);
            n.addEventListener("load", this.onloadHandler);
            n.addEventListener("unload", function () {
                return t.executeUnload()
            })
        }, t.prototype.executeUnload = function () {
        }, t.prototype.onLoad = function () {
            var n = this.getElement();
            n.removeEventListener("load", this.onloadHandler);
            this.setVisible(!0)
        }, t
    }(n.Component);
    __decorate([override], t.prototype, "createChildren");
    n.InlineFrame = t
}(ns_gen5_ui || (ns_gen5_ui = {})), function (n) {
    var t = function (n) {
        function t() {
            var t = n.call(this) || this;
            return t.direction = null, t
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[ArrowButton]"
        }, t.prototype.createChildren = function () {
            this.addStyle("g5-ArrowButton");
            this.direction && this.addStyle(this.direction)
        }, t
    }(ns_gen5_ui.Component);
    t.LEFT = "g5-ArrowButton_Left";
    t.RIGHT = "g5-ArrowButton_Right";
    t.UP = "g5-ArrowButton_Up";
    t.DOWN = "g5-ArrowButton_Down";
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "createChildren");
    n.ArrowButton = t
}(ns_gen5_ui_controls || (ns_gen5_ui_controls = {})), function (n) {
    var r = ns_gen5_ui.DomElement, i = n.ArrowButton, u = -1, f = 1, t = function (n) {
        function t() {
            var t = n.call(this) || this;
            return t.scrollAmmountModifier = 1, t.ignoreButtonsForTravel = !1, t.fixedWidthScroll = !1, t._scrollContent = null, t._leftButton = null, t._rightButton = null, t
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[HorizontalScroller]"
        }, t.prototype.createChildren = function () {
            var e = this, n, i, t;
            this.addStyle(this.baseStyle);
            n = this._leftButton = new this.arrowButtonType;
            n.direction = this.directions.LEFT;
            n.clickHandler = function () {
                return e._travel(f)
            };
            n.addStyle(this.baseStyle + "_Dis");
            i = this._rightButton = new this.arrowButtonType;
            i.direction = this.directions.RIGHT;
            i.clickHandler = function () {
                return e._travel(u)
            };
            t = new r;
            t.setAttribute("class", this.baseStyle + "_HScroll");
            this.appendChild(t);
            this.appendChild(n);
            this.appendChild(t);
            t.appendChild(this._scrollContent);
            this.appendChild(i)
        }, t.prototype._travel = function (n, t) {
            var i, u, r, f;
            this._rightButton.removeStyle(this.baseStyle + "_Dis");
            this._leftButton.removeStyle(this.baseStyle + "_Dis");
            this.buttonWidth || (this.buttonWidth = this._rightButton.getElement().clientWidth);
            this.ignoreButtonsForTravel && (this.buttonWidth = 0);
            i = this._scrollContent.getElement();
            u = i.clientWidth - this.buttonWidth * 2;
            this.max_x_pos = u - i.scrollWidth;
            this.max_x_pos > 0 && (this.max_x_pos = 0);
            r = i.style.left || "0px";
            r = r.slice(0, -2);
            f = t || i.scrollWidth / i.children.length * this.scrollAmmountModifier;
            this.endPos = Number(r) + f * n;
            this.endPos - this.graceSpace < this.max_x_pos && (this.endPos = this.max_x_pos, this._rightButton.addStyle(this.baseStyle + "_Dis"));
            this.endPos + this.graceSpace > 0 && (this.endPos = 0, this._leftButton.addStyle(this.baseStyle + "_Dis"));
            i.style.left = this.endPos + "px"
        }, t.prototype.setScrollContent = function (n) {
            this._scrollContent = n;
            this._scrollContent.addStyle(this.baseStyle + "_ScrollContent")
        }, t
    }(ns_gen5_ui.Component);
    t.SInit = function () {
        t.prototype.directions = i;
        t.prototype.arrowButtonType = i;
        t.prototype.baseStyle = "g5-HorizontalScroller";
        t.prototype.graceSpace = 60
    }();
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "createChildren");
    n.HorizontalScroller = t
}(ns_gen5_ui_controls || (ns_gen5_ui_controls = {})), function (n) {
    var u = ns_gen5_ui.Component, f = ns_gen5_events.EventDispatcher, t = ns_gen5_events.ModalEvent, i, r;
    (function (n) {
        n[n.Low = 1] = "Low";
        n[n.Normal = 2] = "Normal";
        n[n.High = 3] = "High";
        n[n.Urgent = 4] = "Urgent"
    })(i = n.ModalPriority || (n.ModalPriority = {}));
    r = function (n) {
        function r() {
            var t = n !== null && n.apply(this, arguments) || this;
            return t.modalQueue = [], t
        }

        return __extends(r, n), r.prototype.addModal = function (n, r) {
            this.root || (this.root = this.getModalRoot());
            r || (r = i.Normal);
            this.displayingModal ? r > this.displayingModal.priority ? (this.modalQueue.push(this.displayingModal), this.modalQueue.push({
                modalComponent: n,
                priority: r
            }), this.removeModal(this.displayingModal.modalComponent)) : this.modalQueue.push({
                modalComponent: n,
                priority: r
            }) : (this.displayingModal = {
                modalComponent: n,
                priority: r
            }, this.showDarkWash(), this.root.appendChild(n));
            this.dispatchEvent(new t(t.MODAL_CHANGE, !0))
        }, r.prototype.removeModal = function (n) {
            if (this.displayingModal = null, this.darkWash.suspendElementFromDom(), this.root.removeChild(n), this.modalQueue.length > 0) {
                this.modalQueue.sort(function (n, t) {
                    return t.priority - n.priority
                });
                var i = this.modalQueue.splice(0, 1)[0];
                this.addModal(i.modalComponent, i.priority)
            } else this.dispatchEvent(new t(t.MODAL_CHANGE, !1))
        }, r.prototype.contains = function (n) {
            if (this.displayingModal && this.displayingModal.modalComponent == n)return !0;
            if (this.modalQueue && this.modalQueue.length > 0)for (var t = 0; t < this.modalQueue.length; t++)if (this.modalQueue[t].modalComponent == n)return !0;
            return !1
        }, r.prototype.showDarkWash = function () {
            this.darkWash ? this.darkWash.unsuspendElementFromDom() : (this.darkWash = new u, this.darkWash.addStyle(this.getWashStyle()), this.root.appendChild(this.darkWash))
        }, r
    }(f);
    n.ModalManagerBase = r
}(ns_gen5_util || (ns_gen5_util = {})), function (n) {
    var t = 1.70158, i = function () {
        function n() {
        }

        return n.EaseIn = function (n) {
            return n * n * ((t + 1) * n - t)
        }, n.EaseOut = function (n) {
            return (n -= 1) * n * ((t + 1) * n + t) + 1
        }, n.EaseInOut = function (n) {
            return (n *= 2) < 1 ? .5 * n * n * ((t * 1.525 + 1) * n - t * 1.525) : .5 * ((n -= 2) * n * ((t * 1.525 + 1) * n + t * 1.525) + 2)
        }, n
    }();
    n.Back = i
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n.EaseIn = function (t) {
            return 1 - n.EaseOut(1 - t)
        }, n.EaseOut = function (n) {
            return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
        }, n.EaseInOut = function (t) {
            return (t *= 2) < 1 ? .5 * n.EaseIn(t) : .5 * n.EaseOut(t - 1) + .5
        }, n
    }();
    n.Bounce = t
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), function (n) {
    var i = 1, t = .3, r = t / 4, u = function () {
        function n() {
        }

        return n.EaseIn = function (n) {
            return n == 0 || n == 1 ? n : -(i * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - r) * 2 * Math.PI / t))
        }, n.EaseOut = function (n) {
            return n == 0 || n == 1 ? n : i * Math.pow(2, -10 * n) * Math.sin((n - r) * 2 * Math.PI / t) + 1
        }, n.EaseInOut = function (n) {
            return n == 0 || n == 1 ? n : (n = n * 2 - 1, n < 0) ? -.5 * i * Math.pow(2, 10 * n) * Math.sin((n - r * 1.5) * 2 * Math.PI / (t * 1.5)) : .5 * i * Math.pow(2, -10 * n) * Math.sin((n - r * 1.5) * 2 * Math.PI / (t * 1.5)) + 1
        }, n
    }();
    n.Elastic = u
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n.EaseIn = function (n) {
            return n == 0 ? 0 : Math.pow(2, 10 * (n - 1))
        }, n.EaseOut = function (n) {
            return n == 1 ? 1 : 1 - Math.pow(2, -10 * n)
        }, n.EaseInOut = function (n) {
            return n == 0 || n == 1 ? n : 0 > (n = n * 2 - 1) ? .5 * Math.pow(2, 10 * n) : 1 - .5 * Math.pow(2, -10 * n)
        }, n
    }();
    n.Exponential = t
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n.EaseNone = function (n) {
            return n
        }, n
    }();
    n.Linear = t
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n.EaseIn = function (n) {
            return n * n * n * n
        }, n.EaseOut = function (n) {
            return 1 - (n -= 1) * n * n * n
        }, n.EaseInOut = function (n) {
            return n < .5 ? 8 * n * n * n * n : -8 * (n -= 1) * n * n * n + 1
        }, n
    }();
    n.Quartic = t
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),function (n) {
    var t = function () {
        function n() {
        }

        return n.EaseIn = function (n) {
            return n * n
        }, n.EaseOut = function (n) {
            return -n * (n - 2)
        }, n.EaseInOut = function (n) {
            return n < .5 ? 2 * n * n : -2 * n * (n - 2) - 1
        }, n
    }();
    n.Quadratic = t
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),function (n) {
    function u() {
        var n, f, t;
        for (r = +new Date, n = 0, f = i.slice(); n < f.length; n++)t = f[n], t.update(r), t.getPlaying() || e(t);
        Locator.validationManager.processValidationCycleNow();
        i.length && requestAnimationFrame(u)
    }

    function h(n) {
        i[i.length] = n;
        i.length == 1 && (requestAnimationFrame(u), r = +new Date);
        f && (f = !1, Locator.validationManager.callPostValidation(function () {
            f = !0;
            u()
        }))
    }

    function e(n) {
        var t = i.indexOf(n);
        t > -1 && i.splice(t, 1)
    }

    function o(n, t) {
        var u, f = n.from, e, o, h, s, i, r;
        return (n.to instanceof Array ? (h = n.to, u = h[0], s = h[1], typeof s == "string" ? e = s : o = s) : (u = n.to, e = ""), i = f + t * (u - f), n.internal_different = i !== n.internal_previous_raw, n.internal_previous_raw = i, !n.internal_different) ? -0 : o ? (r = u + f === 1 ? o(i) : o(Math.round(i)), n.internal_different = r !== n.internal_previous_calc, n.internal_previous_calc = r, r) : e ? (r = (u + f === 1 ? i : Math.round(i)) + e, n.internal_different = r !== n.internal_previous_calc, n.internal_previous_calc = r, r) : i
    }

    var s = ns_gen5_animation_easing.Linear, i = [], r, f = !0, t = function () {
        function n(t, i, r, u) {
            var f = this;
            this.element = t;
            this.time = i;
            this.params = r;
            this.flags = u;
            Locator.validationManager.callLater(function () {
                f.flags & n.AUTO_START_OFF || f.start()
            })
        }

        return n.prototype.start = function () {
            this.playing || (this.playing = !0, h(this), this.startTime = r)
        }, n.prototype.pause = function () {
            this.playing && (this.playing = !1, e(this))
        }, n.prototype.end = function () {
            this.playing && (this.playing = !1, this.update(this.startTime + this.time + 1), e(this))
        }, n.prototype.getPlaying = function () {
            return this.playing
        }, n.prototype.getElement = function () {
            return this.element
        }, n.prototype.then = function (t) {
            return t.flags = (t.flags || 0) | n.AUTO_START_OFF, this.next = t
        }, n.prototype.onBegin = function (n) {
            return this.beginCallback = n, this
        }, n.prototype.onChange = function (n) {
            return this.changeCallback = n, this
        }, n.prototype.onComplete = function (n) {
            return this.completeCallback = n, this
        }, n.prototype.executeVoidCallback = function (n) {
            try {
                n()
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }, n.prototype.executeChangeCallback = function (n) {
            try {
                this.changeCallback(n)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }, n.prototype.update = function (t) {
            var e = (t - (this.startTime + (this.params.delay || 0))) / (this.time * n.DurationModifier) || (this.time === 0 ? 1 : 0), h, r, c, i, u, f;
            if (e >= 1)this.playing = !1, e = 1; else if (e < 0) {
                e = 0;
                return
            }
            if (!this.moving && this.playing && (this.moving = !0, this.beginCallback && this.executeVoidCallback(this.beginCallback)), h = (this.params.ease || s.EaseNone)(e), r = this.params, r.attribute)for (i in r.attribute)u = r.attribute[i], f = o(u, h) + "", u.internal_different && this.element.setAttribute(i, f);
            if (r.style) {
                c = this.element.getElement().style;
                for (i in r.style)u = r.style[i], f = o(u, h) + "", u.internal_different && (c[i] = f)
            }
            if (r.property)for (i in r.property)u = r.property[i], f = o(u, h), u.internal_different && (typeof this.element[i] == "function" ? this.element[i](f) : this.element[i] = f);
            this.changeCallback && this.executeChangeCallback(h);
            this.playing || (this.completeCallback && this.executeVoidCallback(this.completeCallback), this.next && (this.next.start(), this.next = null))
        }, n
    }();
    t.DurationModifier = 1;
    t.SInit = function () {
        t.prototype.playing = !1;
        t.prototype.moving = !1;
        t.prototype.startTime = 0;
        t.prototype.next = null;
        t.prototype.element = null;
        t.prototype.time = 0;
        t.prototype.params = null;
        t.prototype.flags = 0;
        t.prototype.beginCallback = null;
        t.prototype.changeCallback = null;
        t.prototype.completeCallback = null
    }();
    n.Tween = t, function (n) {
        n.AUTO_START_OFF = 1
    }(t = n.Tween || (n.Tween = {}))
}(ns_gen5_animation || (ns_gen5_animation = {})),function (n) {
    var t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t
    }(ns_gen5_events.Event365);
    t.CONNECTED = "connected";
    t.DISCONNECTED = "disconnected";
    t.CONNECTION_FAILED = "connectionFailed";
    t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession";
    n.ReaditConnectionEvent = t
}(readit || (readit = {})),function () {
}(readit || (readit = {})),function (n) {
    var t = function (n) {
        function t(t) {
            return n.call(this, t) || this
        }

        return __extends(t, n), t
    }(ns_gen5_events.Event365);
    t.CONNECTED = "connected";
    t.DISCONNECTED = "disconnected";
    t.CONNECTION_FAILED = "connectionFailed";
    t.PULL_ENABLED = "pullEnabled";
    t.PULL_DISABLED = "pullDisabled";
    t.PULL_DATA_RECEIVED = "pullDataReceived";
    t.PULL_REQUEST_FAILED = "pullRequestFailed";
    t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession";
    n.TransportConnectionEvent = t
}(readit || (readit = {})),function (n) {
    var t = function (n) {
        function t(t, i) {
            var r = n.call(this, t) || this;
            return r.message = i, r
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[ReaditMessageEvent type=" + this.type + " message=" + this.message + "]"
        }, t
    }(ns_gen5_events.Event365);
    t.MESSAGE_RECEIVED = "messageReceived";
    __decorate([override], t.prototype, "toString");
    n.ReaditMessageEvent = t
}(readit || (readit = {})),function (n) {
    var t = function () {
        function t(n, t, i, r) {
            this.messageType = n;
            this.topic = t;
            this.message = i;
            this.userHeaders = r
        }

        return t.prototype.toString = function () {
            return "[ReaditMessage messageType=" + this.messageType + " message=" + this.message + " topic=" + this.topic + "]"
        }, t.prototype.getMessage = function () {
            return this.message
        }, t.prototype.getTopic = function () {
            return this.topic
        }, t.prototype.getBaseTopic = function () {
            return this.topic.substr(this.topic.lastIndexOf("/") + 1, this.topic.length)
        }, t.prototype.getUserHeaders = function () {
            return this.userHeaders
        }, t.prototype.isInitialTopicLoad = function () {
            return this.messageType === n.StandardProtocolConstants.INITIAL_TOPIC_LOAD
        }, t
    }();
    n.ReaditMessage = t
}(readit || (readit = {})),function (n) {
    var t;
    (function (n) {
        n[n.DISCONNECTED = 0] = "DISCONNECTED";
        n[n.PENDING = 1] = "PENDING";
        n[n.CONNECTED = 2] = "CONNECTED"
    })(t = n.ReaditConnectionStatus || (n.ReaditConnectionStatus = {}));
    n.StandardProtocolConstants = {
        RECORD_DELIM: "\x01",
        FIELD_DELIM: "\x02",
        HANDSHAKE_MESSAGE_DELIM: "\x03",
        MESSAGE_DELIM: "\b",
        CLIENT_CONNECT: 0,
        CLIENT_POLL: 1,
        CLIENT_SEND: 2,
        CLIENT_CONNECT_FAST: 3,
        INITIAL_TOPIC_LOAD: 20,
        DELTA: 21,
        CLIENT_SUBSCRIBE: 22,
        CLIENT_UNSUBSCRIBE: 23,
        CLIENT_SWAP_SUBSCRIPTIONS: 26,
        NONE_ENCODING: 0,
        ENCRYPTED_ENCODING: 17,
        COMPRESSED_ENCODING: 18,
        BASE64_ENCODING: 19,
        SERVER_PING: 24,
        CLIENT_PING: 25,
        CLIENT_ABORT: 28,
        CLIENT_CLOSE: 29,
        ACK_ITL: 30,
        ACK_DELTA: 31,
        ACK_RESPONSE: 32
    }
}(readit || (readit = {})),function (n) {
    var r = ns_gen5_util.Delegate, i = n.TransportConnectionEvent, u = n.ReaditConnectionEvent, t = n.ReaditConnectionStatus, f;
    n.ReadItLog = new function () {
        var n = ns_gen5_util.LogEntry;
        this._enabled = !0;
        this._log = [];
        this.getLog = function () {
            return this._log
        };
        this.Log = function (t) {
            if (this._log.push(new n(t)), this._enabled)try {
                var i = new Date;
                $log(i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds() + "." + i.getMilliseconds() + " -> " + t)
            } catch (r) {
            }
        };
        this.SetEnabled = function (n) {
            this._enabled = n
        }
    };
    n.pushConnectionStatusEnum = {
        ATTEMPTINGCONNECTION: 1,
        CONNECTED: 2,
        FIRSTATTEMPTFAILED: 3,
        ALLRETRYSFAILED: 4,
        DISCONNECTED: 5,
        DELTA: 6,
        PULL_FALLBACK_ENABLED: 7,
        PULL_FALLBACK_DISABLED: 8,
        PULL_FALLBACK_DATA_RECEIVED: 9,
        PULL_FALLBACK_REQUEST_FAILED: 10
    };
    n.ReaditFlags = {SEND_CLOSE: 1};
    f = function (f) {
        function e() {
            var n = f.call(this) || this;
            return n._connectionListStart = null, n._connectionListEnd = null, n._currentConnectionDetails = null, n._currentTransportMethod = null, n._connectionStatus = t.DISCONNECTED, n._connectionCycleAttempts = 0, n.connectionListCycles = 0, n.pushStatusHandler = null, n.storageId = null, n.delegate_transportConnectedHandler = new r(n, n.transportConnectedHandler), n.delegate_transportConnectionFailedHandler = new r(n, n.transportConnectionFailedHandler), n.delegate_transportDisconnectedHandler = new r(n, n.transportDisconnectedHandler), n.delegate_transportConnectionFailedInvalidSessionHandler = new r(n, n.transportConnectionFailedInvalidSessionHandler), "LongPollStatusHandler"in window ? n.pushStatusHandler = new LongPollStatusHandler : "bet365"in window && "pushStatus"in window.bet365 && (n.pushStatusHandler = new window.bet365.pushStatus.longPollStatus.LongPollStatusHandler), n
        }

        return __extends(e, f), e.prototype.toString = function () {
            return "[ReaditClient]"
        }, e.prototype.addConnectionAttempt = function (n) {
            this._connectionListStart ? (this._connectionListEnd.next = n, this._connectionListEnd = n) : this._connectionListStart = this._connectionListEnd = n
        }, e.prototype.connect = function () {
            this._connectionStatus == t.DISCONNECTED && (this._connectionStatus = t.PENDING, this._connectionCycleAttempts = 0, this._currentConnectionDetails = this._connectionListEnd, this.connectToNext())
        }, e.prototype.close = function (n) {
            if (this._currentTransportMethod) {
                var i = this._currentTransportMethod;
                this.disposeCurrentTransportMethod();
                i.close(n)
            }
            this._connectionStatus = t.DISCONNECTED
        }, e.prototype.connectToNext = function () {
            if (!Locator.config.hasSessionExpired()) {
                if (!this._currentConnectionDetails || !(this._currentConnectionDetails = this._currentConnectionDetails.next)) {
                    if (this.connectionListCycles > 0 && this._connectionCycleAttempts++ == this.connectionListCycles) {
                        n.ReadItLog.Log("Transport connection cycles completed, connection failed");
                        this.close();
                        this.dispatchEvent(new u(n.ReaditConnectionEvent.CONNECTION_FAILED));
                        return
                    }
                    this._currentConnectionDetails = this._connectionListStart
                }
                this.disposeCurrentTransportMethod();
                this._currentTransportMethod = new this._currentConnectionDetails.transportMethod;
                this._currentTransportMethod.addEventListener(i.CONNECTED, this.delegate_transportConnectedHandler);
                this._currentTransportMethod.addEventListener(i.CONNECTION_FAILED, this.delegate_transportConnectionFailedHandler);
                this._currentTransportMethod.addEventListener(i.DISCONNECTED, this.delegate_transportDisconnectedHandler);
                this._currentTransportMethod.addEventListener(i.CONNECTION_FAILED_INVALID_SESSION, this.delegate_transportConnectionFailedInvalidSessionHandler);
                this._currentTransportMethod.setConnectionDetails(this._currentConnectionDetails);
                this._currentTransportMethod.setMessageDispatcher(this);
                this.logPushStatus(String(n.pushConnectionStatusEnum.ATTEMPTINGCONNECTION), this.getCurrentConnectionHost());
                this._currentTransportMethod.storageId = this.storageId;
                this._currentTransportMethod.connect()
            }
        }, e.prototype.disposeCurrentTransportMethod = function () {
            this._currentTransportMethod && (this._currentTransportMethod.removeEventListener(i.CONNECTED, this.delegate_transportConnectedHandler), this._currentTransportMethod.removeEventListener(i.CONNECTION_FAILED, this.delegate_transportConnectionFailedHandler), this._currentTransportMethod.removeEventListener(i.DISCONNECTED, this.delegate_transportDisconnectedHandler), this._currentTransportMethod.removeEventListener(i.CONNECTION_FAILED_INVALID_SESSION, this.delegate_transportConnectionFailedInvalidSessionHandler), this._currentTransportMethod = null)
        }, e.prototype.subscribe = function (n) {
            if (this._connectionStatus == t.CONNECTED)try {
                this._currentTransportMethod.subscribe(n)
            } catch (i) {
                ErrorReporter.Trace(this, i)
            }
        }, e.prototype.unsubscribe = function (n) {
            if (this._connectionStatus == t.CONNECTED)try {
                this._currentTransportMethod.unsubscribe(n)
            } catch (i) {
                ErrorReporter.Trace(this, i)
            }
        }, e.prototype.send = function (n, i) {
            this._connectionStatus == t.CONNECTED && this._currentTransportMethod.send(n, i)
        }, e.prototype.swapSubscription = function (n, i) {
            if (this._connectionStatus == t.CONNECTED)try {
                this._currentTransportMethod.swapSubscription(n, i)
            } catch (r) {
                ErrorReporter.Trace(this, r)
            }
        }, e.prototype.getConnectionID = function () {
            return this._connectionStatus == t.CONNECTED ? this._currentTransportMethod.getConnectionId() : null
        }, e.prototype.getConnected = function () {
            return this._connectionStatus == t.CONNECTED
        }, e.prototype.getConnectionStatus = function () {
            return this._connectionStatus
        }, e.prototype.getTransportSuspended = function () {
            return this._currentTransportMethod && this._currentTransportMethod.suspended
        }, e.prototype.getCurrentConnectionHost = function () {
            return this._currentConnectionDetails ? this._currentConnectionDetails.host : this._connectionListEnd.host
        }, e.prototype.getCurrentConnectionDetails = function () {
            return this._currentTransportMethod.getConnectionDetails()
        }, e.prototype.logPushStatus = function (n, t) {
            try {
                this.pushStatusHandler && this.pushStatusHandler.log(n, 0, t)
            } catch (i) {
            }
        }, e.prototype.transportConnectedHandler = function () {
            this._connectionStatus = t.CONNECTED;
            this.logPushStatus(String(n.pushConnectionStatusEnum.CONNECTED), this.getCurrentConnectionHost());
            this.dispatchEvent(new u(n.ReaditConnectionEvent.CONNECTED))
        }, e.prototype.transportConnectionFailedHandler = function () {
            this.logPushStatus(String(n.pushConnectionStatusEnum.DISCONNECTED), this.getCurrentConnectionHost());
            this.connectToNext()
        }, e.prototype.transportDisconnectedHandler = function () {
            this.close();
            this.logPushStatus(String(n.pushConnectionStatusEnum.DISCONNECTED), this.getCurrentConnectionHost());
            this.dispatchEvent(new u(n.ReaditConnectionEvent.DISCONNECTED))
        }, e.prototype.transportConnectionFailedInvalidSessionHandler = function () {
            this.close();
            this.dispatchEvent(new u(n.ReaditConnectionEvent.CONNECTION_FAILED_INVALID_SESSION))
        }, e
    }(ns_gen5_events.EventDispatcher);
    __decorate([override], f.prototype, "toString");
    n.ReaditClient = f
}(readit || (readit = {})),function (n) {
    var i = ns_gen5_util.Delegate, u = n.ReaditConnectionStatus, r = n.TransportConnectionEvent, t = function (t) {
        function f() {
            var n = t.call(this) || this;
            return n.delegate_transportPullEnabledHandler = new i(n, n._transportPullEnabledHandler), n.delegate_transportPullDisabledHandler = new i(n, n._transportPullDisabledHandler), n.delegate_transportPullDataReceivedHandler = new i(n, n._transportPullDataReceivedHandler), n.delegate_transportPullRequestFailedHandler = new i(n, n._transportPullRequestFailedHandler), n
        }

        return __extends(f, t), f.prototype.toString = function () {
            return "[ReadItFallbackClient]"
        }, f.prototype.connectToNext = function () {
            this._currentTransportMethod === null ? (t.prototype.connectToNext.call(this), this._currentTransportMethod.addEventListener(r.PULL_ENABLED, this.delegate_transportPullEnabledHandler), this._currentTransportMethod.addEventListener(r.PULL_DISABLED, this.delegate_transportPullDisabledHandler), this._currentTransportMethod.addEventListener(r.PULL_DATA_RECEIVED, this.delegate_transportPullDataReceivedHandler), this._currentTransportMethod.addEventListener(r.PULL_REQUEST_FAILED, this.delegate_transportPullRequestFailedHandler)) : this._currentTransportMethod.connect()
        }, f.prototype.connect = function () {
            this._connectionStatus = u.CONNECTED;
            this._connectionCycleAttempts = 0;
            this._currentConnectionDetails = this._connectionListEnd;
            this.connectToNext()
        }, f.prototype.close = function () {
        }, f.prototype.pause = function () {
            this._currentTransportMethod && this._currentTransportMethod.pause()
        }, f.prototype.resume = function () {
            this._currentTransportMethod && this._currentTransportMethod.resume()
        }, f.prototype.updatePollTime = function (n) {
            this._currentTransportMethod && this._currentTransportMethod.updatePollDelay(n)
        }, f.prototype.disableSubscription = function (n) {
            if (this._connectionStatus == u.CONNECTED)try {
                this._currentTransportMethod.disableSubscription(n)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }, f.prototype.disposeCurrentTransportMethod = function () {
        }, f.prototype.logPushStatus = function (i, r) {
            switch (i) {
                case n.pushConnectionStatusEnum.PULL_FALLBACK_ENABLED:
                case n.pushConnectionStatusEnum.PULL_FALLBACK_DISABLED:
                case n.pushConnectionStatusEnum.PULL_FALLBACK_DATA_RECEIVED:
                case n.pushConnectionStatusEnum.PULL_FALLBACK_REQUEST_FAILED:
                    t.prototype.logPushStatus.call(this, i, r)
            }
        }, f.prototype.getCurrentConnectionHost = function () {
            return this._currentConnectionDetails ? window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") + this._currentConnectionDetails.path + "pt" + this._currentConnectionDetails.partition : ""
        }, f.prototype._transportPullEnabledHandler = function () {
            this.logPushStatus(n.pushConnectionStatusEnum.PULL_FALLBACK_ENABLED, this.getCurrentConnectionHost())
        }, f.prototype._transportPullDisabledHandler = function () {
            this.logPushStatus(n.pushConnectionStatusEnum.PULL_FALLBACK_DISABLED, this.getCurrentConnectionHost())
        }, f.prototype._transportPullDataReceivedHandler = function () {
            this.logPushStatus(n.pushConnectionStatusEnum.PULL_FALLBACK_DATA_RECEIVED, this.getCurrentConnectionHost());
            this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.PULL_DATA_RECEIVED))
        }, f.prototype._transportPullRequestFailedHandler = function () {
            this.logPushStatus(n.pushConnectionStatusEnum.PULL_FALLBACK_REQUEST_FAILED, this.getCurrentConnectionHost());
            this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.PULL_REQUEST_FAILED))
        }, f
    }(n.ReaditClient);
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "connectToNext");
    __decorate([override], t.prototype, "connect");
    __decorate([override], t.prototype, "close");
    __decorate([override], t.prototype, "disposeCurrentTransportMethod");
    __decorate([override], t.prototype, "logPushStatus");
    __decorate([override], t.prototype, "getCurrentConnectionHost");
    n.ReaditFallbackClient = t
}(readit || (readit = {})),function (n) {
    var t = function () {
        function n(n, t, i, r, u) {
            this.host = n;
            this.port = t;
            this.transportMethodId = i;
            this.defaultTopic = r;
            this.uid = u;
            this.next = null
        }

        return n.prototype.toString = function () {
            return "[host:" + this.host + ", port:" + this.port + ", topic:" + this.defaultTopic + "]"
        }, n
    }();
    n.ReaditConnectionDetails = t
}(readit || (readit = {})),function (n) {
    var t = function (n) {
        function t(t, i, r, u, f) {
            var e = n.call(this, "", "", r, f, "") || this;
            return e.path = t, e.interval = i, e.transportMethodId = r, e.partition = u, e.defaultTopic = f, e.next = null, e
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[ReaditFallbackConnectionDetails path:" + this.path + ", interval:" + this.interval + ", partition:" + this.partition + "]"
        }, t
    }(n.ReaditConnectionDetails);
    __decorate([override], t.prototype, "toString");
    n.ReaditFallbackConnectionDetails = t
}(readit || (readit = {})),function (n) {
    "use strict";
    var i = 0, r = 1, u = 3, t = 4, f = function () {
        function n() {
            var n = this;
            this.xdr = new XDomainRequest;
            this.xdr.timeout = 6e4;
            this.status = 0;
            this.readyState = i;
            this.responseText = null;
            this.contentType = null;
            this.onreadystatechange = null;
            this.progress_delegate = function () {
                return n._progress()
            };
            this.onload_delegate = function () {
                return n._onload()
            };
            this.onerror_delegate = function () {
                return n._onerror()
            };
            this.ontimeout_delegate = function () {
                return n._timeout()
            }
        }

        return n.TryCreate = function (t) {
            return !("withCredentials"in t) && XDomainRequest ? new n : t
        }, n.prototype._progress = function () {
            this.readyState = u;
            this.onreadystatechange && this.onreadystatechange.call(this)
        }, n.prototype._timeout = function () {
            this.readyState = t;
            this.status = 0;
            this.responseText = null;
            this.contentType = null;
            this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function () {
            };
            this.xdr = undefined;
            this.onreadystatechange && this.onreadystatechange.call(this)
        }, n.prototype._onerror = function () {
            this.readyState = t;
            this.status = 0;
            this.responseText = null;
            this.contentType = null;
            this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function () {
            };
            this.xdr = undefined;
            this.onreadystatechange && this.onreadystatechange.call(this)
        }, n.prototype._onload = function () {
            this.readyState = t;
            this.status = 200;
            this.responseText = this.xdr.responseText;
            this.contentType = this.xdr.contentType;
            this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function () {
            };
            this.xdr = undefined;
            this.onreadystatechange && this.onreadystatechange.call(this)
        }, n.prototype.open = function (n, t) {
            var u = null;
            try {
                u = this.xdr.open(n, t)
            } catch (i) {
                throw{name: i.name, message: i.message, number: i.number};
            }
            return this.xdr.onprogress = this.progress_delegate, this.xdr.ontimeout = this.ontimeout_delegate, this.xdr.onerror = this.onerror_delegate, this.xdr.onload = this.onload_delegate, this.readyState = r, this.onreadystatechange && this.onreadystatechange.call(this), u
        }, n.prototype.send = function (n) {
            this.xdr.send(n)
        }, n.prototype.abort = function () {
            return this.readyState = i, this.onreadystatechange = null, this.xdr.abort()
        }, n
    }();
    n.XDomainXMLHttpRequest = f
}(readit || (readit = {})),function (n) {
    var i = ns_gen5_ui.Application, r = ns_gen5_events.ApplicationEvent, u = ns_gen5_util.Delegate, f = ns_gen5_util.CookieManager, e = {
        L: "1",
        M: "2",
        I: "3"
    }, t = function (t) {
        function o() {
            var n = t.call(this) || this;
            return n._poller = null, n._messageDispatcher = null, n._connectionTimeout = 0, n._url = "", n._requestActive = !1, n._requestQueue = [], n._connectionID = "", n._sID = "", n._sequence = 0, n._connected = !1, n._hasNativeXmlHttp = !1, n._transportIsSupported = n.checkXmlHttpAvailable(), n._activeXVersion = null, n.instanceid = o.count++, n.suspended = !1, n.storageId = null, n.TRAILING = "/pow2/", n.CONNECTION_TIMEOUT_LIMIT = 15e3, n.PUBLISHER_SESSION_TIMEOUT = 9e4, n.TRANSPORT_TIMEOUT = 20, n._delegate_resume = new u(n, n._resume), n
        }

        return __extends(o, t), o.prototype.toString = function () {
            return "[HttpTransportMethod]"
        }, o.prototype.connect = function () {
            var t = this, r, u, e, i, o;
            if (this._transportIsSupported) {
                this._connectionTimeout = setTimeout(function () {
                    t.connectionFailed("timeout after " + t.CONNECTION_TIMEOUT_LIMIT + "ms")
                }, this.CONNECTION_TIMEOUT_LIMIT);
                try {
                    o = this.retrieve();
                    this._connectionID = o[0];
                    this._connectionTimeStamp = o[1];
                    this._url = this._connectionDetails.host + ":" + this._connectionDetails.port + this.TRAILING;
                    this.log("Attempting connection to " + this._url);
                    r = f.GetSessionId();
                    r == null ? this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.CONNECTION_FAILED_INVALID_SESSION)) : (u = function () {
                        var i = t.getRequest({
                            method: n.StandardProtocolConstants.CLIENT_CONNECT,
                            transporttimeout: t.TRANSPORT_TIMEOUT,
                            type: "F",
                            topic: t._connectionDetails.defaultTopic + ",S_" + r
                        });
                        t.log("Connecting with:" + i);
                        i.onreadystatechange = function () {
                            var u;
                            if (i.readyState == 4) {
                                if (clearTimeout(t._connectionTimeout), i.status == 200) {
                                    var f = i.responseText.split(n.StandardProtocolConstants.HANDSHAKE_MESSAGE_DELIM), e = f[0], r = e.split("\x02");
                                    r[0] == "100" && (t.handshakeHandler(r[1]), u = f[1], u && t.processMessage(u));
                                    r[0] == "111" && t.connectionFailed("connection rejected 111")
                                } else t.connectionFailed("Connection Rejected - Invalid response status:" + i.status);
                                i.onreadystatechange = null
                            }
                        };
                        i.send(i.params || "")
                    }, !this.storageId || !this._connectionID || !this._connectionTimeStamp || (new Date).getTime() - this._connectionTimeStamp > this.PUBLISHER_SESSION_TIMEOUT ? u() : (this.clear(), e = !1, i = this.getRequest({
                        method: n.StandardProtocolConstants.CLIENT_CLOSE,
                        s: this._sequence++
                    }), i.onreadystatechange = function () {
                        e || i.readyState !== 4 || (e = !0, i.onreadystatechange = null, u())
                    }, i.send("")))
                } catch (s) {
                    clearTimeout(this._connectionTimeout);
                    this.connectionFailed("Unable to open Socket.")
                }
            } else this.connectionFailed("XML Http Transport not supported.")
        }, o.prototype.subscribe = function (t) {
            this.put(this.getRequest({
                method: n.StandardProtocolConstants.CLIENT_SUBSCRIBE,
                topic: t,
                s: this._sequence++
            }))
        }, o.prototype.unsubscribe = function (t) {
            this.put(this.getRequest({
                method: n.StandardProtocolConstants.CLIENT_UNSUBSCRIBE,
                topic: t,
                s: this._sequence++
            }))
        }, o.prototype.send = function (t, i) {
            this.put(this.getRequest({
                method: n.StandardProtocolConstants.CLIENT_SEND,
                data: encodeURIComponent(i),
                topic: t,
                s: this._sequence++
            }))
        }, o.prototype.swapSubscription = function (t, i) {
            this.put(this.getRequest({
                method: n.StandardProtocolConstants.CLIENT_SWAP_SUBSCRIPTIONS,
                subs: t,
                unsubs: i,
                s: this._sequence++
            }))
        }, o.prototype.close = function (t) {
            t & n.ReaditFlags.SEND_CLOSE && (this.put(this.getRequest({
                method: n.StandardProtocolConstants.CLIENT_CLOSE,
                s: this._sequence++
            })), this.clear());
            this.dispose();
            this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.DISCONNECTED))
        }, o.prototype.setMessageDispatcher = function (n) {
            this._messageDispatcher = n
        }, o.prototype.getConnectionDetails = function () {
            return this._connectionDetails
        }, o.prototype.setConnectionDetails = function (n) {
            this._connectionDetails = n
        }, o.prototype.getConnected = function () {
            return this._connected
        }, o.prototype.connectionFailed = function (t) {
            this.log("http connection (" + this.instanceid + ", " + this._connectionDetails + ") failed - " + t);
            var i = this._connected;
            this.dispose();
            i ? this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.DISCONNECTED)) : this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.CONNECTION_FAILED))
        }, o.prototype.getRequest = function (t) {
            var i, r, u;
            i = this._hasNativeXmlHttp ? n.XDomainXMLHttpRequest.TryCreate(new XMLHttpRequest) : new ActiveXObject(this._activeXVersion);
            try {
                i.open("POST", this._url + (this._connectionID ? "?id=" + this._connectionID : ""));
                this._connectionID && (t.clientid = this._connectionID);
                r = "";
                i.setRequestHeader && i.setRequestHeader("Content-Type", "text/plain");
                for (u in t)r += (r.length > 0 ? "&" : "") + u + "=" + encodeURIComponent(t[u]);
                return i.params = r, i
            } catch (f) {
                ErrorReporter.Trace(this, f)
            }
            return null
        }, o.prototype.put = function (n) {
            var i = this, t;
            if (n !== null && this._requestQueue.push(n), !this._requestActive && !this.suspended && this._connectionID !== "") {
                if (this._requestQueue.length > 0)t = this._requestQueue.shift(); else return;
                this._requestActive = !0;
                t.onreadystatechange = function () {
                    t.readyState == 4 && (t.status == 200 && t.responseText ? i.processMessage(t.responseText) : t.status != 200 && i.connectionFailed("Connection lost during put."), i.queuedRequestCompleteHandler(), t.onreadystatechange = null)
                };
                "params"in t ? t.send(t.params || "") : t.send("")
            }
        }, o.prototype.poll = function () {
            var t = this;
            this._connected && (o.SuspendOnFocusLost && i.currentApplication && i.currentApplication.suspended ? this.suspended || ($log("suspend"), this.suspended = !0, i.currentApplication.addEventListener(r.FOCUS_IN, this._delegate_resume)) : (this._poller = this.getRequest({
                method: n.StandardProtocolConstants.CLIENT_POLL,
                s: this._sequence++,
                topic: ""
            }), this._poller.complete = !1, this._poller.onreadystatechange = function () {
                t._poller.readyState != 4 || t._poller.complete || (t._poller.complete = !0, t._poller.onreadystatechange = null, t._poller.status == 200 ? t.pollerCompleteHandler(t._poller.responseText) : t._connected && t.connectionFailed('Connection lost during poll statusCode:"' + t._poller.status + '" statusText:"' + t._poller.statusText + '"'))
            }, "params"in this._poller ? this._poller.send(this._poller.params || "") : this._poller.send("")))
        }, o.prototype.save = function () {
            this.storageId && this._connectionID && window.safeSessionStorage.setItem(this.storageId, this._connectionID + "|" + (this._connectionTimeStamp = (new Date).getTime()))
        }, o.prototype.clear = function () {
            this.storageId && window.safeSessionStorage.setItem(this.storageId, "")
        }, o.prototype.retrieve = function () {
            var n;
            if (this.storageId && (n = window.safeSessionStorage.getItem(this.storageId), n)) {
                var t = n.split("|"), i = t[0], r = t[1];
                return [i, Number(r)]
            }
            return [null, null]
        }, o.prototype._resume = function () {
            $log("resume");
            i.currentApplication.removeEventListener(r.FOCUS_IN, this._delegate_resume);
            this.suspended = !1;
            this.poll();
            this._requestQueue.length > 0 && this.put(null)
        }, o.prototype.dispose = function () {
            if (this._connected = !1, this._connectionTimeStamp = null, this._connectionID = null, this._poller) {
                try {
                    this._poller.abort()
                } catch (n) {
                }
                this._poller.onreadystatechange = null;
                this._poller = null
            }
            this._messageDispatcher = null;
            clearTimeout(this._connectionTimeout)
        }, o.prototype.checkXmlHttpAvailable = function () {
            try {
                return new XMLHttpRequest, this._hasNativeXmlHttp = !0, !0
            } catch (n) {
            }
            return !1
        }, o.prototype.getConnectionId = function () {
            return this._connected ? this._connectionID : ""
        }, o.prototype.log = function (t) {
            n.ReadItLog.Log(this + " -> " + t)
        }, o.prototype.handshakeHandler = function (t) {
            this._requestActive = !1;
            this._connectionID = t;
            this._connectionDetails.connectionID = t;
            this.save();
            this._sID = t ? e[t.charAt(0).toUpperCase()] || "0" : "0";
            this._connected = !0;
            this.log(this.instanceid + " connected as " + this._connectionID + ". " + this._connectionDetails);
            this.poll();
            this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.CONNECTED))
        }, o.prototype.processMessage = function (t) {
            var r, i, u;
            if (this.save(), t) {
                r = t.split(n.StandardProtocolConstants.MESSAGE_DELIM);
                do {
                    i = r.shift();
                    u = i.charCodeAt(0);
                    switch (u) {
                        case n.StandardProtocolConstants.INITIAL_TOPIC_LOAD:
                        case n.StandardProtocolConstants.DELTA:
                            var f = i.split(n.StandardProtocolConstants.RECORD_DELIM), e = f[0].split(n.StandardProtocolConstants.FIELD_DELIM), o = e.shift(), s = o.substr(1, o.length), h = i.substr(f[0].length + 1);
                            this._messageDispatcher !== null && this._messageDispatcher.dispatchEvent(new n.ReaditMessageEvent(n.ReaditMessageEvent.MESSAGE_RECEIVED, new n.ReaditMessage(String(u), s, h, e)));
                            break;
                        case n.StandardProtocolConstants.CLIENT_ABORT:
                        case n.StandardProtocolConstants.CLIENT_CLOSE:
                            this.connectionFailed("Connection close/abort during poll.")
                    }
                } while (r.length)
            }
        }, o.prototype.pollerCompleteHandler = function (n) {
            var t = this;
            this.processMessage(n);
            this._connected && setTimeout(function () {
                t.poll()
            }, o.pollDelay)
        }, o.prototype.queuedRequestCompleteHandler = function () {
            this._requestActive = !1;
            this._requestQueue.length && this.put(null)
        }, o.prototype.getTransportSuspended = function () {
            return this.suspended
        }, o
    }(ns_gen5_events.EventDispatcher);
    t.SuspendOnFocusLost = !0;
    t.pollDelay = 10;
    t.count = 0;
    __decorate([override], t.prototype, "toString");
    n.HttpTransportMethod = t
}(readit || (readit = {})),function (n) {
    var t = function (n) {
        function t() {
            var t = n.call(this) || this;
            return t.TRAILING = "/pow/", t
        }

        return __extends(t, n), t.IsSupported = function () {
            if (t._isSupported === !1) {
                var n = new XMLHttpRequest;
                t._isSupported = n && "withCredentials"in n
            }
            return t._isSupported
        }, t.prototype.toString = function () {
            return "[HttpTransportMethodLegacy]"
        }, t.prototype.getRequest = function (n) {
            var t, i;
            t = this._hasNativeXmlHttp ? new XMLHttpRequest : new ActiveXObject(this._activeXVersion);
            try {
                t.open("POST", this._url + "?sid=" + (this._sID || "0") + "&rn=" + (this._connectionDetails.uid || "yyy"), !0);
                typeof this._connectionID != "undefined" && (n.clientid = this._connectionID);
                n["Content-Type"] = "text/plain";
                n["Accept-Language"] = " ";
                for (i in n)t.setRequestHeader(i, n[i]);
                return t
            } catch (r) {
                ErrorReporter.Trace(this, r)
            }
            return null
        }, t
    }(n.HttpTransportMethod);
    t._isSupported = !1;
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "getRequest");
    n.HttpTransportMethodLegacy = t
}(readit || (readit = {})),function (n) {
    var i = ns_gen5_ui.Application, r = ns_gen5_events.ApplicationEvent, u = 7e3, t = function (t) {
        function f() {
            var n = t.call(this) || this;
            return n.pollDelay = u, n.paused = !0, n._subscribedTopics = null, n._requestedTopics = [], n._pollerTimer = null, n._enabledTopicCount = 0, n._lastError = null, n.TRAILING = "?", n._subscribedTopics = {}, n
        }

        return __extends(f, t), f.prototype.toString = function () {
            return "[HttpTransportMethodPolling]"
        }, f.prototype.getRequest = function (n) {
            var i, t, r;
            i = this._hasNativeXmlHttp ? new XMLHttpRequest : new ActiveXObject(this._activeXVersion);
            try {
                t = this._url;
                for (r in n)t += r + "=" + encodeURIComponent(n[r]) + "&";
                return t = t.substr(0, t.length - 1), i.open("GET", t, !0), i
            } catch (u) {
                ErrorReporter.Trace(this, u)
            }
            return null
        }, f.prototype.connect = function () {
            this._url = this._connectionDetails.path + this.TRAILING;
            this._connected = !0;
            this.log("Enabled polling from " + this._url + ", poll delay: " + this.pollDelay);
            for (var t in this._subscribedTopics)this._subscribedTopics[t] && (this._subscribedTopics[t].enabled = !0, this._enabledTopicCount++);
            this._pollerTimer === null && this.poll();
            this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.CONNECTED));
            this._enabledTopicCount > 0 && this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.PULL_ENABLED))
        }, f.prototype.close = function () {
            this._connected = !1;
            this.log("Disabled polling from " + this._url);
            this.cancelPoll()
        }, f.prototype.pause = function () {
            this.paused = !0
        }, f.prototype.resume = function () {
            this.paused && (this.paused = !1, this.connect(), this.poll())
        }, f.prototype.put = function () {
        }, f.prototype.poll = function (t) {
            var u = this, f, e;
            if (this._connected && !this.paused)if (i.currentApplication && i.currentApplication.suspended)this.suspended || (this.suspended = !0, i.currentApplication.addEventListener(r.FOCUS_IN, this._delegate_resume)); else {
                if (this.cancelPoll(), f = void 0, t ? (f = t, this._connectionDetails.defaultTopic && (f += ";" + this._connectionDetails.defaultTopic)) : f = this._getTopicList(), f.length === 0)return;
                e = {pt: this._connectionDetails.partition, tl: f};
                Locator.user.countryGroupId && Locator.user.countryGroupId !== "0" && (e.cg = Locator.user.countryGroupId);
                Locator.user.countryStateId && Locator.user.countryStateId !== "0" && (e.cs = Locator.user.countryStateId);
                Locator.user.countryId && Locator.user.countryId !== "0" && (e.ci = Locator.user.countryId);
                this._poller = this.getRequest(e);
                this._poller.complete = !1;
                this._poller.onreadystatechange = function () {
                    u._poller.readyState != 4 || u._poller.complete || (u._poller.complete = !0, u._poller.onreadystatechange = null, u._poller.status == 200 ? (u.pollerCompleteHandler(u._poller.responseText), u._poller = null) : u._poller.status === 400 ? u.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.CONNECTION_FAILED_INVALID_SESSION)) : u._connected && u.connectionFailed('Connection lost during poll statusCode:"' + u._poller.status + '" statusText:"' + u._poller.statusText + '"'))
                };
                this._poller.send("")
            }
        }, f.prototype.subscribe = function (t) {
            for (var i, u = this, f = t.split(","), e = f.length, r = 0; r < e; r++)i = f[r], i = i.replace(/\/\/$/, ""), i = i.substr(i.lastIndexOf("/") + 1, i.length), this._requestedTopics.indexOf(i) == -1 && this._requestedTopics.push(i), this._subscribedTopics[i] || (this._subscribedTopics[i] = {
                receivedCount: 0,
                enabled: !0
            }, this._enabledTopicCount++, this._enabledTopicCount === 1 && this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.PULL_ENABLED)));
            this._requestedTopics.length != 0 && Locator.validationManager.callLater(function () {
                return u.poll(u._requestedTopics.join(";"))
            })
        }, f.prototype.unsubscribe = function (n) {
            for (var t, r = n.split(","), u = r.length, i = 0; i < u; i++)t = r[i], t = t.substr(t.lastIndexOf("/") + 1, t.length), this.disableSubscription(t), this._subscribedTopics[t] && delete this._subscribedTopics[t]
        }, f.prototype.disableSubscription = function (t) {
            t = t.substr(t.lastIndexOf("/") + 1, t.length);
            this._subscribedTopics[t] && this._subscribedTopics[t].enabled && (this._subscribedTopics[t].enabled = !1, this._enabledTopicCount--, this._enabledTopicCount === 0 && this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.PULL_DISABLED)))
        }, f.prototype.connectionFailed = function (t) {
            this.log("Error Polling " + this._url + "  - " + t);
            this._lastError === null && (this._lastError = t, this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.PULL_REQUEST_FAILED)));
            this.queueNextPoll()
        }, f.prototype.pollerCompleteHandler = function (n) {
            this.processMessage(n);
            this.queueNextPoll()
        }, f.prototype.queueNextPoll = function () {
            if (this._connected) {
                this.cancelPoll();
                var n = this;
                this._pollerTimer = setTimeout(function () {
                    n.poll()
                }, this.pollDelay)
            }
        }, f.prototype.cancelPoll = function () {
            if (this._poller && !this._poller.complete) {
                this._poller.onreadystatechange = null;
                try {
                    this._poller.abort()
                } catch (n) {
                }
                this._poller = null
            }
            this._pollerTimer && (clearTimeout(this._pollerTimer), this._pollerTimer = null)
        }, f.prototype.updatePollDelay = function (n) {
            n !== this.pollDelay && (this.pollDelay = n && n >= 4e3 ? n : 4e3, this.queueNextPoll())
        }, f.prototype.processMessage = function (t) {
            var i, f, u, e, o;
            if (t) {
                f = t.split(n.StandardProtocolConstants.MESSAGE_DELIM);
                do {
                    u = f.shift();
                    e = String(u.charCodeAt(0));
                    switch (e) {
                        case String(n.StandardProtocolConstants.INITIAL_TOPIC_LOAD):
                            var s = u.split(n.StandardProtocolConstants.RECORD_DELIM), h = s[0].split(n.StandardProtocolConstants.FIELD_DELIM), c = h.shift(), r = c.substr(1, c.length), l = u.substr(s[0].length + 1);
                            r === "EMPTY" && (o = l.match(/TO=(.*);/), o.length > 1 && this.disableSubscription(o[1]));
                            i = r.substr(r.lastIndexOf("/") + 1, r.length);
                            (this._subscribedTopics[i] && this._subscribedTopics[i].enabled || r === this._connectionDetails.defaultTopic || r === "EMPTY") && (this._requestedTopics.indexOf(i) >= 0 && this._requestedTopics.splice(this._requestedTopics.indexOf(i), 1), this._subscribedTopics[i] && this._subscribedTopics[i].receivedCount++, this._messageDispatcher !== null && this._messageDispatcher.dispatchEvent(new n.ReaditMessageEvent(n.ReaditMessageEvent.MESSAGE_RECEIVED, new n.ReaditMessage(e, r, l, h))), this._subscribedTopics[i] && this._subscribedTopics[i].receivedCount === 1 && this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.PULL_DATA_RECEIVED)))
                    }
                } while (f.length)
            }
        }, f.prototype._getTopicList = function () {
            var t = "", n = [], i, r;
            for (i in this._subscribedTopics)this._subscribedTopics[i] && this._subscribedTopics[i].enabled && n.push(i);
            if (n.length > 0) {
                this._connectionDetails.defaultTopic && n.push(this._connectionDetails.defaultTopic);
                n.sort();
                for (r in n)t += n[r] + ";";
                t = t.substr(0, t.length - 1)
            }
            return t
        }, f
    }(n.HttpTransportMethod);
    __decorate([override], t.prototype, "toString");
    __decorate([override], t.prototype, "getRequest");
    __decorate([override], t.prototype, "connect");
    __decorate([override], t.prototype, "close");
    __decorate([override], t.prototype, "put");
    __decorate([override], t.prototype, "poll");
    __decorate([override], t.prototype, "subscribe");
    __decorate([override], t.prototype, "unsubscribe");
    __decorate([override], t.prototype, "connectionFailed");
    __decorate([override], t.prototype, "pollerCompleteHandler");
    __decorate([override], t.prototype, "processMessage");
    n.HttpTransportMethodPolling = t
}(readit || (readit = {})),function (n) {
    var t = function (t) {
        function i() {
            var n = t.call(this) || this;
            return n._messageDispatcher = null, n._connectionID = "", n._connectionTimeout = 0, n._url = "", n._transportIsSupported = n.checkWebsocketAvailable(), n._socket = null, n._socketReadyState = null, n._connected = !1, n.suspended = !1, n.storageId = null, n.socketOpenHandler = function (t) {
                n.log("Websocket: onopen: " + t.type);
                n.socketConnectCallback()
            }, n.socketErrorHandler = function (t) {
                n.connectionFailed("connection error: " + t.type)
            }, n.socketCloseHandler = function (t) {
                !t.wasClean && t.code && t.code === 1006 ? n.connectionFailed("connection error: " + t.type + " (unable to connect error)") : n.connectionClosed("Websocket: onclosed: " + t.reason)
            }, n.socketMessageHandshakeHandler = function (t) {
                n.handshakeCallback(t.data)
            }, n.socketMessageDataHandler = function (t) {
                n.socketDataCallback(t.data)
            }, n
        }

        return __extends(i, t), i.prototype.toString = function () {
            return "[WebsocketTransportMethod]"
        }, i.prototype.close = function () {
            if (this.getSocketConnected()) {
                var t = "";
                t += String.fromCharCode(n.StandardProtocolConstants.CLIENT_CLOSE);
                t += String.fromCharCode(0);
                this.put(t);
                this._socket.close()
            }
        }, i.prototype.getConnected = function () {
            return this.getSocketConnected() && this._connected
        }, i.prototype.getSocketConnected = function () {
            return this._transportIsSupported && this._socketReadyState == WebSocket.OPEN
        }, i.prototype.setSocketReadyState = function () {
            this._socketReadyState = this._socket && this._socket.readyState ? this._socket.readyState : null;
            this._connected && this._socketReadyState !== WebSocket.OPEN && (this._connected = !1)
        }, i.prototype.connect = function () {
            var n = this;
            if (this._transportIsSupported || this.connectionFailed("Websocket Transport not supported."), this._socket == null) {
                this._connectionTimeout = setTimeout(function () {
                    n.connectionFailed("timeout after " + i.CONNECTION_TIMEOUT_LIMIT + "ms")
                }, i.CONNECTION_TIMEOUT_LIMIT);
                try {
                    this._url = this._connectionDetails.host + ":" + this._connectionDetails.port + i.TRAILING + "?uid=" + this._connectionDetails.uid;
                    this._socket = new WebSocket(this._url, "zap-protocol-v1");
                    this._socket.addEventListener("open", this.socketOpenHandler);
                    this._socket.addEventListener("error", this.socketErrorHandler);
                    this._socket.addEventListener("close", this.socketCloseHandler)
                } catch (t) {
                    this.connectionFailed("Unable to open Socket. Error: " + t)
                }
            }
        }, i.prototype.socketConnectCallback = function () {
            var t = this, n;
            this.clearConnectionTimeout();
            this.setSocketReadyState();
            this.getSocketConnected() ? (this._socket.addEventListener("message", this.socketMessageHandshakeHandler), n = this.getHandshakeData(), n ? (this._socket.send(n), this._connectionTimeout = setTimeout(function () {
                t.connectionFailed("timeout after " + i.HANDSHAKE_TIMEOUT_LIMIT + "ms")
            }, i.HANDSHAKE_TIMEOUT_LIMIT)) : this.close()) : this.connectionFailed("not connected")
        }, i.prototype.handshakeCallback = function (t) {
            var u = t.split(n.StandardProtocolConstants.HANDSHAKE_MESSAGE_DELIM), f = u[0], r = f.split(n.StandardProtocolConstants.FIELD_DELIM);
            if (this._socket.removeEventListener("message", this.socketMessageHandshakeHandler), this.clearConnectionTimeout(), r[0] == i.HANDSHAKE_STATUS_CONNECTED)this.setSocketReadyState(), this._connected = !0, this._connectionID = r[1], this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.CONNECTED)), this.log("Websocket connected as " + this._connectionID + ". " + this._connectionDetails); else {
                if (r[0] == i.HANDSHAKE_STATUS_REJECTED) {
                    this.connectionFailed("connection rejected " + i.HANDSHAKE_STATUS_REJECTED);
                    return
                }
                this.connectionFailed("connection rejected - unrecognised response");
                return
            }
            this._socket.addEventListener("message", this.socketMessageDataHandler)
        }, i.prototype.socketDataCallback = function (t) {
            var u, r, i;
            try {
                if (t) {
                    u = t.split(n.StandardProtocolConstants.MESSAGE_DELIM);
                    do {
                        r = u.shift();
                        i = r.charCodeAt(0);
                        switch (i) {
                            case n.StandardProtocolConstants.INITIAL_TOPIC_LOAD:
                            case n.StandardProtocolConstants.DELTA:
                                var f = r.split(n.StandardProtocolConstants.RECORD_DELIM), e = f[0].split(n.StandardProtocolConstants.FIELD_DELIM), o = e.shift(), s = o.substr(1, o.length), h = r.substr(f[0].length + 1);
                                this._messageDispatcher !== null && this._messageDispatcher.dispatchEvent(new n.ReaditMessageEvent(n.ReaditMessageEvent.MESSAGE_RECEIVED, new n.ReaditMessage(String(i), s, h, e)));
                                break;
                            case n.StandardProtocolConstants.CLIENT_ABORT:
                            case n.StandardProtocolConstants.CLIENT_CLOSE:
                                this.connectionFailed("Connection close/abort message type sent from publisher. Message type: " + i);
                                break;
                            default:
                                this.log("Unrecognised message type sent from publisher: " + i)
                        }
                    } while (u.length)
                }
            } catch (c) {
                this.log(c.toString())
            }
        }, i.prototype.subscribe = function (t) {
            var i = "";
            i += String.fromCharCode(n.StandardProtocolConstants.CLIENT_SUBSCRIBE);
            i += String.fromCharCode(n.StandardProtocolConstants.NONE_ENCODING);
            i += t;
            i += n.StandardProtocolConstants.RECORD_DELIM;
            this.put(i)
        }, i.prototype.unsubscribe = function (t) {
            var i = "";
            i += String.fromCharCode(n.StandardProtocolConstants.CLIENT_UNSUBSCRIBE);
            i += String.fromCharCode(n.StandardProtocolConstants.NONE_ENCODING);
            i += t;
            i += n.StandardProtocolConstants.RECORD_DELIM;
            this.put(i)
        }, i.prototype.swapSubscription = function (n, t) {
            this.unsubscribe(t);
            this.subscribe(n)
        }, i.prototype.send = function (t, i) {
            var r = "";
            r += String.fromCharCode(n.StandardProtocolConstants.CLIENT_SEND);
            r += String.fromCharCode(n.StandardProtocolConstants.NONE_ENCODING);
            r += t;
            r += n.StandardProtocolConstants.RECORD_DELIM;
            r += i;
            this.put(r)
        }, i.prototype.put = function (n) {
            try {
                if (this.getSocketConnected())this._socket.send(n); else throw new Error("socket not connected");
            } catch (t) {
                this.connectionFailed("WebSocket: put:" + t)
            }
        }, i.prototype.getHandshakeData = function () {
            var t = "", r;
            return (t += String.fromCharCode(i.HANDSHAKE_PROTOCOL), t += String.fromCharCode(i.HANDSHAKE_VERSION), t += String.fromCharCode(i.HANDSHAKE_CONNECTION_TYPE), t += String.fromCharCode(i.HANDSHAKE_CAPABILITIES_FLAG), this._connectionDetails.defaultTopic != null && (t += this._connectionDetails.defaultTopic + ","), r = ns_gen5_util.CookieManager.GetSessionId(), r == null) ? (this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.CONNECTION_FAILED_INVALID_SESSION)), null) : (t += "S_" + r, t + String.fromCharCode(0))
        }, i.prototype.checkWebsocketAvailable = function () {
            return "WebSocket"in window
        }, i.prototype.getConnectionId = function () {
            return this._connectionID
        }, i.prototype.getConnectionDetails = function () {
            return this._connectionDetails
        }, i.prototype.setConnectionDetails = function (n) {
            this._connectionDetails = n
        }, i.prototype.setMessageDispatcher = function (n) {
            this._messageDispatcher = n
        }, i.prototype.log = function (t) {
            n.ReadItLog.Log(this + " -> " + t)
        }, i.prototype.clearConnectionTimeout = function () {
            this._connectionTimeout && (clearTimeout(this._connectionTimeout), this._connectionTimeout = null)
        }, i.prototype.connectionFailed = function (t) {
            if (this.log("Websocket connection (" + this._connectionDetails + ") failed - " + t), this.clearConnectionTimeout(), this.getConnected()) {
                this.connectionClosed("connection failed");
                return
            }
            this.setSocketReadyState();
            this.dispose();
            this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.CONNECTION_FAILED))
        }, i.prototype.connectionClosed = function (t) {
            this.log("Websocket connection (" + this._connectionDetails + ") closed - " + t);
            this.clearConnectionTimeout();
            this.setSocketReadyState();
            this.dispose();
            this.dispatchEvent(new n.TransportConnectionEvent(n.TransportConnectionEvent.DISCONNECTED))
        }, i.prototype.dispose = function () {
            this.close();
            this._socket && (this._socket.removeEventListener("open", this.socketOpenHandler), this._socket.removeEventListener("close", this.socketCloseHandler), this._socket.removeEventListener("error", this.socketErrorHandler), this._socket.removeEventListener("message", this.socketMessageDataHandler), this._socket.removeEventListener("message", this.socketMessageHandshakeHandler), this._socket = null)
        }, i
    }(ns_gen5_events.EventDispatcher);
    t.TRAILING = "/zap/";
    t.CONNECTION_TIMEOUT_LIMIT = 15e3;
    t.HANDSHAKE_TIMEOUT_LIMIT = 15e3;
    t.HANDSHAKE_PROTOCOL = 35;
    t.HANDSHAKE_VERSION = 3;
    t.HANDSHAKE_CONNECTION_TYPE = 80;
    t.HANDSHAKE_CAPABILITIES_FLAG = 1;
    t.HANDSHAKE_STATUS_CONNECTED = "100";
    t.HANDSHAKE_STATUS_REJECTED = "111";
    __decorate([override], t.prototype, "toString");
    n.WebsocketTransportMethod = t
}(readit || (readit = {})),function (n) {
    var r = readit.StandardProtocolConstants, f = ns_gen5_events.BalanceModelEvent, e = ns_gen5_config.PushedConfigPropertyChangeEvent, o = ns_gen5_data.PrivateSubscriptionManagerEvent, l = ns_gen5_events.EventDispatcher, t = n.MathUtil, s = ns_gen5_net.Loader, i = ns_gen5_net.LoaderEvent, h = ns_gen5_events.Event365, a = ns_gen5_net.URLVariables, u = n.InfoReporter, c = "SPTBK", v = "rn", y = function (l) {
        function y() {
            var t = l.call(this) || this;
            return t._subscriptionsInitializedDelegate = null, t._pushBalanceFlagChangeDelegate = null, t._pushBalanceReceivedDelegate = null, t._pullBalanceReceivedDelegate = null, t._pullBalanceErrorDelegate = null, t._subscriptionsInitializedDelegate = new n.Delegate(t, t.loadBalance), t._pushBalanceFlagChangeDelegate = new n.Delegate(t, t.pushBalanceFlagChangeHandler), t._pushBalanceReceivedDelegate = new n.Delegate(t, t.pushBalanceReceivedHandler), t._pullBalanceReceivedDelegate = new n.Delegate(t, t.pullBalanceReceivedHandler), t._pullBalanceErrorDelegate = new n.Delegate(t, t.pullBalanceErrorHandler), t
        }

        return __extends(y, l), y.prototype.load = function (n) {
            this._sessionToken = n;
            Locator.pushedConfig.getArePropertiesInitialised() ? this.loadBalance() : Locator.pushedConfig.addEventListener(e.PROPERTIES_INITIALISED, this._subscriptionsInitializedDelegate)
        }, y.prototype.loadBalance = function () {
            this.pushBalanceEnabled = Locator.pushedConfig.getIsPushBalanceEnabled();
            this.isItalianDomain && this.loadPullBalance();
            this.loadPushBalance();
            Locator.pushedConfig.addEventListener(e.PUSH_BALANCE_ENABLED_AVAILABLE, this._pushBalanceFlagChangeDelegate)
        }, y.prototype.refreshBalance = function () {
            this._sessionToken && ((!this.pushBalanceEnabled || this.isItalianDomain) && this.loadPullBalance(), this.pushBalanceEnabled && this.refreshPushBalance())
        }, y.prototype.calculateTotalBalance = function (n) {
            this.pushBalanceEnabled || (this.totalBalance = (t.StringToNumber(this.totalBalance) - this.formatCurrencyNoCulture(n.toString())).toFixed(2), this.dispatchEvent(new h(f.BALANCEMODEL_UPDATE_EVENT)))
        }, y.prototype.formatCurrencyNoCulture = function (n) {
            return n ? t.StringToNumber(n.split(Locator.user.currencyDecimalSeparator).join(".")) : 0
        }, y.prototype.pushBalanceFlagChangeHandler = function () {
            this.pushBalanceEnabled = Locator.pushedConfig.getIsPushBalanceEnabled();
            this.pushBalanceEnabled ? this.loadPushBalance() : (Locator.privateSubscriptionManager.removeEventListener(o.BALANCE_RECEIVED, this._pushBalanceReceivedDelegate), this._balanceListenerAdded = !1)
        }, y.prototype.pushBalanceReceivedHandler = function (n) {
            u.Trace(u.PUSH_MESSAGE_CONNECTION_ENTRY, "Push balance received: " + n.message);
            n.message.charAt(0) == "D" ? this.loadPushBalance() : this.pushBalanceEnabled = this.updateBalanceInfo(n.message)
        }, y.prototype.pullBalanceReceivedHandler = function (n) {
            u.Trace(u.PUSH_MESSAGE_CONNECTION_ENTRY, "Pull balance received: " + n.data);
            this._urlLoader.removeEventListener(i.COMPLETE, this._pullBalanceReceivedDelegate);
            this._urlLoader.removeEventListener(i.ERROR, this._pullBalanceErrorDelegate);
            this.updateBalanceInfo(n.data)
        }, y.prototype.pullBalanceErrorHandler = function () {
            this._urlLoader.removeEventListener(i.COMPLETE, this._pullBalanceReceivedDelegate);
            this._urlLoader.removeEventListener(i.ERROR, this._pullBalanceErrorDelegate)
        }, y.prototype.loadPushBalance = function () {
            if (this.pushBalanceEnabled) {
                this._balanceListenerAdded || (Locator.privateSubscriptionManager.addEventListener(o.BALANCE_RECEIVED, this._pushBalanceReceivedDelegate), this._balanceListenerAdded = !0);
                var n = "getBalance" + r.RECORD_DELIM + this._sessionToken + r.FIELD_DELIM + c;
                Locator.privateSubscriptionManager.send("command", n)
            }
        }, y.prototype.loadPullBalance = function () {
            this._urlLoader || (this._urlLoader = new s);
            var n = new a;
            n.addPair(v, (new Date).getTime() + "");
            this._urlLoader.addEventListener(i.COMPLETE, this._pullBalanceReceivedDelegate);
            this._urlLoader.addEventListener(i.ERROR, this._pullBalanceErrorDelegate);
            this._urlLoader.load(this.pullBalancePath, {method: s.GET, urlVariables: n})
        }, y.prototype.refreshPushBalance = function () {
            if (this.pushBalanceEnabled) {
                this.loadPushBalance();
                var n = "refresh" + r.RECORD_DELIM + this._sessionToken + r.FIELD_DELIM + c;
                Locator.privateSubscriptionManager.send("command", n)
            }
        }, y.prototype.updateBalanceInfo = function (n) {
            var i = n.split("$"), u = !1, r = i.length;
            return r > 1 && i[1].length > 0 ? (this.totalBalance = t.StringToNumber(i[1]).toFixed(2), this.withdrableBalance = t.StringToNumber(i[2]).toFixed(2), this.bonusBalance = t.StringToNumber(i[3]).toFixed(2), this.stakeRollover = t.StringToNumber(i[4]).toFixed(2), this.stakeRolloverRequirement = t.StringToNumber(i[5]).toFixed(2), this.depositRollover = t.StringToNumber(i[6]).toFixed(2), this.depositRolloverRequirement = t.StringToNumber(i[7]).toFixed(2), this.italianSportsWithdrableBalance = t.StringToNumber(i[8]).toFixed(2), this.italianSportsNonWithdrableBalance = t.StringToNumber(i[9]).toFixed(2), r == 11 && (this.gamingBalance = t.StringToNumber(i[10]).toFixed(2)), this.isItalianDomain && r > 11 && i[11] === "1" && this.refreshBalance(), this.dispatchEvent(new h(f.BALANCEMODEL_UPDATE_EVENT)), u = !0) : this.pushBalanceEnabled = !1, u
        }, y
    }(l);
    n.BalanceModel = y
}(ns_gen5_util || (ns_gen5_util = {})),function (n) {
    var t = function () {
        function n() {
            this._betSlipInterface = null
        }

        return n.prototype.toString = function () {
            return "[BetSlipManager]"
        }, n.prototype.getBetCount = function () {
            return this._betSlipInterface.GetBetCount()
        }, n.prototype.setBetSlipInterface = function (n) {
            this._betSlipInterface = n
        }, n.prototype.addBet = function (n, t) {
            n && this._betSlipInterface && this._betSlipInterface.AddBet && this._betSlipInterface.AddBet({
                item: n,
                Target: t
            })
        }, n.prototype.deleteBet = function (n) {
            n && this._betSlipInterface && this._betSlipInterface.DeleteBet && this._betSlipInterface.DeleteBet({ConstructString: n.constructString})
        }, n.prototype.isSelected = function (n) {
            return n && this._betSlipInterface && this._betSlipInterface.IsSelected ? this._betSlipInterface.IsSelected({Id: n}) : !1
        }, n.prototype.isSelectedEditBet = function (n) {
            return n && this._betSlipInterface && this._betSlipInterface.isSelectedEditBet ? this._betSlipInterface.isSelectedEditBet({Id: n}) : !1
        }, n
    }();
    n.BetSlipManager = t
}(ns_betslip || (ns_betslip = {})),function (n) {
    var t = function () {
        function n() {
        }

        return n.SetConstructOnBetItem = function (n) {
            var t, i = "#", r = "x", u = "|", f = "pom=Y", e;
            return t = "pt=" + n.partType + i, t += "o=" + n.odds + i, t += "f=" + n.fixtureID + i, t += "fp=" + n.participantID + i, t += "so=" + i, t += "c=" + n.classificationID + i, t += n.handicap.length > 0 ? "ln=" + n.handicap + i : "", n.betsource && (t += "mt=" + n.betsource + i), e = n.oddsTypeOverride ? r + n.oddsTypeOverride.toString() + r + n.decimalPlaces : "", n.subscribe && (t += u + "TP=BS" + n.participantID + e + i), n.pom && n.pom === "1" && (t += n.subscribe ? f + i : u + f + i), t += n.toteCombination ? "atc=" + n.toteCombination + i : "", n.constructString = t, n
        }, n
    }();
    n.BetConstructor = t
}(ns_betslip || (ns_betslip = {})),function (n) {
    var t = function (n) {
        function t(t) {
            var i = n.call(this, t) || this;
            return i.data = null, i
        }

        return __extends(t, n), t.prototype.toString = function () {
            return "[BetSlipEvent type=" + this.type + "]"
        }, t
    }(ns_gen5_events.Event365);
    t.PARTICIPANT_REMOVED_FROM_BETSLIP = "participantRemovedFromBetSlip";
    t.PARTICIPANT_ADDED_TO_BETSLIP = "participantAddedToBetslip";
    t.TOTE_COMBINATION_CHANGED = "totecombinationchanged";
    t.BETCALL_CONNECTED = "betCallConnected";
    __decorate([override], t.prototype, "toString");
    n.BetSlipEvent = t
}(ns_betslip || (ns_betslip = {})),function (n) {
    var v = ns_gen5_events.Event365, i = ns_gen5_util.Delegate, y = readit.ReaditClient, p = readit.ReaditFallbackClient, h = readit.HttpTransportMethod, w = readit.HttpTransportMethodLegacy, b = readit.HttpTransportMethodPolling, k = readit.WebsocketTransportMethod, r = readit.ReaditConnectionEvent, e = readit.ReaditMessageEvent, c = n.DataUtil, u = n.DataMessageType, d = n.FixtureStem, ut = n.Attribute, t = n.StreamDataProcessorEvent, o = ns_gen5_util.Timer, s = ns_gen5_util.TimerEvent, g = ns_gen5_events.ApplicationEvent, nt = ns_gen5_ui.Application, f = ns_gen5_util.InfoReporter, tt = {
        "0": null,
        "1": w,
        "2": h,
        "3": k
    }, it = !0, l = 1e4, rt = 9900, a = function (n) {
        function a() {
            var t = n.call(this) || this;
            return t._retryInterval = 0, t._connectedPublisher = null, t._reconnected = !1, t._idleTime = 8e4, t._idleTimerID = -1, t._reConnectTimer = null, t._connectionAttempts = 0, t._applicaitonUnloading = !1, t._subscriptionTimeoutTimer = null, t._allowFallbackConnection = !0, t.canDebouncePVCN = !0, t.storageId = null, t._serverConnection = null, t._fallbackServerConnection = null, t._pendingConnect = !1, t._initialized = !1, t._subscriptionTimeoutTopic = null, t._subscriptionQueue = [], t._sendQueue = [], t.delegate_serverConnectHandler = new i(t, t._serverConnectHandler), t.delegate_serverDataHandler = new i(t, t._serverDataHandler), t.delegate_applicationUnloadingHandler = new i(t, t._applicationUnloadingHandler), t.delegate_pullDataReceivedHandler = new i(t, t._pullDataReceivedHandler), t.delegate_pullRequestFailedHandler = new i(t, t._pullRequestFailedHandler), t.delegate_connectionFailedInvalidSessionHandler = new i(t, t._connectionFailedInvalidSessionHandler), t.callback_idleTimerHandler = function () {
                return t._idleTimerHandler()
            }, t
        }

        return __extends(a, n), a.prototype.toString = function () {
            return "[StreamDataProcessor]"
        }, a.prototype.getConnectionDetails = function () {
            return Locator.config.getConnectionDetails()
        }, a.prototype.getfallbackConnectionDetails = function () {
            return Locator.config.getFallbackConnectionDetails()
        }, a.prototype.connect = function () {
            var t, i, u, r, n, f;
            if (this._initialized || this._initialize(), !this._pendingConnect) {
                for (this.closeConnection(this._serverConnection), this._pendingConnect = !0, t = this._serverConnection = new y, t.storageId = this.storageId, t.connectionListCycles = 1, i = 0, u = this.getConnectionDetails(); i < u.length; i++)r = u[i], r.transportMethod = tt[r.transportMethodId] || h, t.addConnectionAttempt(r);
                this.openConnection(t);
                n = this._fallbackServerConnection;
                Locator.config.fallbackConnectionEnabled() && !n && this._allowFallbackConnection && (n = this._fallbackServerConnection = new p, n.connectionListCycles = 0, f = this.getfallbackConnectionDetails(), f.transportMethod = b, n.addConnectionAttempt(f), n.addEventListener(e.MESSAGE_RECEIVED, this.delegate_serverDataHandler), n.addEventListener(readit.TransportConnectionEvent.PULL_DATA_RECEIVED, this.delegate_pullDataReceivedHandler), n.addEventListener(readit.TransportConnectionEvent.PULL_REQUEST_FAILED, this.delegate_pullRequestFailedHandler), n.addEventListener(readit.TransportConnectionEvent.CONNECTION_FAILED_INVALID_SESSION, this.delegate_connectionFailedInvalidSessionHandler), n.connect())
            }
        }, a.prototype.close = function (n) {
            this.closeConnection(this._serverConnection, n)
        }, a.prototype.openConnection = function (n) {
            n && (n.addEventListener(r.CONNECTED, this.delegate_serverConnectHandler), n.addEventListener(r.DISCONNECTED, this.delegate_serverConnectHandler), n.addEventListener(r.CONNECTION_FAILED, this.delegate_serverConnectHandler), n.addEventListener(r.CONNECTION_FAILED_INVALID_SESSION, this.delegate_connectionFailedInvalidSessionHandler), n.addEventListener(e.MESSAGE_RECEIVED, this.delegate_serverDataHandler), n.connect())
        }, a.prototype.closeConnection = function (n, t) {
            if (n) {
                n.hasEventListener(r.CONNECTED) && (n.removeEventListener(r.CONNECTED, this.delegate_serverConnectHandler), n.removeEventListener(r.DISCONNECTED, this.delegate_serverConnectHandler), n.removeEventListener(r.CONNECTION_FAILED, this.delegate_serverConnectHandler), n.removeEventListener(r.CONNECTION_FAILED_INVALID_SESSION, this.delegate_connectionFailedInvalidSessionHandler), n.removeEventListener(e.MESSAGE_RECEIVED, this.delegate_serverDataHandler));
                try {
                    n.close(t)
                } catch (i) {
                }
            }
        }, a.prototype._fallbackSubscribe = function (n) {
            var i, r, t;
            if (this._fallbackServerConnection)if (n.indexOf(",") > -1)for (i = n.split(","), r = i.length, t = 0; t < r; t++)this._fallbackServerConnection.subscribe(i[t]); else this._fallbackServerConnection.subscribe(n)
        }, a.prototype.subscribe = function (n, t) {
            var r, u;
            t || this._fallbackSubscribe(n);
            this._serverConnection && this._serverConnection.getConnected() ? n && (n.length > rt ? (r = n.indexOf(",", n.length / 2), this.subscribe(n.slice(0, r)), this.subscribe(n.slice(r + 1))) : (this._serverConnection.subscribe(n), this._subscriptionTimeoutTimer || (u = n.split(",")[0], this._subscriptionTimeoutTimer = new o(l), this._subscriptionTimeoutTimer.addEventListener(s.COMPLETE, new i(this, this._subscriptionTimeoutHandler)), this._subscriptionTimeoutTimer.start(), this._subscriptionTimeoutTopic = u))) : this._subscriptionQueue.push(n)
        }, a.prototype.unsubscribe = function (n) {
            var r, u, t, i, f;
            if (this._fallbackServerConnection)if (n.indexOf(",") > -1)for (r = n.split(","), u = r.length, t = 0; t < u; t++)this._fallbackServerConnection.unsubscribe(r[t]); else this._fallbackServerConnection.unsubscribe(n);
            i = this._subscriptionQueue;
            i.length && (f = i.indexOf(n)) > -1 && i.splice(f, 1);
            this._serverConnection && this._serverConnection.getConnected() && this._serverConnection.unsubscribe(n)
        }, a.prototype.send = function (n, t) {
            this._serverConnection && this._serverConnection.getConnected() ? this._serverConnection.send(n, t) : this._sendQueue.push({
                topic: n,
                message: t
            })
        }, a.prototype.swapSubscriptions = function (n, t) {
            if (t && this._fallbackServerConnection && this._fallbackServerConnection.unsubscribe(t), n && this._fallbackSubscribe(n), this._serverConnection.getConnected()) {
                if (this._serverConnection.swapSubscription(n, t), !this._subscriptionTimeoutTimer && n) {
                    var r = n.split(",")[0];
                    this._subscriptionTimeoutTimer = new o(l);
                    this._subscriptionTimeoutTimer.addEventListener(s.COMPLETE, new i(this, this._subscriptionTimeoutHandler));
                    this._subscriptionTimeoutTimer.start();
                    this._subscriptionTimeoutTopic = r
                }
            } else this._subscriptionQueue.push(n)
        }, a.prototype._initialize = function () {
            nt.currentApplication.addEventListener(g.UNLOADING, this.delegate_applicationUnloadingHandler);
            this._initialized = !0
        }, a.prototype._resetIdleTimer = function () {
            clearTimeout(this._idleTimerID);
            this._idleTimerID = setTimeout(this.callback_idleTimerHandler, this._idleTime)
        }, a.prototype._processSubscriptionQueue = function () {
            if (this._subscriptionQueue.length > 0)try {
                this._serverConnection.subscribe(this._subscriptionQueue.join(","));
                this._subscriptionQueue.length = 0
            } catch (n) {
                ErrorReporter.Trace(this, n)
            }
            while (this._sendQueue.length > 0)this.send(this._sendQueue[0].topic, this._sendQueue.shift().message)
        }, a.prototype._connectionFailedInvalidSessionHandler = function () {
            f.Trace(f.PUSH_MESSAGE_CONNECTION_ENTRY, "Failed on invalid session");
            this._allowFallbackConnection = !1;
            this.close();
            this._fallbackServerConnection && this._fallbackServerConnection.close();
            this.dispatchEvent(new t(t.CONNECTION_FAILED_INVALID_SESSION))
        }, a.prototype._serverConnectHandler = function (n) {
            var u, r;
            this._pendingConnect = !1;
            DEBUG && $log(n, this._serverConnection.getConnected());
            this._serverConnection.getConnected() ? (this._retryInterval = 0, this._connectedPublisher = this._serverConnection.getConnectionID(), this._connectedPublisher = this._connectedPublisher.substring(0, this._connectedPublisher.indexOf("-")), this.dispatchEvent(new t(t.CONNECTED, this._serverConnection.getCurrentConnectionDetails())), this._reconnected ? (this._subscriptionQueue.length = 0, this.dispatchEvent(new t(t.SERVER_RECONNECT))) : this._reconnected = !0, this._resetIdleTimer(), this._processSubscriptionQueue()) : (this._connectedPublisher = "not connected.", u = this._fallbackServerConnection, !this._reconnected && u && u.resume(), this._serverConnection.logPushStatus(readit.pushConnectionStatusEnum.ALLRETRYSFAILED, this._serverConnection.getCurrentConnectionHost()), r = void 0, this._reconnected ? this.dispatchEvent(new t(t.RECONNECT_FAILED, this._connectionAttempts)) : (r = new t(t.CONNECTION_FAILED, this._connectionAttempts), this.dispatchEvent(r), r.retry = !0, r.retry || (this._subscriptionQueue.length = 0)), (this._reconnected || r && r.retry) && (this._applicaitonUnloading || (this._retryInterval = Math.min(this._retryInterval += 5e3, 1e4), this._reConnectTimer ? this._reConnectTimer.time = this._retryInterval : (this._reConnectTimer = new o(this._retryInterval), this._reConnectTimer.addEventListener(s.COMPLETE, new i(this, this._reConnectHandler))), DEBUG && $log("reconnect in", this._retryInterval), this._reConnectTimer.reset(), this._reConnectTimer.start()), this._idleTimerID > -1 && clearTimeout(this._idleTimerID)), this._connectionAttempts++)
        }, a.prototype._applicationUnloadingHandler = function () {
            this._applicaitonUnloading = !0
        }, a.prototype._serverDataHandler = function (n) {
            var t = this;
            Locator.validationManager.callLater(function () {
                return t._serverDataHandler_later(n)
            });
            Number(n.message.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD && this.canDebouncePVCN && (this.canDebouncePVCN = !1, setTimeout(function () {
                t.canDebouncePVCN = !0;
                Locator.validationManager.processValidationCycleNow()
            }, 0))
        }, a.prototype._serverDataHandler_later = function (n) {
            var o, a, i, h, r, e, p;
            this._resetIdleTimer();
            o = n.message;
            a = o.getMessage();
            Number(o.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD ? (i = o.getTopic(), n.currentTarget === this._serverConnection && (this._fallbackServerConnection && (this._fallbackServerConnection.disableSubscription(i), this._fallbackServerConnection.pause()), this._subscriptionTimeoutTopic === i && this._resetSubscriptionTimeoutTimer())) : (i = o.getBaseTopic(), this._serverConnection.logPushStatus(readit.pushConnectionStatusEnum.DELTA, this._serverConnection.getCurrentConnectionHost()));
            var g = !!Locator.treeLookup.getReference(i), y = Number(o.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD && g, b = y ? c.ParseMergeMessage(a, i) : c.ParseMessage(a, i), nt = b.length;
            for (h = 0; h < nt; h++) {
                var s = b[h], l = s.type, tt = s.item;
                if (y && (i = s.topic), r = void 0, s.info && (e = s.info, p = e.TI, p && Locator.timeManager.setServerTime(p), e && "PD"in e && this._fallbackServerConnection.updatePollTime(parseFloat(e.PD) * 1e3), i == "EMPTY" && e.TO && (f.Trace(f.EMPTY_TOPIC_ENTRY, "Empty topic " + e.TO), i = e.TO, this._subscriptionTimeoutTopic && (this._subscriptionTimeoutTopic === i || this._subscriptionTimeoutTopic.lastIndexOf("/") > -1 && this._subscriptionTimeoutTopic.substring(this._subscriptionTimeoutTopic.lastIndexOf("/") + 1) == i) && this._resetSubscriptionTimeoutTimer(), r = Locator.treeLookup.getReference(i), r && r.remove()), this.dispatchEvent(new t(t.INFO_UPDATED, e))), l == u.SNAPSHOT)this.dispatchEvent(new v(i)); else if (l == u.UPDATE)r = Locator.treeLookup.getReference(i), r && r.update(tt); else if (l == u.INSERT) {
                    var w = y ? i : o.getTopic(), k = w.lastIndexOf("/"), it = w.lastIndexOf("/", k - 1) + 1, rt = w.slice(it, k);
                    r = Locator.treeLookup.getReference(rt);
                    r && r.insert(s, s.nodeType == "EV" ? d : null)
                } else l == u.DELETE && (r = Locator.treeLookup.getReference(i), r && r.remove())
            }
        }, a.prototype._resetSubscriptionTimeoutTimer = function () {
            this._subscriptionTimeoutTimer.stop();
            this._subscriptionTimeoutTimer = null;
            this._subscriptionTimeoutTopic = null
        }, a.prototype._idleTimerHandler = function () {
            DEBUG && $log("StreamDataProcessor.idleTimeout => idleTimeout, TransportSuspended:" + this._serverConnection.getTransportSuspended());
            this._serverConnection.getTransportSuspended() || (this.close(), this.connect())
        }, a.prototype._reConnectHandler = function () {
            DEBUG && $log("StreamDataProcessor.reconnect");
            this.connect()
        }, a.prototype._pullDataReceivedHandler = function () {
            it && this.dispatchEvent(new t(t.PULL_DATA_RECEIVED))
        }, a.prototype._pullRequestFailedHandler = function () {
            this.dispatchEvent(new t(t.PULL_REQUEST_FAILED))
        }, a.prototype._subscriptionTimeoutHandler = function () {
            DEBUG && $log("_subscriptionTimeoutHandler");
            !this._reconnected && this._fallbackServerConnection && this._fallbackServerConnection.resume();
            this.closeConnection(this._serverConnection)
        }, a
    }(ns_gen5_events.EventDispatcher);
    __decorate([override], a.prototype, "toString");
    n.StreamDataProcessor = a
}(ns_gen5_data || (ns_gen5_data = {})),function (n) {
    var r = n.StreamDataProcessor, t = n.PrivateStreamDataProcessorEvent, i = function (n) {
        function i() {
            var t = n.call(this) || this;
            return t.storageId = "PrivateConnectionDetails", t
        }

        return __extends(i, n), i.prototype.getConnectionDetails = function () {
            return Locator.config.getPrivateConnectionDetails()
        }, i.prototype.getfallbackConnectionDetails = function () {
            return Locator.config.getPrivateFallbackConnectionDetails()
        }, i.prototype._serverDataHandler_later = function (i) {
            var r = i.message.topic, u = r.substr(r.lastIndexOf("_") + 1);
            switch (u) {
                case"BAL":
                    this.dispatchEvent(new t(t.BALANCE_RECEIVED, i.message));
                    break;
                case"MSG":
                    this.dispatchEvent(new t(t.PUSH_MESSAGE_RECEIVED, i.message));
                    break;
                default:
                    n.prototype._serverDataHandler_later.call(this, i)
            }
        }, i
    }(r);
    __decorate([override], i.prototype, "getConnectionDetails");
    __decorate([override], i.prototype, "getfallbackConnectionDetails");
    __decorate([override], i.prototype, "_serverDataHandler_later");
    n.PrivateStreamDataProcessor = i
}(ns_gen5_data || (ns_gen5_data = {}));
Locator = function () {
    function n() {
    }

    return n
}();
Locator.treeLookup = new ns_gen5_data.TreeLookup;
Locator.subscriptionManager = function () {
    var n = new ns_gen5_data.SubscriptionManager;
    return n.setStreamDataProcessor(new ns_gen5_data.StreamDataProcessor), n.setPullDataProcessor(new ns_gen5_data.PullDataProcessor), n
}();
Locator.privateSubscriptionManager = function () {
    var n = new ns_gen5_data.PrivateSubscriptionManager;
    return n.setStreamDataProcessor(new ns_gen5_data.PrivateStreamDataProcessor), n
}();
Locator.validationManager = new ns_gen5_validation.ValidationManager;
Locator.betSlipManager = new ns_betslip.BetSlipManager;
Locator.timeManager = new ns_gen5_util.TimeManager;
Locator.manifestManager = new ns_gen5_util.ManifestManager(window.sportsUIManifest);
Locator.user = new ns_gen5_data.User;
Locator.languageResource = new ns_gen5_language.Resource;
Locator.pushedConfig = new ns_gen5_config.PushedConfigManager;
Locator.inplayEvents = new ns_gen5_events.EventDispatcher;
Locator.participantEvents = new ns_gen5_events.EventDispatcher;
Locator.otsReport = new ns_gen5_util.OTSReport;
Locator.serverPreferenceManager = new ns_gen5_util.ServerPreferenceManager, function (n) {
    var t = function () {
        function t() {
            this._suspended = !1;
            this._suspendChanged = !0
        }

        return t.prototype.toString = function () {
            return "[BetItem]"
        }, t.prototype.updateItem = function () {
            n.BetConstructor.SetConstructOnBetItem(this)
        }, t
    }();
    n.BetItem = t
}(ns_betslip || (ns_betslip = {})), function () {
    var n = {};
    RegisterCompiledAsset = function (t, i) {
        t = t.toLowerCase();
        n[t] = i
    };
    GetCompiledAsset = function (t) {
        return t = t.toLowerCase(), n[t]
    }
}();
!function (n) {
    "use strict";
    function i(n, t) {
        function i(n) {
            return this && this.constructor === i ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = t, void(n && y.call(this, n))) : new i(n)
        }

        return n.constructor = i, i.prototype = n, i
    }

    function y(n) {
        this.add ? n.forEach(this.add, this) : n.forEach(function (n) {
            this.set(n[0], n[1])
        }, this)
    }

    function r(n) {
        var i, u, r;
        if (this.has(n))for (this._keys.splice(t, 1), this._values.splice(t, 1), i = 0, u = this._itp.length; u > i; i++)r = this._itp[i], t < r[0] && r[0]--;
        return t > -1
    }

    function o(n) {
        if (this.has(n))return this._values[t]
    }

    function s(n, i) {
        if (this.objectOnly && i !== Object(i))throw new TypeError("Invalid value used as weak collection key");
        if (i != i || 0 === i)for (t = n.length; t-- && !k(n[t], i);); else t = n.indexOf(i);
        return t > -1
    }

    function h(n) {
        return s.call(this, this._values, n)
    }

    function c(n) {
        return s.call(this, this._keys, n)
    }

    function l(n, i) {
        return this.has(n) ? this._values[t] = i : this._values[this._keys.push(n) - 1] = i, this
    }

    function a(n) {
        return this.has(n) || this._values.push(n), this
    }

    function u() {
        (this._keys || 0).length = this._values.length = 0
    }

    function p() {
        return f(this._itp, this._keys)
    }

    function e() {
        return f(this._itp, this._values)
    }

    function w() {
        return f(this._itp, this._keys, this._values)
    }

    function b() {
        return f(this._itp, this._values, this._values)
    }

    function f(n, t, i) {
        var r = [0], u = !1;
        return n.push(r), {
            next: function () {
                var e, f = r[0];
                return !u && f < t.length ? (e = i ? [t[f], i[f]] : t[f], r[0]++) : (u = !0, n.splice(n.indexOf(r), 1)), {
                    done: u,
                    value: e
                }
            }
        }
    }

    function v(n, t) {
        for (var i, r = this.entries(); ;) {
            if (i = r.next(), i.done)break;
            n.call(t, i.value[1], i.value[0], this)
        }
    }

    var t, k = (Object.defineProperty, function (n, t) {
        return isNaN(n) ? isNaN(t) : n === t
    });
    "undefined" == typeof WeakMap && (n.WeakMap = i({"delete": r, clear: u, get: o, has: c, set: l}, !0));
    "undefined" != typeof Map && "function" == typeof(new Map).values && (new Map).values().next || (n.Map = i({
        "delete": r,
        has: c,
        get: o,
        set: l,
        keys: p,
        values: e,
        entries: w,
        forEach: v,
        clear: u
    }));
    "undefined" != typeof Set && "function" == typeof(new Set).values && (new Set).values().next || (n.Set = i({
        has: h,
        add: a,
        "delete": r,
        clear: u,
        keys: e,
        values: e,
        entries: b,
        forEach: v
    }));
    "undefined" == typeof WeakSet && (n.WeakSet = i({"delete": r, add: a, clear: u, has: h}, !0))
}("undefined" != typeof exports && "undefined" != typeof global ? global : window);
ns_gen5_net.ModuleLoaderDefault.ModuleResourceLookup = {
    MobLib: {loadCSS: !0, loadLanguage: !1},
    MyBetsLib: {loadCSS: !1, loadLanguage: !1},
    TestHarness: {
        loadCSS: !0,
        deployAssets: ["index.html", "test.js", "web-application.css", "assets/fonts/bet365UI.eot", "modernizr.js"]
    },
    MyBetsModule: {loadCSS: !0, loadLanguage: !0},
    HeaderModule: {loadCSS: !0, loadLanguage: !0},
    SidebarModule: {loadCSS: !0},
    StatGraphModule: {loadCSS: !0},
    MatchLiveSoccerModule: {loadCSS: !0, loadLanguage: !0},
    MatchLiveBasketballModule: {loadCSS: !0, loadLanguage: !0},
    MatchLiveHandballModule: {loadCSS: !0, loadLanguage: !0},
    MatchLiveTennisModule: {loadCSS: !0, loadLanguage: !0},
    MatchLiveRugbyLeagueModule: {loadCSS: !0, loadLanguage: !0},
    MatchLiveRugbyUnionModule: {loadCSS: !0, loadLanguage: !0},
    MatchLiveVolleyballModule: {loadCSS: !0, loadLanguage: !0},
    MatchLiveWaterPoloModule: {loadCSS: !0, loadLanguage: !0},
    MatchLiveIceHockeyModule: {loadCSS: !0, loadLanguage: !0},
    MatchLiveCricketModule: {loadCSS: !0, loadLanguage: !0},
    BettingBannersModule: {loadCSS: !0},
    AusRaceCardModule: {loadCSS: !0, loadLanguage: !0},
    RaceRibbonModule: {loadCSS: !0},
    ApplePayModule: {loadCSS: !1},
    MemberMenuModule: {loadCSS: !0, loadLanguage: !0},
    PromotedCouponsModule: {loadCSS: !0},
    HeroOfferModule: {loadCSS: !0},
    StatsTableModule: {loadCSS: !0, loadLanguage: !0},
    KnockoutTreeModule: {loadCSS: !0, loadLanguage: !0},
    FeaturedFixtureModule: {loadCSS: !0},
    HorseRacingMarketsModule: {loadCSS: !0, loadLanguage: !1},
    QuickBetModule: {loadCSS: !0, loadLanguage: !0},
    EditBetModule: {loadCSS: !0, loadLanguage: !0},
    GamingLinksModule: {loadCSS: !0, loadLanguage: !1},
    InstantGamesModule: {loadCSS: !0, loadLanguage: !1},
    SearchModule: {loadCSS: !0, loadLanguage: !0},
    PasscodeModule: {loadCSS: !0, loadLanguage: !0},
    EditBetAdvertModule: {loadCSS: !0, loadLanguage: !0},
    QuickBetcallModule: {loadCSS: !0, loadLanguage: !0},
    BetCallModule: {loadCSS: !1, loadLanguage: !1}
}