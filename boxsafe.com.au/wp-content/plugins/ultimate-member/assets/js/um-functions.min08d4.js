function UM_domenus(){jQuery(".um-dropdown").each(function(e,o){UM.dropdown.setPosition(o)})}function UM_check_password_matched(){jQuery(document).on("keyup","input[data-key=user_password],input[data-key=confirm_user_password]",function(e){var o=jQuery("input[data-key=user_password]").val(),a=jQuery("input[data-key=confirm_user_password]").val(),t=jQuery("input[data-key=user_password],input[data-key=confirm_user_password]");o||a?o!==a?t.removeClass("um-validate-matched").addClass("um-validate-not-matched"):t.removeClass("um-validate-not-matched").addClass("um-validate-matched"):t.removeClass("um-validate-matched").removeClass("um-validate-not-matched")})}function um_responsive(){jQuery(".um").each(function(){(element_width=jQuery(this).width())<=340?(jQuery(this).removeClass("uimob340"),jQuery(this).removeClass("uimob500"),jQuery(this).removeClass("uimob800"),jQuery(this).removeClass("uimob960"),jQuery(this).addClass("uimob340")):element_width<=500?(jQuery(this).removeClass("uimob340"),jQuery(this).removeClass("uimob500"),jQuery(this).removeClass("uimob800"),jQuery(this).removeClass("uimob960"),jQuery(this).addClass("uimob500")):element_width<=800?(jQuery(this).removeClass("uimob340"),jQuery(this).removeClass("uimob500"),jQuery(this).removeClass("uimob800"),jQuery(this).removeClass("uimob960"),jQuery(this).addClass("uimob800")):element_width<=960?(jQuery(this).removeClass("uimob340"),jQuery(this).removeClass("uimob500"),jQuery(this).removeClass("uimob800"),jQuery(this).removeClass("uimob960"),jQuery(this).addClass("uimob960")):960<element_width&&(jQuery(this).removeClass("uimob340"),jQuery(this).removeClass("uimob500"),jQuery(this).removeClass("uimob800"),jQuery(this).removeClass("uimob960")),0<jQuery(".um-account-nav").length&&jQuery(".um-account-side").is(":visible")&&0==jQuery(".um-account-tab:visible").length&&jQuery(".um-account-side li a.current").trigger("click"),jQuery(this).css("opacity",1)}),jQuery(".um-cover, .um-member-cover, .um-cover-e").each(function(){var e=jQuery(this),o=e.data("ratio"),a=e.width(),o=o.split(":");calcHeight=Math.round(a/o[0])+"px",e.height(calcHeight),e.find(".um-cover-add").height(calcHeight)}),UM_domenus()}function initImageUpload_UM(d){upload_help_text=d.data("upload_help_text")?'<span class="help">'+d.data("upload_help_text")+"</span>":"",icon=d.data("icon")?'<span class="icon"><i class="'+d.data("icon")+'"></i></span>':"",upload_text=d.data("upload_text")?'<span class="str">'+d.data("upload_text")+"</span>":"";var e=0;jQuery("#um_upload_single:visible").data("user_id")&&(e=jQuery("#um_upload_single:visible").data("user_id")),d.uploadFile({url:wp.ajax.settings.url,method:"POST",multiple:!1,formData:{action:"um_imageupload",key:d.data("key"),set_id:d.data("set_id"),set_mode:d.data("set_mode"),_wpnonce:d.data("nonce"),timestamp:d.data("timestamp"),user_id:e},fileName:d.data("key"),allowedTypes:d.data("allowed_types"),maxFileSize:d.data("max_size"),dragDropStr:icon+upload_text+upload_help_text,sizeErrorStr:d.data("max_size_error"),extErrorStr:d.data("extension_error"),maxFileCountErrorStr:d.data("max_files_error"),maxFileCount:1,showDelete:!1,showAbort:!1,showDone:!1,showFileCounter:!1,showStatusAfterSuccess:!0,returnType:"json",onSubmit:function(e){d.parents(".um-modal-body").find(".um-error-block").remove()},onSuccess:function(e,o,a){d.selectedFiles=0,o.success&&0==o.success||void 0!==o.data.error?(d.parents(".um-modal-body").append('<div class="um-error-block">'+o.data.error+"</div>"),d.parents(".um-modal-body").find(".upload-statusbar").hide(0),um_modal_responsive()):jQuery.each(o.data,function(e,o){var a=d.parents(".um-modal-body").find(".um-single-image-preview img"),t=d.parents(".um-modal-body").find(".um-single-image-preview"),i=new Date;a.attr("src",o.url+"?"+i.getTime()),a.data("file",o.file),a.on("load",function(){d.parents(".um-modal-body").find(".um-modal-btn.um-finish-upload.disabled").removeClass("disabled"),d.parents(".um-modal-body").find(".ajax-upload-dragdrop,.upload-statusbar").hide(0),t.show(0),um_modal_responsive()})})},onError:function(e){console.log(e)}})}function initFileUpload_UM(t){upload_help_text=t.data("upload_help_text")?'<span class="help">'+t.data("upload_help_text")+"</span>":"",icon=t.data("icon")?'<span class="icon"><i class="'+t.data("icon")+'"></i></span>':"",upload_text=t.data("upload_text")?'<span class="str">'+t.data("upload_text")+"</span>":"",jQuery("#um_upload_single:visible").data("user_id")&&(user_id=jQuery("#um_upload_single:visible").data("user_id")),t.uploadFile({url:wp.ajax.settings.url,method:"POST",multiple:!1,formData:{action:"um_fileupload",key:t.data("key"),set_id:t.data("set_id"),user_id:t.data("user_id"),set_mode:t.data("set_mode"),_wpnonce:t.data("nonce"),timestamp:t.data("timestamp")},fileName:t.data("key"),allowedTypes:t.data("allowed_types"),maxFileSize:t.data("max_size"),dragDropStr:icon+upload_text+upload_help_text,sizeErrorStr:t.data("max_size_error"),extErrorStr:t.data("extension_error"),maxFileCountErrorStr:t.data("max_files_error"),maxFileCount:1,showDelete:!1,showAbort:!1,showDone:!1,showFileCounter:!1,showStatusAfterSuccess:!0,onSubmit:function(e){t.parents(".um-modal-body").find(".um-error-block").remove()},onSuccess:function(e,o,a){t.selectedFiles=0,o.success&&0==o.success||void 0!==o.data.error?(t.parents(".um-modal-body").append('<div class="um-error-block">'+o.data.error+"</div>"),t.parents(".um-modal-body").find(".upload-statusbar").hide(0)):jQuery.each(o.data,function(e,o){t.parents(".um-modal-body").find(".um-modal-btn.um-finish-upload.disabled").removeClass("disabled"),t.parents(".um-modal-body").find(".ajax-upload-dragdrop,.upload-statusbar").hide(0),t.parents(".um-modal-body").find(".um-single-file-preview").show(0),"icon"==e?t.parents(".um-modal-body").find(".um-single-fileinfo i").removeClass().addClass(o):"icon_bg"==e?t.parents(".um-modal-body").find(".um-single-fileinfo span.icon").css({"background-color":o}):"filename"==e?t.parents(".um-modal-body").find(".um-single-fileinfo a").attr("data-file",o):"original_name"==e?(t.parents(".um-modal-body").find(".um-single-fileinfo a").attr("data-orignal-name",o),t.parents(".um-modal-body").find(".um-single-fileinfo span.filename").html(o)):"url"==e&&t.parents(".um-modal-body").find(".um-single-fileinfo a").attr("href",o)}),setTimeout(function(){um_modal_responsive()},1e3)},onError:function(e){console.log(e)}})}function um_new_modal(e,o,a,t){var i,d,s,r=jQuery(".um-modal-overlay"),r=(0!==r.length&&(r.hide(),r.next(".um-modal").hide()),UM.common.tipsy.hide(),UM.dropdown.hideAll(),jQuery("body,html,textarea").css("overflow","hidden"),jQuery(document).bind("touchmove",function(e){e.preventDefault()}),jQuery(".um-modal").on("touchmove",function(e){e.stopPropagation()}),jQuery('<div class="um-modal-overlay"></div><div class="um-modal"></div>')),u=r.filter(".um-modal");u.append(jQuery("#"+e)),jQuery("body").append(r),a?(i=jQuery('<img src="'+t+'" />'),d=jQuery(window).width()-60,s=jQuery(window).height()-.25*jQuery(window).height(),i.on("load",function(){u.find(".um-modal-photo").html(i),u.addClass("is-photo").css({width:i.width(),"margin-left":"-"+i.width()/2+"px"}).show().children().show(),i.css({opacity:0,"max-width":d,"max-height":s}).animate({opacity:1},1e3),um_modal_responsive()})):(u.addClass("no-photo").show().children().show(),um_modal_size(o),initImageUpload_UM(jQuery(".um-modal:visible .um-single-image-upload")),initFileUpload_UM(jQuery(".um-modal:visible .um-single-file-upload")),um_modal_responsive())}function um_modal_responsive(){var e,o,a,t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,d=jQuery(".um-modal:visible").not(".um-modal-hidden"),s=d.find(".um-modal-body.photo:visible");(s.length||d.length)&&(e=(i-d.innerHeight())/2+"px",d.removeClass("uimob340").removeClass("uimob500"),s.length?(s=t-60,a=i-.25*i,(o=jQuery(".um-modal-photo img")).css({opacity:0}),o.css({"max-width":s}),o.css({"max-height":a}),d.css({width:o.width(),"margin-left":"-"+o.width()/2+"px"}),o.animate({opacity:1},1e3),d.animate({bottom:e},300)):d.length&&(t<=340?d.addClass("uimob340"):t<=500&&d.addClass("uimob500"),UM.frontend.cropper.init(),t<=500||i-parseInt(e)>i?d.animate({bottom:0},300):d.animate({bottom:e},300)))}function um_remove_modal(){wp.hooks.doAction("um_remove_modal"),jQuery("body,html,textarea").css("overflow","auto"),jQuery(document).unbind("touchmove"),jQuery('body > .um-modal div[id^="um_"]').hide().appendTo("body"),jQuery("body > .um-modal, body > .um-modal-overlay").remove()}function um_modal_size(e){jQuery(".um-modal:visible").not(".um-modal-hidden").addClass(e)}function prepare_Modal(){0==jQuery(".um-popup-overlay").length&&(jQuery("body").append('<div class="um-popup-overlay"></div>'),jQuery("body").append('<div class="um-popup"></div>'),jQuery(".um-popup").addClass("loading"),jQuery("body,html").css({overflow:"hidden"}))}function remove_Modal(){jQuery(".um-popup-overlay").length&&(wp.hooks.doAction("um_before_modal_removed",jQuery(".um-popup")),UM.common.tipsy.hide(),jQuery(".um-popup").empty().remove(),jQuery(".um-popup-overlay").empty().remove(),jQuery("body,html").css({overflow:"auto"}))}function show_Modal(e){jQuery(".um-popup-overlay").length&&(jQuery(".um-popup").removeClass("loading").html(e),UM.common.tipsy.init())}function responsive_Modal(){jQuery(".um-popup-overlay").length&&(350<(ag_height=jQuery(window).height()-jQuery(".um-popup .um-popup-header").outerHeight()-jQuery(".um-popup .um-popup-footer").outerHeight()-80)&&(ag_height=350),jQuery(".um-popup-autogrow:visible").length?jQuery(".um-popup-autogrow:visible").css({height:ag_height+"px"}):jQuery(".um-popup-autogrow2:visible").length&&jQuery(".um-popup-autogrow2:visible").css({"max-height":ag_height+"px"}))}function um_reset_field(e){jQuery(e).find("div.um-field-area").find("input,textarea,select").not(":button, :submit, :reset, :hidden").val("").prop("checked",!1).prop("selected",!1)}"object"!=typeof window.UM&&(window.UM={}),UM.dropdown={hide:function(e){e=jQuery(e);e.parents("div").find("a").removeClass("active"),e.hide()},hideAll:function(){var e=jQuery(".um-dropdown");e.parents("div").find("a").removeClass("active"),e.hide()},setPosition:function(e){var o,a=jQuery(e),t=200,e=jQuery("html").attr("dir"),i=a.attr("data-element"),d=a.attr("data-position"),s=a.attr("data-trigger"),r=i&&jQuery(i).length?jQuery(i):a.siblings("a").length?a.siblings("a").first():a.parent(),u=(r.addClass("um-trigger-menu-on-"+s),0),n=(r.outerWidth()-t)/2,l=r.outerHeight(),i=r.offset();switch(r.is(".um-profile-photo")&&(o=r.find(".um-profile-photo-img"),l=r.closest("div.uimob500").length?r.outerHeight()-o.outerHeight()/4:(n=(o.outerWidth()-t)/2,o.outerHeight()/4)),r.is(".um-cover")&&(o=r.find(".um-cover-e"),l=r.closest("div.uimob500").length?(n=(o.outerWidth()-t)/2,o.outerHeight()/2+24):(n=(o.outerWidth()-t)/2,o.outerHeight()/2+46)),"lc"===d&&"rtl"===e&&(d="rc"),r.outerWidth()<t&&("rtl"===e&&i.left<100?d="rc":"rtl"!==e&&window.innerWidth-i.left-r.outerWidth()<100&&(d="lc")),d){case"lc":u=r.width()+17,a.css({top:0,width:t,left:"auto",right:u+"px","text-align":"center"}),a.find(".um-dropdown-arr").css({top:"4px",left:"auto",right:"-17px"}).find("i").removeClass().addClass("um-icon-arrow-right-b");break;case"rc":u=r.width()+25,a.css({top:0,width:t,left:u+"px",right:"auto","text-align":"center"}),a.find(".um-dropdown-arr").css({top:"4px",left:"-17px",right:"auto"}).find("i").removeClass().addClass("um-icon-arrow-left-b");break;default:var m=a.data("top-offset");void 0!==m&&(l+=m),a.css({top:l+6,width:t,left:n,right:"auto","text-align":"center"}),a.find(".um-dropdown-arr").css({top:"-17px",left:a.width()/2-12,right:"auto"}).find("i").removeClass().addClass("um-icon-arrow-up-b")}},show:function(e){e=jQuery(e);UM.dropdown.hideAll(),UM.dropdown.setPosition(e),e.show()}},jQuery(function(){jQuery(".um-search form *").on("keypress",function(e){if(13==e.which)return jQuery(".um-search form").trigger("submit"),!1}),2==jQuery("input[data-key=user_password],input[data-key=confirm_user_password]").length&&UM_check_password_matched()});