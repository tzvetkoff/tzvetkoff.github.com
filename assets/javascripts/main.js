(function() {
  var
    required = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    current = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  var on = 'addEventListener' in document ? function(object, event, func) {
    object.addEventListener(event, func, false);
  } : function(object, event, func) {
    object.attachEvent('on' + event, func);
  };

  var load = function() {
    if ( !(function(){try{return!!document.createEvent('TouchEvent')}catch(e){}})() ) {
      on(window, 'keyup', function(event) {
        current.push(event.keyCode ? event.keyCode : event.which);
        current.shift();

        if (current >= required && current <= required) {

          if (!document.getElementById('super-mario')) {
            var element = document.createElement('div'), style = element.style;
            style.position = 'fixed';
            if (window.innerWidth >= 1850) {
              style.left = '32px';
              style.top = '80px';
            } else {
              style.left = '50%';
              style.top = '50%';
              style.marginLeft = '-200px';
              style.marginTop = '-300px';
            }
            style.padding = '20px';
            style.background = '#f4f4f4';
            style.border = '2px solid #808080';
            style.borderRadius = '5px';
            style.boxShadow = '5px 5px 5px #c0c0c0, -5px -5px 5px #c0c0c0, -5px 5px 5px #c0c0c0, 5px -5px 5px #c0c0c0';
            element.id = 'super-mario';
            element.innerHTML = '<h1 style="margin-bottom: 20px;">Hi!<span style="float: right; cursor: pointer;" onmouseover="this.style.color=\'#000000\';" onmouseout="this.style.color=\'#57534a\'" onclick="document.getElementById(\'super-mario\').parentNode.removeChild(document.getElementById(\'super-mario\'));">&times;</span></h1><pre style="font: normal 13px/9px Menlo, monospace; text-align: center; color: #333333;">────────────────────────────────────────\n──────────────────────▒████▒────────────\n───────────────────░█████▓███░──────────\n─────────────────░███▒░░░░░░██──────────\n────────────────▒██▒░░░▒▓▓▓▒░██─────────\n───────────────▓██░░░▒▓█▒▒▒▓▒▓█─────────\n──────────────▓█▓─░▒▒▓█─────▓▓█░────────\n─────────────▓█▒░▒▒▒▒█──▓▓▒▒─▓█▒────────\n────────────▒█▒░▒▒▒▒▓▒─▒▓▒▓▓─▒█░────────\n────────────█▓░▒▒▒▒▒▓░─▓▒──░░▒█░────────\n───────────██░▒▒▒▒▒▒█──▓──░▓████████────\n──────────░█▒▒▒▒▒▒▒▒▓░─█▓███▓▓▓▓██─█▓───\n────────▒▓█▓▒▒▒▒▒▒▒▒▓███▓▓████▓▓██──█───\n──────░███▓▒▒▒▒▓▒▒▒████▒▒░░──████░──██░─\n──────██▒▒▒▒▒▒▒▒▒▓██▒────────▒██▓────▓█─\n─────▓█▒▒▒▒▒▒▒▒▓█▓─────▓───▒░░▓──▓────▓█\n─────██▒▓▒▒▒▒▒█▓──────▒█▓──▓█░▒──▒░────█\n─────██▒▒▓▓▓▒█▓▓───░──▓██──▓█▓▓▓█▓─────█\n─────▓█▒██▓▓█▒▒▓█─────░█▓──▒░───░█▓────█\n─────░██▓───▓▓▒▒▓▓─────░─────────▒▒─░─░█\n──────▓█──▒░─█▒▓█▓──▒───────░─░───█▒──█▒\n───────█──░█░░█▓▒──▓██▒░─░─░─░─░░░█▒███─\n───────█▒──▒▒──────▓██████▓─░░░░─▒██▓░──\n───────▓█──────────░██▓▓▓██▒─░──░█▒─────\n────────██▒─────░───░██▓▓▓██▓▒▒▓█▒──────\n─────────░████▒──░───▒█▓▓▓▓▓████▓───────\n────────▒▓██▓██▒──░───▓█████▓███────────\n──────▒██▓░░░░▓█▓░────░█▒█▒─▒▓█▓────────\n─────▓█▒░░▒▒▒▒▒▓███▓░──▓█▒─▒▓▓█─────────\n────░█▒░▒████▓██▓▓▓██▒───░▓█▓█░─────────\n────▓█▒▒█░─▒───▓█▓▓▓▓▓▓▒▒▓█▓█▓──────────\n────▓█▒█░───────██▓▓▓▓▓█▓▓█▓██──────────\n────▒█▓▓────────░██▓██▓▓▓▓▓▓▓▓█─────────\n─────██░────▓▓────█░─█▓▓▓▓▓▓▓─▒█████────\n─────██░───░──────▓░─▓▓▓▓▓▓▓█─▒█▒░▒██───\n────▓█░▓░──▓▓────▒█░─█▓▓▓▓▓▓▓█▒─░░░▒██──\n────█─▒██─░──────████▓▓▓▓▓▓▓█▓─░▒▒█▓▓█░─\n───▓█─▓▒▓▒░░────▓█▓▓▓▓▓▓▓▓▓▓█░░▒▓█░──▒█─\n───▒█░█▒▒█▒───░▓█▓▓▓▓▓▓▓▓▓▓█▓░▒▓▓──▓█▓█─\n───█▓▒▓▒▒▓██████▓▓▓▓▓▓▓▓▓▓▓█▒▒▓▓─░█▓▒▒█░\n───█░▓▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▓─▒█▒▒▒▒█─\n──▒█─█▒▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓─▒█▒▒▒▒██─\n──▓█─█▒▒▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▓▒░█▒▒▒░▓█──\n──▓█─█▒▓▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▒▓░▓░░░░▒█░──\n──▒█─▓▓▓▓▒▓█▓▓▓▓▓▓▓▓█████▓▓▓▓▒▓░░─▒█▒───\n───█▒▓▓▓▓▓▒▓██████████░░██▓█─▒█▓▒▓█░────\n───▓█▒█▓▓▓▓▒▓██░─░▒░─────██▒░▓▓▓▒██─────\n────████▓▓▓██░───────────▓█░▓▒░░▓█░─────\n──────░█████░─────────────██▓─▒██░──────\n───────────────────────────▓███▒────────\n</pre>';
            document.body.appendChild(element);
          }
        }
      });
    }

    var elements = document.getElementsByTagName('a');
    for (var i = 0, length = elements.length; i < length; ++i) {
      var element = elements[i];

      if (element.className.indexOf('no-leet') == -1) {
        if (!element.dataset) {
          element.dataset = {};
        }

        element.dataset.text = element.textContent ? element.textContent : element.innerText;

        (function(element) {
          on(element, 'mouseover', function() {
            var text = element.dataset.text;
            text = text.replace(/o/gi, '0')
                       .replace(/l/g, '1')
                       .replace(/\+/i, '-')
                       .replace(/s/gi, '5')
                       .replace(/t/gi, '7')
                       .replace(/i/gi, '1')
                       .replace(/a/gi, '4')
                       .replace(/e/gi, '3');

            if (element.textContent) {
              element.textContent = text;
            } else {
              element.innerText = text;
            }
          });

          on(element, 'mouseout', function() {
            var text = element.dataset.text;

            if (element.textContent) {
              element.textContent = text;
            } else {
              element.innerText = text;
            }
          });
        })(element);
      }
    }
  };

  on(window, 'load', load);
})();
