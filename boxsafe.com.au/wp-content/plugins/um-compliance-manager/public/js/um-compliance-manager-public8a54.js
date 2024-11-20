(function( $ ) {
	$(document).ready(function() {		/*if (typeof $('#expiry_date') !== 'undefined' && $('#expiry_date').length >0) {
			$("#expiry_date").datepicker({
				dateFormat: 'dd-mm-yy',
				minDate: 0,
				firstDay: 1,
			});			}*/
		
		$('#user-image-upload-form').on('submit', function(e) {
			e.preventDefault();			let buttonText = $(this).find(".button-28");
			if ($('input[name="file_title"]').val() === '') {
				$('#upload-result').html('<p>Title is required.</p>');
				return; 
			}
			if ($('input[name="expiry_date"]').val() === '') {
				$('#upload-result').html('<p>Expiary date is required.</p>');
				return; 
			}
			
			if ($('input[type="file"]').val() === '') {
				$('#upload-result').html('<p>Please upload an image.</p>');
				return; 
			}
			var formData = new FormData(this);
			formData.append('action', 'handle_image_upload');
			formData.append('security', um_compliance_manager.ajax_nonce);

			$.ajax({
				url: um_compliance_manager.ajax_url,
				type: 'POST',
				data: formData,
				contentType: false,
				processData: false,
				beforeSend: function () {
					$(".button-28").prop("disabled", true);					buttonText.text('Submitting');
				},
				success: function(response) {					buttonText.text('Submit');
					$(".button-28").prop("disabled", false);
					if (response.success) {						location.reload(); 
						$('#upload-result').html('<p class="alert success">' + response.data + '</p>');
						$("#user-image-upload-form")[0].reset();
					} else {
						$('#upload-result').html('<p class="alert danger">' + response.data + '</p>');
					}
				}
			});
		});
		$('#userImage').bind('change', function () {
		  var filename = $("#userImage").val();
		  if (/^\s*$/.test(filename)) {
			$(".file-upload").removeClass('active');
			$("#noFile").text("No file chosen..."); 
		  }
		  else {
			$(".file-upload").addClass('active');
			$("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
		  }
		});
		$('.pictures').tjGallery({
			selector: '.item',
			margin: 5
		});
		$('.gallery-thumbnail').viewbox({
			setTitle: true,
			margin: 10,
			resizeDuration: 300,
			openDuration: 200,
			closeDuration: 200,
			closeButton: true,
			navButtons: true,
			closeOnSideClick: true,
			nextOnContentClick: false
		});
		$(document).on('click','.delete-image',function(e){
			e.preventDefault();
			let file_id = $(this).attr('href');
			let itemDiv = $(this).closest('div.item');
			$.ajax({
				url: um_compliance_manager.ajax_url,
				type: 'POST',
				data: {
					action: 'delete_member_file',
					image_id: file_id,
					security:  um_compliance_manager.ajax_nonce
				},
				beforeSend: function () {

				},
				success: function(response) {
					if (response.success) {
						itemDiv.remove();
					}
				}
			});
		});
		
		$(document).on('click','.sensei-certificate-link',function(e){
			e.preventDefault();
			let $this 	= $(this);
			let url		= $this.attr('href');
			$('.cerftificate-download-url').attr('href',url);
			$('#certificate-modal').show();
			$('#certificate_link_url').val(url);
			$('.cerftificate-download-section').removeClass('hidden-div');
			$('.certificate-upload-form-wrapper').addClass('hidden-div');
			$('.action-button').show();
		});
		$(document).on('click','.button-close',function(){
			$('#certificate-modal').hide();
		});
		$('#certificate_image').bind('change', function () {
		  var filename = $("#certificate_image").val();
		  if (/^\s*$/.test(filename)) {
			$(".file-upload").removeClass('active');
			$("#noFile").text("No file chosen..."); 
		  }
		  else {
			$(".file-upload").addClass('active');
			$("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
		  }
		});
		$('#certificate-image-upload-form').on('submit', function(e) {
			e.preventDefault();
			let link_url = $('#certificate_link_url').val();
			
			if ($('input[name="certificate_image"]').val() === '') {
				$('#upload-result').html('<p>Please upload an image.</p>');
				return; 
			}
			var formData = new FormData(this);
			formData.append('action', 'certificate_image_upload');
			//formData.append('security', um_compliance_manager.ajax_nonce);

			$.ajax({
				url: um_compliance_manager.ajax_url,
				type: 'POST',
				data: formData,
				contentType: false,
				processData: false,
				beforeSend: function () {
					$(".button-28").prop("disabled", true);
					$(".pdf-generate").val("Generating certificate");
				},
				success: function(response) {
					$(".pdf-generate").val("Submit");
					$(".button-28").prop("disabled", false);
					if (response.success) {
						window.location.href = link_url;
					} else {
						$('#upload-result').html('<p class="alert danger">' + response.data + '</p>');
					}
				}
			});
		});
		$(document).on('click','.upload-new-button',function(){
			$('.action-button').hide();
			$('.cerftificate-download-section').addClass('hidden-div');
			$('.certificate-upload-form-wrapper').removeClass('hidden-div');
		});
		$(document).on('click','.delete-certificate',function(e){			e.preventDefault();			let $this 			= $(this);			let certificateLink = $this.val();			let itemDiv 		= $this.closest('.pdf-thumbnail');			$.ajax({				url: um_compliance_manager.ajax_url,				type: 'POST',				data: {					action: 'delete_user_certificate',					fileUrl: certificateLink,					security:  um_compliance_manager.ajax_nonce				},				beforeSend: function () {					itemDiv.remove();				},				success: function(response) {					console.log(response);					if (response.success) {						itemDiv.remove();					}				}			});
		});
	});
})( jQuery );
