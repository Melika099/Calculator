    function getDisplay() {
      return document.getElementById('display');
    }

    function appendValue(value) {
      getDisplay().value += value;
    }

    function clearDisplay() {
      getDisplay().value = '';
    }

    function deleteLast() {
      const display = getDisplay();
      display.value = display.value.slice(0, -1);
    }

    function calculate() {
      const display = getDisplay();
      try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
      } catch {
        display.value = 'Error';
      }
    }