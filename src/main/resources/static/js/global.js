﻿const throttle = (t,n)=>{
    let s, o, e;
    return function() {
        const i = this
            , a = arguments;
        s ? (clearTimeout(o),
            o = setTimeout(function() {
                Date.now() - e >= n && (t.apply(i, a),
                    e = Date.now())
            }, Math.max(n - (Date.now() - e), 0))) : (t.apply(i, a),
            e = Date.now(),
            s = !0)
    }
}
    , delayTime = 420;
window.addEventListener('DOMContentLoaded', t=>{
        const e = document.querySelector('.header');
        if (e) {
            const t = window.getComputedStyle(e, null).getPropertyValue('height');
            document.documentElement.style.setProperty('--header-height', t)
        }
    }
    , {
        once: !0
    }),
    window.addEventListener("DOMContentLoaded", l=>{
            const t = document.querySelector('.nav-toggle')
                , s = document.createElement('div');
            s.className = 'nav-toggle-inner',
                t.appendChild(s);
            for (let e = 0; e < 3; e++) {
                const t = document.createElement('span');
                s.appendChild(t)
            }
            const n = document.getElementById('nav-toggle')
                , e = document.querySelector('.header')
                , o = document.querySelector('.nav-curtain');
            n.addEventListener('change', n=>{
                    n.target.checked ? (e.classList.add('open'),
                        t.classList.add('open'),
                        e.classList.remove('fade'),
                        o.style = 'display: block') : (e.classList.remove('open'),
                        t.classList.remove('open'),
                        e.classList.add('fade'))
                }
            ),
                o.addEventListener('animationend', e=>{
                        n.checked || e.target.removeAttribute('style')
                    }
                ),
                window.addEventListener('scroll', throttle(function() {
                    c()
                }, delayTime));
            const a = window.getComputedStyle(document.documentElement, null).getPropertyValue('--max-width');
            let r = window.matchMedia(`(max-width: ${a})`);
            r.addListener(e=>{
                    e.matches || i(!0)
                }
            );
            function c() {
                const e = document.getElementById('search-input');
                if (e && e === document.activeElement)
                    return;
                i()
            }
            function i(s) {
                n.checked && (n.checked = !1,
                    e.classList.remove('open'),
                    t.classList.remove('open'),
                    s ? o.removeAttribute("style") : e.classList.add('fade'))
            }
        }
        , {
            once: !0
        }),
    window.addEventListener("DOMContentLoaded", t=>{
            const e = document.getElementById('back-to-top');
            e !== null && window.addEventListener('scroll', throttle(function() {
                window.scrollY > 100 ? e.classList.add('show') : e.classList.remove('show')
            }, delayTime))
        }
        , {
            once: !0
        });
const userPrefers = localStorage.getItem('theme');
userPrefers === 'dark' ? changeModeMeta('dark') : userPrefers === 'light' && changeModeMeta('light'),
    window.matchMedia('(prefers-color-scheme: dark)').addListener(e=>{
            changeMode()
        }
    ),
    window.addEventListener("DOMContentLoaded", t=>{
            changeMode();
            const e = document.getElementById('theme-switcher');
            e && e.addEventListener('click', e=>{
                    e.preventDefault(),
                        getCurrentTheme() == "dark" ? changeModeMeta('light') : changeModeMeta('dark'),
                        changeMode(),
                        storePrefers()
                }
            )
        }
        , {
            once: !0
        }),
    window.addEventListener('storage', function(e) {
        if (e.key !== 'theme')
            return;
        e.newValue === 'dark' ? changeModeMeta('dark') : changeModeMeta('light'),
            changeMode()
    });
function getCurrentTheme() {
    return JSON.parse(window.getComputedStyle(document.documentElement, null).getPropertyValue("--theme-name"))
}
function changeModeMeta(e) {
    document.documentElement.setAttribute('data-theme', e)
}
function changeMode() {
    const e = getCurrentTheme() === 'dark'
        , t = e ? '#16171d' : '#fff';
    if (document.querySelector('meta[name="theme-color"]').setAttribute('content', t),
    typeof mermaidConfig != 'undefined') {
        const t = document.querySelectorAll('.mermaid');
        t.forEach(e=>{
                e.getAttribute('data-processed') ? (e.removeAttribute('data-processed'),
                    e.innerHTML = e.getAttribute('data-graph')) : e.setAttribute('data-graph', e.textContent)
            }
        ),
            e ? (mermaidConfig.theme = 'dark',
                mermaid.initialize(mermaidConfig),
                mermaid.init()) : (mermaidConfig.theme = 'default',
                mermaid.initialize(mermaidConfig),
                mermaid.init())
    }
}
function storePrefers() {
    window.localStorage.setItem('theme', getCurrentTheme())
}
window.addEventListener("DOMContentLoaded", s=>{
        const e = '复制'
            , n = '已复制';
        document.querySelectorAll('.post-body > pre').forEach(e=>{
                let t = document.createElement('div');
                e.parentNode.replaceChild(t, e),
                    t.appendChild(e)
            }
        );
        function t(t) {
            const s = document.querySelectorAll('table.lntable, .highlight > pre, .post-body > div > pre');
            s.forEach(o=>{
                    o.parentNode.style.position = 'relative';
                    const s = document.createElement('button');
                    if (s.className = 'copy-button',
                        s.type = 'button',
                        s.innerText = e,
                        o.classList.contains('lntable'))
                        var i = o.querySelectorAll('.lntd')[1];
                    else
                        i = o.querySelector('code');
                    s.addEventListener('click', ()=>{
                            t.writeText(i.innerText).then(()=>{
                                    s.blur(),
                                        s.innerText = n,
                                        setTimeout(()=>{
                                                s.innerText = e
                                            }
                                            , 1e3)
                                }
                            ).catch(e=>{
                                    s.innerText = 'Error',
                                        console.error(e)
                                }
                            )
                        }
                    ),
                        o.appendChild(s),
                        o.parentNode.addEventListener('mouseover', ()=>{
                                s.style = 'visibility: visible; opacity: 1'
                            }
                        ),
                        o.parentNode.addEventListener('mouseout', ()=>{
                                s.style = 'visibility: hidden; opacity: 0'
                            }
                        )
                }
            )
        }
        if (navigator && navigator.clipboard)
            t(navigator.clipboard);
        else {
            const e = document.createElement('script');
            e.src = 'https://cdn.jsdelivr.net/npm/clipboard-polyfill@2.8.6/dist/clipboard-polyfill.min.js',
                e.defer = !0,
                e.onload = function() {
                    t(clipboard)
                }
                ,
                document.head.appendChild(e)
        }
    }
    , {
        once: !0
    })
