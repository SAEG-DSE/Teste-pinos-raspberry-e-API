it('opens a pin with out', function (done) {
  mock({
    '/sys/class/gpio/gpio23/direction': ''
  });

  gpio.open(16, 'out', function () {
    const direction = fs.readFileSync('/sys/class/gpio/gpio23/direction').toString();

    should(direction).equal('out');

    done();
  });
});