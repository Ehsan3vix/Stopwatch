function Stopwatch() {
    var time = 0;
    var interval;
    var offset;

    function update() {
        time += delta();
    };
    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    };
    function timeFormetter() {};

    this.isOn = false;
    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update, 10);
            offset = Date.now();
            this.isOn = true;
        }
    };
    this.stop = function() {
        clearInterval(interval);
        interval = null;
        this.isOn = false;
    };
    this.reset = function() {
        time = 0;
    };
}