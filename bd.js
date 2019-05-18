
    function go() {
        var airreg = document.getElementById('airreg').value; //entry.682932748
        var flight = document.getElementById('flight').value; //entry.2084349327
        var parking = document.getElementById('parking').value; //entry.1847357766
        var dataString =
            'entry.1860290205=' + 'GO'
            + '&entry.682932748=' + airreg
            + '&entry.2084349327=' + flight
            + '&entry.1847357766=' + parking;

        $.ajax({
            type: "post",
            url: "https://docs.google.com/forms/d/e/1FAIpQLScETTr3ZW0tRlk3vbLYPujC0dgdUQ4QfE4uvwVYethK-PNs-g/formResponse",
            data: dataString,
            cache: false,
            success: false
        });

        $(document).on("click", "#go_tombol", function () {
            var button = $(this);
            button.prop("disabled", true);
            button.addClass('btn btn-secondary').removeClass('btn btn-warning');
        });
        return false;
    }
    function cpon() {
        var airreg = document.getElementById('airreg').value; //entry.682932748
        var flight = document.getElementById('flight').value; //entry.2084349327
        var parking = document.getElementById('parking').value; //entry.1847357766
        var dataString =
            'entry.1860290205=' + 'CP ON'
            + '&entry.682932748=' + airreg
            + '&entry.2084349327=' + flight
            + '&entry.1847357766=' + parking;

        $.ajax({
            type: "post",
            url: "https://docs.google.com/forms/d/e/1FAIpQLScETTr3ZW0tRlk3vbLYPujC0dgdUQ4QfE4uvwVYethK-PNs-g/formResponse",
            data: dataString,
            cache: false,
            success: false

        });

        $(document).on("click", "#cpon_tombol", function () {
            var button = $(this);
            button.prop("disabled", true);
            button.addClass('btn btn-secondary').removeClass('btn btn-warning');
        });
        return false;

    }
    function cpready() {
        var airreg = document.getElementById('airreg').value; //entry.682932748
        var flight = document.getElementById('flight').value; //entry.2084349327
        var parking = document.getElementById('parking').value; //entry.1847357766
        var dataString =
            'entry.1860290205=' + 'CP READY'
            + '&entry.682932748=' + airreg
            + '&entry.2084349327=' + flight
            + '&entry.1847357766=' + parking;

        $.ajax({
            type: "post",
            url: "https://docs.google.com/forms/d/e/1FAIpQLScETTr3ZW0tRlk3vbLYPujC0dgdUQ4QfE4uvwVYethK-PNs-g/formResponse",
            data: dataString,
            cache: false,
            success: false
        });

        $(document).on("click", "#cpready_tombol", function () {
            var button = $(this);
            button.prop("disabled", true);
            button.addClass('btn btn-secondary').removeClass('btn btn-warning');
        });
        return false;
    }
    function ifeok() {
        var airreg = document.getElementById('airreg').value; //entry.682932748
        var flight = document.getElementById('flight').value; //entry.2084349327
        var parking = document.getElementById('parking').value; //entry.1847357766
        var dataString =
            'entry.1860290205=' + 'IFE OK'
            + '&entry.682932748=' + airreg
            + '&entry.2084349327=' + flight
            + '&entry.1847357766=' + parking;

        $.ajax({
            type: "post",
            url: "https://docs.google.com/forms/d/e/1FAIpQLScETTr3ZW0tRlk3vbLYPujC0dgdUQ4QfE4uvwVYethK-PNs-g/formResponse",
            data: dataString,
            cache: false,
            success: false
        });

        $(document).on("click", "#ifeok_tombol", function () {
            var button = $(this);
            button.prop("disabled", true);
            button.addClass('btn btn-secondary').removeClass('btn btn-warning');
        });
        return false;
    }
    function bording() {
        var airreg = document.getElementById('airreg').value; //entry.682932748
        var flight = document.getElementById('flight').value; //entry.2084349327
        var parking = document.getElementById('parking').value; //entry.1847357766
        var dataString =
            'entry.1860290205=' + 'PAX BOARDING'
            + '&entry.682932748=' + airreg
            + '&entry.2084349327=' + flight
            + '&entry.1847357766=' + parking;

        $.ajax({
            type: "post",
            url: "https://docs.google.com/forms/d/e/1FAIpQLScETTr3ZW0tRlk3vbLYPujC0dgdUQ4QfE4uvwVYethK-PNs-g/formResponse",
            data: dataString,
            cache: false,
            success: false
        });

        $(document).on("click", "#bording_tombol", function () {
            var button = $(this);
            button.prop("disabled", true);
            button.addClass('btn btn-secondary').removeClass('btn btn-warning');
        });
        return false;
    }
    function doorclsd() {
        var airreg = document.getElementById('airreg').value; //entry.682932748
        var flight = document.getElementById('flight').value; //entry.2084349327
        var parking = document.getElementById('parking').value; //entry.1847357766
        var dataString =
            'entry.1860290205=' + 'DOOR CLOSED'
            + '&entry.682932748=' + airreg
            + '&entry.2084349327=' + flight
            + '&entry.1847357766=' + parking;

        $.ajax({
            type: "post",
            url: "https://docs.google.com/forms/d/e/1FAIpQLScETTr3ZW0tRlk3vbLYPujC0dgdUQ4QfE4uvwVYethK-PNs-g/formResponse",
            data: dataString,
            cache: false,
            success: false
        });

        $(document).on("click", "#doorclosed_tombol", function () {
            var button = $(this);
            button.prop("disabled", true);
            button.addClass('btn btn-secondary').removeClass('btn btn-warning');
        });
        return false;
    }
    function remarkss() {
        var airreg = document.getElementById('airreg').value; //entry.682932748
        var flight = document.getElementById('flight').value; //entry.2084349327
        var parking = document.getElementById('parking').value; //entry.1847357766
        var remark = document.getElementById('remark').value;

        var dataString =
            'entry.1860290205=' + 'REMARKS'
            + '&entry.682932748=' + airreg
            + '&entry.2084349327=' + flight
            + '&entry.1847357766=' + parking
            + '&entry.1527144799=' + remark;

        $.ajax({
            type: "post",
            url: "https://docs.google.com/forms/d/e/1FAIpQLScETTr3ZW0tRlk3vbLYPujC0dgdUQ4QfE4uvwVYethK-PNs-g/formResponse",
            data: dataString,
            cache: false,
            success: alert("Sudah Disampaikan ke Pak DIC, Keep Calm")
        });

        return false;
    }
