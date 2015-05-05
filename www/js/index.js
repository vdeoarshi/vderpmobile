var app = {
    init: function() {
		console.log("here");
        if(localStorage.server) {
            app.setup_login();
        } else {
            $(".div-select-server").removeClass("hide");
        }
        app.bind_events();
    },
    bind_events: function() {
        $(".btn-select-server").on("click", function() {
            // check if erpnext / frappe server
            var server = app.get_server_value();

            if(server) {
                $.ajax(server + "/api/method/version")
                    .success(function(data) {
                        if(data.message) {
                            localStorage.server = server;
                            app.setup_login();
                        } else {
                            app.retry_server();
                        }
                    })
                    .error(function() {
                        app.retry_server();
                    });
            }
            return false;
        });
    },
    get_server_value: function() {
        var server = $("#server").val();
        if(!server) {
            app.retry_server();
            return false;
        }

        if(server.substr(0, 7)!== "http://" && server.substr(0, 7)!== "https://") {
            server = "https://" + server;
        }

        // remove trailing slashes
        return server.replace(/(http[s]?:\/\/[^/]*)(.*)/, "$1");
    },
    setup_login: function() {
        $(".div-select-server").addClass("hide");
        $(".div-login").removeClass("hide");
    },
    retry_server: function() {
        frappe.msgprint("Does not seem like a valid server address. Please try again.");
        $(".div-select-server").removeClass("hide");
        $(".div-login").addClass("hide");
        $("#server").val("");
    }
};

document.addEventListener('deviceready', app.init, false);
