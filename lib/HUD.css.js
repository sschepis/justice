(function () {
    // HUD.css
    var cssText = "" +
"/*\n" +
"rgb(65, 155, 163); // light blue default color\n" +
"\n" +
"rgb(30, 38, 40); // dark green bg\n" +
"\n" +
"rgb(233, 243, 242); // off white ?\n" +
"\n" +
"rgb(139, 47, 34); // rusty orange, wrong\n" +
"\n" +
"rgb(241, 250, 195); // light yellow\n" +
"\n" +
"rgb(36, 36, 36); // sublte grey, graph lines\n" +
"\n" +
"*/\n" +
".HUD {\n" +
"  position: fixed;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  right: 0;\n" +
"  background: #1c1c22;\n" +
"  padding: 0 10px 10px 10px;\n" +
"  box-sizing: border-box;\n" +
"  font-size: 12px;\n" +
"  font-family: monospace;\n" +
"  display: flex;\n" +
"  flex-flow: row wrap;\n" +
"  justify-content: space-between;\n" +
"  z-index: 2147483647; }\n" +
"  @media (min-width: 1235px) {\n" +
"    .HUD {\n" +
"      padding-bottom: 10px; } }\n" +
"  .HUD .HUD-metric {\n" +
"    height: 40px;\n" +
"    color: #f1fac3;\n" +
"    width: 150px;\n" +
"    display: inline-block;\n" +
"    display: flex;\n" +
"    align-items: center;\n" +
"    margin-top: 10px; }\n" +
"    .HUD .HUD-metric.chart {\n" +
"      width: 300px; }\n" +
"  .HUD .HUD-title {\n" +
"    text-transform: uppercase;\n" +
"    padding: 3px 1.5em 3px 3px;\n" +
"    color: #dfdfdf; }\n" +
"  .HUD .HUD-text {\n" +
"    color: #419ba3; }\n" +
"\n" +
"/*# sourceMappingURL=HUD.css.map */\n" +
"";
    // cssText end

    var styleEl = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText
        } catch(e) {
            styleEl.innerText = cssText;
        }
    }
}());