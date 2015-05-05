var frappe = {
	get_modal: function(title, body_html) {
		var modal = $('<div class="modal" style="overflow: auto;" tabindex="-1">\
			<div class="modal-dialog">\
				<div class="modal-content">\
					<div class="modal-header">\
						<a type="button" class="close"\
							data-dismiss="modal" aria-hidden="true">&times;</a>\
						<h4 class="modal-title">'+title+'</h4>\
					</div>\
					<div class="modal-body ui-front">'+body_html+'\
					</div>\
				</div>\
			</div>\
			</div>').appendTo(document.body);

		return modal;
	},
	msgprint: function(html, title) {
		if(html.substr(0,1)==="[") html = JSON.parse(html);
		if($.isArray(html)) {
			html = html.join("<hr>")
		}
		return frappe.get_modal(title || "Message", html).modal("show");
	},
}
